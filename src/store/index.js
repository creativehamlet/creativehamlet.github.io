import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import Layout from './layout';
import Slides from './slides';

const store = new Vuex.Store({
  modules: {
    Layout,
    Slides
  }
});

export default store;
