import {styled} from "@mui/system";
import Box from "@mui/material/Box";
import Header from "../component/common/Header";
import {Routes, Route} from 'react-router-dom';
import PinList from "./PinList";

/**
 *  Header 를 포함하는 큰 틀
 */

const Background = styled(Box)(p => ({
    height: `100vh`,
    overflow: `hidden`,
}));

const Body = styled(Box)(p => ({
    width: `100%`,
    height: `100%`,
}));

const Frame = () => {
    return (
        <Background>
            <Header />

            <Body>
                <Routes>
                    <Route path={`/pinList/*`} element={<PinList />} />
                </Routes>
            </Body>
        </Background>
    )
}

export default Frame;