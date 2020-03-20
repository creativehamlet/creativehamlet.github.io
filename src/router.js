import Vue from "vue";
import Router from "vue-router";
import FooterLayout from './layout/FooterLayout.vue';
import store from './store';

Vue.use(Router);

const router=  new Router({
  linkExactActiveClass: "active",
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('./views/Landing.vue'),
      meta: { layout: FooterLayout },
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
