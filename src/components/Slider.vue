<template>
  <div class="xl:w-[1200px] w-[388px] h-fit flex justify-center">
    <swiper
      :slides-per-view="1"
      :loop="false"
      :pagination="customPagination"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
        <swiper-slide v-for="(slide, index) in slides" :key="slide.id">
            <component :is="slide.component" v-show="slideActive === index"/>
        </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Navigation, Pagination, EffectFade, EffectCube } from 'swiper'

import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'
import Tabs from './Tabs.vue'
import Gallery from './Gallery.vue'
// Import Swiper styles
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination, EffectFade, EffectCube])

export default {
  components: {
    Swiper,
    SwiperSlide,
    Tabs,
    Gallery
  },
  data() {
    return {
      slides: [
        {
          id: 1,
          component: Tabs
        },
        {
          id: 2,
          component: Gallery
        }
      ],
      customPagination: {
        clickable: true,
        bulletActiveClass: 'bullet-active'
      },
      slideActive: 0
    }
  },
  methods: {
    onSwiper(swiper) {
        console.log(swiper);
    },
    onSlideChange(e) {
        this.slideActive = e.activeIndex
        this.$forceUpdate()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>