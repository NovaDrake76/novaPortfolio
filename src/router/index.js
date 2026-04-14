import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/yt",
    component: () => import("../components/tools/YtDownloader.vue"),
  },
  {
    path: "/regrade3",
    component: () => import("../components/tools/RegraDeTres.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
