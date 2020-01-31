import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import DisplayCurriculum from "../views/DisplayCurriculum.vue";
import UpsertCurriculum from "../views/UpsertCurriculum.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/curriculum",
    name: "curriculum",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: DisplayCurriculum
  },
  {
    path: "/curriculum/upsert",
    name: "upsert",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: UpsertCurriculum
  }
];

const router = new VueRouter({
  routes
});

export default router;
