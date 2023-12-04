<template>
  <div>
    <!--首页大屏-->
    <div class="com-top-main">
      <div class="laptops-main-product-content" >
        <div class="laptops-main-product-title">{{laptopsMainProduct.title}}</div>
        <div class="laptops-main-product-description">{{ laptopsMainProduct.description }}</div>
        <div class="product-desc-price">{{laptopsMainProduct.price}}</div>
        <div class="laptops-main-product-button">
          <button class="butMore">查看详情</button>
          <button class="butBuy">购买</button>
        </div>
      </div>
      <router-link :to="{path:'/goods',query:{ id:laptopsMainProduct.id}}">
        <el-image :src="laptopsMainProduct.Comimgtop" style="width: 80vw;"></el-image>
      </router-link>
    </div>

    <!--合适推荐-->
    <div class="card-nav-component">
      <div class="card-nav-component-title">哪个系列最适合你？</div>
      <div class="card-nav-list is-centered">
        <el-row :gutter="30" type="flex" justify="center">
          <el-col :span="6" v-for="(item, index) in SeriesList" >
            <el-card :body-style="{ padding: '0px' }" shadow="hover"  style="border-radius: 25px;">
              <div class="card-nav-item_main-title">{{item.cardMainTitle}}</div>
              <div class="card-nav-item_sub-title">{{item.cardSubTitle}}</div>
              <img :src="item.idView" class="image">
              <div class="donghua">
                <a @click="goAnchor(index)">
                  <el-icon class="el-icon-arrow-down"></el-icon>
                </a>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>

    <!--MateBook X 系列-->
    <div class="computerData" v-for="(item,index) in xSeries" :id="index">
      <div class="bichromatic-title-component">{{ item.mainTitle }}</div>
      <div class="bichromatic-title-component-sub"> {{ item.subTitle }}</div>
      <div class="plp-product-series-container">
        <div class="card-row-list-layout_one-four">
          <div class="layout-one-img">
            <div class="layout-one-img-left">
              <router-link :to="{path:'/goods',query:{ id:item.id}}">
                <img :src="item.oneImgLeft" style="width:100%" height="100%">
              </router-link>
            </div>
            <div class="layout-one-img-center">
              <router-link :to="{path:'/goods',query:{ id:item.id}}">
                <img :src="item.oneImgCenter" style="width:100%" height="100%">
              </router-link>
            </div>
            <div class="layout-one-img-top">
              <router-link :to="{path:'/goods',query:{ id:item.id}}">
                <img :src="item.oneImgTop" style="width:100% ;height:47%" >
              </router-link>
            </div>
            <div class="layout-one-img-bottom">
              <router-link :to="{path:'/goods',query:{ id:item.id}}">
                <img :src="item.oneImgBottom" style="width:100% ;height:47%" >
              </router-link>
            </div>
          </div>
          <div class="layout-one-info">
            <div class="info-content">
              <div class="sizeText">{{item.oneInfoSize}}</div>
              <div class="info-title">{{item.oneInfoTitle}}</div>
              <div class="card-price "> {{item.oneInfoPrice}}</div>
            </div>
            <div class="card-btn-group">
              <button class="butMore">了解更多</button>
              <button class="butBuy">购买</button>
            </div>
          </div>
        </div>
        <!--一个列表-->
        <div class="card-row-list-layout_one" v-if="item.xList.length==1">
          <el-card shadow="hover" style="border-radius: 25px;" v-for="item in item.xList">
            <router-link :to="{path:'/goods',query:{ id:item.id}}">
              <img :src="item.idView" width="30%">
            </router-link>
            <div class="card-item-list">
              <div class="cardTitle">{{item.cardTitle}}</div>
              <div class="cardPrice" v-show="item.price!=null">{{item.price}}</div>
              <div class="bottom-clearfix">
                <el-button type="text" class="button">了解详情></el-button>
                <el-button type="text" class="button">购买</el-button>
              </div>
            </div>
          </el-card>
        </div>
        <!--两个列表-->
        <div class="card-row-list-layout_two" v-if="item.xList.length==2">
          <el-row  justify="center" type="flex" :gutter="20">
            <el-col :span="12" v-for="(item, index) in item.xList">
              <template>
                <el-card shadow="hover" style="border-radius: 25px;">
                  <router-link :to="{path:'/goods',query:{ id:item.id}}">
                    <img :src="item.idView" width="30%" >
                  </router-link>
                  <div class="card-item-list">
                    <div class="cardTitle">{{item.cardTitle}}</div>
                    <div class="cardPrice" v-show="item.price!=null">{{item.price}}</div>
                    <div class="bottom-clearfix">
                      <el-button type="text" class="button">了解详情></el-button>
                      <el-button type="text" class="button">购买</el-button>
                    </div>
                  </div>
                </el-card>
              </template>
            </el-col>
          </el-row>
        </div>
        <!--4个列表-->
        <div class="card-row-list-layout_four" v-if="item.xList.length==4">
          <el-row  justify="center" type="flex" :gutter="20">
            <el-col :span="6" v-for="(item, index) in item.xList">
              <template>
                <el-card :body-style="{ padding: '0px' }" shadow="hover" style="border-radius: 25px;">
                  <router-link :to="{path:'/goods',query:{ id:item.id}}">
                    <img :src="item.idView" class="image">
                  </router-link>
                  <div class="card-item-list">
                    <div class="cardTitle">{{item.cardTitle}}</div>
                    <div class="cardPrice" v-show="item.price!=null">{{item.price}}</div>
                    <div class="bottom-clearfix">
                      <el-button type="text" class="button">了解详情></el-button>
                      <el-button type="text" class="button">购买</el-button>
                    </div>
                  </div>
                </el-card>
              </template>
            </el-col>
          </el-row>
        </div>
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
  name: "Pad",
  data(){
    return{
      laptopsMainProduct:{//首页大图
        id:'6',
        title:'HUAWEI MatePad Pro 13.2 英寸',
        description:'以大见大',
        price:'￥5699 起',
        Comimgtop:require("@/assets/img/Pad/Carousel/kv-matepad-pro-13-2.jpg")
      },
      SeriesList:[//推荐系列
        {id:0,cardMainTitle:'HUAWEI MatePad Pro 系列',cardSubTitle:'专业创造力',idView:require("@/assets/img/Pad/Series/nav-matepad-pro-13-2.jpg")},
        {id:1,cardMainTitle:'HUAWEI MatePad Air 系列',cardSubTitle:'潮流生产力',idView:require("@/assets/img/Pad/Series/nav2.jpg")},
        {id:2,cardMainTitle:'HUAWEI MatePad 系列',cardSubTitle:'学习好拍档',idView:require("@/assets/img/Pad/Series/nav3.jpg")},
        {id:3,cardMainTitle: 'HUAWEI MatePad SE 系列',cardSubTitle:'娱乐多面手',idView:require("@/assets/img/Pad/Series/nav4.jpg")},
        {id:4,cardMainTitle: 'HUAWEI MatePad Paper',cardSubTitle:'沉浸读写体验',idView:require("@/assets/img/Pad/Series/nav5.jpg")},

      ],
      xSeries:[
        {
          id:'2301',
          mainTitle:'HUAWEI MatePad Pro 系列',
          subTitle:'致美设计，致强性能，致佳创作体验',
          oneImgLeft:require('@/assets/img/Pad/MatePadPro/matepad-pro-13-2-card1.jpg'),
          oneImgCenter:require('@/assets/img/Pad/MatePadPro/matepad-pro-13-2-card2.jpg'),
          oneImgTop:require('@/assets/img/Pad/MatePadPro/matepad-pro-13-2-card3.jpg'),
          oneImgBottom:require('@/assets/img/Pad/MatePadPro/matepad-pro-13-2-card4.jpg'),
          oneInfoTitle:'HUAWEI MatePad Pro 13.2 英寸',
          oneInfoPrice:'￥5699 起',
          oneInfoSize:'13.2 英寸',
          xList:[
            {id:2302,cardTitle: 'HUAWEI MatePad Pro 12.6 英寸',price:'￥4699 起',idView:require('@/assets/img/Pad/MatePadPro/huawei-matepad-pro-12-6-id.jpg')},
            {id:2303,cardTitle: 'HUAWEI MatePad Pro 11 英寸',price:'￥3499 起',idView:require('@/assets/img/Pad/MatePadPro/matepad-pro-id.jpg')},
          ],
        },
        {
          id:'2401',
          mainTitle:'HUAWEI MatePad Air 系列',
          subTitle:'轻装上阵，轻松胜任',
          oneImgLeft:require('@/assets/img/Pad/MatePadAir/matepad-air-card1.jpg'),
          oneImgCenter:require('@/assets/img/Pad/MatePadAir/matepad-air-card2.jpg'),
          oneImgTop:require('@/assets/img/Pad/MatePadAir/matepad-air-card3.jpg'),
          oneImgBottom:require('@/assets/img/Pad/MatePadAir/matepad-air-card4.jpg'),
          oneInfoTitle:'HUAWEI MatePad Air',
          oneInfoPrice:'￥2699 起',
          oneInfoSize:'11.5 英寸',
          xList:'',
        },
        {
          id:"2501",
          mainTitle:'HUAWEI MatePad 系列',
          subTitle:'学习好伙伴，办公好搭档',
          oneImgLeft:require('@/assets/img/Pad/MatePad/matepad-card1.jpg'),
          oneImgCenter:require('@/assets/img/Pad/MatePad/matepad-card2.jpg'),
          oneImgTop:require('@/assets/img/Pad/MatePad/matepad-card3.jpg'),
          oneImgBottom:require('@/assets/img/Pad/MatePad/matepad-card4.jpg'),
          oneInfoTitle:'HUAWEI MatePad 11 英寸 2023 款',
          oneInfoPrice:'￥1999 起',
          oneInfoSize:'11 英寸',
          xList:[
            {id:2502,cardTitle: 'HUAWEI MatePad 2023 款',price:'￥1699 起',idView:require("@/assets/img/Pad/MatePad/matepad-11-5-inch.jpg")},
            {id:2503,cardTitle: 'HUAWEI MatePad',price:null,idView:require("@/assets/img/Pad/MatePad/matepad-2022.jpg")},
          ],
        },
        {
          id:'2501',
          mainTitle:'HUAWEI MatePad SE 系列',
          subTitle:'HUAWEI MatePad SE 系列',
          oneImgLeft:require('@/assets/img/Pad/MatePadSE/matepad-se-card1.jpg'),
          oneImgCenter:require('@/assets/img/Pad/MatePadSE/matepad-se-card2.jpg'),
          oneImgTop:require('@/assets/img/Pad/MatePadSE/matepad-se-card3.jpg'),
          oneImgBottom:require('@/assets/img/Pad/MatePadSE/matepad-se-card4.jpg'),
          oneInfoTitle:'HUAWEI MatePad SE ',
          oneInfoPrice:'￥1099 起',
          oneInfoSize:'10.4 英寸',
          xList:'',
        },
        {
          id:'2601',
          mainTitle:'HUAWEI MatePad Paper 系列',
          subTitle:'纸笔之间，卓然成篇',
          oneImgLeft:require('@/assets/img/Pad/MatePadPaper/matepad-paper-card1.jpg'),
          oneImgCenter:require('@/assets/img/Pad/MatePadPaper/matepad-paper-card2.jpg'),
          oneImgTop:require('@/assets/img/Pad/MatePadPaper/matepad-paper-card3.jpg'),
          oneImgBottom:require('@/assets/img/Pad/MatePadPaper/matepad-paper-card4.jpg'),
          oneInfoTitle:'HUAWEI MatePad Paper 墨水平板',
          oneInfoPrice:'￥2999 起',
          oneInfoSize:'10.3 英寸',
          xList:[
            {id:2602,cardTitle: 'HUAWEI MatePad Paper 墨水平板 典藏版',price:null,idView:require("@/assets/img/Pad/MatePadPaper/matepad-paper-id.jpg")},
          ],
        },
      ],
    }
  },
  methods:{
    goAnchor(selector){
      console.log(selector);
      document.getElementById(selector).scrollIntoView({
        behavior:'smooth',
        block:'start'
      })
    }
  }
}


