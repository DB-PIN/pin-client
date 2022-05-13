import {styled} from "@mui/system";
import Box from "@mui/material/Box";
import background from "../Resource/background.png";
import {serverApis} from "../Component/api/Api";
import logoImage from "../Resource/logo.png";
import LoginFormItem from "../Component/common/LoginFormItem";
import MainButton from "../Component/common/MainButton";
import {useCallback, useState} from "react";
import {Typography} from "@mui/material";

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

    const onChangeEmail = useCallback((e) => {
        setEmail(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const onClickLogin = useCallback((e) => {
        const userLoginDto = {
            email,
            password,
        }

        serverApis.login(userLoginDto)
            .then(r => {
                console.log(r.data);
            })
    }, [email, password]);

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
                    <Box sx={{ height: `20%` }}></Box>

                    <LoginFormItem
                        value={email}
                        onChange={onChangeEmail}
                        marginBottom={`25px`}
                    >
                        이메일
                    </LoginFormItem>

                    <LoginFormItem
                        value={password}
                        onChange={onChangePassword}
                        type={`password`}
                        marginBottom={`25px`}
                    >
                        비밀번호
                    </LoginFormItem>

                    <Typography sx={{
                        textDecoration: `underline`,
                        mx: `auto`,
                        color: `blue`,
                        cursor: `pointer`,
                    }}>
                        아이디가 없으신가요?
                    </Typography>

                    <MainButton
                        onClick={onClickLogin}
                    >
                        로그인
                    </MainButton>
                </Box>
            </Box>
        </Background>
    );
}

export default Login;