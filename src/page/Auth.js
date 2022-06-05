import {styled} from "@mui/system";
import Box from "@mui/material/Box";
import background from "../resource/background.png";
import {useCallback, useState} from "react";
import {Route, Routes} from 'react-router-dom';
import LoginBox from "../component/common/LoginBox";
import SignUpBox from "../component/common/SignUpBox";
import Logo from "../component/common/Logo";
import path from "../resource/Path";
import dim from "../resource/Dimentions";
import color from "../resource/Color";

/** 로그인/회원가입 페이지 */
const Background = styled(Box)(p => ({
    height: `100vh`,
    backgroundImage: `url(${background})`,
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`
}));

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");

    const onChangeEmail = useCallback((e) => {
        setEmail(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const onChangeNickname = useCallback((e) => {
        setNickname(e.target.value);
    }, []);

    return (
        <Background>
            <Box sx={{
                width: dim.authBoxWidth,
                height: `100%`,
                mx: `auto`,
                display: `flex`,
                flexDirection: `column`,
                alignItems: `center`,
                justifyContent: `center`,
            }}>
                <Box
                    sx={{ width: dim.authLogoWidth, height: dim.authLogoHeight }}
                >
                    <Logo />
                </Box>


                <Box sx={{
                    width: `100%`,
                    height: dim.authBoxHeight,
                    backgroundColor: color.white,
                    display: `flex`,
                    flexDirection: `column`,
                    position: `relative`,
                    borderRadius: dim.authBoxRadius,
                    boxShadow: dim.shadow,
                }}>
                    <Routes>
                        <Route path={path.routing.login} element={<LoginBox
                            email={email}
                            password={password}
                            onChangeEmail={onChangeEmail}
                            onChangePassword={onChangePassword}
                        />} />
                        <Route path={path.routing.signUp} element={<SignUpBox
                            email={email}
                            password={password}
                            nickname={nickname}
                            onChangeEmail={onChangeEmail}
                            onChangePassword={onChangePassword}
                            onChangeNickname={onChangeNickname}
                        />} />
                    </Routes>
                </Box>
            </Box>
        </Background>
    );
}

export default Auth;