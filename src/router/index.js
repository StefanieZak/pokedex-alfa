import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Pokemon from "../views/Pokemon.vue";
import NotFound from "../components/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pokemon/:name",
    name: "pokemon",
    component: Pokemon,
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
