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
    <template v-if='item.id === 1'>
       <el-table-column label="序" min-width="40" align="center" prop="-"/>
    </template>
    <template v-else>
          <el-table-column prop='id' label="序" min-width="40" align="center" />
    </template>
    <el-table-column prop='id' label="序" min-width="40" align="center" />
    <el-table-column prop='knowledge' label="調整項目" min-width="100" align="center"  />
    <el-table-column prop='operate' label="動作" min-width="150" align="center"  />
    <el-table-column prop='content' label="內容" min-width="300" align="center"  />
    <el-table-column prop='account' label="帳戶" min-width="180" align="center"  />
    <el-table-column prop='time' label="時間" min-width="180" align="center"  />
    <el-table-column prop='ip' label="IP"  min-width="180" align="center"  />
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
    const fakeData = reactive({
      column: [
        {
          id: 1,
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
      fakeData
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
