<template>
  <div class="page-login">
    <article class="login-header">
      <a href="/" class="logo"></a>
    </article>
    <section class="login-panel">
      <img
        class="banner"
        src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
        alt="美团登录"
      >
      <el-form label-position="top" label-width="80px" :model="user" class="form">
          <p v-if="error" class="tips"><i>{{error}}</i></p>
        <el-form-item label="账号登陆">
          <el-input v-model="user.name" placeholder="手机号/用户名/邮箱"></el-input>
          <el-input v-model="user.pwd" placeholder="密码" type="password"></el-input>
          <a href="/forgetPassword" class="forget">忘记密码?</a>
          <el-button type="primary" size="large" class="btn-login" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </section>
    <section>
        <div class="footer-top"></div>
        <dl class="footer">
            <dd><a href="https://about.meituan.com/about.html">关于美团</a></dd>
            <dd><a href="https://zhaopin.meituan.com/">加入我们</a></dd>
            <dd><a href="http://emis.meishi.meituan.com/merchantsSettled">商家入驻</a></dd>
            <dd><a href="https://www.meituan.com/help/faq">帮助中心</a></dd>
            <dd><a href="http://meituan.com/mobile">美团手机版</a></dd>
        </dl>
        <div class="footer-bottom"></div>
        <div class="profile">©2019 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</div>
    </section>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js'
import { setTimeout } from 'timers';
export default {
  layout: "blank",
  data(){
      return {
          user:{
              name:'',
              pwd:'',
          },
          error:''
      }
  },
  methods:{
      login(){
        let self=this
        self.$axios.post('/users/signin',{
          username:encodeURIComponent(self.user.name),
          password:CryptoJS.MD5(self.user.pwd).toString()
        }).then(({status,data})=>{
          if(status===200){
            if(data && data.code===0){
              location.href='/'
            }else{
              self.error=data.msg
            }
          }else{
            self.error=`服务器出错，错误码:${status}`
          }
        })
        setTimeout(()=>{
          self.error=''
        },5000)
      }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/login/index.scss";
</style>


