<template id="contact">
  <div>
    <div class="contact_title">
      <div>标题一</div>
      <div><button>新增</button></div>
    </div>
    <div>
      <table border="1">
        <tr>
          <th>学校</th>
          <th>名字</th>
          <th>学号</th>
          <th>金额</th>
          <th>操作</th>
        </tr>
        <tr v-for="item in list">
          <td>{{item.school}}</td>
          <td>{{item.name}}</td>
          <td class="click_show" @click="IsShows">点击</td>
          <td>{{item.emount}}</td>
          <td class="click_alter"><button>修改</button><button>删除</button></td>
        </tr>
      </table>
    </div>

    <div class="dialog">
      <!--外层的遮罩 点击事件用来关闭弹窗，isShow控制弹窗显示 隐藏的props-->
      <div class="dialog-cover back" v-show="isShow" >
        <form>
          <div class="drawer_content">
            <div class='drawer_content_title'>
              <div class='drawer_content_image' @click="IsShows">
                <img src="../images/cancancel.png" height="28" width="28"/>
              </div>
              <div class="btn_title">添加新人</div>
            </div>
            <div class="tops">
              <label class="tops_title">姓名</label>
              <input class="" @click='bindinput(0)'  maxlength='9' name="Name" placeholder='请输入姓名'></input>
            </div>
            <div class="tops">
              <label class="tops_title">手机号</label>
              <input class="" @click='bindinput(1)' maxlength='11' name="Phone" placeholder='请输入11位手机号'></input>
            </div>

            <div>
              <button  class="btn_ok">确定提交</button>
            </div>
          </div>
        </form>
      </div>
      <!-- transition 这里可以加一些简单的动画效果 -->

    </div>
  </div>
</template>
<script>
  export default {
    name: 'contact',
    // props: ['isShow'],
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        isShow: false,
        shows: '1',
        list: [{
          aid: '123',school: '云南民族大学', name: '刘温馨', emount: '$100',data: '2018-11-11'},{
          aid: '123',school: '云南民族大学', name: '刘温馨', emount: '$100',data: '2018-11-11'},{
          aid: '123',school: '云南民族大学', name: '刘温馨', emount: '$100',data: '2018-11-11'}
        ]
      }
    },
    methods: {
      IsShows: function(){
        this.isShow = !this.isShow
        // console.log(this.isShow)
      }
    },
    created: function () {
      // console.log(this.IsShow)
    }
  }
</script>
<style>
  .contact_title {display: flex;justify-content: space-between;color: #333333;margin-bottom: 10px;}
   table {
    text-align: center;
    width: 100%;
    color: #3d3d3d;
  }
   table tr {
     line-height: 40px;
   }
   table th :active{
     color: red;
   }
  table th{
    color: #1296db;
    width: 20%;
  }
  .active {
    color: #1296db;
  }
  .click_show {
    color: #1296db;
  }
  .click_alter {
    text-align: center;
  }
  .click_alter button{
    width: 60px;
    line-height: 20px;
    margin-right: 6px;
    background-color: #fff;
    color: #1296db;
    border: 1px solid #ccc;
    box-shadow: darkgrey 0px 0px 0px 0px ;
  }
  .click_alter button:active{
    border-color: #333333;
  }
  /*最外层 设置position定位*/
  .dialog {
    position: relative;
    font-size: 16px;
  }
  /*// 遮罩 设置背景层，z-index值要足够大确保能覆盖，高度 宽度设置满 做到全屏遮罩*/
  .dialog-cover {
    background: rgba(0,0,0, 0.8);
    position: fixed;
    z-index: 200;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  /* 弹窗 */
  /*.drawer_screen { width: 100%; height: 100%; position: fixed;  top: 0; left: 0; z-index: 1000; background:rgba(0,0,0,0.4); overflow: hidden;}*/
  .drawer_content {  background-color: #fff; border-radius: 4px;  position: fixed;top: 25%;text-align: center;width: 24%;margin-left: 38%;z-index: 300;}
  .drawer_content_title{ display:flex; background-color: #3D434f;}
  .drawer_content_image{ padding: 10px 6px 6px 10px; }
  .btn_title{ padding: 10px; font: 17px "microsoft yahei";  margin-right: 30px; color: white; width: 100%;}
  .btn_ok{ padding: 2%; font: 16px "microsoft yahei";  background-color: #1296db; margin: 10% 0 4% 0%;  color: #fff; width: 70%; border: 2px;}
  .tops{ height: 60px; text-align: center;margin-top: 20px;}
  .tops_title { width: 50px; text-align: center;  margin: 10px 4px 0 0 ; }
  .tops_title + input { font-size: 14px; height: 40px; width: 50%; padding-left: 5px; margin: 7px 25px 4px 0; }
  .power { font-size: 14px; line-height: 40px;}
  .power checkbox { margin: -2px 6px 0 0;}

</style>
