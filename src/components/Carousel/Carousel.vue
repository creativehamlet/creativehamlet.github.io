<template>
<div class="outer-wrapper" v-if="slides && slides[currentSlide]">

  <div class="slide-wrapper">
    <!-- Slide -->
    <transition tag="div" class="slide-transition" :name="fadeTransition" mode="out-in" appear>
      <component class="slide-component w-100" @load="setIsLoading(false)" :class=" {'mw-100' : isVideo} " :controls="isVideo" @loadeddata="setIsLoading(false)"
        :is="slides[currentSlide].type" :autoplay="autoplay" :muted="autoplay" :loop="loopVideo"
        :src="slides[currentSlide].url" >
      </component>
    </transition>
  </div>
  <div v-if="!isLoading" class="button-wrapper test" key="buttons">
    <div @click="prev">
      <slot name="prev"><button class="direction-button prev"></button></slot>
    </div>
    <div @click="next">
      <slot name="next"><button class="direction-button next"></button></slot>
    </div>
  </div>

  <div v-if="!isLoading">
    <!-- Indicator dots -->
    <ul v-if="indicators && category!=='all'" class="indicator-wrapper">
      <li v-for="(indicator, index) in slides.length" class="indicator mt-2"
        :style="dotColor(index)" :key="index" @click="currentSlide=index">
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import {mapGetters, mapActions } from 'vuex';
export default {
  name: 'carousel',
  data() {
    return {
      currentSlide: 0,
      fullscreen: false,
    };
  },
  methods: {
    ...mapActions(['setIsLoading']),
    next() {
      this.setIsLoading(true);
      // Check whether to loop through or stop at the end when 'Next' button is clicked.
      if (this.currentSlide === (this.slides.length - 1) && this.loop) {
        this.currentSlide = 0;
      } else if (this.currentSlide < this.slides.length - 1) {
        this.currentSlide += 1;
      }
    },
    prev() {
      this.setIsLoading(true);
      // Check whether to loop through or stop at the beginning when 'Prev' button is clicked.
      if (this.currentSlide === 0 && this.loop) {
        this.currentSlide = this.slides.length - 1;
      } else if (this.currentSlide > 0) {
        this.currentSlide -= 1;
      }
    },
    dotColor(index) {
      return this.currentSlide === index ? `background-color: ${this.selectedIndicatorColor}`
        : `background-color: ${this.indicatorColor}`;
    },
  },
  watch: {
    slides() {
      this.currentSlide = 0; // Avoids index errors when the data is switched.
    },
  },
  computed: {
    ...mapGetters(['isLoading','category' ]),
    fadeTransition() {
      return this.fade ? 'fade' : '';
    },
    isVideo() {
      return this.slides[this.currentSlide].type === 'video';
    },
  },
  created() {
    this.currentSlide = this.startAtSlide;
  },
  props: {
    slides: {
      type: Array,
      required: true,
    },
    startAtSlide: {
      default: 0,
      type: Number,
    },
    loop: {
      default: true,
      type: Boolean,
    },
    loopVideo: {
      default: false,
      type: Boolean,
    },
    indicators: {
      default: true,
      type: Boolean,
    },
    indicatorColor: {
      type: String,
      default: 'white',
    },
    selectedIndicatorColor: {
      type: String,
      default: '#0b67b7',
    },
    autoplay: {
      default: true,
      type: Boolean,
    },
    fade: {
      default: true,
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped></style>
