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
    },
    full: {
        auth: '/auth',
        login: '/auth/login',
        signUp: '/auth/signup',
        frame: `/`,
        pinList: `/pinList`,
        addPin: `/addPin`,
        addPinWith: ((pinId) => `/addPin/${pinId}`),
        filter: `/filter`,
        myPage: `/myPage`,
    }
}

export default path;