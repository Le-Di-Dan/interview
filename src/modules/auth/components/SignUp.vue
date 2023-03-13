<template>
  <div class="sign-up">
    <el-form>
        <h2 class="form-header">Sign Up</h2>
        <el-form-item label="Username">
            <el-input v-model="info.username" placeholder="Enter username"></el-input>
        </el-form-item>
        <el-form-item label="Password">
            <el-input v-model="info.password" placeholder="Enter password"></el-input>
        </el-form-item>
        <el-form-item label="Email">
            <el-input v-model="info.email" placeholder="Enter your email"></el-input>
        </el-form-item>
        <el-button type="primary" @click="handleSignUp">Sign Up</el-button>
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
                password: "",
                email: ""
            }
        }
    },
    methods: {
        async handleSignUp() {
            try {
                await AuthApi.SignUpAccount(this.info)
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .sign-up {
        border: 1px solid #dbdbdb;
        border-radius: 8px;
        padding: 24px;
    }

    .form-header {
        font-size: 24px;
        font-weight: 600;
    }
</style>