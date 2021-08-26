<template>
  <div class="head">
    <div class="m-top">
      <div class="warp">
        <h1 class="logo">
          <a hidefocus="true" href="/#">网易云音乐{{searchKey.value}}</a>
        </h1>
        <Navbar/>
        <div class="login">
          <a hidefocus="true">登录</a>
        </div>
        <a class="create-center" href="">创作者中心</a>
        <div class="searchbtn flexR">
          <img src="../../assets/search-icon.png" alt="">
          <input placeholder="音乐/视频/电台/用户" v-model="searchKey" type="text">
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { ref,reactive,defineComponent,onMounted,computed } from 'vue';
import Navbar from './navbar.vue';  


export default defineComponent({
  name: 'Head',
  components: {
    Navbar,
  },
  setup(){
    const searchKey = ref('');

    return{
      searchKey,
    }
  }
});
</script>
<style lang="scss">
.m-top{
  position: relative;
  z-index: 1000;
  height: 70px;
  box-sizing: border-box;
  background: #242424;
  border-bottom: 1px solid #000;
  // overflow: hidden;
  .warp{
    width: 1100px;
    height: 100%1;
    margin: 0 auto;
    .logo{
      float: left;
      width: 176px;
      height: 69px;
      background-position: 0 0;
      background: url('../../assets/topbar.png') no-repeat ;
      a{
        float: left;
        width: 157px;
        height: 100%;
        padding-right: 20px;
        text-indent: -9999px;
      }
    }
    .login{
      float: right;
      height: 45px;
      margin: 19px 0 0 20px;
      padding: 0 22px 0 0;
      a{
        display: block;
        width: 28px;
        margin-top: 7px;
        color: #787878;
        font-size: 12px;
        &:hover{
          color: #666;
          text-decoration: underline;
        }
      }
    }
    .create-center{
      text-decoration: none;
      float: right;
      width: 90px;
      height: 32px;
      margin: 19px 0 0 12px;
      box-sizing: border-box;
      border: 1px solid #4F4F4F;
      line-height: 33px;
      color: #ccc;
      border-radius: 20px;
      font-size: 12px;
      &:hover{
        border: 1px solid #fff;
        color: #fff;
      }
    }
    .searchbtn{
      float: right;
      margin-top: 19px;
      width: 158px;
      height: 32px;
      background: #fff;
      border-radius: 32px;
      img{
        width: 20px;
      }
      input{
        border: none;
        outline: none;
        width: 115px;
        color: #9b9b9b;
        cursor: text;
        font-size: 12px;
      }
    }
  }
}
</style>
