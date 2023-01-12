import FleetIndex from "@/features/airplanes/FleetIndex.vue";
import LandingHome from "@/features/home/LandingHome.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: FleetIndex,
    },
  ],
});

export default router;
