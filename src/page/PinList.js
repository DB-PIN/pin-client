/**
 *  핀들이 보이는 페이지
 */

import {styled} from "@mui/system";
import Box from "@mui/material/Box";
import PinItem from "../component/common/PinItem";
import dim from "../resource/Dimentions";
import {Fab} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const Container = styled(Box)(p => ({
    width: `100%`,
    height: `100%`,
    marginTop: dim.headerHeight,
    position: `relative`,
    overflow: `auto`,
}))

const PinList = () => {
    return (
        <Container>
            <PinItem />
            <PinItem />
            <PinItem />
            <PinItem />
            <PinItem />
            <PinItem />

            <Fab
                sx={{ position: `fixed`, bottom: `7.5%`, right: `10%`  }}
                color={`primary`} size={`small`}>
                <AddIcon />
            </Fab  >
        </Container>
    );
};

export default PinList;