import {styled} from "@mui/system";
import Box from "@mui/material/Box";
import background from "../Resource/background.png";
import logoImage from "../Resource/logo.png";
import {useCallback, useState} from "react";
import {Route, Routes} from 'react-router-dom';
import LoginBox from "../Component/common/LoginBox";
import SignUpBox from "../Component/common/SignUpBox";

/**
 *  로그인/회원가입 페이지
 */

const Background = styled(Box)(p => ({
    height: `100vh`,
    backgroundImage: `url(${background})`,
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`
}));

const Login = () => {
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
                width: `300px`,
                height: `100%`,
                mx: `auto`,
                display: `flex`,
                flexDirection: `column`,
                alignItems: `center`,
                justifyContent: `center`,
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
                    borderRadius: `25px`,
                }}>
                    <Routes>
                        <Route path='/' element={<LoginBox
                            email={email}
                            password={password}
                            onChangeEmail={onChangeEmail}
                            onChangePassword={onChangePassword}
                        />} />
                        <Route path='/signup/' element={<SignUpBox
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

export default Login;