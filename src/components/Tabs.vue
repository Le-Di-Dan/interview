<template>
  <div class="tabs xl:w-[1200px] w-[388px]" >
    <template v-if="screenLabel === 'XL'">
        <div class="tabs-header grid grid-cols-4">
            <header-item v-for="tab in tabs"
            :key="tab.id"
            :active="tab.id === tabActive"
            :item="{icon: tab.icon, title: tab.title}" 
            @click.native="tabActive = tab.id"/>
        </div>
        <div class="tabs-content h-[500px] bg-neutral-100 py-[40px] px-[50px] flex justify-left items-center rounded-b-[25px]">
            <div class="tabs-content-left text-left mr-[38px] w-[350px]">
                <p class="description h-[100px] text-xl mb-5 text-left">Graphite Artist Quality Fine Art Drawing and Sketching Pencils Replaceable Nib Pencils. </p>
                <ul class="list-disc list-inside" >
                    <li class="text-left text-[18px] leading-10">MECHANICAL PENCILS</li>
                    <li class="text-left text-[18px] leading-10">ARCHITECT'S CHOICE</li>
                    <li class="text-left text-[18px] leading-10">EXECUTIVE PENCILS</li>
                    <li class="text-left text-[18px] leading-10">ENGRAVABLE PENCILS</li>
                </ul>
                <button class="bg-[#F4B840] py-[5px] pr-[25px] pl-[29px] text-sm leading-10 text-white mt-[35px] rounded-[5px] font-bold">SHOP ALL</button>
            </div>
            <div class="content-right w-[712px]">
                <div class="sale-off bg-white rounded-[18px] inline-flex items-center">
                    <span class="amount inline-block py-[13px] pl-10 pr-7 text-4xl font-bold text-[#F4B840] w-[200px]">25% off</span>
                    <span class="limitation inline-block pl-6 text-left text-[25px] leading-[38px] rounded-r-[18px] bg-neutral-100 mr-0.5 w-[508px]  h-[76px] py-[19px]">Offer Applicable on All Our Pencils</span>
                </div>
                <div class="items grid grid-cols-3 gap-x-5 mt-5">
                    <card v-for="pencil in pencils" :key="pencil.id" :item="pencil"/>
                </div>
            </div>
        </div>
        <div class="h-[50px] bg-white"></div>
    </template>
    <template v-else-if="screenLabel === 'SM'">
        <collapser v-for="tab in tabs" :key="tab.id" :item="tab" @trigger="() => {
            tabActive = tabActive === tab.id ? null : tab.id
        }" :active="tab.id === tabActive">
            <template>
                <div class="above mx-[10px]">
                    <p class="mt-10 mb-[9px] text-left text-black text-base leading-[27px] font-normal">Graphite Artist Quality Fine Art Drawing,  Sketching and Replaceable Nib Pencils. </p>
                    <ul class="grid grid-cols-2 gap-x-[12px] mb-7">
                            <li class="text-[13px] leading-[32px] font-semibold text-left inline-flex items-center">
                                <span class="circle w-1 h-1 mr-1 bg-black rounded-full inline-block"></span>
                                MECHANICAL PENCILS
                                </li>
                            <li class="text-[13px] leading-[32px] font-semibold text-left inline-flex items-center">
                                <span class="circle w-1 h-1 mr-1 bg-black rounded-full inline-block"></span>
                                ARCHITECT'S CHOICE
                            </li>
                            <li class="text-[13px] leading-[32px] font-semibold text-left inline-flex items-center">
                                <span class="circle w-1 h-1 mr-1 bg-black rounded-full inline-block"></span>
                                EXECUTIVE PENCILS
                            </li>
                            <li class="text-[13px] leading-[32px] font-semibold text-left inline-flex items-center">
                                <span class="circle w-1 h-1 mr-1 bg-black rounded-full inline-block"></span>
                                ENGRAVABLE PENCILS
                            </li>
                    </ul>
                    <p class="saleoff rounded-[10px] border-2 border-white flex justify-between items-center p-[17px_0_15px_22px]">
                        <span class="inline-block text-[#F4B840] text-[38px] leading-[54px] font-bold mr-4">25%<sup class="text-lg">OFF</sup></span>
                        <span class="inline-block text-base font-normal text-left pr-2">Offer Applicable on All Our Pencils</span>
                    </p>
                </div>
                <div class="items mt-10">
                    <swiper
                    :slides-per-view="2"
                    :loop="false"
                    >
                        <swiper-slide v-for="pencil in pencils" :key="pencil.id">
                            <card :item="pencil"/>
                        </swiper-slide>
                    </swiper>
                </div>
                <button class="bg-[#F4B840] text-white text-[14px] leading-[40px] px-[17px] font-bold rounded-[5px] mt-10 mb-[60px]">SHOP ALL</button>
            </template>
        </collapser>
        <div class="h-[50px] bg-white"></div>
    </template>
  </div>
</template>

<script>
import IconPencil from "@/assets/svg/icon-pencil.svg"
import IconMarker from "@/assets/svg//icon-markers.svg"
import IconDColor from "@/assets/svg/icon-drawing-color.svg"
import IconNoteBook from "@/assets/svg/icon-note-book.svg"
import HeaderItem from "./HeaderItem.vue"
import Card from "./Card.vue"
import Collapser from './Collapser.vue'
import { Navigation, Pagination, EffectFade, EffectCube } from 'swiper'
import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'
SwiperCore.use([Navigation, Pagination, EffectFade, EffectCube])

export default {
    components: {
        IconPencil,
        IconMarker,
        IconDColor,
        IconNoteBook,
        HeaderItem,
        Card,
        Collapser,
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            tabs: [
                {
                    id: 1,
                    icon: IconPencil,
                    title: "Pencils"
                },
                                {
                    id: 2,
                    icon: IconMarker,
                    title: "Markers"
                },
                                {
                    id: 3,
                    icon: IconDColor,
                    title: "Drawing Colors"
                },
                                {
                    id: 4,
                    icon: IconNoteBook,
                    title: "Notebooks"
                }
            ],
            pencils: [
                {
                    id: 1,
                    image: this.$getUrlImage("pencil-1.png"),
                    title: "Aero Mechanical Pencil",
                    mainPrice: 125,
                    realPrice: 99
                },
                                {
                    id: 2,
                    image: this.$getUrlImage("pencil-2.png"),
                    title: "Castell Mechanical Pencil",
                    mainPrice: 99, 
                    realPrice: 75
                },
                                {
                    id: 3,
                    image: this.$getUrlImage("pencil-3.png"),
                    title: "Architect Choice Pencil",
                    mainPrice: 70,
                    realPrice: 45
                }
            ],
            tabActive: 1
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
                    this.tabActive = 1
                }
            },
            immediate: true
        }
    }
}
</script>

<style scoped>
    .in-active {
        background-color: #ffffff;
    }
</style>