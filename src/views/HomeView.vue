<template>
  <div class="home">

    <button class="job" @click="setID(1)">管理員</button>
    <button class="job" @click="setID(2)">客服</button>
    <button class="job" @click="setID(3)">班長</button>
    <button class="job" @click="setID(4)">直播</button>
    <button @click="goTestPage()">enter go</button>
    <el-tabs
      v-model="activeName"
      type="card"
      class="demo-tabs"
      @tab-click="handleClick"
    >
      <el-tab-pane label="User" name="first">User</el-tab-pane>
    </el-tabs>
    <header>
      <div class="inputItem">
        <h2>時間</h2>
        <div class="time">
          <el-date-picker
            v-model="requestData.StartTime"
            placeholder="年 / 月 / 日"
            :style="{ 'max-width': '150px', height: '40px' }"
          />
          <div class="lineBox"><span></span></div>
          <el-date-picker
            v-model="requestData.EndTime"
            type="date"
            placeholder="年 / 月 / 日"
            size="big"
            :style="{ 'max-width': '150px', height: '40px' }"
          />
        </div>
      </div>
      <div class="inputItem">
        <h2>動作</h2>
        <el-select v-model="requestData.SystemActionType" size="big">
          <el-option label="全部" :value="-1" />
          <el-option label="新增" :value="0" />
          <el-option label="修改" :value="1" />
          <el-option label="刪除" :value="2" />
        </el-select>
      </div>
      <div class="inputItem">
        <h2>內容關鍵字</h2>
        <el-input v-model="requestData.IP" size="big" placeholder="精準搜尋" />
      </div>
      <div class="inputItem">
        <h2>IP</h2>
        <el-input
          class="en"
          v-model="requestData.Content"
          placeholder="模糊搜尋"
          style="max-width: 150px"
        />
      </div>
      <div class="inputItem">
        <h2>後台帳號</h2>
        <div>
          <el-input
            v-model="requestData.Account"
            placeholder="模糊搜尋"
            style="max-width: 150px"
          />
          <el-button
            @click="getApi()"
            :icon="el - icon - search"
            class="btn"
            type="primary"
          ></el-button>
        </div>
      </div>
    </header>
    <div class="container">
      <el-table
        class="tabletr"
        :data="fakeData.column"
        border
        :header-cell-style="{
          background: 'lightgray',
          borderColor: 'black',
          'text-align': 'center',
          padding: '20px'
        }"
        :cell-style="{ borderColor: 'black' }"
        :style="{ 'min-width': '100%', 'font-size': '16px' }"
      >
        <el-table-column
          v-for="(col, index) in cols"
          :key="index"
          :prop="col.prop"
          :label="col.label"
          :min-width="col.width"
          :align="col.align"
        >
          <template v-slot="slotProps">
            <p
              v-if="slotProps.row[col.prop]"
              :row="slotProps.row"
              v-html="slotProps.row[col.prop]"
            ></p>
            <p v-else>-</p>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pag">
      <el-pagination
        v-model:currentPage="requestData.PageIndex"
        :page-sizes="[10, 20, 30]"
        layout=" sizes, prev, pager, next"
        :total="totalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
      <h2>共{{ totalCount }}條</h2>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { reactive, ref, onMounted } from 'vue'
import { fetchFakeApi } from '../../api/fakeApi'
import _ from 'lodash'
export default {
  name: 'HomeView',
  setup () {
    // function cellStyle ({ row, column, rowIndex, columnIndex }) {
    //   return 'customClass'
    // }
    const store = useStore()
    const router = useRouter()
    const timeNow = new Date(Date.now())
    const dateValue1 = timeNow.toDateString()
    console.log('date1', dateValue1)

    const weekOfdays = timeNow
    weekOfdays.setDate(timeNow.getDate() - 6)
    const dateValue2 = weekOfdays.toDateString()
    console.log('date2', dateValue2)
    const requestData = reactive({
      PageIndex: 1,
      PageSize: 10,
      StartTime: dateValue2,
      EndTime: dateValue1,
      SystemActionType: -1,
      IP: '',
      Content: '',
      Account: ''
    })
    const totalCount = ref(0)
    const cols = reactive([
      { prop: 'id', label: '序', width: '40', align: 'center' },
      { prop: 'knowledge', label: '調整項目', width: '100', align: 'center' },
      { prop: 'operate', label: '動作', width: '100', align: 'center' },
      { prop: 'content', label: '內容', width: '150', align: 'left' },
      { prop: 'account', label: '操作者', width: '100', align: 'center' },
      { prop: 'time', label: '時間', width: '100', align: 'center' },
      { prop: 'ip', label: 'IP', width: '100', align: 'center' }
    ])
    const fakeData = reactive({
      column: []
    })
    const pagLeng = ref(0) // total 長
    function getApi () {
      console.log('testData', requestData)
      fetchFakeApi().then((res) => {
        console.log(res.data.infos)
        fakeData.column = res.data.infos
        fakeData.column.reverse()
        totalCount.value = res.data.totalCount
        pagLeng.value = fakeData.column.length
        const firstNum = res.data.infos[0]
        firstNum.createTime = 'testStateA'
        console.log(firstNum)
        store.commit('SETDATA', firstNum)
      })
    }

    function getApi2 (num) {
      fetchFakeApi().then((res) => {
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
      requestData.PageSize = size
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
    onMounted(() => {
      getApi()
    })
    function goTestPage () {
      router.push('./testPageTH')
    }
    function setID (value) {
      console.log(value)
      localStorage.setItem('agentID', JSON.stringify(value))
    }
    // lodash
    const range = _.range(1, 3) // [1, 2]
    const random = _.random(0, 5) // an integer between 0 and 5
    console.log(range)
    console.log(random)
    return {
      fakeData,
      cols,
      getApi,
      fetchFakeApi,
      pagLeng,
      handleCurrentChange,
      handleSizeChange,
      requestData,
      totalCount,
      dateValue1,
      dateValue2,
      goTestPage,
      setID,
      store
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  padding: 60px;
}
header {
  padding: 30px;
  background: lightgray;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 20px;

  .inputItem {
    margin-right: 60px;
    .time {
      display: flex;
      flex-wrap: wrap;
    }
    h2 {
      text-align: left;
      margin: 5px 0px;
    }
    .btn {
      margin-left: 10px;
      transform: translateY(-2px);
    }
    .en {
      transform: translateY(2px);
    }
  }
  .lineBox {
    display: flex;
    align-items: center;
  }
  span {
    display: inline-block;
    width: 10px;
    height: 3px;
    opacity: 0.7;
    background-color: gray;
    margin: 0px 5px;
  }
  // .btn{
  // align-self: end;
  // }
}
.tabletr {
  border: 1px solid black;
}

.container {
  margin-top: 20px;
  // overflow-x: auto; ele ui 原本就有
}
:deep(.appd) {
  color: red;
}
:deep(.appX) {
  color: blue;
}
.pag {
  display: flex;
  justify-content: space-between;
}
// :deep(.el-input__wrapper){
// padding: 3px 11px;
// }

:deep(.el-input__inner) {
  font-size: 16px;
  height: 40px;
  // border-radius: 50px;
}
:deep(.el-input .el-input__icon) {
  position: absolute;
  right: 10px;
  top: 8px;
}
// .el-table{
//   --el-table-border-color: black;
// }
.job{
  width: 100px;
  height: 50px;
}
</style>
