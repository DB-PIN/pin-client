/**
 *  mypage 에서 좋아하는 장소가 표시되는 박스
 */
import {styled} from "@mui/system";
import Box from "@mui/material/Box";
import color from "../../resource/Color";
import FavoritePlaceItem from "./FavoritePlaceItem";

const Container = styled(Box)(p => ({
    width: `90%`,
    height: `20%`,
    margin: `5% auto`,
    border: `1px solid ${color.grey}`,
    borderRadius: `30px`,
    display: `flex`,
    flexDirection: `column`,
}));

const PlaceList = styled(Box)(p => ({
    width: `100%`,
    height: `75%`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `space-around`,
}));

const FavoritePlace = () => {
    return(
        <Container>
            <Box
                sx={{
                    width: `90%`,
                    height: `25%`,
                    display: `flex`,
                    alignItems: `end`,
                    fontSize: `20px`,
                    fontWeight: `bold`,
                    ml: `10%`,
                }}
            >
                내가 가장 좋아하는 장소예요
            </Box>

            <PlaceList>
                <FavoritePlaceItem />
                <FavoritePlaceItem />
                <FavoritePlaceItem />
            </PlaceList>
        </Container>
    );
};

export default FavoritePlace;