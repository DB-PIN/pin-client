/**
 *  가장 좋아하는 장소에 표시되는 아이템들
 */
import {styled} from "@mui/system";
import Box from "@mui/material/Box";
import color from "../../resource/Color";

const Container = styled(Box)(p => ({
    width: `20%`,
    height: `30%`,
    backgroundColor: color.grey,
    borderRadius: `30px`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
}));

const FavoritePlaceItem = () => {
    return (
        <Container>
            카페
        </Container>
    );
};

export default FavoritePlaceItem;