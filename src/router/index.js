import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import jobsView from "@/views/jobsView.vue";
import notFoundView from "@/views/notFoundView.vue";
import jobView from "@/views/jobView.vue";
import AddJobView from "@/views/addJobView.vue";
import EditJobView from "@/views/EditJobView.vue";
import loginPageView from "@/views/loginPageView.vue";
import singinPageView from "@/views/singinPageView.vue";
import BaseComponentpage from "@/views/BaseComponentpage.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: "/main", name: "main", component: HomeView,},
    {path: "/jobs", name: "jobs", component: jobsView },
    {path: "/jobs/add", name: "add-job", component: AddJobView },
    {path: "/jobs/:id", name: "job", component: jobView },
    {path: "/edit/:id", name: "edit-job", component: EditJobView },
    {path: '/login', name: 'login', component: loginPageView, },
    {path: '/register', name: 'register', component: singinPageView,},
    {path: '/', name: 'home', component: BaseComponentpage, meta: { hideNavbar: true }  },
    {path: "/:catchAll(.*)", name: "not-found", component: notFoundView },
  ],
});

export default router;
