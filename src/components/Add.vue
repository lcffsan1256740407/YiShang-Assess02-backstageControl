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
      <h3>用户添加</h3>

      <el-form-item label="角色名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>

      <el-form-item label="角色密码" prop="psd">
        <el-input v-model="ruleForm.psd"></el-input>
      </el-form-item>

      <el-form-item label="手机号码" prop="mobile">
        <el-input v-model.number="ruleForm.mobile"></el-input>
      </el-form-item>

      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即添加</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addRequest } from "../requestFn";

export default {
  name: "Add",
  data() {
    // 手机号验证
    const checkPhone = (rules, value, callback) => {
      const pattern = /^((0\d{2,3}-\d{7,8})|(1[3576849]\d{9}))$/
      if (value !== '') {
        if (!pattern.test(value)) {
          callback(new Error('请输入正确的电话'))
        } else {
          callback()
        }
      } else {
        callback(new Error('请输入电话'))
      }
    }
    // 邮箱验证
    const checkEmail = (rules, value, callback) => {
      const pattern = /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/
      if (value !== '') {
        if (!pattern.test(value)) {
          callback(new Error('请输入正确的邮箱'))
        } else {
          callback()
        }
      }
    }
    return {
      ruleForm: {
        name: "",
        psd: "",
        mobile: "",
        email:''
      },
      ruleForm1: {
        username: "",
        password: "",
        mobile: "",
        email:''
      },
      rules: {
        name: [
          { required: true, message: "请输入角色名称", trigger: "blur" },
          { min: 3, max: 6, message: "长度在 3 到 6 个字符", trigger: "blur" },
        ],
        psd: [
          { required: true, message: "请输入角色密码", trigger: "blur" },
          {
            min: 3,
            max: 12,
            message: "长度在 3 到 12 个字符",
            trigger: "blur",
          },
        ],
        mobile: [
          { required: true, validator: checkPhone  , trigger: "blur" },
        ],
        email: [
          { trigger: "blur" , validator: checkEmail },
        ]
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.ruleForm1.username = this.ruleForm.name;
          this.ruleForm1.password = this.ruleForm.psd;
          this.ruleForm1.mobile = this.ruleForm.mobile;
          this.ruleForm1.email = this.ruleForm.email;
          // 发送添加请求
          addRequest(this.ruleForm1).then((res) => {
            if (res.meta.status != 400) {
              // 回到用户列表页面中去
              this.cancel();
            }
          });
        } else {
          console.log("请全部填写完成");
          return false;
        }
      });
    },
    cancel() {
      // 回到用户列表页面中去
      this.$router.replace({
        name: "list",
        query: {
          bigtitle: "用户列表",
          smalltitle: "列表查询",
        },
      });
    },
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