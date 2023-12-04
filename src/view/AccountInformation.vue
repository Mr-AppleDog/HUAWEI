<template>
    <div class="mainfor">
      <div class="inform">
        <el-form label-position="top" label-width="80px" :model="formLabelAlign">
          <el-form-item label="名字">
            <el-input v-model="formLabelAlign.Name"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="formLabelAlign.Email"></el-input>
          </el-form-item>
          <el-form-item label="上传图像">
           <el-upload
               class="avatar-uploader"
               action="https://jsonplaceholder.typicode.com/posts/"
               :show-file-list="false"
               :on-success="handleAvatarSuccess"
               :before-upload="beforeAvatarUpload">
             <img v-if="imageUrl" :src="imageUrl" class="avatar">
             <i v-else class="el-icon-plus avatar-uploader-icon"></i>
           </el-upload>
          </el-form-item>
          <el-form-item label="性别">
            <el-select v-model="formLabelAlign.Gender">
              <el-option label="男" value="male"></el-option>
              <el-option label="女" value="female"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="出生日期">
            <el-date-picker
                v-model="formLabelAlign.BirthDay"
                type="date"
                placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-button type="danger" round @click="save">保存</el-button>
        </el-form>
      </div>
    </div>
</template>
<script>
export default {
    name:'AccountInformation',
   data() {
      return {
        imageUrl: '',
        formLabelAlign: {
          Name: 'Mr·LU',
          Email:'784853792@qq.com',
          Gender:'男',
          BirthDay:'2002-03-22',
        }
      }
   },
   created(){
   },
   computed:{
   },
   methods:{
     save(){
       this.$message({
         type:"success",
         message:'保存成功'
       })
     },
     handleAvatarSuccess(res, file) {
       this.imageUrl = URL.createObjectURL(file.raw);
     },

     beforeAvatarUpload(file) {
       const isJPG = file.type === 'image/jpeg';
       const isLt2M = file.size / 1024 / 1024 < 2;

       if (!isJPG) {
         this.$message.error('上传头像图片只能是 JPG 格式!');
       }
       if (!isLt2M) {
         this.$message.error('上传头像图片大小不能超过 2MB!');
       }
       return isJPG && isLt2M;
     },
   },
}
</script>
<style scoped>
.mainfor{
  margin-bottom: 100px;
  border-radius: 15px;
  height: 800px;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 4.45px 1px rgba(0, 0, 0, 0.1);
}
.inform{
  margin: 0px 60px 50px 60px;
  padding: 30px;
  width: 30%;
}

.avatar-uploader{
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  width: 178px;
  height: 178px;
  position: relative;
  overflow: hidden;
}
.avatar-uploader:hover{
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
