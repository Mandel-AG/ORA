import Road from "../components/Road.vue";
import UserProfile from '@/components/UserProfile.vue';

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
    }
]

export default routes;


