import {styled} from "@mui/system";
import Box from "@mui/material/Box";
import Header from "../component/common/Header";
import {Routes, Route, useLocation, useNavigate, useSearchParams} from 'react-router-dom';
import PinList from "./PinList";
import AddPin from "./AddPin";
import path from "../resource/Path";
import {useEffect, useState} from "react";
import Filter from "./Filter";
import MyPage from "./MyPage";
import GroupList from "./GroupList";

/**
 *  Header 를 포함하는 큰 틀
 */
const Frame = () => {
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const [isFilterable, setIsFilterable] = useState(true);

    useEffect(() => {
        if(pathname === '/') navigate(path.full.pinList);

        // ?group= 이 포함되면 filter 버튼 삭제
        if(searchParams.get('group')) {
            setIsFilterable(false);
        } else {
            setIsFilterable(true);
        }
    }, []);

    return (
        <Background>
            <Header isFilterable={isFilterable} />

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

export default Frame;