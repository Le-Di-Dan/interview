<template>
  <div class="login-page">
    <el-form>
        <h2 class="form-header">Login</h2>
        <el-form-item label="Username">
            <el-input v-model="info.username"
            placeholder="Enter your username"></el-input>
        </el-form-item>
        <el-form-item label="Password">
            <el-input v-model="info.password"
            placeholder="Enter your password"
            ></el-input>
        </el-form-item>
        <p class="register-button">
            <span>Do you have an account?</span>
            <span style="color: #409eff" class="hover:cursor-pointer" @click="$router.push({name: 'SignupPage'})">Register</span>
        </p>
        <el-button type="primary" @click="handleLogin">Login</el-button>
    </el-form>
  </div>
</template>

<script>
import AuthApi from '@/api/auth'
export default {
    data() {
        return {
            info: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        async handleLogin() {
            try {
                await AuthApi.login(this.info)
                console.log(document.cookie)
                this.setLogin()
                window.localStorage.setItem("authenticated", true)
                this.$router.push({name: "home", query: {auth:true}})
            } catch (error) {
                console.log(error)
            }
        },
        setLogin() {
            this.$store.commit("login")
        }
    }
}
</script>

<style lang="scss" scoped>
    .login-page {
        border: 1px solid #dbdbdb;
        padding: 24px;
        border-radius: 8px;
    }
    .form-header {
        font-weight: 600;
        font-size: 24px;
    }
    .register-button {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        margin-bottom: 36px;
    }
</style>