/**
 *  핀 등록 화면에서 정보를 기입하는 아이템 (라벨 + a)
 */
import {styled} from "@mui/system";
import Box from "@mui/material/Box";
import AddPinLabel from "./AddPinLabel";
import {Input, MenuItem, Select} from "@mui/material";

const Container = styled(Box)(p => ({
    width: `100%`,
    height: `35px`,
    display: `flex`,
    flexDirection: `row`,
    marginBottom: `20px`,
}));

const AddPinItem = ({
    type,
    menuItemList,
    children,
}) => {
    return (
        <Container>
            <AddPinLabel>
                {children}
            </AddPinLabel>

            {type === 'input' ? (
                <Input sx={{ width: `70%`, height: `100%` }} />
            ) : (
                <Select sx={{ width: `70%`, height: `100%` }} defaultValue={menuItemList[0]} >
                    {menuItemList?.map(item => (
                        <MenuItem value={item}>{item}</MenuItem>
                    ))}
                </Select>
            )}
        </Container>
    );
};

export default AddPinItem;