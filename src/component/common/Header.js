/**
 *  화면 상단의 헤더
 */
import Box from "@mui/material/Box";
import {Icon, IconButton, SvgIcon, Typography} from "@mui/material";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useNavigate } from "react-router-dom";
import {useCallback} from "react";
import {styled} from "@mui/system";
import dim from "../../resource/Dimentions";
import logoImage from "../../resource/logo.png";
import Logo from "./Logo";
import {Cookies} from "react-cookie";
import path from "../../resource/Path";

const Container = styled(Box)(p => ({
    width: `100%`,
    backgroundColor: `white`,
    height: dim.headerHeight,
    position: `absolute`,
    left: `0`,
    top: `0`,
    zIndex : `100`,
    boxShadow: dim.shadow,
    display: `flex`,
    flexDirection: 'row',
}))

const Header = ({
    isFilterable,
}) => {
    const navigate = useNavigate();

    const onClickLogo = useCallback(() => {
        navigate(path.full.pinList);
    }, []);

    const onClickFilterBtn = useCallback((e) => {
        navigate(path.full.filter);
    }, []);

    const onClickUserBtn = useCallback((e) => {
        const cookies = new Cookies();

        // 쿠키에 로그인 관련 정보가 담겨있으면 MyPage 로 이동
        if(cookies.get('isLogin')) {
            navigate(path.full.myPage);
        } else {
            // 로그인 관련 정보가 없으면 로그인 페이지로 이동
            navigate(path.full.login);
        }
    }, []);

    return (
        <Container>
            <Box
                onClick={onClickLogo}
                sx={{
                    width: `50%`,
                    cursor: `default`,
                    userSelect: `none`,
                    display: `flex`,
                    alignItems: `center`,
                }}
            >
                <Logo />
            </Box>

            <Box
                sx={{
                    display: `flex`,
                    flexDirection: `row`,
                    alignItems: `center`,
                    justifyContent: `end`,
                    width: `50%`,
                }}
            >
                {isFilterable &&
                    (<IconButton
                        onClick={onClickFilterBtn}
                        sx={{
                            width: dim.headerHeight,
                            height: dim.headerHeight,
                        }}
                    >
                        <FilterListIcon />
                    </IconButton>)
                }


                <IconButton
                    onClick={onClickUserBtn}
                    sx={{
                        width: dim.headerHeight,
                        height: dim.headerHeight,
                    }}
                >
                    <PersonOutlineIcon />
                </IconButton>
            </Box>

        </Container>
    );
};

export default Header;