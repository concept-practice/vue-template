import LandingHome from "@/features/home/LandingHome.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: LandingHome,
    },
  ],
});

export default router;
