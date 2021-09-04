import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../views/NotFound.vue";
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    //  /#/根目錄導到首頁
    path: '/',
    name: 'root',
    redirect: '/home'

  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/checkout',
    name: 'check-out',
    component: () => import('../views/CheckOut.vue')

  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
