import {styled} from "@mui/system";
import Box from "@mui/material/Box";
import dim from "../../resource/Dimentions";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import {IconButton} from "@mui/material";
import {categoryIcons, emotionIcons} from "../../resource/Icon";
import {Cookies} from "react-cookie";
import {serverApis} from "../../api/Api";
import {useNavigate} from "react-router-dom";

/**
 *  핀 하나의 정보를 보여주는 아이템
 */
const PinItem = ({
    pin,
    followings,
}) => {
    const navigate = useNavigate();

    const onAddFollowingClick = () => {
        serverApis.addFollowing({ userId: pin.userId })
            .then(r => {
                navigate(0);
            })
            .catch(e => console.log(e));
    };

    const onDeleteFollowingClick = () => {
        serverApis.deleteFollowing(pin.userId)
            .then(r => {
                navigate(0);
            })
            .catch(e => console.log(e));
    };

    return (
        <Container>
            <TopBottom>
                <Box
                    sx={{
                        width: `70%`,
                        height: `100%`,
                        fontSize: `14px`,
                        display: `flex`,
                        alignItems: `end`,
                    }}
                >
                    {pin.address}
                </Box>
                <Box
                    sx={{
                        width: `30%`,
                        height: `100%`,
                        display: `flex`,
                        flexDirection: `row`,
                        justifyContent: `end`,
                    }}
                >
                    {new Cookies().get('isLogin') ? (
                        followings.find(f => f.followingId === pin.userId) ? (
                            <IconButton
                                onClick={onDeleteFollowingClick}
                                sx={{
                                    width: `20%`,
                                    height: `100%`,
                                }}
                            >
                                <PersonRemoveIcon />
                            </IconButton>
                        ) : (
                            <IconButton
                                onClick={onAddFollowingClick}
                                sx={{
                                    width: `20%`,
                                    height: `100%`,
                                }}
                            >
                                <PersonAddAltIcon />
                            </IconButton>
                        )
                    ) : (<></>)}
                </Box>
            </TopBottom>
            <Mid>
                <Box
                    sx={{
                        width: `100%`,
                        height: `100%`,
                        fontSize: `20px`,
                        fontWeight: `bold`,
                        display: `flex`,
                        alignItems: `center`,
                    }}
                >
                    {pin.name}
                </Box>
            </Mid>
            <TopBottom>
                <Box
                    sx={{
                        width: `40%`,
                        height: `100%`,
                        fontSize: `15px`,
                        display: `flex`,
                        alignItems: `start`,
                    }}
                >
                    {pin.groupName}
                </Box>
                <Box
                    sx={{
                        width: `60%`,
                        height: `100%`,
                        display: `flex`,
                        flexDirection: `row`,
                        justifyContent: `end`,
                    }}
                >
                    {emotionIcons[pin.emotionId]({width: `15%`, height: `100%`}, () => {} )}
                    {categoryIcons[pin.categoryId]({width: `15%`, height: `100%`}, () => {} )}
                </Box>
            </TopBottom>
        </ Container>
    )
};

const Container = styled(Box)(p => ({
    width: `75%`,
    height: `16vh`,
    border: dim.pinItemBorder,
    borderRadius: `15px`,
    margin: `20px auto`,
    padding: `0 15px`,

    display: `flex`,
    flexDirection: `column`,
}));

const TopBottom = styled(Box)(p => ({
    width: `100%`,
    height: `30%`,
    display: `flex`,
    flexDirection: `row`,
}));

const Mid = styled(Box)(p => ({
    width: `100%`,
    height: `40%`,
}));

export default PinItem;