/**
 *  나의 그룹 리스트
 */
import {styled} from "@mui/system";
import Box from "@mui/material/Box";
import dim from "../resource/Dimentions";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import GroupItem from "../component/common/GroupItem";
import color from "../resource/Color";

const Container = styled(Box)(p => ({
    width: `100%`,
    height: `calc(100% - ${dim.headerHeight})`,
    display: `flex`,
    flexDirection: `column`,
    marginTop: dim.headerHeight,
    backgroundColor: color.backgroundGrey,
}));

const BackButtonBox = styled(Box)(p => ({
    width: `95%`,
    height: `7.5%`,
    margin: `0 auto`,
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
}));

const GroupItemBox = styled(Box)(p => ({
    width: `100%`,
    height: `92.5%`,
    overflow: `auto`,
    backgroundColor: color.white,
}));

const GroupList = () => {
    return (
        <Container>
            <BackButtonBox>
                <ArrowBackIosIcon sx={{ width: `5%`, height: `100%` }} />

                뒤로 가기
            </BackButtonBox>

            <GroupItemBox>
                <GroupItem />
                <GroupItem />
                <GroupItem />
                <GroupItem />
                <GroupItem />
                <GroupItem />
                <GroupItem />
            </GroupItemBox>
        </Container>
    );
};

export default GroupList;