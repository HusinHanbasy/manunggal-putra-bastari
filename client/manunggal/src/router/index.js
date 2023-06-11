import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Event from '../views/Event.vue'
import Detail from '../views/Detail.vue'
import Register from '../views/Register.vue'
import Donation from '../views/Donation.vue'
import Visi from '../pages/Visi.vue'
import Laporan from '../pages/Laporan.vue'
import Profile from '../pages/Profile.vue'
import Galery from '../pages/Galery.vue'
import Legal from '../pages/Legal.vue'
import Kantor from '../pages/Kantor.vue'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/event',
            name: 'event',
            component: Event
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: Detail
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/donation',
            name: 'donation',
            component: Donation
        },
        {
            path: '/tentang-kami/visi-misi',
            name: 'visi-misi',
            component: Visi
        },
        {
            path: '/tentang-kami/kantor-layanan',
            name: 'kantor',
            component: Kantor
        },
        {
            path: '/tentang-kami/laporan',
            name: 'laporan',
            component: Laporan
        },
        {
            path: '/tentang-kami/legal',
            name: 'legal',
            component: Legal
        },
        {
            path: '/tentang-kami/company-profile',
            name: 'profile',
            component: Profile
        },
        {
            path: '/tentang-kami/galery',
            name: 'galery',
            component: Galery
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        },
        // {
        //   path: '/favorite',
        //   name: 'favorite',
        //   component: Favorite
        // },
    ]
})
// router.beforeEach((to, from, next) => {
//     if (
//         (localStorage.access_token && to.name === "login")
//     ) {
//         next({ name: "home" });
//     } else {
//         next();
//     }
// });
export default router
