/**
 *  그룹 리스트에 표시되는 그룹 아이템
 */
import {styled} from "@mui/system";
import Box from "@mui/material/Box";
import color from "../../resource/Color";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const Container = styled(Box)(p => ({
    width: `90%`,
    height: `15%`,
    margin: `5% auto`,
    display: `flex`,
    flexDirection: `row`,
    border: `1px solid ${color.grey}`,
    borderRadius: `30px`,
}));

const GroupItem = () => {
    return (
        <Container>
            <Box
                sx={{
                    ml: `7.5%`,
                    width: `82.5%`,
                    display: `flex`,
                    alignItems: `center`,
                    fontSize: `25px`,
                }}
            >
                아지트 (15)

                <ArrowForwardIosIcon sx={{ width: `7.5%`, height: `100%`, ml: `5%` }} />
            </Box>

            <RemoveCircleIcon sx={{ width: `7.5%`, height: `100%`, mr: `2.5%` }} />
        </Container>
    );
};

export default GroupItem;