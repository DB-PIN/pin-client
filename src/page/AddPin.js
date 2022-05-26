import {styled} from "@mui/system";
import Box from "@mui/material/Box";
import dim from "../resource/Dimentions";
import AddPinItem from "../component/common/AddPinItem";
import MainButton from "../component/common/MainButton";
import {useCallback, useEffect, useState} from "react";
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

// TODO: API 필요

const AddPin = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [emotionList, setEmotionList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [groupList, setGroupList] = useState([]);

    const [emotion, setEmotion] = useState('0');
    const [category, setCategory] = useState('0');
    const [group, setGroup] = useState('0');

    useEffect(() => {
        console.log('asdf');

        setIsLoading(true);

        let emotions = [];
        let categories = [];
        let groups = [];

        // TODO: groups 가져오는 API 완성되면 삭제
        if(!dev) {
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

                        setEmotionList([
                            { id: '0', name: '-' },
                            ...emotions.map(item => ({ id: item.emotionId, name: item.name }))
                        ]);
                        setCategoryList([
                            { id: '0', name: '-' },
                            ...categories.map(item => ({ id: item.categoryId, name: item.name }))
                        ]);

                        setIsLoading(false);

                        // 그룹 리스트 가져오기
                        // serverApis.getGroups()
                        //     .then(groupsResult => {
                        //         groups = groupsResult.data;
                        //
                        //         console.log(emotions);
                        //         console.log(categories);
                        //         console.log(groups);
                        //
                        //         setEmotionList([
                        //             { id: '0', name: '-' },
                        //             ...emotions.map(item => ({ id: item.emotionId, name: item.name }))
                        //         ]);
                        //         setCategoryList([
                        //             { id: '0', name: '-' },
                        //             ...categories.map(item => ({ id: item.categoryId, name: item.name }))
                        //         ]);
                        //         setGroupList([
                        //             { id: '0', name: '-' },
                        //             ...groups.map(item => ({ id: item.groupId, name: item.name }))
                        //         ]);
                        //
                        //         setIsLoading(false);
                        //     })
                        //     .catch(e => console.log(e));
                    })
                    .catch(e => console.log(e));
            })
            .catch(e => console.log(e));
    }, []);

    const onChangeEmotion = useCallback((e) => {
        setEmotion(e.target.value);
    }, []);

    const onChangeCategory = useCallback((e) => {
        setCategory(e.target.value);
    }, []);

    const onChangeGroup = useCallback((e) => {
        setGroup(e.target.value);
    }, []);

    const onClickButton = useCallback(() => {
        console.log(emotion + ", " + category);
    }, [emotion, category]);

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

                        <AddPinItem type={`select`} menuItemList={categoryList} value={category} onChangeValue={onChangeCategory}>
                            카테고리
                        </AddPinItem>

                        <AddPinItem type={`select`} menuItemList={emotionList} value={emotion} onChangeValue={onChangeEmotion}>
                            감정
                        </AddPinItem>

                        <AddPinItem type={`select`} menuItemList={groupList} value={group} onChangeValue={onChangeGroup}>
                            그룹
                        </AddPinItem>

                        <AddPinItem type={`select`} menuItemList={county}>
                            시/군/구
                        </AddPinItem>

                        <AddPinItem type={`input`}>
                            상세 주소
                        </AddPinItem>
                    </FormBox>

                    <MainButton onClick={onClickButton} >
                        등록
                    </MainButton>
                </>
            ) }

        </Container>
    )
};

export default AddPin;