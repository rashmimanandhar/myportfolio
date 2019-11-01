import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import KUDO from "./views/PortfolioFrontend";
import DoctusTravel from "./views/PortfolioDoctusTravel";
import kudoAI from "./views/PortfolioKUDOAI";
import productManager from './views/PortfolioProductManager'
import HDC from "./views/PortfolioHDC";
import Manaram from "./views/PortfolioManaram";

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
      path: "/portfolio/doctusTravel",
      name: "doctusTravel",
      component: DoctusTravel
    },
    {
      path: "/portfolio/kudoAI",
      name: "kudoAI",
      component: kudoAI
    },
    {
      path: "/portfolio/productManager",
      name: "productManager",
      component: productManager
    },
    {
      path: "/portfolio/hdc",
      name: "hdc",
      component: HDC
    },
    {
      path: "/portfolio/manaram",
      name: "manaram",
      component: Manaram
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/timeline",
      name: "timeline",

      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Timeline.vue")
    }
  ]
});
