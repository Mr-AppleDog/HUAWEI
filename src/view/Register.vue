<template>
  <div class="register">
    <div class="logo">
      <el-image :src="require('@/assets/img/phone/Nova/6-1@2x.jpg')" style=" border-radius: 20%"></el-image>
    </div>
    <div class="form">
      <el-form ref="form" :model="form" label-width="80px"  >
        <el-form-item label="账号" prop="name">
          <el-input placeholder="请输入账号" v-model="form.Name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input placeholder="请输入密码" v-model="form.Password1" show-password></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input placeholder="请输入密码" v-model="form.Password2" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit(form)"  style="width: 200px">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data(){
    return{
      form: {
        Name: '',
        Email:'',
        Password1:'',
        Password2:'',
      },
    }
  },
  methods:{
    onSubmit(formData){
      let username=formData.Name;
      let pas1=formData.Password1;
      let pas2=formData.Password2;
      if(!username|!pas1|!pas2){
        this.$message.error('账号密码不能为空！')
      }else if(pas1!==pas2){
        this.$message.error('两次输入的密码不相同！')
      }else {
        this.$message({
          type:'success',
          message:'注册成功！',
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
.register{
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
