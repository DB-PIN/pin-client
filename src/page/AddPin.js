import {styled} from "@mui/system";
import Box from "@mui/material/Box";
import dim from "../resource/Dimentions";
import AddPinItem from "../component/common/AddPinItem";
import MainButton from "../component/common/MainButton";
import {useEffect, useState} from "react";
import {serverApis} from "../api/Api";
import Spin from '../component/common/Spin';
import dev from "../resource/Dev";
import {county} from "../resource/String";

/**
 *  핀 등록하는 화면
 */

const Container = styled(Box)(p => ({
    width: `100%`,
    height: `100%`,
    position: `relative`,
}))

const FormBox = styled(Box)(p => ({
    width: `90%`,
    height: `auto`,
    position: `absolute`,
    margin: `0 auto`,
    left: `50%`,
    top: `20%`,
    transform: `translate(-50%, 0)`,
}));

const AddPin = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [emotionList, setEmotionList] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        let emotions = [];
        let categories = [];
        let groups = [];

        if(dev) {
            setIsLoading(false);
            return;
        }
        // 감정 리스트 가져오기
        serverApis.getEmotions()
            .then(emotionsResult => {
                emotions = emotionsResult.data;

                // 카테고리 리스트 가져오기
                serverApis.getCategories()
                    .then(categoriesResult => {
                        categories = categoriesResult.data;

                        // 그룹 리스트 가져오기
                        serverApis.getGroups()
                            .then(groupsResult => {
                                groups = groupsResult.data;

                                setIsLoading(false);
                            })
                            .catch(e => console.log(e));
                    })
                    .catch(e => console.log(e));
            })
            .catch(e => console.log(e));
    }, []);

    return (
        <Container>
            { isLoading ? (
                <Spin />
            ) : (
                <>
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

                        <AddPinItem type={`select`} menuItemList={county}>
                            시/군/구
                        </AddPinItem>

                        <AddPinItem type={`input`}>
                            상세 주소
                        </AddPinItem>
                    </FormBox>

                    <MainButton>
                        등록
                    </MainButton>
                </>
            ) }

        </Container>
    )
};

export default AddPin;