import {styled} from "@mui/system";
import Box from "@mui/material/Box";
import dim from "../resource/Dimentions";
import MyInfo from "../component/common/MyInfo";
import FavoritePlace from "../component/common/FavoritePlace";
import MyPageItem from "../component/common/MyPageItem";
import {useEffect, useState} from "react";
import {serverApis} from "../api/Api";
import {dev, dummy} from "../resource/Dev";
import {useNavigate} from "react-router-dom";
import path from "../resource/Path";
import {Cookies} from "react-cookie";

/**
 *  내 정보가 표시되는 페이지
 */
const MyPage = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({});
    const [topThreeCategories, setTopThreeCategories] = useState([]);

    useEffect(() => {
        if(dev) {
            setUser(dummy.user);
            setTopThreeCategories(dummy.topThreeCategories);
        } else {
            // 1. 유저 정보 가져오기
            serverApis.getUser()
                .then(r => {
                    setUser(r.data);

                    // 2. top 3 카테고리 가져오기
                    serverApis.getTopThreeCategories()
                        .then(r => {
                            setTopThreeCategories(r.data);
                        })
                        .catch(e => console.log(e));
                })
                .catch(e => {console.log(e)});
        }
    }, []);

    const onGroupListClick = () => {
        navigate(path.full.groupList);
    }

    const onLogoutClick = () => {
        serverApis.logout()
            .then(r => {
                new Cookies().remove("isLogin");
                new Cookies().remove("sid");

                navigate(path.full.pinList);
            })
            .catch(e => console.log(e));
    };

    return (
        <Container>
            <MyInfo user={user} />

            <FavoritePlace topThreeCategories={topThreeCategories} />

            <ItemBox>
                <MyPageItem text='나의 그룹 관리' onClick={onGroupListClick} />
                <MyPageItem text='로그아웃' onClick={onLogoutClick} />
            </ItemBox>
        </Container>
    );
};

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

export default MyPage;