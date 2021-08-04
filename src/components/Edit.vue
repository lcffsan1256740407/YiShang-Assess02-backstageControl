<template>
  <div class="add">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <span class="cancel el-icon-close" @click="cancel"></span>
      <h3>用户编辑</h3>

      <el-form-item label="角色名称" prop="mobile">
        <el-input v-model="ruleForm.name" disabled></el-input>
      </el-form-item>

      <el-form-item label="手机号码" prop="mobile">
        <el-input v-model="ruleForm.mobile"></el-input>
      </el-form-item>

      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即修改</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { editRequest, lookRequest } from "../requestFn";

export default {
  name: "Edit",
  data() {
    // 手机号验证
    const checkPhone = (rules, value, callback) => {
      const pattern = /^((0\d{2,3}-\d{7,8})|(1[3576849]\d{9}))$/;
      if (value !== "") {
        if (!pattern.test(value)) {
          callback(new Error("请输入正确的电话"));
        } else {
          callback();
        }
      } else {
        callback(new Error("请输入电话"));
      }
    };
    // 邮箱验证
    const checkEmail = (rules, value, callback) => {
      const pattern = /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/;
      if (value !== "") {
        if (!pattern.test(value)) {
          callback(new Error("请输入正确的邮箱"));
        } else {
          callback();
        }
      }
    };
    return {
      ruleForm: {
        mobile: "",
        email: "",
        name: "",
      },
      rules: {
        mobile: [
          { required: true, validator:checkPhone , trigger: "blur" },
        ],
        email: [
          { required: true, validator:checkEmail , trigger: "blur" },
        ]
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 接口:根据用户id编辑信息-----------------------
          editRequest(
            this.$route.query.id,
            this.ruleForm.mobile,
            this.ruleForm.email
          ).then((res) => {
            if (res.meta.status == 200) {
              this.cancel();
            }
          });
        } else {
          return false;
        }
      });
    },
    cancel() {
      // 跳转路由回到用户列表页面中去
      this.$router.replace({
        name: "list",
        query: {
          bigtitle: "用户列表",
          smalltitle: "列表查询",
        },
      });
    },
  },
  mounted() {
    // 接口:根据用户id查询信息-------获取数据,提前渲染
    lookRequest(this.$route.query.id).then((res) => {
      this.ruleForm.mobile = res.data.mobile;
      this.ruleForm.email = res.data.email;
      this.ruleForm.name = res.data.username;
    });
  },
};
</script>

<style scoped>
.demo-ruleForm {
  width: 500px;
  margin: 100px auto;
  padding: 20px;
  box-shadow: 0 0 10px silver;
  display: flex;
  flex-direction: column;

  position: relative;
}
.demo-ruleForm h3 {
  border-bottom: 1px solid silver;
  padding-bottom: 15px;
}
.cancel {
  font-size: 25px;
  position: absolute;
  right: 20px;
  top: 15px;
  cursor: pointer;
}
</style>