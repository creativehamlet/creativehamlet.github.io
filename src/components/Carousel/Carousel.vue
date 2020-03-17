<template>
<div class="outer-wrapper" v-if="slides && slides[currentSlide]">
  <div class="inner-wrapper">

    <div class="slide-wrapper">
      <!-- Slide -->
      <transition tag="div" class="slide-transition" :name="fadeTransition" mode="out-in" appear>
        <component class="slide-component" @load="setIsLoading(false)"  :controls="isVideo" @loadeddata="setIsLoading(false)"
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
  </div>

  <div v-if="!isLoading">
    <!-- Indicator dots -->
    <ul v-if="indicators" class="indicator-wrapper">
      <li v-for="(indicator, index) in slides.length" class="indicator mt-2"
        :style="dotColor(index)" :key="index" @click="currentSlide=index">
      </li>
    </ul>
    <!-- Fullscreen button
    <span class="fullscreen-button" @click="fullscreen=!fullscreen">
      <slot name="fullscreen-button">
        <b>[ ]</b>
      </slot>
    </span> -->

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
    ...mapGetters(['isLoading']),
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

<style lang="scss" scoped>
/* Styles kept minimalist to avoid opionated presentation. */

/* Elements */
// img {
//   width:100%;
//   height:80%;
//   object-fit: cover;
// }

// video {
//   width:100%;
//   height:85%;
//   object-fit: cover;
// }

/* Element wrapper classes. */
.outer-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

/* Buttons. */
.button-wrapper {
  position: absolute;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  top: 0;
}

.direction-button {
  background-color: transparent;
  border: 0;
  padding: 17.52rem 12.87rem;
  color: white;
}

.direction-button::before {
  position: absolute;
  top: 40%;
  font-size: 3em;
  font-family: FontAwesome;
  display: inline-block;
  padding-right: 6px;
}

.prev::before {
  left: 1rem;
  content: "\f104";
}

.next::before {
  right: 1rem;
  content: "\f105";
}

.fullscreen-button {
  position: absolute;
  bottom: 1rem;
  right: 2rem;
  cursor: pointer;
}

/* These classes control the 'dots' that show which slide the user is on. */
.indicator-wrapper {
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1rem;
  text-align: center;
}
.indicator {
  display:inline-block;
  margin-right: 0.5rem;
  width: 1rem;
  height: 1rem;
}

/* Simple fade transition. */
.fade-enter-active,
.fade-leave-active { transition: opacity .7s; }
.fade-enter,
.fade-leave-to { opacity: 5; }
</style>
