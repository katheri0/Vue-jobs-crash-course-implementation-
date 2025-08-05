import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import jobsView from "@/views/jobsView.vue";
import notFoundView from "@/views/notFoundView.vue";
import jobView from "@/views/jobView.vue";
import AddJobView from "@/views/addJobView.vue";
import EditJobView from "@/views/EditJobView.vue";
const router = createRouter(
    {
        history: createWebHistory(import.meta.env.BASE_URL),
        routes:
            [
                {
                    path: '/',
                    name: 'home',
                    component: HomeView
                },
                {
                    path: '/jobs/',
                    name: 'jobs',
                    component: jobsView
                },
                {
                    path: '/jobs/add',
                    name: 'add-job',
                    component: AddJobView
                },
                {
                    path: '/jobs/:id',
                    name: 'job',
                    component: jobView,
                },
                {
                    path: '/edit/:id',
                    name: 'edit-job',
                    component: EditJobView,
                },
                {
                    path: '/:catchAll(.*)',
                    name: 'not-found',
                    component: notFoundView
                },
            ],
    });

export default router;