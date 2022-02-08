import { createRouter, createWebHistory } from "vue-router";
import Single from "./views/Single";
import Home from "./views/Home";
import NotFound from "./views/NotFound";

const routes = [
  { path: "/", component: Home },
  { path: "/:user", component: Single },
  { path: "/:pathMatch(.*)*", component: NotFound },
  { path: "/404", component: NotFound },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
