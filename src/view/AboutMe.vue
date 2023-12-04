<template>
<div class="aboutMe">
  <el-row type="flex" justify="space-between">
    <el-col :span="5" class="aboutList">
        <div class="userdata">
          <el-image :src="user.icon"></el-image>
          <span>{{user.userName}}</span>
        </div>
        <div>
          <el-menu
              default-active="2"
              :router="true"
              background-color="#FFFFFF"
              text-color="#000000"
              active-text-color="#ED165F"
              class="el-menu-vertical-demo">
            <el-menu-item v-for="item in MenuList" :key="item.Url" :index="item.Url">
              <i :class="item.icon"></i>
              <span slot="title">{{item.name}}</span>
            </el-menu-item>
          </el-menu>
        </div>
    </el-col>
    <el-col :span="18">
      <router-view></router-view>
    </el-col>
  </el-row>

</div>
</template>
<script>
export default {
  name: "AboutMe",
  data(){
    return{
      name:'',
      user:{
        icon:require("@/assets/img/phone/Nova/6-1@2x.jpg"),
        userName:'Chen'
      },
      MenuList:[
        {
          icon:'el-icon-s-custom',
          name:'个人信息',
          Url:'/accountinformation',
          title:'Account Information'
        },
        {
          icon:'el-icon-notebook-1',
          name:'地址管理',
          Url:'/addressbook',
          title:'Address Book'
        },
        {
          icon:'el-icon-share',
          name:'订单管理',
          Url:'/myorders',
          title:'My Orders'
        },
      ]
    }
  },
}
</script>

<style scoped lang="less">
.aboutMe{
  width: 90%;
  margin: auto;
  padding: 20px;
  .aboutList{
    background-color: #FFFFFF;
    height: 90vh;
    border-radius: 25px;
    .userdata{
      display: flex;
      flex-direction:column;
      justify-content: center;
      align-items:center;
      padding: 25px 25px 0px 25px;
      span{
       margin-top: 15px;
      }
    }

  }
}
</style>
