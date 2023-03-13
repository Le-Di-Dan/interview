const AuthRoutes = [
    {
        path: "/auth",
        component: () => import("@/modules/auth/Layouts/AuthLayout"),
        children: [
            {
                path: "sign-up",
                component: () => import("@/modules/auth/components/SignUp.vue"),
                name: "SignupPage"
            },
            {
                path: "login",
                component: () => import("@/modules/auth/components/Login.vue"),
                name: "LoginPage"
            }
        ]
    }
]

export default AuthRoutes