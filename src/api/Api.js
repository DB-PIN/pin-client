import axios from 'axios';

const addr = (true) ? 'http://52.78.220.84:8080' : 'http://localhost:8080/api'

const serverApis = {
    login: (userLoginDto) => new Promise((resolve, reject) => {
        axios.post(`${addr}/user/login`, userLoginDto)
            .then(r => resolve(r))
            .catch(e => reject(e))
    }),
    signUp: (userDto) => new Promise((resolve, reject) => {
        axios.post(`${addr}/user`, userDto)
            .then(r => resolve(r))
            .catch(e => reject(e))
    }),
    addPin: (pinDto) => new Promise((resolve, reject) => {
        axios.post(`${addr}/user/pin`, pinDto)
            .then(r => resolve(r))
            .catch(e => reject(e))
    }),

    getEmotions: () => new Promise((resolve, reject) => {
        axios.get(`${addr}/emotions`)
            .then(r => resolve(r))
            .catch(e => reject(e));
    }),
    getCategories: () => new Promise((resolve, reject) => {
        axios.get(`${addr}/categories`)
            .then(r => resolve(r))
            .catch(e => reject(e));
    }),
    getGroups: () => new Promise((resolve, reject) => {
        axios.get(`${addr}/user/groups`)
            .then(r => resolve(r))
            .catch(e => reject(e));
    }),


    getPlaylistAllCountByFilter: (ownerId, searchWord) => new Promise((resolve, reject) => {
        axios.get(`${addr}/getPlaylistAllCountByFilter/${ownerId}/${searchWord}`)
            .then(r => resolve(r))
            .catch(e => reject(e));
    }),
    getPlaylistAllOrderByPaging: (ownerId, category, order, searchWord, pageCurrent) => new Promise((resolve, reject) => {
        axios.get(`${addr}/getPlaylistAllOrderByPaging/${ownerId}/${category}/${order}/${searchWord}/${pageCurrent}`)
            .then(r => resolve(r))
            .catch(e => reject(e));
    }),
    getVideoAllForTopFive: (owner) => new Promise((resolve, reject) => {
        axios.get(`${addr}/getVideoAllForTopFive/${owner}`)
            .then(r => resolve(r))
            .catch(e => reject(e));
    }),
    getVideoAllCountByFilter:
        (ownerId, startDate, endDate,
         startViewCount, endViewCount,
         startLikeCount, endLikeCount,
         startDislikeCount, endDislikeCount,
         searchWord, searchWordPlaylist) => new Promise((resolve, reject) => {
            axios.get(`${addr}/getVideoAllCountByFilter/${ownerId}/${startDate}/${endDate}/${startViewCount}/${endViewCount}/${startLikeCount}/${endLikeCount}/${startDislikeCount}/${endDislikeCount}/${searchWord}/${searchWordPlaylist}`)
                .then(r => resolve(r))
                .catch(e => reject(e));
        }),
    getVideoAllOrderByPaging:
        (ownerId, category, order,
         startDate, endDate,
         startViewCount, endViewCount,
         startLikeCount, endLikeCount,
         startDislikeCount, endDislikeCount,
         searchWord, searchWordPlaylist,
         pageCurrent) => new Promise((resolve, reject) => {
            axios.get(`${addr}/getVideoAllOrderByPaging/${ownerId}/${category}/${order}/${startDate}/${endDate}/${startViewCount}/${endViewCount}/${startLikeCount}/${endLikeCount}/${startDislikeCount}/${endDislikeCount}/${searchWord}/${searchWordPlaylist}/${pageCurrent}`)
                .then(r => resolve(r))
                .catch(e => reject(e));
        }),
    getBoardItemAllCountByFilter: (searchWord) => new Promise((resolve, reject) => {
        axios.get(`${addr}/getBoardItemAllCountByFilter/${searchWord}`)
            .then(r => resolve(r))
            .catch(e => reject(e));
    }),
    getBoardItemAllOrderByPaging: (searchWord, pageCurrent) => new Promise((resolve, reject) => {
        axios.get(`${addr}/getBoardItemAllOrderByPaging/${searchWord}/${pageCurrent}`)
            .then(r => resolve(r))
            .catch(e => reject(e));
    }),
    getBoardItemById: (boardItemId) => new Promise((resolve, reject) => {
        axios.get(`${addr}/getBoardItemById/${boardItemId}`)
            .then(r => resolve(r))
            .catch(e => reject(e));
    }),
    getCommentItemAllOrderByPaging: (boardItemId, pageCurrent) => new Promise((resolve, reject) => {
        axios.get(`${addr}/getCommentItemAllOrderByPaging/${boardItemId}/${pageCurrent}`)
            .then(r => resolve(r))
            .catch(e => reject(e));
    }),
    getNoticeAllCount: () => new Promise((resolve, reject) => {
        axios.get(`${addr}/getNoticeAllCount`)
            .then(r => resolve(r))
            .catch(e => reject(e));
    }),
    getNoticeAllOrderByPaging: (pageCurrent) => new Promise((resolve, reject) => {
        axios.get(`${addr}/getNoticeAllOrderByPaging/${pageCurrent}`)
            .then(r => resolve(r))
            .catch(e => reject(e));
    }),
    getNoticeItemNew: () => new Promise((resolve, reject) => {
        axios.get(`${addr}/getNoticeItemNew`)
            .then(r => resolve(r))
            .catch(e => reject(e));
    }),
    getReloadTime: () => new Promise((resolve, reject) => {
        axios.get(`${addr}/getReloadTime`)
            .then(r => resolve(r))
            .catch(e => reject(e));
    }),

    postPlaylist: (playlist) => new Promise((resolve, reject) => {
        axios.post(`${addr}/postPlaylist`, playlist)
            .then(r => resolve(r))
            .catch(e => reject(e));
    }),
    postBoardItem: (boardItem) => new Promise((resolve, reject) => {
        axios.post(`${addr}/postBoardItem`, boardItem)
            .then(r => resolve(r))
            .catch(e => reject(e));
    }),
    postCommentItem: (commentItem) => new Promise((resolve, reject) => {
        axios.post(`${addr}/postCommentItem`, commentItem)
            .then(r => resolve(r))
            .catch(e => reject(e));
    }),
    postNoticeItem: (noticeItem) => new Promise((resolve, reject) => {
        axios.post(`${addr}/postNoticeItem`, noticeItem)
            .then(r => resolve(r))
            .catch(e => reject(e));
    }),
    postReports: (reports) => new Promise((resolve, reject) => {
        axios.post(`${addr}/postReports`, reports)
            .then(r => resolve(r))
            .catch(e => reject(e));
    }),

    deletePlaylistAll: () => new Promise((resolve, reject) => {
        axios.delete(`${addr}/deletePlaylistAll`)
            .then(r => resolve(r))
            .catch(e => reject(e));
    }),
    deleteBoardItemById: (boardItemId) => new Promise((resolve, reject) => {
        axios.delete(`${addr}/deleteBoardItemById/${boardItemId}`)
            .then(r => resolve(r))
            .catch(e => reject(e));
    }),
    deleteCommentItemById: (commentId) => new Promise((resolve, reject) => {
        axios.delete(`${addr}/deleteCommentItemById/${commentId}`)
            .then(r => resolve(r))
            .catch(e => reject(e));
    }),
}

export {
    serverApis,
};