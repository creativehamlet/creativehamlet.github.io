<template>
<div>
    <router-view></router-view>
    <app-footer></app-footer>
</div>
</template>

<script>
import AdvancedFooter from '../components/layout/AdvancedFooter';

export default {
  components: {
    'app-footer': AdvancedFooter
  },
};
</script>
