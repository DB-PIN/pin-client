import {styled} from "@mui/system";
import Box from "@mui/material/Box";
import dim from "../resource/Dimentions";
import AddPinItem from "../component/common/AddPinItem";
import MainButton from "../component/common/MainButton";
import {useCallback, useEffect, useState} from "react";
import {serverApis} from "../api/Api";
import Spin from '../component/common/Spin';
import {dev} from "../resource/Dev";
import {counties, getCounty} from "../resource/String";
import {useNavigate} from "react-router-dom";
import path from "../resource/Path";

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
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);

    const [emotionList, setEmotionList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [groupList, setGroupList] = useState([]);

    const [pinName, setPinName] = useState('');
    const [emotion, setEmotion] = useState('-1');
    const [category, setCategory] = useState('-1');
    const [group, setGroup] = useState('-1');
    const [county, setCounty] = useState('-1');
    const [detailAddress, setDetailAddress] = useState('');

    useEffect(() => {
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

                        // 그룹 리스트 가져오기
                        serverApis.getGroups()
                            .then(groupsResult => {
                                groups = groupsResult.data;

                                console.log(emotions);
                                console.log(categories);
                                console.log(groups);

                                setEmotionList([
                                    { id: '-1', name: '-' },
                                    ...emotions.map(item => ({ id: item.emotionId, name: item.name }))
                                ]);
                                setCategoryList([
                                    { id: '-1', name: '-' },
                                    ...categories.map(item => ({ id: item.categoryId, name: item.name }))
                                ]);
                                setGroupList([
                                    { id: '-1', name: '-' },
                                    ...groups.map(item => ({ id: item.groupId, name: item.name }))
                                ]);

                                setIsLoading(false);
                            })
                            // .catch(e => console.log(e));
                            // TODO: api 수정되면 삭제
                            .catch(e => {
                                setEmotionList([
                                    { id: '-1', name: '-' },
                                    ...emotions.map(item => ({ id: item.emotionId, name: item.name }))
                                ]);
                                setCategoryList([
                                    { id: '-1', name: '-' },
                                    ...categories.map(item => ({ id: item.categoryId, name: item.name }))
                                ]);

                                setGroupList([
                                    { id: `-1`, name: '-'},
                                ]);

                                setIsLoading(false);
                            });
                    })
                    .catch(e => console.log(e));
            })
            .catch(e => console.log(e));
    }, []);

    const onPinNameChange = (e) => {
        setPinName(e.target.value);
    };

    const onChangeEmotion = useCallback((e) => {
        setEmotion(e.target.value);
    }, []);

    const onChangeCategory = useCallback((e) => {
        setCategory(e.target.value);
    }, []);

    const onChangeGroup = useCallback((e) => {
        setGroup(e.target.value);
    }, []);

    const onCountyChange = useCallback((e) => {
        setCounty(e.target.value);
    }, []);

    const onDetailAddressChange = (e) => {
        setDetailAddress(e.target.value);
    };

    const onClickButton = useCallback(() => {
        const pinDto = {
            name: pinName,
            address: getCounty(county) + " " + detailAddress,
            categoryId: category,
            emotionId: emotion,
            groupId: group,
        };

        serverApis.addPin(pinDto)
            .then(r => {
                navigate(path.full.pinList);
            })
            .catch(e => console.log(e));
    }, [emotion, category]);

    return (
        <Container>
            { isLoading ? (
                <Spin />
            ) : (
                <>
                    <FormBox>
                        <AddPinItem type={`input`} value={pinName} onChangeValue={onPinNameChange} >
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

                        <AddPinItem type={`select`} menuItemList={[{id: '-1', name: '-'}, ...counties]} value={county} onChangeValue={onCountyChange} >
                            시/군/구
                        </AddPinItem>

                        <AddPinItem type={`input`} value={detailAddress} onChangeValue={onDetailAddressChange} >
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