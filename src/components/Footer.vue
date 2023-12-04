<template>
<div class="footer">
  <div class="logo">
    MyStory
  </div>
  <div class="but">
    <el-link href="https://consumer.huawei.com/cn/phones/" target="_blank" type="primary">友情链接</el-link>
  </div>
  <div class="link">
    <el-link @click="open1" type="primary">
      法律声明
    </el-link>
  </div>
  <div class="link">
    <el-link @click="open2" type="primary">
      项目地址
    </el-link>
  </div>
</div>
</template>

<script>
export default {
  name: "Footer",
  data(){
    return{
    }
  },
  methods:{
    open1() {
      const h = this.$createElement;
      this.$notify({
        title: '法律声明',
        message: h('i', { style: 'color: teal'}, '此仅为个人练习项目，仅供学习参考，承担不起任何法律问题')
      });
    },
    open2(){
      const h = this.$createElement;
      this.$notify({
        title: 'Github地址',
        message: h('i', { style: 'color: teal'}, 'https://github.com/Mr-AppleDog/HUAWEI')
      });
    }
  }
}
</script>

<style scoped>
.footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo{
  margin: 20px 0px 0px 30px;
  font-family: TXWHZGBJT;
  font-size: larger;
  color: #ED165F;
}
.but{
  margin: 0px 100px;
}
.link{
  margin: 0px 100px;
}
</style>
