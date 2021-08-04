<template>
  <div>
    <!-- 邮箱 -->
    <el-input
      v-model="emailNumber"
      placeholder="请输入邮箱"
      style="margin: 10px 0"
      @blur="email"
    ></el-input>
    <span class="err" v-show="toney == 1">邮箱不能为空</span>
    <span class="err" v-show="toney == 2">邮箱不合法</span>

    <!-- 手机号 -->
    <el-input
      v-model="phoneNumber"
      placeholder="请输入手机号"
      style="margin: 10px 0"
      @blur="phone"
    ></el-input>
    <span class="err" v-show="tone == 1">手机号不能为空</span>
    <span class="err" v-show="tone == 2">手机号不合法</span>

    <!-- 手机号验证码 -->
    <div class="code">
      <el-input
        v-model="codeNumber"
        placeholder="请输入验证码"
        style="margin: 10px 0"
      ></el-input>
      <el-button
        type="primary"
        :loading="loading"
        @click="enterLoading"
        style="height: 38px; width: 141px"
        @blur="code"
        >获取验证码</el-button
      >
    </div>
    <span class="err" v-show="cd == 1">验证码不能为空</span>

    <!-- 登录按钮 -->
    <div class="auto-login">
      <div><input type="checkbox" checked /> 自动登录</div>

      <a href="javascript:;">忘记密码 ?</a>
    </div>

    <span class="button" @click="go">注 册</span>
  </div>
</template>

<script>
export default {
  name: "Phone",
  data() {
    return {
      loading: false,
      iconLoading: false,
      emailNumber: "",
      toney: 0,
      phoneNumber: "",
      tone: 0,
      codeNumber: "",
      cd: 0,
    };
  },
  methods: {
    enterLoading() {
      // 校验手机号
      if (this.phoneNumber == "") {
        this.tone = 1;
        this.changeStyle(0);
      } else if (/^1[3456789]\d{9}$/.test(this.phoneNumber) == false) {
        this.tone = 2;
        this.changeStyle(0);
      } else {
        this.tone = 3;
        document.getElementsByClassName("el-input__inner")[0].style = "";
        this.loading = true;
      }
    },
    changeStyle(i) {
      document.getElementsByClassName("el-input__inner")[i].style.borderColor =
        "red";
      document.getElementsByClassName("el-input__inner")[i].style.boxShadow =
        "none";
    },
    // 点击注册
    go() {
      // 校验邮箱是否为空y
      if (this.toney == 0) {
        this.toney = 1;
        this.changeStyle(0);
      }
      // 校验手机号是否为空
      if (this.tone == 0) {
        this.tone = 1;
        this.changeStyle(1);
      }
      // 校验验证码是否为空
      if (this.cd == 0) {
        this.cd = 1;
        this.changeStyle(2);
      }
      // 发送请求
      if (this.cd == 3 && this.tone == 3 && this.toney == 3) {
        this.$notify({
          title: "成功",
          message: "注册成功",
          type: "success",
        });
      }
    },
    // 校验邮箱
    email() {
      if (this.emailNumber == "") {
        this.toney = 1;
        this.changeStyle(0);
      } else if (
        /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/.test(
          this.emailNumber
        ) == false
      ) {
        this.toney = 2;
        this.changeStyle(0);
      } else {
        this.toney = 3;
        document.getElementsByClassName("el-input__inner")[0].style = "";
      }
    },
    // 校验手机号码
    phone() {
      if (this.phoneNumber == "") {
        this.tone = 1;
        this.changeStyle(1);
      } else if (/^1[3456789]\d{9}$/.test(this.phoneNumber) == false) {
        this.tone = 2;
        this.changeStyle(1);
      } else {
        this.tone = 3;
        document.getElementsByClassName("el-input__inner")[1].style = "";
      }
    },
    // 校验验证码
    code() {
      this.loading = false;
      if (this.codeNumber == "") {
        this.cd = 1;
        this.changeStyle(2);
      } else {
        this.cd = 3;
        document.getElementsByClassName("el-input__inner")[2].style = "";
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
.code {
  display: flex;
  align-items: center;
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