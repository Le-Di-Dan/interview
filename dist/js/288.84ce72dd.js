"use strict";(self["webpackChunkapp_interview"]=self["webpackChunkapp_interview"]||[]).push([[288],{288:function(e,t,o){o.r(t),o.d(t,{default:function(){return c}});o(7658);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"login-page"},[t("el-form",[t("h2",{staticClass:"form-header"},[e._v("Login")]),t("el-form-item",{attrs:{label:"Username"}},[t("el-input",{attrs:{placeholder:"Enter your username"},model:{value:e.info.username,callback:function(t){e.$set(e.info,"username",t)},expression:"info.username"}})],1),t("el-form-item",{attrs:{label:"Password"}},[t("el-input",{attrs:{placeholder:"Enter your password"},model:{value:e.info.password,callback:function(t){e.$set(e.info,"password",t)},expression:"info.password"}})],1),t("p",{staticClass:"register-button"},[t("span",[e._v("Do you have an account?")]),t("span",{staticClass:"hover:cursor-pointer",staticStyle:{color:"#409eff"},on:{click:function(t){return e.$router.push({name:"SignupPage"})}}},[e._v("Register")])]),t("el-button",{attrs:{type:"primary"},on:{click:e.handleLogin}},[e._v("Login")])],1)],1)},a=[],s=o(8408),r={data(){return{info:{username:"",password:""}}},methods:{async handleLogin(){try{await s.Z.login(this.info),console.log(document.cookie),this.setLogin(),window.localStorage.setItem("authenticated",!0),this.$router.push({name:"home",query:{auth:!0}})}catch(e){console.log(e)}},setLogin(){this.$store.commit("login")}}},i=r,l=o(1001),u=(0,l.Z)(i,n,a,!1,null,"a367bc9a",null),c=u.exports}}]);
//# sourceMappingURL=288.84ce72dd.js.map