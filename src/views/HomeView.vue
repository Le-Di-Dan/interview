<template>
  <div class="home pt-10 mt-10 flex justify-center">
    <slider />
  </div>
</template>

<script>
import Slider from '@/components/Slider.vue'
export default {
  name: 'HomeView',
  components: {
    Slider
  },
  created() {
    this.test()
  },
  methods: {
    async test() {
      
    }
  }
}
</script>
