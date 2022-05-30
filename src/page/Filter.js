/**
 *  필터를 적용하는 페이지
 */
import {styled} from "@mui/system";
import Box from "@mui/material/Box";
import dim from "../resource/Dimentions";
import {FormControl, FormControlLabel, Radio, RadioGroup, Typography} from "@mui/material";
import FollowingItem from "../component/common/FollowingItem";
import color from "../resource/Color";
import {useEffect, useState} from "react";
import Spin from "../component/common/Spin";
import {serverApis} from "../api/Api";
import {categoryIcons, emotionIcons} from '../resource/Icon';
import Button from "@mui/material/Button";

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
    justifyContent: `end`,
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

const Filter = () => {
    const [ isLoading, setIsLoading ] = useState(true);

    const [ emotionList, setEmotionList ] = useState([]);
    const [ categoryList, setCategoryList ] = useState([]);

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

                        setIsLoading(false);
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
                    <RadioGroup defaultValue={`a`} sx={{ height: `calc(100% - 200px)` }}>
                        <SelectAllBox>
                            <Button variant={'contained'}>검색</Button>

                            <Typography sx={{ height: `50px`, lineHeight: `50px` }} >전체 선택</Typography>
                            <Radio value={`a`} />
                        </SelectAllBox>

                        <FollowingBox>
                            <FollowingItem value={`b`} />
                            <FollowingItem value={`c`} />
                            <FollowingItem value={`d`} />
                            <FollowingItem value={`e`} />
                            <FollowingItem value={`f`} />
                            <FollowingItem value={`g`} />
                            <FollowingItem value={`h`} />
                            <FollowingItem value={`i`} />
                        </FollowingBox>
                    </RadioGroup>

                    <ItemList>
                        {emotionList.map(item => (
                            emotionIcons[item.emotionId]({height: `100%`, flexGrow: 1 })
                        ))}
                    </ItemList>

                    <ItemList>
                        {categoryList.map(item => (
                            categoryIcons[item.categoryId]({height: `100%`, flexGrow: 1 })
                        ))}
                    </ItemList>
                </>
            ) }
        </Container>
    )
};

export default Filter;