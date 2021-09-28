import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Nested1 from "../components/Nested1";
import Nested2 from "../components/Nested2";
import Nested3 from "../components/Nested3";
import Grandchild1 from "../components/Grandchild1";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    redirect: "/about/child1/",
    children: [
      {
        path: "child1",
        component: Nested1,
        children: [
          {
            path: "grandchild1",
            component: Grandchild1,
          },
        ],
      },
      {
        path: "child2",
        component: Nested2,
      },
      {
        path: "child3",
        component: Nested3,
      },
    ],
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
