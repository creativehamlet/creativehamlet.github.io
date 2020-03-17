<template>
    <footer class="text-center">
        This footer is added in the 'src/layout/DefaultLayout.vue' file!
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  },
};
</script>
<style>
</style>
