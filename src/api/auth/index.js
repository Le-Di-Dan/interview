import request from "@/plugins/request"

const AuthApi = {
    baseUrl: "http://localhost:3000",
    async SignUpAccount(info) {
        try {
            const response = request.post(`${this.baseUrl}/api/sign-up`, info, {
                withCredentials: true
            })
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    },
    async login(info) {
        try {
            const response = await request.post(`${this.baseUrl}/api/login`, info)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
}

export default AuthApi