import Vue from "vue";
import Router from "vue-router";
import DefaultLayout from './layout/DefaultLayout.vue';
import store from './store';

Vue.use(Router);

const router=  new Router({
  linkExactActiveClass: "active",
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "default" */ './views/Home.vue'),
      meta: { layout: DefaultLayout },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if(to.meta.layout !== from.meta.layout) {
    store.dispatch('setLayout', to.meta.layout);
  }
  next();
});

export default router;
