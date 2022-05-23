import {styled} from "@mui/system";
import Box from "@mui/material/Box";
import dim from "../resource/Dimentions";
import AddPinItem from "../component/common/AddPinItem";
import MainButton from "../component/common/MainButton";

/**
 *  핀 등록하는 화면
 */

const Container = styled(Box)(p => ({
    width: `100%`,
    height: `80%`,
    position: `relative`,
    paddingTop: `20%`,
}))

const FormBox = styled(Box)(p => ({
    width: `90%`,
    height: `auto`,
    margin: `0 auto`,

}));

const AddPin = () => {
    return (
        <Container>
            <FormBox>
                <AddPinItem type={`input`}>
                    PIN 이름
                </AddPinItem>

                <AddPinItem type={`select`} menuItemList={['카페', '식당', '여행지']}>
                    카테고리
                </AddPinItem>

                <AddPinItem type={`select`} menuItemList={['Happy', 'Sad', 'Excited']}>
                    감정
                </AddPinItem>

                <AddPinItem type={`select`} menuItemList={['서울 여행', '제주 여행', '힐링 장소']}>
                    그룹
                </AddPinItem>

                <AddPinItem type={`select`} menuItemList={['수원시', '화성시', '경주시']}>
                    시/군/구
                </AddPinItem>

                <AddPinItem type={`input`}>
                    상세 주소
                </AddPinItem>
            </FormBox>

            <MainButton>
                등록
            </MainButton>
        </Container>
    )
};

export default AddPin;