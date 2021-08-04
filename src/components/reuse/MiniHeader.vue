<template>
  <div class="header">
    <div class="header-top">
      <div class="header-top-content">
        <!-- 小图标点缀 -->
        <span class="el-icon-user-solid" style="margin-right:5px"></span>
        <!-- 用户下拉 -->
        <el-col :span="12">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
                欢迎用户: {{$store.state.mobile}}
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-user">个人中心</el-dropdown-item>
              <el-dropdown-item icon="el-icon-setting">个人设置</el-dropdown-item>
              <div @click="out">
              <el-dropdown-item icon="el-icon-switch-button">退出登录</el-dropdown-item>
              </div>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "MiniHeader",
  methods:{
    out(){
      this.$router.replace({
        name:'user'
      })
      // 清除token
      localStorage.clear()
    }
  }
};
</script>

<style scoped>
.header-top {
  height: 50px;
  width: 100%;
  background-color: white;
  margin-bottom: 2px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 1px solid rgb(218, 210, 210);
}
.header-top .header-top-content {
  cursor: pointer;
  width: 300px;
  display: flex;
  align-items: center;
}
.header-top .header-top-content .top-icons {
  padding: 15px;
}
</style>