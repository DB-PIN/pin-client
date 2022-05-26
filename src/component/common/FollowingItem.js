/**
 *  필터 페이지에서 Following 정보를 나타내는 아이템
 */
import {styled} from "@mui/system";
import Box from "@mui/material/Box";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Radio} from "@mui/material";
import dim from "../../resource/Dimentions";

const Container = styled(Box)(p => ({
    width: `100%`,
    height: dim.followingItemHeight,
    minHeight: dim.followingItemHeight,
    display: `flex`,
    flexDirection: `row`,
}));

const FollowingItem = ({
    value,
}) => {
    return (
        <Container>
            <Box
                sx={{
                    width: `20%`,
                    height: `100%`,
                    display: `flex`,
                    justifyContent: `center`,
                    alignItems: `center`,
                }}
            >
                <AccountCircleIcon
                    sx={{
                        width: `50%`,
                        height: `50%`,
                    }}
                />
            </Box>


            <Box
                sx={{
                    width: `60%`,
                    height: `100%`,
                    display: `flex`,
                    alignItems: `center`,
                }}
            >
                박상연
            </Box>

            <Box
                sx={{
                    width: `20%`,
                    height: `100%`,
                    display: `flex`,
                    justifyContent: `center`,
                    alignItems: `center`,
                }}
            >
                <Radio value={value} />
            </Box>
        </Container>
    );
};

export default FollowingItem;