import Box from "@mui/material/Box";
import LoginFormItem from "./LoginFormItem";
import {Link, Typography} from "@mui/material";
import MainButton from "./MainButton";
import {useCallback} from "react";
import {serverApis} from "../../api/Api";
import path from "../../resource/Path";

/**
 *  회원가입 정보를 입력하는 박스
 */

const SignUpBox = ({
    email,
    password,
    nickname,

    onChangeEmail,
    onChangePassword,
    onChangeNickname,
}) => {

    const onClickSignUp = useCallback((e) => {
        const userDto = {
            email: email,
            name: nickname,
            password: password,
        }

        serverApis.signUp(userDto)
            .then(r => {
                console.log(r.data);
            })
            .catch(e => console.log(e));
    }, [email, password, nickname]);

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

            <LoginFormItem
                value={nickname}
                onChange={onChangeNickname}
                marginBottom={`25px`}
            >
                닉네임
            </LoginFormItem>

            <Link
                sx={{ mx: `auto` }}
                href={path.full.login}
            >
                아이디가 이미 있으신가요?
            </Link>

            <MainButton
                onClick={onClickSignUp}
            >
                회원가입
            </MainButton>
        </>
    )
}

export default SignUpBox;