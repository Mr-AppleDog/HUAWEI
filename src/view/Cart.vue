<template>
<div class="cart">
  <div class="cart-title">购物车</div>
  <div class="cart-table">
    <el-table
        :data="tableData"
        show-summary
        height="90vh"
        ref="multipleTable"
        :summary-method="getSummaries"
        @selection-change="handleSelectionChange"
        style="width: 100%">
      <el-table-column
          type="selection"
          :reserve-selection="true"
          width="55">
      </el-table-column>
      <el-table-column
          label="商品"
          width="200">
        <template slot-scope="scope">
          <el-image :src="scope.row.img" style="width: 70%"></el-image>
        </template>
      </el-table-column>
      <el-table-column
          label="名称"
          prop="name"
          width="180">
      </el-table-column>
      <el-table-column
          label="单价"
          prop="price"
          width="180">
        <template slot-scope="scope">
          ￥{{ scope.row.price}}
        </template>
      </el-table-column>
      <el-table-column
          label="数量"
          prop="number"
          width="200">
        <template slot-scope="scope">
          <el-input-number  size="small" v-model="scope.row.number" :min="1"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column
          label="小计"
          prop="sum"
          width="180">
        <template slot-scope="scope">
          ￥{{ (scope.row.price * scope.row.number) }}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</div>
</template>

<script>
export default {
  name: "Cart",
  data(){
    return{
      selNum:'0',
      totalPrice:'',
      tableData: [{
        id:'87',
        img:require("@/assets/img/phone/P/p60.png"),
        price: '4988',
        name: 'HUAWEI P60 Pro',
        address: '上海市普陀区金沙江路 1518 弄',
        number:1,
      }, {
        id:'86',
        img:require("@/assets/img/phone/Mate/mate60.png"),
        price: '5499',
        name: 'HUAWEI Mate60',
        address: '上海市普陀区金沙江路 1517 弄',
        number:1,
      }, {
        id:'85',
        img:require("@/assets/img/phone/Nova/nova11-se.png"),
        price: '1999',
        name: 'HUAWEI nova 11 SE',
        address: '上海市普陀区金沙江路 1519 弄',
        number:1,
      }, {
        id:'84',
        img:require("@/assets/img/phone/Pocket/pocket-s-crad-3.jpg"),
        price: '5988',
        name: 'HUAWEI Pocket S',
        address: '上海市普陀区金沙江路 1516 弄',
        number:1,
      },{
        id:'83',
        img:require("@/assets/img/Computer/MateBookE/matebook-e-2023-card1.jpg"),
        price: '7499',
        name: 'MateBook E',
        address: '上海市普陀区金沙江路 1518 弄',
        number:1,
      },{
        id:'82',
        img:require("@/assets/img/Computer/MateBookD/d-15-2021-big.jpg"),
        price: '4099',
        name: 'MateBook D 15',
        address: '上海市普陀区金沙江路 1518 弄',
        number:1,
      },{
        id:'81',
        img:require("@/assets/img/Computer/MateBookX/matebook-x.jpg"),
        price: '6999 ',
        name: 'MateBook X',
        address: '上海市普陀区金沙江路 1518 弄',
        number:1,
      },{
        id:'80',
        img:require("@/assets/img/Computer/MateBook/matebook-14s.jpg"),
        price: '6799 ',
        name: 'MateBook 14s',
        address: '上海市普陀区金沙江路 1518 弄',
        number:1,
      },
      ],
    }
  },
  methods:{
    handleSelectionChange(val) {
      var ids = [];
      this.selNum = val.length;
      for (var index in val) {
        ids.push(val[index].id);
      }
      for (var i in this.tableData) {
        if (ids.indexOf(this.tableData[i].id) != -1) {
          this.tableData[i].selected = 1;

        } else {
          this.tableData[i].selected = 0;
        }
      }
    },
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      if (columns.length > 0) {
        this.totalPrice = this.tableData
            .filter((item) => item.selected == 1)
            .map((row) => row.number * row.price)
            .reduce((total, num) => total + num, 0);
        this.selNum=this.tableData
            .filter((item) => item.selected == 1)
            .map((row) =>row.number)
            .reduce((total, num) => total + num, 0);

      } else {
        this.totalPrice = 0;
      };
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "合计";
          return;
        }
        if (index === 4) {
          sums[index] = "已选中商品" + this.selNum + "件";
        }
        if (index === 5) {
          sums[index] = '应付总额:'+this.totalPrice + "元";
          return;
        }
        if (index == 6) {
        }
      });
      return sums;
    },
    gotoAllDetail(){
      console.log("结算成功")
      this.$message({
        type:"success",
        message:"购买"+this.selNum+"件商品,"+"共花费"+this.totalPrice+"元"
      })
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
  watch: {
    totalPrice: function () {
      let _this = this;
      this.$nextTick(() => {
        let html = _this.$refs.multipleTable.$refs.footerWrapper
            .querySelector(".el-table__footer")
            .querySelectorAll("td")[6]
            .querySelector(".cell");
        html.innerHTML = `   <button
            type="button"
            class="el-button el-button--default el-button--mini cart-btn"
            style="color: #fff; background: #f56c6c;width:60px;height:50px;font-size:14px"
          >
          <span>结算</span>
          </button>`;
        html.onclick = () => {
          _this.gotoAllDetail();
        };
      });
    },
  },
}
</script>

<style scoped lang="less">
.cart{
  width: 90%;
  margin: 20px auto;
  .cart-title{
    height: 50px;
    padding: 0px 20px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    border-radius: 10px;
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.1);
  }
  .cart-table{
    margin: 20px 0px 150px 0px;
    padding: 20px;
    border-radius: 25px;
    background-color: #FFFFFF;
    box-shadow: 2px 2px 4.45px 1px rgba(0, 0, 0, 0.1);
  }
}
</style>
