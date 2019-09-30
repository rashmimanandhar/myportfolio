import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import KUDO from "./views/PortfolioKudo";
import Concordia from "./views/PortfolioConcordia";
import Manaram from "./views/PortfolioManaram";
import Procit from "./views/PortfolioProcit";
import Ent from "./views/PortfolioENT";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/portfolio/kudo",
      name: "kudo",
      component: KUDO
    },
    {
      path: "/portfolio/concordia",
      name: "concordia",
      component: Concordia
    },
    {
      path: "/portfolio/manaram",
      name: "manaram",
      component: Manaram
    },
    {
      path: "/portfolio/ent",
      name: "ent",
      component: Ent
    },
    {
      path: "/portfolio/procit",
      name: "procit",
      component: Procit
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
