<template>
  <div>
    <!-- 页面标题 -->
    <div class="header-title">
      <span>{{ bigtitle }}</span>
      <span>/</span>
      <span>{{ smalltitle }}</span>
      <h2>{{ smalltitle }}</h2>

      <el-input
        v-model="searchs"
        placeholder="请输入角色名称"
        style="width: 200px"
        suffix-icon="el-icon-search"
        @change="search"
      ></el-input>
    </div>
    <!-- 页面内容 -->
    <div class="content">
      <div class="content-main">
        <!-- 列表区域 -->
        <transition
          appear
          name="animate__animated animate__bounce"
          enter-active-class="animate__fadeIn"
        >
          <div class="content-main-list">
            <el-table
              :data="listArray"
              style="width: 100%; display: flex; flex-direction: column"
            >
              <el-table-column label="日期" align="left">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{
                    scope.row.create_time
                  }}</span>
                </template>
              </el-table-column>

              <el-table-column label="角色" width="400">
                <template slot-scope="scope">
                  <span size="medium">{{ scope.row.username }}</span>
                </template>
              </el-table-column>

              <el-table-column label="手机号" width="350">
                <template slot-scope="scope">
                  <span size="medium">{{ scope.row.mobile }}</span>
                </template>
              </el-table-column>

              <el-table-column label="操作" width="142">
                <template slot-scope="scope">
                  <el-button size="mini" @click="handleEdit(scope.row.id)"
                    >编辑</el-button
                  >
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.row.id)"
                    >删除</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </div>
        </transition>

        <!-- 页码区域 -->
        <el-pagination
          background
          layout="prev, pager, next"
          :total="n * 10"
          @current-change="changePage"
        >
        </el-pagination>

        <!-- 下方添加按钮 -->
        <div class="content-main-add" @click="handleAdd">
          <span>+</span>
          <span>添加</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入封装请求函数
import { userListRequest, deleteRequest } from "../requestFn";

export default {
  name: "List",
  props: ["smalltitle", "bigtitle"],
  data() {
    return {
      listArray: [],
      searchs: "",
      standby: [],
      n: "",
    };
  },
  methods: {
    // 封装转换日期格式函数
    formatDate(){
      // 转换日期格式
        this.listArray.forEach((item) => {
          item.create_time = new Date(
            parseInt(item.create_time)
          ).toLocaleDateString();
        });
    },
    // 查找
    search() {
      // 初始化
      this.listArray = this.$store.state.array;
      if(this.searchs == ""){
        this.changePage(1)
      }else{
        // 获取人员列表(形参:页码,条数)
        userListRequest(1, 5).then((res) => {
          this.listArray = res.data.users;
          this.$store.state.array = res.data.users;
          // 转换日期格式
          this.formatDate()
          // 过滤查询
          this.listArray = this.listArray.filter((item) => {
            return item.username.indexOf(this.searchs) != -1;
          });
          if (this.listArray.length / 5 == 1) {
            this.n = this.listArray.length / 5;
          } else {
            this.n = parseInt(this.listArray.length / 5) + 1;
          }
        });
      }
    },
    // 删除
    handleDelete(id) {
      deleteRequest(id).then((res) => {
        alert(res.meta.msg);
        // 获取人员列表
        this.changePage(1);
      });
    },
    // 增加-跳转到子组件
    handleAdd() {
      this.$store.state.show = false;
      this.$router.push({
        name: "add",
      });
    },
    // 编辑-跳转到子组件
    handleEdit(id) {
      this.$router.push({
        name: "edit",
        query: {
          id: id,
        },
      });
    },
    // 切换页码
    changePage(number) {
      //获取当前页码的人员列表
      userListRequest(number, 5).then((res) => {
        this.listArray = res.data.users;
        this.$store.state.array = res.data.users;
        if (res.data.total / 5 == 1) {
          this.n = res.data.total / 5;
        } else {
          this.n = parseInt(res.data.total / 5) + 1;
        }
        // 转换日期
        this.formatDate()
      });
    },

  },
  mounted() {
    //获取人员列表(形参:页码,条数)
    userListRequest(1, 5).then((res) => {
      this.listArray = res.data.users;
      this.$store.state.array = res.data.users;
      if (res.data.total / 5 == 1) {
        this.n = res.data.total / 5;
      } else {
        this.n = parseInt(res.data.total / 5) + 1;
      }
      // 转换日期格式
      this.listArray.forEach((item) => {
        item.create_time = new Date(
          parseInt(item.create_time)
        ).toLocaleDateString();
      });
    });
  },
};
</script>

<style scoped>
/* 页码区域 */
.el-pagination {
  margin: 15px;
}
/* title */
.header-t itle {
  width: 100%;
  background-color: white;
  padding-left: 25px;
  margin-bottom: 20px;
}
.header-title span {
  display: inline-block;
  margin: 10px 3px;
}
.header-title span:nth-child(1) {
  margin-left: 0;
  color: silver;
}
.header-title span:nth-child(2) {
  color: silver;
}
.header-title span:nth-child(3) {
  color: black;
}
.header-title h2 {
  font-weight: bold;
  margin-top: 2px;
}

/* 页面内容 */
.content {
  width: 1250px;
  margin: 0 auto;
}
.content-main {
  width: 100%;
}
.content-main-top {
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content-main-top .title {
  flex-grow: 1;
  color: black;
  font-size: 14px;
  justify-self: start;
}
.content-main-top .input-with-select {
  width: 300px;
}

.content-main-list ul {
  list-style: none;
  padding: 0;
}
.content-main-list ul li {
  display: flex;
  justify-content: space-between;
  padding: 10px 35px;
  border-bottom: 1px solid rgb(204, 203, 203, 0.3);
}
.content-main-list ul li img {
  width: 48px;
  height: 48px;
  margin-right: 15px;
}
/* 左侧区域 */
.list-view {
  display: flex;
  align-items: center;
}
.list-view .text {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.list-view .text span:nth-child(1) {
  color: black;
  font-weight: 500;
}
.list-view .text span:nth-child(2) {
  color: rgb(140, 140, 140);
  font-size: 13px;
}
/* 右侧区域区域 */
.list-datas {
  display: flex;
  align-items: center;
}
.list-datas .name-time {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 25px;
}
.list-datas .name-time span {
  color: rgb(140, 140, 140);
  font-size: 13px;
}

/* 添加 */
.content-main-add {
  box-sizing: border-box;
  width: 100%;
  border: 1px solid silver;
  clear: both;
  text-align: center;
  padding: 6px;
  cursor: pointer;
  font-size: 15px;

  transition: 0.25s;
}
.content-main-add span:nth-child(1) {
  font-size: 20px;
  display: inline-block;
  margin-right: 5px;
}
.content-main-add:hover {
  margin-top: 5px;
  box-shadow: 0 1px 20px rgb(163, 160, 160);
}
</style>