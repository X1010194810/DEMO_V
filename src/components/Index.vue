
<template id="Index">
  <div class="main">
    <div class="left">
      <div class="left_list">
        <div><router-link  to="/About">我的工程</router-link></div>
        <div><router-link  to="/Contact" v-on:isShow="isShow">个人中心</router-link></div>
    </div>
    </div>
    <div class="top">
      <div>云南易用软件有限公司</div>
    </div>
    <div class="bottom">
      <div>
        <router-view></router-view>
      </div>
    </div>


  </div>
</template>
<script>
    // import "../../vue.css"
    export default {
        name: "Index",
      data(){
        return {
          isShow: false
        }
      },
      methods: {

      }
    }
</script>

<style scoped>
  .main {
    display: grid;
    grid-template-columns: 200px auto;
    grid-template-rows: 100px 800px;
    grid-gap: 5px;
    user-select: none;
  }
  .left {
    grid-column: 1/2;
    grid-row: 1/3;
    background-color: #e7e7e7;
  }
  .left_list {
    text-align: center;
    line-height: 60px;
    margin-top: 60px;
  }
  .left_list a {
    color: #333;
  }
  .left_list a:active {
    color: #1296db;
  }
  .top {
    grid-column: 2/3;
    grid-row: 1/2;
    background-color: #e7e7e7;
    color: #fff;
  }
  .top div {
    text-align: center;
    line-height: 100px;
  }
  .bottom {
    grid-column: 2/3;
    grid-row: 2/3;
    background-color: #e7e7e7;
    /*color: #fff;*/
  }
  .bottom > div {
    margin: 80px ;
    width: 1200px;
  }

</style>
