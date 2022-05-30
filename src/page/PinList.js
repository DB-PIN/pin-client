import {styled} from "@mui/system";
import Box from "@mui/material/Box";
import PinItem from "../component/common/PinItem";
import dim from "../resource/Dimentions";
import {Fab, SvgIcon} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {serverApis} from "../api/Api";
import EmoLove from '../resource/emo_love.svg';

const Container = styled(Box)(p => ({
    width: `100%`,
    height: `100%`,
    marginTop: dim.headerHeight,
    position: `relative`,
    overflow: `auto`,
}))

/**
 * 핀들이 보이는 페이지
 */
const PinList = () => {
    const [searchParams] = useSearchParams();

    const [pinList, setPinList] = useState([]);

    useEffect(() => {
        // /pinList?emotion=1&category=1&follow=1
        const emotionId = searchParams.get('emotion') || -1;
        const categoryId = searchParams.get('category') || -1;
        const followingId = searchParams.get('follow') || -1;

        const needAllPins = emotionId === -1 && categoryId === -1 && followingId === -1;
        if(needAllPins) {
            serverApis.getAllPin()
                .then(r => {
                    setPinList(r.data);
                })
                .catch(e => console.log(e));
        } else {
            serverApis.getAllPinByFilter(emotionId, categoryId, followingId)
                .then(r => {
                    setPinList(r.data);
                })
                .catch(e => console.log(e));
        }
    }, []);

    return (
        <Container>
            {pinList.map(pin => (
                <PinItem key={pin.pinId} pin={pin} />
            ))}

            <Fab
                sx={{ position: `fixed`, bottom: `7.5%`, right: `10%` }}
                color={`primary`} size={`small`}>
                <AddIcon />
            </Fab  >
        </Container>
    );
};

export default PinList;