<template>
  <!-- 总布局 -->
  <el-container>

    <!-- 左侧菜单栏 -->
    <el-aside width="218px">
      
      <el-menu default-active="1-3" class="el-menu-vertical-demo" 
      background-color="#1d2429"
      text-color="#fff"
      active-text-color="#ffd04b"
      >
        <!-- logo部分 -->
        <div class="logo">
          <img
            src="https://s1.aigei.com/src/img/png/a5/a5210224a22d4074b43c1afc500b3b71.png?imageMogr2/auto-orient/thumbnail/!47x47r/gravity/Center/crop/47x47/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:XBSFJ9J1reN4bZL4OaP1iUVWvso="
            alt=""
          />
          <span>Hide the sword</span>
        </div>
        <!-- 列表一 -->
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-unfold"></i>
            <span slot="title">列表页</span>
          </template>
          
          <el-menu-item-group>
            <el-menu-item index="1-3" @click="goToNormList">查询表格</el-menu-item>
          </el-menu-item-group>

          <el-submenu index="1-4">
            <span slot="title">图片表格</span>
            <el-menu-item index="1-4-1" @click="goToCardList">产品介绍</el-menu-item>
          </el-submenu>

        </el-submenu>

        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">详细页</span>
        </el-menu-item>

        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">结果页</span>
        </el-menu-item>
      </el-menu>

    </el-aside>


    <!-- 右侧组件区域 -->
    <el-main>
      <MiniHeader/>
      <router-view></router-view>
      <MiniFooter/>
    </el-main>

  </el-container>
</template>

<script>
import NormList from "./pages/NormList.vue";
// 引入复用组件
import MiniHeader from "./components/reuse/MiniHeader.vue";
import MiniFooter from "./components/reuse/MiniFooter.vue";

export default {
  name: "Home",
  components: { NormList , MiniHeader , MiniFooter },
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    //路由跳转至NormList页面
    goToNormList() {
      this.$router.push({
        name: "list",
        query:{
          bigtitle: "用户列表",
          smalltitle: "列表查询",
        }
      });
    },
    //路由跳转到CardList页面
    goToCardList() {
      this.$router.push({
        name: "cardlist",
        query: {
          bigtitle: "图片表格",
          smalltitle: "产品介绍",
        },
      });
    },
  },
  mounted() {
    // 直接飞去产品介绍页面
    this.goToNormList();
  },
};
</script>

<style scoped>
/* 左侧菜单 */
.el-menu-vertical-demo{
  width: 218px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
}
.logo {
  height: 32px;
  line-height: 32px;
  margin: 16px;
  display: flex;
  align-content: center;
  font-size: 16px;
  color: white;
  font-weight: 600;
}
.logo img {
  margin-right: 16px;
}
.logo span {
  overflow: hidden;
}
.ant-layout-sider-trigger {
  background-color: rgb(0, 21, 41);
  padding-left: 20px;
  text-align: start;
}
.zoom {
  position: absolute;
  bottom: 20px;
  left: 20px;
}
</style>

