import Road from "../components/Road.vue";
import UserProfile from '@/components/UserProfile.vue';
import Home from '@/components/Home.vue';

const routes = [
    {
        path: '/road',
        name: 'road',
        component: Road
    },
    {
        path: '/user',
        name: 'user',
        component: UserProfile
    },
    {
        path: '/',
        name: 'home',
        component: Home
    }
]

export default routes;


