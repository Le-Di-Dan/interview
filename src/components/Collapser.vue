<template>
  <div class="collapser bg-[#F4F4F4] rounded-[18px] p-[10px]  mb-[10px] last:mb-0">
    <div class="trigger bg-white rounded-[18px] p-[13px_38px_17px_40px] flex justify-between items-center hover:cursor-pointer" @click="$emit('trigger')">
        <div class="left w-fit flex justify-left items-center">
            <div class="rounded-full bg-[#F4F4F4] w-[50px] h-[50px] inline-flex justify-center items-center">
                <component :is="item.icon" class="icon-svg"/>
            </div>
            <h2 class="ml-[20px] text-xl font-bold">{{ item.title }}</h2>
        </div>
        <icon-arrow 
        class="duration-300"
        :class="{
            'rotate-0': active,
            'rotate-180': !active
        }"/>
    </div>
    <div class="collapser-content duration-300 pl-[10px] pr-[10px] overflow-hidden"
    :class="{
        'h-fit': active,
        'h-0': !active,
        'opacity-0': !active,
        'opacity-100': active
    }"
    >
        <slot />
    </div>
  </div>
</template>

<script>
import IconArrow from '@/assets/svg/icon-arrow.svg'
export default {
    components: {
        IconArrow
    },
    props: ['item', 'active']
}
</script>

<style lang="scss" scoped>
    .icon-svg {
        transform: scale(.75);
    }
</style>>

</style>