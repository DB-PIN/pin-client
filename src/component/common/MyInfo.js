/**
 *  마이페이지에 뜨는 내 정보
 */
import {styled} from "@mui/system";
import Box from "@mui/material/Box";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import color from "../../resource/Color";

const Container = styled(Box)(p => ({
    width: `100%`,
    height: `20%`,
    display: `flex`,
    alignItems: `center`,
    borderBottom: `1px solid ${color.grey}`,
}));

const InnerBox = styled(Box)(p => ({
    width: `50%`,
    height: `70%`,
    display: `flex`,
    flexDirection: `row`,
    marginLeft: `5%`,
}));

const MyInfo = () => {
    return(
        <Container>
            <InnerBox>
                <AccountCircleIcon sx={{ width: `40%`, height: `100%`, color: color.grey }} />

                <Box
                    sx={{
                        width: `30%`,
                        height: `100%`,
                        ml: `10%`,
                        mr: `10%`,
                        display: `flex`,
                        alignItems: `center`,
                        fontSize: `20px`,
                    }}
                >
                    박상연
                </Box>

                <ArrowForwardIosIcon sx={{ width: `10%`, height: `100%`}} />
            </InnerBox>
        </Container>
    );
};

export default MyInfo;