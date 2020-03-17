<template>
<div class="m-auto card">
    <div class="p-auto card-body">
        <p>This component is a view. It is a normal Vue SFC component.</p>
        <p>It should be located at 'src/views/*.vue'.</p>
        <p>{{routerViewString}}</p>
        <p>The component to be mounted, and the layout to use is fed to the router in 'src/router.js'.</p>
        <p>{{routeExample}}</p>
        <p>The app comes with a DefaultLayout.vue which contains simple layout with header and a
            footer where the body is injected in.</p>
        <p>It also has a NoLayout file that just injects the view without the header/footer.</p>
    </div>
</div>
</template>
<script>
export default {
    name: "home",
    computed: {
        routerViewString() {
            return "It is injected into the layout's <router-view> by vue-router.";
        },
        routeExample() {
            return `Example Route: {
                path: '/',
                name: 'home',
                component: () => import(/* webpackChunkName: "default" */ './views/Home.vue'),
                meta: { layout: DefaultLayout },
            }`;
        }
    },
    
};
</script>
