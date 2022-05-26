/**
 *  내 정보가 표시되는 페이지
 */
import {styled} from "@mui/system";
import Box from "@mui/material/Box";
import dim from "../resource/Dimentions";
import MyInfo from "../component/common/MyInfo";
import FavoritePlace from "../component/common/FavoritePlace";
import MyPageItem from "../component/common/MyPageItem";

const Container = styled(Box)(p => ({
    width: `100%`,
    height: `calc(100% - ${dim.headerHeight})`,
    marginTop: dim.headerHeight,
}));

const ItemBox = styled(Box)(p => ({
    width: `100%`,
    display: `flex`,
    flexDirection: `column`,
}));

const MyPage = () => {
    return (
        <Container>
            <MyInfo />

            <FavoritePlace />

            <ItemBox>
                <MyPageItem />
                <MyPageItem />
            </ItemBox>
        </Container>
    );
};

export default MyPage;