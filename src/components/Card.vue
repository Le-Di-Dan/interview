<template>
  <div class="card xl:w-[224px] w-[165px] xl:h-[320px] h-[260px] xl:pt-[10px] xl:pb-[34px] xl:px-[22px] p-[8px_13px_26px_17px] bg-white rounded-[18px] duration-300 hover:scale-105 hover:cursor-pointer">
    <img :src="item.image" :alt="item.title" class="card-image xl:w-[180px] xl:h-[210px] w-[135px] h-[160px]">
    <h2 class="card-title xl:text-sm text-[13px] leading-[18px] font-medium text-black xl:mt-[14px] mt-[2px] xl:mb-[10px] mb-[7px]">{{ item.title }}</h2>
    <p class="prices">
        <span class="real-price xl:text-base text-sm font-semibold inline-block mr-[13px]">{{ item.realPrice | formatCurrency}}</span>
        <span class="main-price xl:text-sm text-[13px] leading-[19.5px] text-[#727272]"><del>{{ item.mainPrice | formatCurrency}}</del></span>
    </p>
  </div>
</template>

<script>
export default {
    props: ['item'],
    filters: {
        formatCurrency(amount, locale = "en-US", currency = "USD") {
            return amount.toLocaleString(locale, {
                style: "currency",
                currency: currency
            })
        }
    }
}
</script>

<style>

</style>