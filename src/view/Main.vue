<template>
<div  class="index">
  <el-container>
    <el-header class="header-parent-class">
      <ComHeader/>
    </el-header>
    <el-main class="main-parent-class">
      <router-view></router-view>
    </el-main>
    <el-footer>
      <Footer />
    </el-footer>
  </el-container>
</div>
</template>

<script>
import ComHeader from "@/components/ComHeader";
import Footer from "@/components/Footer";
export default  {
  name: "Main",
  components:{
    ComHeader,
    Footer
  }
}
</script>

<style scoped>
body{
  margin: 0px;
  padding: 0px;
}
.el-header,.el-footer,.el-main {
  padding: 0;
  margin: 0;
  background-color: #F5F5F5;
}

.index {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.el-container {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
}
.el-main {
  height: 100%;
  overflow: hidden;
}
.el-footer{
  background-color: #FFFFFF;
}
</style>
