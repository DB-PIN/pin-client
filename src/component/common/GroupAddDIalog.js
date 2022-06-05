import {styled} from "@mui/system";
import Box from "@mui/material/Box";
import {useState} from "react";
import {Input} from "@mui/material";
import Button from "@mui/material/Button";
import {serverApis} from "../../api/Api";
import {useNavigate} from "react-router-dom";

const GroupAddDialog = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');

    const onNameChange = (e) => {
        setName(e.target.value);
    };

    const onAddClick = () => {
        const groupDto = {
            name,
        };

        serverApis.addGroup(groupDto)
            .then(r => {
                navigate(0);
            })
            .catch(e => console.log(e));
    };

    return (
        <Container>
            <Input sx={{width: `80%`, m: `0 auto`}} placeholder='그룹 이름' value={name} onChange={onNameChange} />

            <Button sx={{width: `40%`, m: `0 auto`, my: `10px`}} variant="contained" onClick={onAddClick}>
                추가
            </Button>
        </Container>
    );
};

const Container = styled(Box)(p => ({
    width: `300px`,
    display: `flex`,
    flexDirection: `column`,
}));

export default GroupAddDialog;