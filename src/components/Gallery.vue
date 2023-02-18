<template>
  <div class="gallery xl:w-[1200px] w-[388px] xl:min-h-[700px] bg-white">
    <h1 class="gallery-title text-[#121212] xl:text-[45px] text-[30px] xl:leading-[67.5px] leading-[45px] font-bold xl:mb-10 mb-[34px]">Packer pen Gallery</h1>
    <div class="images-wrapper h-[592px] xl:flex flex-col flex-wrap justify-center items-center hidden">
      <img :src="item.image" :alt="item.image" v-for="item in collections" :key="item.id" class="hover:scale-105 duration-300 w-fit odd:mb-[13px] last:mt-[13px]">
    </div>
    <div class="w-full xl:hidden grid grid-cols-1 gap-y-[9.5px]">
      <div class="grid grid-cols-2 gap-x-[9.5px]">
        <div class="grid grid-cols-1 gap-y-[9.5px]">
          <div class="w-full rounded-[12px] overflow-hidden" v-for="item in collections.filter((elm, i) => i < 2)" :key="item.id">
            <img class="object-cover" :src="item.image" :alt="item.image" >
          </div>
        </div>
        <div class="w-full h-full rounded-[12px] overflow-hidden">
          <img class="object-cover object-[40%_10%] w-full h-full" :src="item.image" :alt="item.image" v-for="item in collections.filter((elm, i) => i === 2)" :key="item.id">
        </div>
      </div>
      <div class="grid grid-cols-1 gap-y-[9.5px]">
        <div class="w-full h-[298.5px] rounded-[12px] overflow-hidden" v-for="item in collections.filter((elm, i) => i >= 3 && i < 5)" :key="item.id">
            <img class="w-full h-full object-cover object-[0%_10%]" :src="item.image" :alt="item.image" >
        </div>
      </div>
      <div class="grid grid-cols-2 gap-x-[9.5px]">
        <div class="rounded-[12px] h-[131px] overflow-hidden" v-for="item in collections.filter((elm, i) => i >= 5)" :key="item.id">
            <img class="w-full h-full object-cover object-[0%_10%]" :src="item.image" :alt="item.image" >
        </div>
      </div>
    </div>
    <div class="h-[50px] bg-white"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collections: [
        {
          id: 1,
          image: this.$getUrlImage("gallery-1.png")
        },
                {
          id: 2,
          image: this.$getUrlImage("gallery-2.png")
        },
                {
          id: 3,
          image: this.$getUrlImage("gallery-3.png")
        },
                {
          id: 4,
          image: this.$getUrlImage("gallery-4.png")
        },
                {
          id: 5,
          image: this.$getUrlImage("gallery-5.png")
        },
        {
          id: 6,
          image: this.$getUrlImage("gallery-6.png")
        },
        {
          id: 7,
          image: this.$getUrlImage("gallery-7.png")
        }
      ]
    }
  },
  computed: {
    screenLabel() {
      const size = this.$store.state.windowSize
        if(size >= 1280) {
            return 'XL'
        } else if(size >= 992) {
            return 'LG'
        } else if(size >= 768) {
            return 'MD'
        } else {
            return 'SM'
        }
    }
  },
  watch: {
    'screenLabel': {
        handler(n, o) {
            if(n === 'XL') {
                this.collections = this.collections.map(item => {
                  return {
                    ...item,
                    image: this.$getUrlImage(`gallery-${item.id}.png`)
                  }
                  
                })
                return
            }
            this.collections = this.collections.map(item => {
              return {
                ...item,
                image: this.$getUrlImage(`gallery-${item.id}-sm.png`)
              }
            })
        },
        immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>