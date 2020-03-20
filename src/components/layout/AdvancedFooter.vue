<template>
<footer class="footer-container">
    <div class="footer-middle-line"></div>
    <div class="footer-base-line"></div>
    <div class="footer">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-4">
                    <div class="copyright">
                        &copy; {{year}}
                        <a href="http://portf.com" target="_blank" rel="noopener">PortF</a>
                    </div>
                </div>
                <div class="col-md-4 text-center">
                    <router-link slot="brand" class="navbar-brand" to="/">
                      <h3 class="">Bradley Sosnowski</h3>
                    </router-link>
                </div>
                <div class="col-md-4">
                </div>
            </div>
        </div>
    </div>
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
