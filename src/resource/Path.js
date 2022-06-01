const path = {
    routing: {
        auth: '/auth/*',
        login: `/login`,
        signUp: '/signUp',
        frame: `/*`,
        pinList: `/pinList`,
        addPin: `/addPin/*`,
        filter: `/filter/*`,
        myPage: `/myPage/*`,
        groupList: `/groupList/*`,
    },
    full: {
        auth: '/auth',
        login: '/auth/login',
        signUp: '/auth/signup',
        frame: `/`,
        pinList: `/pinList`,
        pinListByGroup: (groupId) => `/pinList?group=${groupId}`,
        addPin: `/addPin`,
        addPinWith: ((pinId) => `/addPin/${pinId}`),
        filter: `/filter`,
        myPage: `/myPage`,
        groupList: `/groupList`,
    }
}

export default path;