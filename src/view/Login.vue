<template>
<div class="login">
  <div class="logo">
        <el-image :src="require('@/assets/img/phone/Nova/6-1@2x.jpg')" style=" border-radius: 20%"></el-image>
  </div>
  <div class="form">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="账号">
            <el-input placeholder="请输入账号" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input placeholder="请输入密码" v-model="form.password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" size="medium" style="width: 130px">登录</el-button>
            <el-button >返回</el-button>
          </el-form-item>
        </el-form>
  </div>
</div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        name: '',
        password:'',
      }
    }
  },
  mounted() {
  this.open();
  },
  methods: {
    onSubmit() {
      if(this.form.name==='Chen'&&this.form.password==='123456'){
        this.$message({
          message:'登录成功',
          type: 'success',
        });
        localStorage.setItem('token','1')

        this.$store.commit('isToken',1)
        this.$router.push({
          path:'/phone',
        })

      } else{
        this.$message.error({
          message:'账号或密码错误！'
        })
      }
    },
    open(){
      const h = this.$createElement;
      this.$notify({
        title: '提示',
        message: h('i', { style: 'color: teal'}, '测试体验账号密码：Chen | 123456'),
        offset: 100
      });
    }
  },
}
</script>

<style scoped lang="less">
.login{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;
  margin: 80px auto;
  padding: 20px;
  border-radius: 25px;
  width: 40%;
  box-shadow: 0px 0px 4.45px 3px rgba(0, 0, 0, 0.1);
  .logo{
    width: 70%;
    padding: 20px;
  }
  .form{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    padding: 20px;
    width: 80%;
    border-radius: 25px;
    box-shadow: 0px 0px 4.45px 3px rgba(0, 0, 0, 0.1);
  }
}
</style>
