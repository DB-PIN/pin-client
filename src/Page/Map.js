/**
 *  지도가 보이는 페이지
 */

import background from '../Resource/background.png';
import logoImage from '../Resource/logo.png';
import Box from '@mui/material/Box';
import {styled} from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginFormItem from "../Component/common/LoginFormItem";
import MainButton from "../Component/common/MainButton";
import {useCallback, useState} from "react";

const theme = createTheme({
    palette: {
        primary: {
            main: `#ea534b`
        }
    }
});

const Background = styled(Box)(p => ({
    height: `100vh`,
    backgroundImage: `url(${background})`,
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`
}));

const Map = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeEmail = useCallback((e) => {
        setEmail(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Background>
                <Box sx={{
                    width: `300px`,
                    height: `100%`,
                    mx: `auto`,
                    display: `flex`,
                    flexDirection: `column`,
                    alignItems: `center`,
                    justifyContent: `center`
                }}>
                    <img
                        src={logoImage}
                        width={`200px`}
                        height={`100px`}
                    />

                    <Box sx={{
                        width: `100%`,
                        height: `420px`,
                        backgroundColor: `white`,
                        display: `flex`,
                        flexDirection: `column`,
                        position: `relative`,
                    }}>

                        <LoginFormItem
                            value={email}
                            onChange={onChangeEmail}
                        >
                            이메일
                        </LoginFormItem>

                        <LoginFormItem
                            value={password}
                            onChange={onChangePassword}
                            type={`password`}
                        >
                            비밀번호
                        </LoginFormItem>

                        <MainButton>
                            로그인
                        </MainButton>
                    </Box>
                </Box>
            </Background>

        </ThemeProvider>

    );
};

export default Map;