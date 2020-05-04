<template>
<div class="gallery-grid mx-auto">
    <btn-group vertical class="left-nav-container d-none">
        <div v-for="(cat, index) in tabs" class="btn vertical-btn my-auto"
            :key="index" @click="changeCategory(index)" :class="[category===index?'active':'']">
            {{ index }}
        </div>
    </btn-group>
    <ul class="gallery-nav d-none px-0 mb-0">
        <li v-for="(pro, index) in tabs[category]" class="gallery-nav-item text-capitalize"
            @click="setProject(tabs[category][index].name)" :key="`${index}${tabs[category][index].name}`"
            :class="[project===tabs[category][index].name?'active':'']">
            {{ formatNameString(tabs[category][index]) }}
        </li>
        <li v-if="category!=='all'" class="gallery-nav-item text-capitalize" key="all" @click="viewAll">
            Back to All
        </li>
    </ul>
    <div class="gallery-wrapper">
        <carousel :slides="slides"></carousel>
    </div>
</div>
</template> 

<script>
import { mapGetters, mapActions } from 'vuex';
import { BButtonGroup } from 'bootstrap-vue';
import Carousel from '@/components/Carousel/Carousel.vue';

export default {
    name: 'carousel-tabs',
    props: ['tabs'],
    components: { 'carousel': Carousel, 'btn-group': BButtonGroup },
    methods: { 
        ...mapActions(['setProject', 'setCategory', 'fetchSlides']),
        changeCategory(category) {
            this.setCategory(category);
            this.setProject(this.tabs[category][0].name);
        },
        viewAll() {
            this.setCategory('all');
        },
        formatNameString(project) {
            return project.name.replace(/\d+/g, '').split('-').join(' ');
        },
    },
    computed: {
        ...mapGetters(['category', 'project', 'slides']),
    },
    async created() {
        await this.fetchSlides();
    },
};
</script>

<style lang="scss" scoped></style>
