const path = {
    routing: {
        auth: '/auth/*',
        login: `/login`,
        signUp: '/signUp',
        frame: `/*`,
        pinList: `/pinList`,
        addPin: `/addPin/*`
    },
    full: {
        auth: '/auth',
        login: '/auth/login',
        signUp: '/auth/signup',
        frame: `/`,
        pinList: `/pinList`,
        addPin: `/addPin`,
        addPinWith: ((pinId) => `/addPin/${pinId}`),
    }
}

export default path;