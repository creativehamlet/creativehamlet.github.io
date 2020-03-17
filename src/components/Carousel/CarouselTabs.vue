<template>
<div class="left-nav-grid">
    <btn-group vertical class="categories">
        <div v-for="(cat, index) in tabs" class="btn vertical-btn my-auto"
            :key="index" @click="changeCategory(index)" :class="[category===index?'active':'']">
            {{ index }}
        </div>
    </btn-group>
    <ul class="gallery-nav px-0 mb-0">
        <li v-for="(pro, index) in tabs[category]" class="gallery-nav-item text-capitalize"
            @click="setProject(tabs[category][index])" :key="tabs[category][index]" :class="[project===tabs[category][index]?'active':'']">
            {{ tabs[category][index].split('-').join(' ') }}
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
import Carousel from '@/components/carousel/Carousel.vue';

export default {
    name: 'carousel-tabs',
    props: ['tabs'],
    components: { 'carousel': Carousel, 'btn-group': BButtonGroup },
    methods: { 
        ...mapActions(['setProject', 'setCategory', 'fetchSlides', 'setIsLoading']),
        changeCategory(category) {
            this.setCategory(category);
            this.setProject(this.tabs[category][0]);
        },
    },
    computed: {
        ...mapGetters(['category', 'project', 'slides', 'isLoading']),
    },
    async created() {
        this.setIsLoading(true);
        await this.fetchSlides();
    },
};
</script>

<style lang="scss" scoped>

.btn {
    white-space: normal;
}

.vertical-btn {
    padding: .25rem .5rem .5rem .25rem;
    font-size: .7rem;
    white-space: nowrap;
    background-color: lighten(#cdd2e2, 10%);
    transform: rotate(-90deg);
    cursor: pointer;
    color: #4a526d;
    &:hover {
        transform: rotate(-90deg);
        color: #05164f;
        background-color: #cdd2e2;
    }
}

.btn.active {
    background-color: darken(#cdd2e2, 10%);
    color: #05164f;
}

.left-nav-grid  {
    display: grid;
    grid-template-columns: 1fr 2fr 8fr repeat(2, 0fr);
    grid-template-rows: 1fr repeat(4, 0fr);
}

.categories {
    display: flex;
    flex-direction: vertical;
    justify-content: space-evenly;
    left: 2rem;
}

.list-group-item {
    background-color: transparent;
    border: 0;
}

.btn-group-vertical > .btn {
    font-size: 0.8em;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
}

.gallery-nav {
    min-height: 585px;
    background-color: white;
    min-width: 200px;
    text-align: left;
}

.gallery-nav-item {
    background-color: white;
    color: #4a526d;
    padding: 1em 1.5em;
    list-style: none;
    width: 100%;
    cursor: pointer;
    box-shadow: 0 1px 0 #05164f;
    margin-bottom: 1px;
}

.gallery-nav-item.active {
    background-color: #cdd2e2;
    color: #05164f;
}

.gallery-wrapper {
    position: relative;
}

.gallery-wrapper, .gallery-nav {
    min-height: 585px;
}

.btn.list-group-item {
    word-wrap: break-word;
    z-index: 1;
    text-align: left;
}

@media all and  (max-width: 800px) {
    .gallery-wrapper, .list-group-wrapper {
        min-height: 100%;
    }
}

</style>
