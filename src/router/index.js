import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Headphone from "../views/Headphone.vue";
import Speaker from "../views/Speaker.vue";
import ProductFile from "../views/Product.vue";
import Checkout from "../views/Checkout.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/earphone",
    name: "Earphone",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Earphone.vue"),
  },
  {
    path: "/headphone",
    name: "Headphone",
    component: Headphone,
  },
  {
    path: "/speaker",
    name: "Speaker",
    component: Speaker,
  },
  {
    path: "/product/:slug",
    name: "ProductFile",
    component: ProductFile,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
});

export default router;
