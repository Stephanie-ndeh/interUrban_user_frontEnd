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
    },
    {
        name: 'booking',
        path: 'src/views/booking.html',
        beforeEnter: () => {
            // alert()
        }
    },
    {
        name: 'init_reservation',
        path: 'src/views/reservationProcess/disposition.html',
        beforeEnter: () => {
            // alert()
        }
    },
    {
        name: 'pay_res',
        path: 'src/parts/sections/disposition/paymentInfos.html',
        beforeEnter: () => {
            // alert()
        }
    }

]