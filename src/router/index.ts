import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainPage from "@/components/pages/HomePage.vue";
import ClientsPage from "@/components/pages/ClientsPage.vue";
import ServicesPage from "@/components/pages/ServicesPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: MainPage,
  },
  {
    path: "/clients",
    name: "clients",
    component: ClientsPage,
  },
  {
    path: "/services",
    name: "services",
    component: ServicesPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