</script>

<style scoped lang="less">
.com-top-main{
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .laptops-main-product-content{
    .laptops-main-product-title{
      margin-top: 60px;
      text-align: center;
      font-size: 40px
    }
    .laptops-main-product-description{
      margin-top:20px ;
      text-align: center;
      font-size: 20px;
    }
    .product-desc-price{
      text-align: center;
      margin-top:20px ;
      font-size: 20px;
    }
    .laptops-main-product-button{
      margin-top: 20px;
      display: flex;
      justify-content: center;
    }
  }
  img{
    margin: auto;
  }
}
.card-nav-component{
  width: 95%;
  margin: auto;
  .card-nav-component-title{
    margin-top: 100px;
    font-size: 48px;
    text-align: center;
    margin-bottom: 20px;
  }
  .card-nav-item_main-title{
    font-size: 15px;
    margin-top: 20px;
    text-align: center;
  }
  .card-nav-item_sub-title{
    font-size: 14px;
    margin-top: 20px;
    text-align: center;
  }
  img{
    margin-top: 20px;
  }
  .donghua{
    position: relative;
    bottom: 40px;
    left: 80%;
    width:35px;
    height: 35px;
    border-radius: 50%;
    background-color: #949491;
    display: flex;
    justify-content: center;
    align-items: center;
    .el-icon-arrow-down{
      color: #FCFCF9;
    }
  }
  .donghua:hover .el-icon-arrow-down{
    animation: myfirst 0.8s ease 1;
  }
}
@keyframes myfirst{
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(15px);
  }
}
.computerData{
  margin: 100px auto;
  .bichromatic-title-component{
    font-size: 48px;
    text-align: center;
  }
  .bichromatic-title-component-sub{
    font-size: 24px;
    text-align: center;
  }
  .plp-product-series-container{
    width: 95%;
    padding: 20px;
    margin: auto;
    .card-row-list-layout_one-four{
      padding: 20px;
      box-sizing: border-box;
      border-radius: 25px;
      width: 100%;
      background-color: #FFFFFF;
      .layout-one-img{
        display: flex;
        justify-content: space-between;
        position: relative;
        .layout-one-img-left{
          width: 41.5%;
          margin: 2px;
        }
        .layout-one-img-center{
          width: 28%;
          margin: 2px;
        }
        .layout-one-img-top{
          width: 29%;
          margin: 2px;
        }
        .layout-one-img-bottom{
          position: absolute;
          right: 0;
          bottom: 0;
          width: 29%;
          margin: 2px;
        }
      }
      .layout-one-info{
        display: flex;
        justify-content: space-between;
        .info-content{
          margin-top:20px;
          :first-child{
            font-size: 24px;
          }
          :nth-child(2){
            font-size: 40px;
            text-align: center;
          }
          :last-child{
            font-size: 24px;
          }
        };
        .card-btn-group{
          width: 20%;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
      }
    }
    .card-row-list-layout_four{
      margin-top: 20px;
      box-sizing: border-box;
      .card-item-list{
        padding: 20px;
        box-sizing: border-box;
        .cardTitle{
          font-size: 20px;
          text-align: center;
        }
        .cardPrice{
          margin-top: 20px;
          font-size: 12px;
          text-align: center;
        }
        .bottom-clearfix{
          margin-top: 20px;
          margin-bottom: 10px;
          display: flex;
          justify-content: space-around;
          .el-button--text{
            color: black;
          }
        }
      }
    }
    .card-row-list-layout_one{
      margin-top: 20px;
      .el-card{
        :first-child{
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
      }
    }
    .card-row-list-layout_two{
      margin-top: 20px;
      :first-child{
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
    }
  }
}
.card-item-list{
  height: 160px;
  display: flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
  .cardTitle{
    margin: 15px 0px 0px 0px;
  }
  .cardPrice{
    margin: 0px;
  }
  .bottom-clearfix{
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    .el-button--text{
      color: black;
    }
    button{
      margin-left: 20px;
    }
  }
}

</style>
