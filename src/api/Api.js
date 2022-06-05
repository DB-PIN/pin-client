import axios from 'axios';

const addr = (false) ? 'http://52.78.220.84:8080' : 'http://localhost:8080/api'

axios.defaults.withCredentials = true;

const serverApis = {
    login: (userLoginDto) => new Promise((resolve, reject) => {
        axios.post(`${addr}/user/login`, userLoginDto, { withCredentials: true })
            .then(r => resolve(r))
            .catch(e => reject(e))
    }),
    logout: () => new Promise((resolve, reject) => {
        axios.get(`${addr}/user/logout`)
            .then(r => resolve(r))
            .catch(e => reject(e));
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
    addGroup: (groupDto) => new Promise((resolve, reject) => {
        axios.post(`${addr}/user/group`, groupDto)
            .then(r => resolve(r))
            .catch(e => reject(e))
    }),

    getUser: () => new Promise((resolve, reject) => {
        axios.get(`${addr}/user`)
            .then(r => resolve(r))
            .catch(e => reject(e));
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
    getTopThreeCategories: () => new Promise((resolve, reject) => {
        axios.get(`${addr}/user/categories/topThree`)
            .then(r => resolve(r))
            .catch(e => reject(e));
    }),
    getGroups: () => new Promise((resolve, reject) => {
        axios.get(`${addr}/user/groups`, { withCredentials: true })
            .then(r => resolve(r))
            .catch(e => reject(e));
    }),
    getAllPin: () => new Promise((resolve, reject) => {
        axios.get(`${addr}/pins`)
            .then(r => resolve(r))
            .catch(e => reject(e));
    }),
    getAllPinByFilter: (emotionId, categoryId, followingId) => new Promise((resolve, reject) => {
        axios.get(`${addr}/pins/emotion/${emotionId}/category/${categoryId}/following/${followingId}`)
            .then(r => resolve(r))
            .catch(e => reject(e));
    }),
    getAllpinByGroup: (groupId) => new Promise((resolve, reject) => {
        axios.get(`${addr}/user/group/${groupId}/pins`)
            .then(r => resolve(r))
            .catch(e => reject(e));
    }),
}

export {
    serverApis,
};