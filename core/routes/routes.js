import { url } from "../component_f.js"

export let routes = [
    {
        name: 'home',
        path: 'src/layouts/navigation.html',
        beforeEnter: () => {
            // console.log('df')
        }
    },
    {
        name: 'login',
        path: 'src/views/login.html',
        beforeEnter: () => {
            // alert()
        }
    },
    {
        name: 'register',
        path: 'src/views/register.html',
        beforeEnter: () => {
            // alert()
        }
    }
]