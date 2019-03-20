<template>
  <div  class="m-life">
    <el-row>
      <el-col :span="14">
        <slider class="my-slider"/>
      </el-col>
      <el-col :span="4">
        <div class="m-life-pic"></div>
      </el-col>
      <el-col :span="6">
          <div class="m-life-login">
              <img :src="avatar"/>
              <h4>{{user}}</h4>
              <el-button round class="register-btn" @click="signup">注册</el-button>
              <el-button round class="login-btn" @click="signin">立即登录</el-button>
          </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7"><div class="m-life-hotel"></div></el-col>
      <el-col :span="7"><div class="m-life-music"></div></el-col>
      <el-col :span="4"><div class="m-life-coop"></div></el-col>
      <el-col :span="6">
        <div class="m-life-downapp">
          <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="下载App" title="美团爱怕怕">
          <h4>美团APP手机版</h4>
          <h4><span>1元起</span> 吃喝玩乐</h4>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Slider from "@/components/index/slide";
export default {
  components: {
    Slider
  },
  data(){
      return {
          avatar:'//s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg',
          user:'Hi！你好'
      }
  },
  async mounted(){
    const self=this
    const {status,data:{user}}=await self.$axios.get('/users/getUser')
    if(status===200 && user!=''){
      this.user=user
    }
  },
  methods:{
    signup(){
      location.href='/register'
    },
    signin(){
      location.href='/login'
    }
  }
};
</script>

<style lang='css'>
</style>