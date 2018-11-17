<template >
  <div>

    <div id="Login" class="login">
      <div>账号：<input placeholder="0213"/></div>
      <div>密码：<input placeholder="123"/></div>
      <a><router-link to="/Index">登录</router-link></a>
    </div>
  </div>
</template>
<script type="text/javascript">
    import Vue from 'vue'
    export default {
      // '/Login': 'Login',
        name: "Login",
      data(){
        return {
          isShow: false
        }
      },
      methods: {
        register: function() {
          axios.post(this.registerUrl, this.newUserInfo, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      },
      computed: {
        register: function() {
          axios({
            url: '/user',
            method: 'post',
            data: {
              firstName: 'Fred',
              lastName: 'Flintstone'
            },
            transformRequest: [function (data) {
              // Do whatever you want to transform the data
              let ret = ''
              for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
              }
              return ret
            }],
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          })
        }
      },
      created: function () {
        var that = this
        // that.items[1] = 'x'
      }
    }
</script>

<style>

</style>
