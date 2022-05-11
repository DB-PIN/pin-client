/**
 *  지도가 보이는 페이지
 */

import background from '../Resource/background.png';
import logoImage from '../Resource/logo.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import {styled} from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

                        <Box sx={{
                            display: `flex`,
                            width: `80%`,
                            height: `auto`,
                            mx: `auto`,
                            flexDirection: `row`,
                            my: `30px`
                        }}>

                            <Box
                                sx={{
                                    width: `40%`,
                                    height: `25px`,
                                    lineHeight: `25px`
                                }}
                            >
                                Email
                            </Box>

                            <Input
                                sx={{ width: `60%`, height: `25px` }}
                                size={`small`}
                            ></Input>

                        </Box>

                        <Box sx={{
                            display: `flex`,
                            width: `80%`,
                            height: `auto`,
                            mx: `auto`,
                            flexDirection: `row`,
                            my: `30px`
                        }}>

                            <Box
                                sx={{
                                    width: `40%`,
                                    height: `25px`,
                                    lineHeight: `25px`
                                }}
                            >
                                Password
                            </Box>

                            <Input
                                sx={{ width: `60%`, height: `25px` }}
                                size={`small`}
                                type={`password`}
                            ></Input>

                        </Box>

                        <Button
                            variant={`contained`}
                            sx={{
                                width: `100px`,
                                borderRadius: `30px`,
                                position: `absolute`,
                                left: `50%`,
                                transform: `translate(-50%, -50%)`,
                                bottom: 10,
                            }}
                        >로그인</Button>
                    </Box>
                </Box>
            </Background>

        </ThemeProvider>

    );
};

export default Map;