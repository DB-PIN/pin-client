/**
 *  나의 그룹 리스트
 */
import {styled} from "@mui/system";
import Box from "@mui/material/Box";
import dim from "../resource/Dimentions";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import GroupItem from "../component/common/GroupItem";
import color from "../resource/Color";
import {useEffect, useState} from "react";
import {dev, dummy} from "../resource/Dev";
import AddIcon from '@mui/icons-material/Add';
import {serverApis} from "../api/Api";
import {Dialog, DialogTitle} from "@mui/material";
import GroupAddDialog from "../component/common/GroupAddDIalog";

const GroupList = () => {
    const [groups, setGroups] = useState([]);
    const [addDialogOpen, setAddDialogOpen] = useState(false);

    useEffect(() => {
        if(dev) {
            setGroups(dummy.groups);
        } else {
            serverApis.getGroups()
                .then(r => {
                    setGroups(r.data);
                })
                .catch(e => console.log(e));
        }
    }, []);

    const onAddButtonClick = () => {
        setAddDialogOpen(true);
    }

    const onAddDialogClose = () => {
        setAddDialogOpen(false);
    }

    return (
        <Container>
            <ButtonBox>
                <BackButtonBox>
                    <ArrowBackIosIcon sx={{ width: `10%`, height: `100%` }} />
                    뒤로 가기
                </BackButtonBox>
                <NewButtonBox onClick={onAddButtonClick} >
                    <AddIcon sx={{ width: `15%`, height: `100%` }} />
                </NewButtonBox>
            </ButtonBox>

            <GroupItemBox>
                {groups.map(item => (
                    <GroupItem key={item.groupId} group={item} />
                ))}
            </GroupItemBox>

            <Dialog open={addDialogOpen} onClose={onAddDialogClose}>
                <DialogTitle>새 그룹 추가</DialogTitle>
                <GroupAddDialog></GroupAddDialog>
            </Dialog>
        </Container>
    );
};

const Container = styled(Box)(p => ({
    width: `100%`,
    height: `calc(100% - ${dim.headerHeight})`,
    display: `flex`,
    flexDirection: `column`,
    marginTop: dim.headerHeight,
    backgroundColor: color.backgroundGrey,
}));

const ButtonBox = styled(Box)(p => ({
    width: `95%`,
    height: `7.5%`,
    margin: `0 auto`,
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    userSelect: `none`,
}));

const BackButtonBox = styled(Box)(p => ({
    width: `50%`,
    height: `100%`,
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    userSelect: `none`,
}));

const NewButtonBox = styled(Box)(p => ({
    width: `50%`,
    height: `100%`,
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `end`,
    userSelect: `none`,
}));

const GroupItemBox = styled(Box)(p => ({
    width: `100%`,
    height: `92.5%`,
    overflow: `auto`,
    backgroundColor: color.white,
}));

export default GroupList;