<template>
<div class="outer-wrapper" v-if="slides && slides[currentSlide]">

  <div class="slide-wrapper">
    <!-- Slide -->
    <transition tag="div" class="slide-transition" :name="fadeTransition" mode="out-in" appear>
      <span v-touch:swipe.left="prev" v-touch:swipe.right="next">
        <component class="slide-component w-100 img-responsive" :class=" {'mw-100' : isVideo}"
          controls="false" :is="slides[currentSlide].type" autoplay="false" muted="true"
          :loop="loopVideo" :src="slides[currentSlide].url" poster="../../assets/svg/loader.svg" >
        </component>
      </span>
    </transition>
  </div>
  <div class="button-wrapper" key="buttons">
    <div @click="prev">
      <slot name="prev"><button class="direction-button prev"></button></slot>
    </div>
    <div @click="next">
      <slot name="next"><button class="direction-button next"></button></slot>
    </div>
  </div>

  <!-- Indicator dots -->
  <ul v-show="showIndicators" class="indicator-wrapper">
    <li v-for="(indicator, index) in slides.length" class="indicator mt-2"
      :style="dotColor(index)" :key="index" @click="currentSlide=index">
    </li>
  </ul>

</div>
</template>

<script>
import {mapGetters, mapActions } from 'vuex';
import $ from 'jquery';

export default {
  name: 'carousel',
  data() {
    return {
      currentSlide: 0,
      fullscreen: false,
    };
  },
  methods: {
    swipeHandler(direction) {},
    next() {
      // Check whether to loop through or stop at the end when 'Next' button is clicked.
      if (this.currentSlide === (this.slides.length - 1) && this.loop) {
        this.currentSlide = 0;
      } else if (this.currentSlide < this.slides.length - 1) {
        this.currentSlide += 1;
      }
    },
    prev() {
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
    ...mapGetters(['category' ]),
    fadeTransition() {
      return this.fade ? 'fade' : '';
    },
    isVideo() {
      return this.slides[this.currentSlide].type === 'video';
    },
    showIndicators() {
      return this.indicators && this.category!=='all';
    }
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
    fade: {
      default: true,
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
  /* Video loader icon */
  video, img {
      max-width: 80vw;
      min-height:100%;
      background: black url('../../assets/svg/loader.svg') center center no-repeat;
      background-image: black cover;
      object-fit: fill;
      transition: 1s all;
  }
</style>
