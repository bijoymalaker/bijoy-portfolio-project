import { createRouter, createWebHistory } from "vue-router";

import About from "./pages/About.vue";
import Contact from "./pages/Contact.vue";
import Portfolio from "./pages/Portfolio.vue";
import Resume from "./pages/Resume.vue";



const routes = [
    {path: '/', component: About},
    {path: '/resume', component: Resume},
    {path: '/portfolio', component: Portfolio},
    {path: '/contact', component: Contact},
    


    {path: '/:notFound(.*)', redirect: '/'},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
})


export default router;