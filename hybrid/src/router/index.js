import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/home")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/pages/about")
  },
  {
    path: "/pdf-reader",
    name: "pdf-reader",
    component: () => import("@/pages/pdf-reader")
  },
  {
    path: "/e-charts-demo",
    name: "e-charts-demo",
    component: () => import("@/pages/e-charts-demo")
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
