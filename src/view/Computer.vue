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
        <el-row :gutter="20">
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
                    <div class="cardPrice">{{item.price}}</div>
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
                    <div class="cardPrice">{{item.price}}</div>
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
                      <div class="cardPrice">{{item.price}}</div>
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
  name: "Computer",
  data(){
    return{
      laptopsMainProduct:{//首页大图
        id:'7',
        title:'MateBook X Pro',
        description:'入目惊鸿',
        price:'￥9999 起',
        Comimgtop:require("@/assets/img/Computer/Carousel/matebook-x-pro-2023-13th-gen-core-kv.png")
      },
      SeriesList:[//推荐系列
        {id:0,cardMainTitle:'MateBook X 系列',cardSubTitle:'轻薄随行',idView:require("@/assets/img/Computer/Series/1 (1).jpg")},
        {id:1,cardMainTitle:'MateBook 系列',cardSubTitle:'高效创作',idView:require("@/assets/img/Computer/Series/2 (1).jpg")},
        {id:2,cardMainTitle:'MateBook E 系列',cardSubTitle:'多姿多彩',idView:require("@/assets/img/Computer/Series/3 (2).jpg")},
        {id:3,cardMainTitle:'MateBook D 系列',cardSubTitle:'大屏办公',idView:require("@/assets/img/Computer/Series/4 (2).jpg")},
      ],
      xSeries:[
        {
          id:'3301',
          mainTitle:'MateBook X 系列',
          subTitle:'出挑外型，优雅同行',
          oneImgLeft:require('@/assets/img/Computer/MateBookX/x-pro-card1.jpg'),
          oneImgCenter:require('@/assets/img/Computer/MateBookX/x-pro-card2.jpg'),
          oneImgTop:require('@/assets/img/Computer/MateBookX/x-pro-card3.jpg'),
          oneImgBottom:require('@/assets/img/Computer/MateBookX/x-pro-card4.jpg'),
          oneInfoTitle:'MateBook X Pro',
          oneInfoPrice:'￥9999 起',
          oneInfoSize:'14.2 英寸',
          xList:[
            {id:3302,cardTitle:'HUAWEI Mate 60',price:'￥6999 起',idView:require('@/assets/img/Computer/MateBookX/matebook-x.jpg')},
          ],
        },
        {
          id:'3401',
          mainTitle:'MateBook 系列',
          subTitle:'专业创作，效率拔群',
          oneImgLeft:require('@/assets/img/Computer/MateBook/matebook-series-1.jpg'),
          oneImgCenter:require('@/assets/img/Computer/MateBook/matebook-series-2.jpg'),
          oneImgTop:require('@/assets/img/Computer/MateBook/matebook-series-3.jpg'),
          oneImgBottom:require('@/assets/img/Computer/MateBook/matebook-series-4.jpg'),
          oneInfoTitle:'MateBook 16s',
          oneInfoPrice:'￥6999 起',
          oneInfoSize:'16 英寸',
          xList:[
            {id:3402,cardTitle:'MateBook 14S',price:'￥6799 起',idView:require('@/assets/img/Computer/MateBook/matebook-14s.jpg')},
            {id:3403,cardTitle:'MateBook 14',price:'￥5699 起',idView:require('@/assets/img/Computer/MateBook/matebook-14.jpg')},
            {id:3404,cardTitle:'MateBook 13S',price:'￥7299 起',idView:require('@/assets/img/Computer/MateBook/matebook-13s.jpg')},
            {id:3405,cardTitle:'MateBook 16',price:'￥5599 起',idView:require('@/assets/img/Computer/MateBook/matebook-16.png')},
          ],
        },
        {
          id:'3501',
          mainTitle:'MateBook E 系列',
          subTitle:'多变形态，多彩配色',
          oneImgLeft:require('@/assets/img/Computer/MateBookE/matebook-e-2023-card1.jpg'),
          oneImgCenter:require('@/assets/img/Computer/MateBookE/matebook-e-2023-card2.jpg'),
          oneImgTop:require('@/assets/img/Computer/MateBookE/matebook-e-2023-card3.jpg'),
          oneImgBottom:require('@/assets/img/Computer/MateBookE/matebook-e-2023-card4.jpg'),
          oneInfoTitle:'MateBook E',
          oneInfoPrice:'￥7499 起',
          oneInfoSize:'12.6 英寸',
          xList:[
            {id:3502,cardTitle:'MateBook E GO',price:'￥4299 起',idView:require("@/assets/img/Computer/MateBookE/matebook-e-go.jpg")},
          ],
        },
        {
          id:'3601',
          mainTitle:'MateBook D 系列',
          subTitle:'沉浸大屏，移动办公',
          oneImgLeft:require('@/assets/img/Computer/MateBookD/d14-card-1.jpg'),
          oneImgCenter:require('@/assets/img/Computer/MateBookD/d14-card-2.jpg'),
          oneImgTop:require('@/assets/img/Computer/MateBookD/d14-card-3.jpg'),
          oneImgBottom:require('@/assets/img/Computer/MateBookD/d14-card-4.jpg'),
          oneInfoTitle:'MateBook D 14',
          oneInfoPrice:'￥5099 起',
          oneInfoSize:'14 英寸',
          xList:[
            {id:3602,cardTitle:'MateBook D 16',price:'￥3999 起',idView:require("@/assets/img/Computer/MateBookD/big-matebook-d16-2024.jpg")},
            {id:3603,cardTitle:'MateBook D 15',price:'￥4099 起',idView:require("@/assets/img/Computer/MateBookD/d-15-2021-big.jpg")},
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
  margin: 50px;
  padding: 50px;
  .card-nav-component-title{
    font-size: 48px;
    text-align: center;
    margin-bottom: 20px;
  }
  .card-nav-item_main-title{
    font-size: 18px;
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

.butMore{
  color: #FFFFFF;
  background-color: black;
  padding: 5px 10px;
}
.butBuy{
  color: black;
  background-color: #FFFFFF;
  padding: 5px 10px;
}
</style>
