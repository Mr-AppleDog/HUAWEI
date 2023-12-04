<template>
    <div class="hed">
      <div class="logo">MyStore</div>
      <div class="lie">
      <el-menu
          :router=true
          class="el-menu-demo" mode="horizontal"
          background-color="#F1F3F5"
          text-color="#000000"
          active-text-color="#ED165F"
          @select="handleSelect">
        <el-menu-item  index="/phone">手机</el-menu-item>
        <el-menu-item index="/computer">电脑</el-menu-item>
        <el-menu-item index="/pad">平板</el-menu-item>
      </el-menu>
      </div>
      <div class="but">
        <el-dropdown trigger="click">
            <span class="user">
              <i class="el-icon-user"></i>
            </span>
            <el-dropdown-menu class="iconlist">
              <el-dropdown-item class="dropdown" :divided="true "
                                v-for="item in aboutME"
                                :key="item.title"
                                v-show="item.token==(isToken=='1')?1:0" >
                  <router-link :to="item.url">{{item.title}}</router-link>
              </el-dropdown-item>
              <el-dropdown-item class="dropdown" :divided="true" v-show="(isToken=='1')" >
               <span @click="cleantoken" style="display: block;width: 80px;text-align: center">退出登录</span>
              </el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
        <span class="cart">
          <router-link to="/cart"><i class="el-icon-shopping-cart-2">
          </i></router-link>

        </span>
      </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  data() {
    return {
      input: '',
      showTip:false,
      isToken:window.localStorage.getItem('token'),
      aboutME:[
        {token:0,title:'登录', url:'/login'},
        {token:0,title:'注册', url:'/register'},
        {token:1,title:'个人信息', url:'/aboutme'},
        {token:1,title:'地址管理', url:'addressbook'},
        {token:1,title:'我的订单', url:'myorders'},
      ]
    };
  },
  methods: {
    cleantoken(){
      this.$store.commit('isToken',0),
      window.localStorage.clear()
      this.$router.push({
        path:'/login',
      })
      this.$message({
        type:"success",
        message:'成功退出！'
      })
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  watch:{}
}

</script>

<style scoped lang="less">

.user:hover{
  background-color: rgb(193,194,196);
}
.cart:hover{
  background-color: rgb(193,194,196);
}
.dropdown:hover{
  background-color: rgb(193,194,196);
  color: black;
}
.el-dropdown-item:hover :active{
  background-color: rgb(193,194,196);
}

.hed{
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  background: #F1F3F5;
  position: relative;
  .but{
    position: absolute;
    right: 0px;
    .user{
      padding: 15px;
      font-size: 30px;
    }
    .cart{
      padding: 15px;
      font-size: 30px;
    }
  }
}
.cart{
  a:active{
    color: black;
  }
}

.iconlist {
  .el-dropdown-menu__item{
    margin: 2px;
    padding: 0px;
  }
  .el-dropdown-menu__item--divided:before{
    margin:0px;
  }
  li {
    a{
      color: black;
      display: block;
      width: 80px;
      text-align: center;
      text-decoration: none;
    }
    a:active{
      color: black;
    }

  }
}
.logo{
  align-self: center;
  margin-right: 20px;
  color: #ED165F;
  font-family: TXWHZGBJT;
  font-size: larger;
}

</style>
