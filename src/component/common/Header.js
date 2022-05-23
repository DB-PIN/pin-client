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

const Header = () => {
    const navigate = useNavigate();

    const onClickMapListBtn = useCallback((e) => {
        //
    }, []);

    const onClickUserBtn = useCallback((e) => {
        //
    }, []);

    return (
        <Container>
            <Box
                sx={{
                    width: `50%`,
                    cursor: `default`,
                    userSelect: `none`,
                    display: `flex`,
                    alignItems: `center`,
                }}
            >
                <img
                    width={`50%`}
                    height={`80%`}
                    src={logoImage}
                    alt={``}
                />
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
                <IconButton
                    onClick={onClickMapListBtn}
                    sx={{
                        width: dim.headerHeight,
                        height: dim.headerHeight,
                    }}
                >
                    <FilterListIcon />
                </IconButton>

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