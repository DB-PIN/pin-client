/**
 *  핀 하나의 정보를 보여주는 아이템
 */

import {styled} from "@mui/system";
import Box from "@mui/material/Box";
import dim from "../../resource/Dimentions";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import MoodIcon from '@mui/icons-material/Mood';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import {IconButton} from "@mui/material";

const Container = styled(Box)(p => ({
    width: `75%`,
    height: `16vh`,
    border: dim.pinItemBorder,
    borderRadius: `15px`,
    margin: `20px auto`,
    padding: `0 15px`,

    display: `flex`,
    flexDirection: `column`,
}));

const TopBottom = styled(Box)(p => ({
    width: `100%`,
    height: `30%`,
    display: `flex`,
    flexDirection: `row`,
}))

const Mid = styled(Box)(p => ({
    width: `100%`,
    height: `40%`,
}))

const PinItem = () => {


    return (
        <Container>
            <TopBottom>
                <Box
                    sx={{
                        width: `70%`,
                        height: `100%`,
                        fontSize: `15px`,
                        display: `flex`,
                        alignItems: `end`,
                    }}
                >
                    경기도 수원시 권선구 세화로 168
                </Box>

                <Box
                    sx={{
                        width: `30%`,
                        height: `100%`,
                        display: `flex`,
                        flexDirection: `row`,
                        justifyContent: `end`,
                    }}
                >
                    <IconButton
                        // onClick={}
                        sx={{
                            width: `20%`,
                            height: `100%`,
                        }}
                    >
                        <PersonAddAltIcon />
                    </IconButton>
                </Box>
            </TopBottom>

            <Mid>
                <Box
                    sx={{
                        width: `100%`,
                        height: `100%`,
                        fontSize: `20px`,
                        fontWeight: `bold`,
                        display: `flex`,
                        alignItems: `center`,
                    }}
                >
                    민아랑 갔던 카페
                </Box>
            </Mid>

            <TopBottom>
                <Box
                    sx={{
                        width: `40%`,
                        height: `100%`,
                        fontSize: `15px`,
                        display: `flex`,
                        alignItems: `start`,
                    }}
                >
                    아지트
                </Box>

                <Box
                    sx={{
                        width: `60%`,
                        height: `100%`,
                        display: `flex`,
                        flexDirection: `row`,
                        justifyContent: `end`,
                    }}
                >

                    <MoodIcon sx={{
                        width: `15%`,
                        height: `100%`,
                        color: `orange`,
                    }} />

                    <FastfoodIcon
                        sx={{
                            width: `15%`,
                            height: `100%`,
                            color: `red`
                        }}
                    />
                </Box>
            </TopBottom>
        </ Container>
    )
}

export default PinItem;