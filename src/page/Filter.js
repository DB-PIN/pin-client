import {styled} from "@mui/system";
import Box from "@mui/material/Box";
import dim from "../resource/Dimentions";
import {FormControl, FormControlLabel, Radio, RadioGroup, Typography} from "@mui/material";
import FollowingItem from "../component/common/FollowingItem";
import color from "../resource/Color";
import {useCallback, useEffect, useState} from "react";
import Spin from "../component/common/Spin";
import {serverApis} from "../api/Api";
import {categoryIcons, emotionIcons} from '../resource/Icon';
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import path from "../resource/Path";

/**
 *  필터를 적용하는 페이지
 */
const Filter = () => {
    const navigate = useNavigate();

    const [ isLoading, setIsLoading ] = useState(true);

    const [followings, setFollowings] = useState([]);
    const [selectedFollowing, setSelectedFollowing] = useState('-1');
    const [ emotionList, setEmotionList ] = useState([]);
    const [ categoryList, setCategoryList ] = useState([]);
    const [emotion, setEmotion] = useState('-1');
    const [category, setCategory] = useState('-1');


    useEffect(() => {
        setIsLoading(true);

        let emotions = [];
        let categories = [];

        // 감정 리스트 가져오기
        serverApis.getEmotions()
            .then(emotionsResult => {
                emotions = emotionsResult.data;

                // 카테고리 리스트 가져오기
                serverApis.getCategories()
                    .then(categoriesResult => {
                        categories = categoriesResult.data;

                        console.log(categories);

                        setEmotionList([
                            ...emotions
                        ]);
                        setCategoryList([
                            ...categories
                        ]);

                        // 팔로잉 리스트 가져오기
                        serverApis.getFollowings()
                            .then(r => {
                                console.log(r.data);

                                setFollowings(r.data);

                                setIsLoading(false);
                            })
                            .catch(e => console.log(e));
                    })
                    .catch(e => console.log(e));
            })
            .catch(e => console.log(e));
    }, []);

    const onSelectedFollowingChange = (e) => {
        setSelectedFollowing(e.target.value);
    };

    const onEmotionClick = useCallback((emotionId) => {
        if(emotionId === emotion) {
            setEmotion('-1');
        } else {
            setEmotion(emotionId);
        }
    }, [emotion]);

    const onCategoryClick = useCallback((categoryId) => {
        if(categoryId === category) {
            setCategory('-1');
        } else {
            setCategory(categoryId);
        }
    }, [category]);

    const onSearchClick = useCallback(() => {
        navigate(path.full.pinListByFilter(emotion, category, selectedFollowing));
    }, [emotion, category, selectedFollowing]);

    return (
        <Container>
            { isLoading ? (
                <Spin />
            ) : (
                <>
                    <RadioGroup value={selectedFollowing} onChange={onSelectedFollowingChange} sx={{ height: `calc(100% - 200px)` }}>
                        <SelectAllBox>
                            <Button sx={{m: `5px`}} variant={'contained'} onClick={onSearchClick} >검색</Button>

                            <Box sx={{display: `flex`}}>
                                <Typography sx={{ height: `50px`, lineHeight: `50px` }} >전체 선택</Typography>
                                <Radio value={`-1`} />
                            </Box>
                        </SelectAllBox>

                        <FollowingBox>
                            {followings.map(item => (
                                <FollowingItem key={item.userId} value={item} />
                            ))}
                        </FollowingBox>
                    </RadioGroup>

                    <ItemList>
                        {emotionList.map(item => (
                            emotionIcons[item.emotionId]({height: `100%`, p: `10px`, flexGrow: 1, color: emotion === `${item.emotionId}` ? `red` : `grey` }, () => {onEmotionClick(`${item.emotionId}`)})
                        ))}
                    </ItemList>

                    <ItemList>
                        {categoryList.map(item => (
                            categoryIcons[item.categoryId]({height: `100%`, p: `10px`, flexGrow: 1, color: category === `${item.categoryId}` ? `red` : `grey` }, () => {onCategoryClick(`${item.categoryId}`)})
                        ))}
                    </ItemList>
                </>
            ) }
        </Container>
    )
};

const Container = styled(Box)(p => ({
    width: `100%`,
    height: `calc(100% - ${dim.headerHeight})`,
    marginTop: dim.headerHeight,
    position: `relative`,
}))

const SelectAllBox = styled(Box)(p => ({
    width: `100%`,
    height: `50px`,
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `space-between`,
}));

const FollowingBox = styled(Box)(p => ({
    width: `100%`,
    height: `calc(100% - 50px)`,
    display: `flex`,
    flexDirection: `column`,
    overflow: `auto`,
    backgroundColor: color.backgroundGrey,
}));

const ItemList = styled(Box)(p => ({
    width: `100%`,
    height: `100px`,
    borderTop: `2px solid ${color.primary}`,
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
}));

export default Filter;