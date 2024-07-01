import { createRouter, createWebHistory } from "vue-router";
import ProjectsPage from "./pages/ProjectsPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "projects",
            component: ProjectsPage,
        },
    ]
});
export { router };
