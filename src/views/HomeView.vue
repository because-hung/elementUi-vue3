<template>
  <div class="home">
 <el-tabs  v-model="activeName"
    type="card"
    class="demo-tabs"
    @tab-click="handleClick">
    <el-tab-pane label="User" name="first">User</el-tab-pane>
  </el-tabs>
    <header>
      <div class="page-item">
        <h2>date</h2>
        <el-date-picker
          v-model="value1"
          type="datetimerange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="['12:00:00']"
        >
        </el-date-picker>
      </div>
      <div class="page-item">
        <h2>date</h2>
        <el-input v-model="a" placeholder="Please input" />
      </div>
      <div class="page-item">
        <h2>work</h2>
        <el-select
          v-model="value"
          class="m-2"
          placeholder="Select"
          size="small"
        >
          <el-option label="全部" :value="1" />
          <el-option label="新增" :value="2" />
          <el-option label="修改" :value="3" />
          <el-option label="刪除" :value="4" />
        </el-select>
      </div>
       <div class="page-item">
        <h2>ip</h2>
        <el-input v-model="a" placeholder="Please input" />
      </div>
       <div class="page-item">
        <h2>content</h2>
        <el-input v-model="a" placeholder="Please input" />
      </div>
       <div class="page-item">
        <h2>account</h2>
        <el-input v-model="a" placeholder="Please input" />
      </div>
       <div class="page-item btn">
       <el-button :icon="el-icon-search" class="btn" type="primary"></el-button>
      </div>
    </header>
    <el-table class="tabletr" :data="fakeData.column" border style="width: 100%;" :header-cell-style="{background: 'lightgray',borderColor: 'black'}" :cell-style="{borderColor: 'black'}" v-for='(item, index) in fakeData.column' :key='index'>
      <el-table-column  v-for="(col, index) in cols"
        :key="index" :prop="col.prop"
        :label="col.label" :min-width="col.width" align="center">
      <template v-slot="slotProps">
        <p v-if='slotProps.row[col.prop]' :row='slotProps.row'>{{slotProps.row[col.prop]}}</p>
        <p v-else>-</p>
      </template>
      </el-table-column>
  </el-table>
  <ul v-for='(item, i) in fakeData.column' :key='i'>
    <li v-html='item.content'></li>
  </ul>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'HomeView',
  setup () {
    function cellStyle ({ row, column, rowIndex, columnIndex }) {
      return 'customClass'
    }
    const cols = reactive([
      { prop: 'id', label: '序', width: 40 },
      { prop: 'knowledge', label: '調整項目', width: 100 },
      { prop: 'operate', label: '動作', width: 150 },
      { prop: 'content', label: '內容', width: 300 },
      { prop: 'account', label: '帳戶', width: 180 },
      { prop: 'time', label: '時間', width: 180 },
      { prop: 'ip', label: 'IP', width: 180 }
    ])
    const fakeData = reactive({
      column: [
        {
          id: '1',
          content: '新增 aaaa 006 <br/> 新增 [000999]',
          operate: '新增',
          knowledge: '新增用戶',
          account: 'admin',
          time: '201314123',
          ip: '120.19.20.8'
        }
      ]
    })
    return {
      cellStyle,
      fakeData,
      cols
    }
  }
}
</script>
<style lang="scss" scoped>
.home{
  padding: 40px;

}
header{
  padding: 30px;
  background: lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  .page-item{
    margin: 0px 10px;
    display: flex;
    align-items: end;
    h2{
      margin: 0px 10px;
    }
  }
  .btn{
  align-self: end;
  }
}
.customClass {
background: #000;
}
.tabletr{
  border:1px solid black;
}
// .el-table{
//   --el-table-border-color: black;
// }

</style>
