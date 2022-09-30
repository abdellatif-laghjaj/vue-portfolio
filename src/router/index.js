import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue"),
    },
    {
        path: "/about",
        name: "About",
        component: () => import("../views/About.vue"),
    },
    {
        path: "/skills",
        name: "Skills",
        component: () => import("../views/Skills.vue"),
    },
    {
        path: "/projects",
        name: "Projects",
        component: () => import("../views/Projects.vue"),
    },
    {
        path: "/contact",
        name: "Contact",
        component: () => import("../views/Contact.vue"),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;


