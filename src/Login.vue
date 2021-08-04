<template>

  <div class="login-page">

    <!-- 登录表单结构 -->
    <form>
      <!-- 1.标题部分 -->
      <div class="title">
        <img class="logo" src="https://s1.aigei.com/src/img/png/e7/e71a835018aa49949da4fb681cbe595e.png?imageMogr2/auto-orient/thumbnail/!47x47r/gravity/Center/crop/47x47/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:j4oSv87ujSzgQjxGeySoro3uzUw=" />
        Hide the sword
      </div>

      <span class="title-text">Hide the sword 是大唐最具影响力的 铸剑 设计规范</span>

      <!-- 2.账号密码部分 -->
      <div class="changebtn">
        <span @click="UserLogin" :class="UserClass">账号密码登录</span>
        <span @click="PhoneLogin" :class="PhoneClass">手机号注册</span>
      </div>

      <!-- 3.路由组件输入框部分,缓存路由组件 -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>

      <!-- 4.下方区域 -->
      <div class="iconlist">
        其他登录方式:
        <a class="icons el-icon-platform-eleme"></a>
        <a class="icons"></a>
        <a class="icons"></a>
      </div>
    </form>

    <!-- 底部 -->
    <MiniFooter />
  </div>

</template>

<script>
import MiniFooter from "./components/reuse/MiniFooter.vue";

export default {
  name: "Login",
  components: { MiniFooter },
  data() {
    return {
      isUser:false,
      isPhone:"",
      UserClass:"color",
      PhoneClass:""
    };
  },
  methods: {
    //切换到用户名组件
    UserLogin() {
      // 优化防多次点击同一路由报错
      if(this.isUser == false){
        this.$router.push({
        name: "user",
        })
        // 改变样式
        this.isUser = true
        this.UserClass = "color"
        this.isPhone = false
        this.PhoneClass = ""
      }else{
        return
      }
    },
    //切换到手机号注册组件
    PhoneLogin() {
     if(this.isPhone == false){
      this.$router.push({
        name: "phone",
      })
      // 改变样式
      this.isUser = false
      this.UserClass = ""
      this.isPhone = true
      this.PhoneClass = "color"
    }else{
        return
    }

    }
  },
  mounted() {
    // 直接飞去登录页面
    this.UserLogin();
  }
}
</script>

<style scoped>
*{
  font-size: 14px;
}
.login-page {
  height: 100vh;
  /* background: #f0f2f5; */
  background-image: url("https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg");
  overflow: hidden;
}
form {
  width: 330px;
  height: 500px;
  margin: 50px auto;
  color: black;

  display: flex;
  flex-direction: column;
  align-items: center;
}
form .title {
  font-size: 32px;
  font-weight: bold;
  color: black;
  margin-bottom: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
}
form .title .logo {
  width: 44px;
  height: 44px;
  margin-right: 20px;
}
form .title-text {
  color: rgb(132, 133, 135);
  margin-bottom: 40px;
}
form .changebtn {
  display: flex;
  margin-bottom: 12px;
}
form .changebtn span {
  cursor: pointer;
  margin: 0 15px;
  padding: 10px 0;
  transition: 0.25s;
  border-bottom: 1px solid transparent;
}

form .iconlist {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 5px 0;
}
form .iconlist .icons {
  cursor: pointer;
  font-size: 24px;
  color: rgb(192, 194, 196);
  transition: 0.25s;
  margin: 0 12px;
}
form .iconlist .icons:hover {
  color: rgb(24, 144, 255);
}

/* 额外添加 */
form .changebtn .color {
    color: rgb(24, 144, 255);
    border-bottom: 1px solid rgb(24, 144, 255);
}
</style>