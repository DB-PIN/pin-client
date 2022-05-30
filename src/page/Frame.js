import {styled} from "@mui/system";
import Box from "@mui/material/Box";
import Header from "../component/common/Header";
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import PinList from "./PinList";
import AddPin from "./AddPin";
import path from "../resource/Path";
import {useEffect} from "react";
import Filter from "./Filter";
import MyPage from "./MyPage";
import GroupList from "./GroupList";

/**
 *  Header 를 포함하는 큰 틀
 */

const Background = styled(Box)(p => ({
    height: `100vh`,
    overflow: `hidden`,
    display: `flex`,
    flexDirection: `column`,
    position: `relative`,
}));

const Body = styled(Box)(p => ({
    width: `100%`,
    height: `100%`,
}));

const Frame = () => {
    const {pathname} = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if(pathname === '/') navigate(path.full.pinList);
    }, []);

    return (
        <Background>
            <Header />

            <Body>
                <Routes>
                    <Route path={path.routing.pinList} element={<PinList />} />
                    <Route path={path.routing.addPin} element={<AddPin />} />
                    <Route path={path.routing.filter} element={<Filter />} />
                    <Route path={path.routing.myPage} element={<MyPage />} />
                    <Route path={path.routing.groupList} element={<GroupList />} />
                </Routes>
            </Body>
        </Background>
    )
}

export default Frame;