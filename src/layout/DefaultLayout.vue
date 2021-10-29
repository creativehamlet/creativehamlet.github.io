<template>
<div>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
</div>
</template>

<script>
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer
  },
};
</script>
