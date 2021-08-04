<template>
  <div>
    <div>
    <!-- 账号密码输入框 -->
    <el-input
      v-model="account"
      placeholder="请输入内容"
      style="margin: 10px 0"
    ></el-input>

    <span class="err" v-show="ac == 1">账号不能为空</span>

    <el-input
      placeholder="请输入密码"
      v-model="password"
      show-password
      style="margin: 10px 0"
    ></el-input>

    <span class="err" v-show="pw == 1">密码不能为空</span>

    <!-- 登录按钮 -->
    <div class="auto-login">
      <div><input type="checkbox" checked /> 自动登录</div>

      <a href="javascript:;">忘记密码 ?</a>
    </div>

    <span class="button" @click="go">登 录</span>
    </div>
  </div>
</template>

<script>
import { loginRequest } from "../requestFn";

export default {
  name: "User",
  data() {
    return {
      account: "",
      ac: 0,
      password: "",
      pw: 0,
    };
  },
  methods: {
    changeStyle(i) {
      document.getElementsByClassName("el-input__inner")[i].style.borderColor =
        "red";
      document.getElementsByClassName("el-input__inner")[i].style.boxShadow =
        "none";
    },
    go() {
      // 校验账号是否为空
      if (this.ac == 0) {
        this.ac = 1;
        this.changeStyle(0);
      }
      // 校验密码是否为空
      if (this.pw == 0) {
        this.pw = 1;
        this.changeStyle(1);
      }

      if (this.pw == 2 && this.ac == 2) {
        //发送登录请求
        loginRequest(this.account, this.password).then((res) => {
          if (res.data != null) {
            this.$store.state.mobile = res.data.mobile;
            // 把token存到localStorage里
            localStorage.setItem("token", res.data.token);

            // 渲染一个提示框
            this.$notify({
              title:"登录",
              message: "欢迎使用",
              type: 'success'
              });
            // 登录成功去到home页面
            this.$router.replace({
              path:'/home'
            })
          } else {
            alert(res.meta.msg);
          }
        });
      }
    },
  },
  watch: {
    account() {
      if (this.account == "") {
        this.ac = 1;
        this.changeStyle(0);
      } else {
        this.ac = 2;
        document.getElementsByClassName("el-input__inner")[0].style = " ";
      }
    },
    password() {
      if (this.password == "") {
        this.pw = 1;
        this.changeStyle(1);
      } else {
        this.pw = 2;
        document.getElementsByClassName("el-input__inner")[1].style = " ";
      }
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: rgb(24, 144, 255);
}
.input-box {
  margin: 12px 0;
}
.err {
  color: red;
}
.auto-login {
  width: 100%;
  margin: 12px 0;
  display: flex;
  justify-content: space-between;
}
.auto-login > div {
  display: flex;
  align-items: center;
}
.auto-login > div input[type="checkbox"] {
  width: 16px;
  height: 16px;
  margin-right: 10px;
}
.button {
  display: inline-block;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: white;
  font-size: 16px;
  margin: 10px 0;
  cursor: pointer;
  border: none;
  background-color: rgb(24, 144, 255);
}
</style>