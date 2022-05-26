/**
 *  마이페이지에서 로그아웃, 내 그룹 관리 등을 표시하는 아이템
 */
import {styled} from "@mui/system";
import Box from "@mui/material/Box";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Container = styled(Box)(p => ({
    width: `90%`,
    height: `50px`,
    margin: `5% auto`,
    display: `flex`,
}));

const Label = styled(Box)(p => ({
    width: `95%`,
    height: `100%`,
    display: `flex`,
    alignItems: `center`,
    fontSize: `20px`,
}));

const MyPageItem = () => {
    return (
        <Container>
            <Label>
                나의 그룹 관리
            </Label>

            <ArrowForwardIosIcon sx={{ width: `5%`, height: `100%` }} />
        </Container>
    );
};

export default MyPageItem;