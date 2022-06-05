import {date} from "./String";

const dev = false;

/**
 * User {
 *     userId
 *     email
 *     password
 *     name
 *     createdAt
 *     updatedAt
 * }
 */
const dummy = {
    user: { userId: 1, email: 'abcd123@gmail.com', password: `1234`, name: `박상연`, createdAt: date, updatedAt: date },
    topThreeCategories: [
        { categoryId: 1, name: `음식점` },
        { categoryId: 2, name: `카페` },
        { categoryId: 3, name: `관광지` },
    ],
    groups: [
        { groupId: 1, name: '제주도 여행', count: 15 },
        { groupId: 2, name: '부산 여행', count: 7 },
        { groupId: 3, name: '맛집 탐방', count: 8 },
    ],
    pinsByGroup: [
        {pinId: 2, username: 'kim', name: '푸드테라피', address: '경기도 수원시 어쩌구', categoryId: 3, emotionId: 4, groupName: '아주대 여행'},
        {pinId: 1, username: 'kim', name: '푸드테라피', address: '경기도 수원시 어쩌구', categoryId: 2, emotionId: 3, groupName: '아주대 여행'},
    ]
};

export {dev, dummy};