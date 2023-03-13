<template>
  <div class="auth-layout">
    <div class="content">
        <router-view />
    </div>
  </div>
</template>

<script>
export default {
    name: "AuthLayout"
}
</script>

<style lang="scss" scoped>
    .auth-layout {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        .content {
            width: 420px;
            height: auto;
        }
    }
</style>