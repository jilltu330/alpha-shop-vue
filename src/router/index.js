import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../views/NotFound.vue";
import Home from "../views/Home.vue";


Vue.use(VueRouter);

const routes = [
  {
    //  /#/根目錄導到首頁
    path: "/",
    name: "root",
    redirect: "/home",

  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/checkout",
    name: "check-out",
    redirect: "/checkout/address",
    component: () => import("../views/CheckOut.vue"),
    children: [
      {
        path: "address",
        name: "address",
        component: () => import("../views/CheckOut_Address.vue"),
      },
      {
        path: "delivery",
        name: "delivery",
        component: () => import("../views/CheckOut_Delivery.vue"),
      },
      {
        path: "payment",
        name: "payment",
        component: () => import("../views/CheckOut_Payment.vue"),
      },
    ]
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
