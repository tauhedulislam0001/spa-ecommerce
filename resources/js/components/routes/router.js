import {createWebHistory, createRouter} from 'vue-router';
import Home from '../pages/Home.vue';
import Service from '../pages/Service.vue';
import About from '../pages/About.vue';
import Contact from '../pages/Contact.vue';

const routes = [
    {path:'/', name: Home, component:Home},
    {path:'/about', name: Service, component:Service},
    {path:'/service', name: About, component:About},
    {path:'/contact', name: Contact, component:Contact}
]

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;