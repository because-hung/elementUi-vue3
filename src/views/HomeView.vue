<template>
  <div class="home">
 <el-tabs  v-model="activeName"
    type="card"
    class="demo-tabs"
    @tab-click="handleClick">
    <el-tab-pane label="User" name="first">User</el-tab-pane>
  </el-tabs>
    <header>
      <div class="inputItem">
        <h2>時間</h2>
        <div class="time">
          <el-date-picker
        v-model="requestData.StartTime"
        placeholder="年 / 月 / 日"
        :size="size"
        style="max-width:150px"
      />
      <div class="lineBox"><span></span></div>
        <el-date-picker
        v-model="requestData.EndTime"
        type="date"
        placeholder="年 / 月 / 日"
        :default-time="defaultTime"
        style="max-width:150px"
      />
      </div>
      </div>
      <div class="inputItem">
        <h2>動作</h2>
        <el-select
          v-model="requestData.SystemActionType"
          size='big'
        >
          <el-option label="全部" :value="-1" />
          <el-option label="新增" :value="0" />
          <el-option label="修改" :value="1" />
          <el-option label="刪除" :value="2" />
        </el-select>
      </div>
       <div class="inputItem">
        <h2>IP</h2>
        <el-input v-model="requestData.IP" placeholder="精準搜尋" style="max-width:150px" />
      </div>
       <div class="inputItem">
        <h2>內容關鍵字</h2>
        <el-input v-model="requestData.Content" placeholder="模糊搜尋" style="max-width:150px" />
      </div>
       <div class="inputItem">
        <h2>後台帳號</h2>
        <el-input v-model="requestData.Account" placeholder="模糊搜尋" style="max-width:150px" />
      </div>
       <div class="inputItem btn">
       <el-button @click="getApi()" :icon="el-icon-search" class="btn" type="primary"></el-button>
      </div>
    </header>
    <div class="container">
    <el-table class="tabletr" :data="fakeData.column" border :header-cell-style="{background: 'lightgray',borderColor: 'black', 'text-align': 'center'}" :cell-style="{borderColor: 'black'} " :style="{ width:'100%', 'font-size': '16px'}">
      <el-table-column  v-for="(col, index) in cols"
        :key="index" :prop="col.prop"
        :label="col.label" :min-width="col.width" :align="col.align">
      <template v-slot="slotProps">
        <p v-if='slotProps.row[col.prop]' :row='slotProps.row'  v-html='slotProps.row[col.prop]' ></p>
        <p v-else>-</p>
      </template>
      </el-table-column>
  </el-table>
  </div>
  <div class="pag">
   <el-pagination
      v-model:currentPage="requestData.PageIndex"
      v-model:page-size="requestData.PageSize"
      :page-sizes="[3,4]"
      layout="sizes, prev, pager, next"
      :total="totalCount"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
    <h2>共{{ totalCount }}條</h2>
  </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { fetchFakeApi } from '../../api/fakeApi'
export default {
  name: 'HomeView',
  setup () {
    // function cellStyle ({ row, column, rowIndex, columnIndex }) {
    //   return 'customClass'
    // }
    const requestData = reactive({
      PageIndex: 1,
      PageSize: 10,
      StartTime: '',
      EndTime: '',
      SystemActionType: -1,
      IP: '',
      Content: '',
      Account: ''
    })
    const totalCount = ref(0)
    const cols = reactive([
      { prop: 'id', label: '序', width: '5%', align: 'center' },
      { prop: 'knowledge', label: '調整項目', width: '20%', align: 'center' },
      { prop: 'operate', label: '動作', width: '10%', align: 'center' },
      { prop: 'content', label: '內容', width: '25%', align: 'left' },
      { prop: 'account', label: '操作者', width: '20%', align: 'center' },
      { prop: 'time', label: '時間', width: '10%', align: 'center' },
      { prop: 'ip', label: 'IP', width: '10%', align: 'center' }
    ])
    const fakeData = reactive({
      column: [
      ]
    })
    const pagLeng = ref(0) // total 長
    function getApi () {
      console.log('testData', requestData)
      fetchFakeApi().then(res => {
        console.log(res.data.infos)
        fakeData.column = res.data.infos
        fakeData.column.reverse()
        totalCount.value = res.data.totalCount
        pagLeng.value = fakeData.column.length
      })
    }

    function getApi2 (num) {
      fetchFakeApi().then(res => {
        console.log(res.data.infos)
        const pageInt = requestData.PageIndex
        const totalC = num * pageInt
        const startC = totalC - num
        fakeData.column = res.data.infos.slice(startC, totalC) // 模擬 size 行為
        // fakeData.column.pop()
        totalCount.value = res.data.totalCount - 1
        pagLeng.value = fakeData.column.length
      })
    }
    // page

    function handleSizeChange (size) {
      console.log('testData', requestData)
      hadleGetFilesListApi(size)
      // getApi()
    }
    function handleCurrentChange () {
      console.log('testData', requestData)
      hadleGetFilesListApi(requestData.PageSize) // 模擬
      // getApi()
    }
    function hadleGetFilesListApi (num) {
      getApi2(num)
    }
    return {
      fakeData,
      cols,
      getApi,
      fetchFakeApi,
      pagLeng,
      handleCurrentChange,
      handleSizeChange,
      requestData,
      totalCount
    }
  }
}
</script>
<style lang="scss" scoped>
.home{
  padding: 60px;

}
header{
  padding: 30px;
  background: lightgray;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  .inputItem{
    margin: 10px;
    .time{
    display: flex;
  }
    h2{
      text-align: left;
      margin: 5px 0px;
    }
  }
  .lineBox{
    display: flex;
    align-items: center;
  }
  span{
    display: inline-block;
    width: 10px;
    height: 3px;
    opacity: 0.7;
    background-color: gray;
    margin: 0px 5px;
    }
  .btn{
  align-self: end;
  }
}
.tabletr{
  border:1px solid black;

}

.container{
  margin-top: 20px;
}
::v-deep .appd{
  color:red;
}
::v-deep .appX{
  color:blue;
}
.pag{
    display: flex;
    justify-content: space-between;
}

::v-deep .el-input__inner{
  font-size: 18px;
}
::v-deep .el-input .el-input__icon{
  position: absolute;
  right: 10px;
  top: 8px;
}
// .el-table{
//   --el-table-border-color: black;
// }

</style>
