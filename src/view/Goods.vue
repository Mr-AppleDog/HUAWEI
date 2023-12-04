<template>
  <div>
    <div class="good">
      <div class="goodImg">
        <el-empty description="商品图片"></el-empty>
      </div>
      <div class="sku">
          <div class="sku-custom-title">XXXXXXXX商品</div>
        <div class="sku-price">￥9999</div>
        <el-divider></el-divider>
        <div class="sku-number">
          <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
        </div>
        <el-divider></el-divider>
        <div>
          <el-button @click="getId">现在购买</el-button>
          <el-button @click="getId">加入购物车</el-button>
        </div>
      </div>
    </div>
    <div class="details">
      <div class="details-title">商品详情</div>
      <div class="details-img">
        <el-image v-for="url in urls" :key="url" :src="url" lazy fit="fill"></el-image>
      </div>
    </div>
    <el-backtop>
      <div
          style="{
        height: 100%;
        width: 100%;
        background-color: #7B837C;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #FFFFFF;
        border-radius: 50%;
      }"
      >
        <i class="el-icon-arrow-up"></i>
      </div>

    </el-backtop>
  </div>
</template>

<script>
export default {
  name: "Goods",
  data(){
    return{
      num: 1,
      urls: [
        require('@/assets/img/goodlist/1.jpeg'),
        require('@/assets/img/goodlist/2.jpeg'),
        require('@/assets/img/goodlist/3.jpeg'),
        require('@/assets/img/goodlist/4.jpeg'),
        require('@/assets/img/goodlist/5.jpeg'),
        require('@/assets/img/goodlist/6.jpeg'),
        require('@/assets/img/goodlist/7.jpeg'),
      ]
    }
  },
  methods:{
    getId(){
     this.$message({
       type:"success",
       message:'获取商品id:'+this.$route.query.id+'  已选择'+this.num+'件商品'
     })
    }
}
}
</script>

<style scoped lang="less">
.good{
  width: 95%;
  margin:2px auto;
  border-radius: 25px;
  background-color: #FFFFFF;
  display: flex;
  justify-content: space-around;
  box-shadow: 0px 0px 4.45px 3px rgba(0, 0, 0, 0.1);
  .goodImg{
    width: 40%;
  }
  .sku{
    width: 40%;
    display: flex;
    flex-direction:column;
    .sku-custom-title{
      margin: 20px 0px;
    }
    .sku-price{
      color: #ca141d;
      font-size: 24px;
    }
    .sku-colour{
      display: flex;
      .sku-colour-data{
        .good-sku{
          width: 10%;
        }
      }
    }
  }
}
.details{
  width: 95%;
  margin: 50px auto;
  background-color: #F4F4F4;
  border-radius: 20px;
  box-shadow: 0px 0px 4.45px 3px rgba(0, 0, 0, 0.1);
  .details-title{
    padding: 15px;
  }
  .details-img{
    padding: 20px 0px;
    .el-image{
      display: block;
    }
  }
}
</style>
