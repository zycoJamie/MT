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
              <h4>Hi！你好</h4>
              <el-button round class="register-btn">注册</el-button>
              <el-button round class="login-btn">立即登录</el-button>
          </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col><div class="m-life-hotel"></div></el-col>
      <el-col><div class="m-life-music"></div></el-col>
      <el-col></el-col>
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
          avatar:'//s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg'
      }
  }
};
</script>

<style lang='css'>
</style>