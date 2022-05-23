const path = {
    routing: {
        auth: '/auth/*',
        login: `/login`,
        signUp: '/signUp',
        frame: `/*`,
        map: `/map/*`,
        mapList: `/mapList/*`,
        post: `/post/*`,
    },
    full: {
        auth: '/auth',
        login: '/auth/login',
        signUp: '/auth/signup',
        frame: `/`,
        map: `/map`,
        mapList: `/mapList`,
        post: `/post`,
    }
}

export default path;