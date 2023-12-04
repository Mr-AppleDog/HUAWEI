<template>
<div>
  <!--走马灯-->
  <div class="carousel">
  <el-carousel :interval="5000"  arrow="hover"  :height="bannerHeight+'px'" type="card" class="image">
    <el-carousel-item v-for="item in imgList" :key="item.id" >
      <router-link :to="{path:'/goods',query:{ id: item.id}}">
        <img ref="image" :src="item.idView" alt="" @load="imgLoad" style="width: 100%;">
      </router-link>
    </el-carousel-item>
  </el-carousel>
  </div>
  <!--推荐系列-->
  <div class="series">
    <div class="title">
      <h1>哪个系列最合适你？</h1>
    </div>
    <div class="card">
      <el-row type="flex" justify="center" :gutter="20">
        <el-col :span="6"  v-for="(item, index) in seriesList" :key="imgList.id">
          <el-card :body-style="{ padding: '0px' }" shadow="hover"  style="border-radius: 25px;">
            <div class="card-title">
              <span>{{item.cardTitle}}</span>
            </div>
            <div>
              <img :src="item.idView" class="image">
                <div class="donghua">
                  <a @click="goAnchor(index)">
                    <el-icon class="el-icon-arrow-down"></el-icon>
                  </a>
                </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
  <!--Mate 系列-->
  <div class="PhoneData" v-for="(item,index) in xSeries" :key="index" :id="index">
    <div class="bichromatic-title-component">{{ item.mainTitle }}</div>
    <div class="bichromatic-title-component-sub"> {{ item.subTitle }}</div>
    <div class="plp-product-series-container">
      <div class="card-row-list-layout_one-four">
        <div class="layout-one-img">
          <div class="layout-one-img-left">
            <router-link :to="{path:'/goods',query:{ id: item.id}}">
              <img :src="item.oneImgLeft" style="width:100%" height="100%">
            </router-link>
          </div>
          <div class="layout-one-img-center">
            <router-link :to="{path:'/goods',query:{ id: item.id}}">
              <img :src="item.oneImgCenter" style="width:100%" height="100%">
            </router-link>
          </div>
          <div class="layout-one-img-top">
            <router-link :to="{path:'/goods',query:{ id: item.id}}">
              <img :src="item.oneImgTop" style="width:100% ;height:47%" >
            </router-link>
          </div>
          <div class="layout-one-img-bottom">
            <router-link :to="{path:'/goods',query:{ id: item.id}}">
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
          <router-link :to="{path:'/goods',query:{ id: item.id}}">
            <img :src="item.idView">
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
                <router-link :to="{path:'/goods',query:{ id: item.id}}">
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
      <!--三个列表-->
      <div class="card-row-list-layout_four" v-if="item.xList.length==3">
        <el-row  justify="space-between" type="flex" :gutter="20">
          <el-col :span="6" v-for="(item, index) in item.xList">
            <template>
              <el-card :body-style="{ padding: '20px' }" shadow="hover" style="border-radius: 25px;">
                <router-link :to="{path:'/goods',query:{ id: item.id}}">
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
      <!--4个列表-->
      <div class="card-row-list-layout_four" v-if="item.xList.length==4">
        <el-row  justify="center" type="flex" :gutter="20">
          <el-col :span="6" v-for="(item, index) in item.xList">
            <template>
              <el-card :body-style="{ padding: '0px' }" shadow="hover" style="border-radius: 25px;">
                <router-link :to="{path:'/goods',query:{ id: item.id}}">
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
  name: "Phone",
  data(){
    return {
      bannerHeight:"",
      imgList: [
        {id:0,idView:require("@/assets/img/phone/Carousel/mate60-pro-plus-highlight1.jpg")},
        {id:1,idView:require("@/assets/img/phone/Carousel/2.jpg")},
        {id:2,idView:require("@/assets/img/phone/Carousel/x5-highlight-banner.jpg")},
      ],
      seriesList:[
        {id:0,cardTitle:'Mate 系列',idView:require("@/assets/img/phone/series/nav-2.jpg")},
        {id:1,cardTitle:'P 系列',idView:require("@/assets/img/phone/series/nav-p-series.jpg")},
        {id:2,cardTitle:'nova 系列',idView:require("@/assets/img/phone/series/nav-nova-series-v2.jpg")},
        {id:3,cardTitle:'Pocket 系列',idView:require("@/assets/img/phone/series/nav-pocket-series.jpg")},
        {id:4,cardTitle:'畅享系列',idView:require("@/assets/img/phone/series/nav-changxiang-series.jpg")},
      ],
      xSeries:[
        {
          id:'1301',
          mainTitle:'Mate 系列',
          subTitle:'',
          oneImgLeft:require('@/assets/img/phone/Mate/1.jpg'),
          oneImgCenter:require('@/assets/img/phone/Mate/4.jpg'),
          oneImgTop:require('@/assets/img/phone/Mate/2.jpg'),
          oneImgBottom:require('@/assets/img/phone/Mate/3.jpg'),
          oneInfoTitle:'HUAWEI Mate 60 Pro',
          oneInfoPrice:'￥6499 起',
          oneInfoSize:'',
          xList:[
            {id:1302,cardTitle:'HUAWEI Mate 60',price:'￥7999起',idView:require("@/assets/img/phone/Mate/mate60.png")},
            {id:1303,cardTitle:'HUAWEI Mate 60 RS',price:'￥7999起',idView:require("@/assets/img/phone/Mate/mate60-rs-ultimate-design.jpg")},
            {id:1304,cardTitle:'HUAWEI Mate X5',price:'￥7999起',idView:require("@/assets/img/phone/Mate/shlef-x5.jpg")},
            {id:1305,cardTitle:'HUAWEI Mate 60 Pro+',price:'￥7999起',idView:require("@/assets/img/phone/Mate/mate60-pro-plus-small.jpg")},
          ],
        },
        {
          id:'1401',
          mainTitle:'P 系列',
          subTitle:'',
          oneImgLeft:require('@/assets/img/phone/P/p60-pro-crad-1.jpg'),
          oneImgCenter:require('@/assets/img/phone/P/p60-pro-card-2.jpg'),
          oneImgTop:require('@/assets/img/phone/P/p60-pro-crad-3.jpg'),
          oneImgBottom:require('@/assets/img/phone/P/p60-pro-crad-4.jpg'),
          oneInfoTitle:'HUAWEI P60 Pro',
          oneInfoPrice:'￥6988 起',
          oneInfoSize:'11.5 英寸',
          xList:[
            {id:1402,cardTitle:'HUAWEI P60 Art',price:'￥8988起',idView:require("@/assets/img/phone/P/p60-art.png")},
            {id:1403,cardTitle:'HUAWEI P60',price:'￥4988起',idView:require("@/assets/img/phone/P/p60.png")},
            {id:1404,cardTitle:'HUAWEI P50 Pocket',price:'￥8988起',idView:require("@/assets/img/phone/P/p50-pocket.png")},
            {id:1405,cardTitle:'HUAWEI P50 Pro',price:'￥4988起',idView:require("@/assets/img/phone/P/p50-pro.jpg")},
          ],
        },
        {
          id:'1601',
          mainTitle:'nova 系列',
          subTitle:'',
          oneImgLeft:require('@/assets/img/phone/Nova/6-1@2x.jpg'),
          oneImgCenter:require('@/assets/img/phone/Nova/6-2@2x.jpg'),
          oneImgTop:require('@/assets/img/phone/Nova/6-3@2x.jpg'),
          oneImgBottom:require('@/assets/img/phone/Nova/6-4@2x.jpg'),
          oneInfoTitle:'HUAWEI nova 11 Ultra ',
          oneInfoPrice:'￥4499 起',
          oneInfoSize:'',
          xList:[
            {id:1602,cardTitle:'HUAWEI nova 11 Pro',price:'￥3499起',idView:require("@/assets/img/phone/Nova/6-5@2x.jpg")},
            {id:1603,cardTitle:'HUAWEI nova 11 ',price:'￥2499起',idView:require("@/assets/img/phone/Nova/6-6@2x.jpg")},
            {id:1604,cardTitle:'HUAWEI nova11 SE',price:'￥1999起',idView:require("@/assets/img/phone/Nova/nova11-se.png")},
            {id:1605,cardTitle:'HUAWEI nova 10 Pro',price:'￥1999起',idView:require("@/assets/img/phone/Nova/6-7@2x.jpg")},
          ],
        },
        {
          id:'1501',
          mainTitle:'Pocket 系列',
          subTitle:'',
          oneImgLeft:require('@/assets/img/phone/Pocket/pocket-s-crad-1.jpg'),
          oneImgCenter:require('@/assets/img/phone/Pocket/pocket-s-crad-2.jpg'),
          oneImgTop:require('@/assets/img/phone/Pocket/pocket-s-crad-3.jpg'),
          oneImgBottom:require('@/assets/img/phone/Pocket/pocket-s-crad-4.jpg'),
          oneInfoTitle:'HUAWEI Pocket S',
          oneInfoPrice:'￥5988 起',
          oneInfoSize:'',
          xList:'',
        },
        {
          id:'1701',
          mainTitle:'畅享系列',
          subTitle:'',
          oneImgLeft:require('@/assets/img/phone/Changxiang/7-1@2x.jpg'),
          oneImgCenter:require('@/assets/img/phone/Changxiang/7-2@2x.jpg'),
          oneImgTop:require('@/assets/img/phone/Changxiang/7-3@2x.jpg'),
          oneImgBottom:require('@/assets/img/phone/Changxiang/7-4@2x.jpg'),
          oneInfoTitle:'华为畅享 60 Pro',
          oneInfoPrice:'￥1599 起',
          oneInfoSize:'',
          xList:[
            {id:1702,cardTitle:'华为畅享 60X',price:'￥1799起',idView:require("@/assets/img/phone/Changxiang/changxiang60x-big.jpg")},
            {id:1703,cardTitle:'华为畅享 60',price:'￥1299起',idView:require("@/assets/img/phone/Changxiang/3 (1).jpg")},
            {id:1704,cardTitle: '华为畅享 50z',price:'￥1199起',idView:require("@/assets/img/phone/Changxiang/4 (1).jpg")}
          ]
        },
      ],
    };
  },
  //为什么我在这个页面监听的方法，跳转到下个页面还在监听，
  // 这本就不合理。其实是因为我们没有在销毁组件时移除监听。window全局对象依然存在，所以仍然存在监听。
  mounted(){
    this.imgLoad();
    window.addEventListener('resize',this.imgLoad,false)
  },
  destroyed() {
    window.removeEventListener('resize',this.imgLoad,false)
  },
  methods: {
    imgLoad(){
      this.$nextTick(()=>{
        this.bannerHeight=this.$refs.image[0].height;
        // console.log(this.$refs.image[0].height);
      })
    },
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

<style lang="less">
.PhoneData{
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
        box-sizing: border-box;
        .cardTitle{
          font-size: 20px;
          font-weight: bold;
          text-align: center;
        }
        .cardPrice{
          margin-top: 20px;
          font-size: 14px;
          font-weight: bold;
          text-align: center;
        }
        .bottom-clearfix{
          margin-top: 20px;
          margin-bottom: 10px;
          display: flex;
          justify-content: center;
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
.carousel{
  width: 100%;
  min-height: 400px;
}
.series{
  .title{
    margin-top: 60px;
    margin-bottom: 40px;
    height: 80px;
    display: flex;
    justify-content:center;
  }
  .card-title{
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card{
    width: 95%;
    margin: auto;
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
}

@keyframes myfirst{
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(15px);
  }
}


.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  margin: 0px 12px;
  float: right;
}

.image {
  width: 100%;
  display: block;
}
.butMore{
  color: #FFFFFF;
  background-color: black;
  padding: 5px 10px;
}
.butBuy{
  color: black;
  background-color: #FFFFFF;
  margin-left: 20px;
  padding: 5px 10px;
}

</style>
