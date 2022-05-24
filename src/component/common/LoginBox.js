import Box from "@mui/material/Box";
import LoginFormItem from "./LoginFormItem";
import {Link, Typography} from "@mui/material";
import MainButton from "./MainButton";
import {useCallback} from "react";
import {serverApis} from "../../api/Api";
import path from "../../resource/Path";

/**
 *  로그인 정보를 입력하는 박스
 */

const LoginBox = ({
    email,
    password,

    onChangeEmail,
    onChangePassword,
}) => {

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
        <>
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

            <Link
                sx={{ mx: `auto` }}
                href={path.full.signUp}
            >
                아이디가 없으신가요?
            </Link>


            <MainButton
                onClick={onClickLogin}
            >
                로그인
            </MainButton>
        </>
    )
}

export default LoginBox;