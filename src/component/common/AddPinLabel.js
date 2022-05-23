/**
 *  핀 등록 화면에서 각 아이템들의 앞에 붙는 라벨
 */
import {styled} from "@mui/system";
import Box from "@mui/material/Box";
import color from "../../resource/Color";

const Container = styled(Box)(p => ({
    width: `30%`,
    height: `100%`,
    color: color.grey,
    fontSize: `15px`,
    lineHeight: `35px`,

}));


const AddPinLabel = ({
    children,
}) => {
    return (
        <Container>
            {children}
        </Container>
    );
};

export default AddPinLabel;