/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from "vue-router";
const routes = [
	{ path: "/", name: "Home", component: () => import("../views/Home.vue") },
	{ path: "/about", name: "About", component: () => import("../views/About.vue") },
	{ path: "/brazil", name: "Brazil", component: () => import("../views/Brazil.vue") },
	{ path: "/panama", name: "Panama", component: () => import("../views/Panama.vue") },
	{ path: "/hawaii", name: "Hawaii", component: () => import("../views/Hawaii.vue") },
	{ path: "/jamaica", name: "Jamaica", component: () => import("../views/Jamaica.vue") },
  { path:"/destination/:id", component: () => import("../views/DestinationShow.vue") }
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});
export default router;
