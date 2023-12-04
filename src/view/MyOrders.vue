<template>
    <div class="myOrder">
      <div class="title">
      <span>我的订单</span>
      </div>
      <div class="order">
        <el-table
            :data="tableData"
            height="70vh"
            style="width: 100%">
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
              label="时间"
              prop="date"
              width="180">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">查看详情</el-button>
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
  name:'MyOrders',
  search: '',
  data(){
      return{
        tableData: [{
          img:require("@/assets/img/phone/P/p60.png"),
          date: '2016-05-04',
          name: 'HUAWEI P60 Pro',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          img:require("@/assets/img/phone/Mate/mate60.png"),
          date: '2016-05-04',
          name: 'HUAWEI Mate60',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          img:require("@/assets/img/phone/Nova/nova11-se.png"),
          date: '2016-05-01',
          name: 'HUAWEI nova 11 SE',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          img:require("@/assets/img/phone/Pocket/pocket-s-crad-3.jpg"),
          date: '2016-05-03',
          name: 'HUAWEI Pocket S',
          address: '上海市普陀区金沙江路 1516 弄'
        },{
          img:require("@/assets/img/Computer/MateBookE/matebook-e-2023-card1.jpg"),
          date: '2016-05-04',
          name: 'MateBook E',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          img:require("@/assets/img/Computer/MateBookD/d-15-2021-big.jpg"),
          date: '2016-05-04',
          name: 'MateBook D 15',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          img:require("@/assets/img/Computer/MateBookX/matebook-x.jpg"),
          date: '2016-05-04',
          name: 'MateBook X',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          img:require("@/assets/img/Computer/MateBook/matebook-14s.jpg"),
          date: '2016-05-04',
          name: 'MateBook 14s',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        ],
      }
    },
  methods:{
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
}
</script>
<style lang="less" scoped>
.myOrder{
  .title{
    display: flex;
    align-items: center;
    height: 50px;
    background-color: #FFFFFF;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 0px 0px 4.45px 1px rgba(0, 0, 0, 0.1);
    span{
      margin-left: 20px;
    }
  }
  .order{
    margin-top: 10px;
    padding: 20px;
    height: 80vh;
    background-color: #FFFFFF;
    border-radius: 25px;
  }
}

</style>
