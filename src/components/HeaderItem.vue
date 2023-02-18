<template>
    <div class="tabs-header__item pt-[32px] rounded-t-[25px] bg-neutral-100 pr-[31px] pb-[28px] pl-[34px] flex flex-col justify-center items-center duration-300 hover:cursor-pointer"
    :class="{
        'bg-neutral-100': active,
        'bg-white': !active
    }"
    >
        <div class="tabs-header__item_tab shadow-[0_0_27px_0_rgba(0,0,0,0.05)] w-full bg-white rounded-[10px] py-[23px] flex flex-col justify-center items-center">
            <div class="wrap-icon w-[58px] h-[58px] flex justify-center items-center rounded-full bg-neutral-100">
                <component :is="item.icon"/>
            </div>
            <h2 class="tab-title font-bold text-[21px] leading-8 mt-1">{{ item.title }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    props: ['item', 'active']
}
</script>

<style>

</style>