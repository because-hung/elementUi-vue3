<template>
<div class="timeTest" v-if='false'>
  <div class="cc" v-for='(time, i) in timeData.column' :key="i"> <!--日期當頭-->
    <h2>{{time}}</h2>
    <div class="card" v-for='(item, i) in fakeDataTW.column' :key="i">
      <template v-if='time === item.createTime'>  <!-- 比對日期  一樣才顯示-->
      <h3>{{item.id}}</h3>
      <h3>{{item.time}}</h3>
      </template>
    </div>
  </div>
</div>
<div class="timeTest2">
  <div class="cc" v-for='(time, i) in timeData.column' :key="i"> <!--日期當頭-->
    <h2>{{time}}</h2>
    <div class="card"  v-for='(item, i) in resultData.column[time]' :key="i" > <!-- 比對日期  一樣才顯示-->
      <h3>{{item.id}}</h3>
      <h3>{{item.time}}</h3>
    </div>
  </div>
</div>
<div class="fontTest">
  <font-awesome-icon :icon="[ 'fas', 'angles-left' ]" style="color: red" />
</div>
<div class="testScroll">
  <scrolldatepicker
        v-model="dd"
        :theme-color="'#CDCDCD'"
      />
      <h2>123{{dd}}</h2>
</div>
<div class="cardTest">
<div class="card">
   <div><img src="https://fakeimg.pl/100x100/"><h5>title</h5></div>
    <div><img src="https://fakeimg.pl/100x100/"><h5>title</h5></div>
</div>
<div class="card"><img src="https://fakeimg.pl/100x100/"><h5>title</h5></div>
<div class="card"><img src="https://fakeimg.pl/100x100/"><h5>title</h5></div>
</div>

  <div v-if='false' class="container">
    <div class="boxGroup">
      <div class="outter">
        <div class="box box1">A</div>
      </div>
      <div class="inner">
        <div class="box box2">B</div>
        <div class="box box3">C</div>
      </div>
    </div>
  </div>
  <div class="outner" v-if='false'>
    <div class="boxG boxGA"></div>
    <div class="boxG boxGB"></div>
  </div>
  <ul class="menu" v-if='false'>
    <li @click='getStatus(1)'>about<div  v-if='redStatus === 1' class="colbox"></div></li>
    <li @click='getStatus(2)'>home<div  v-if='redStatus === 2' class="colbox"></div></li>
    <li @click='getStatus(3)'>TTT<div  v-if='redStatus === 3' class="colbox"></div></li>
    <li @click='getStatus(4)'>CCC<div  v-if='redStatus === 4' class="colbox"></div></li>
  </ul>
   <ul class="menu" v-if='false'>
    <li @click='getStatus(1)'>about<div  v-if='redStatus === 1' class="colbox"></div></li>
    <li @click='getStatus(2)'>home<div  v-if='redStatus === 2' class="colbox"></div></li>
    <li @click='getStatus(3)'>TTT<div  v-if='redStatus === 3' class="colbox"></div></li>
    <li @click='getStatus(4)'>CCC<div  v-if='redStatus === 4' class="colbox"></div></li>
  </ul>
   <ul class="menu" v-if='false'>
    <li @click='getStatus(1)'>about<div  v-if='redStatus === 1' class="colbox"></div></li>
    <li @click='getStatus(2)'>home<div  v-if='redStatus === 2' class="colbox"></div></li>
    <li @click='getStatus(3)'>TTT<div  v-if='redStatus === 3' class="colbox"></div></li>
    <li @click='getStatus(4)'>CCC<div  v-if='redStatus === 4' class="colbox"></div></li>
  </ul>
   <ul class="menu" v-if='false'>
    <li @click='getStatus(1)'>about<div  v-if='redStatus === 1' class="colbox"></div></li>
    <li @click='getStatus(2)'>home<div  v-if='redStatus === 2' class="colbox"></div></li>
    <li @click='getStatus(3)'>TTT<div  v-if='redStatus === 3' class="colbox"></div></li>
    <li @click='getStatus(4)'>CCC<div  v-if='redStatus === 4' class="colbox"></div></li>
  </ul>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur laboriosam at amet vel quo, sint nisi ut iure temporibus, atque totam? Ad quidem dolorem sint odio ab voluptatem. Maiores, consequatur. Inventore ipsum maxime accusantium animi dolor fuga expedita minus nam nemo odit esse delectus, ratione quas, voluptate odio adipisci! Atque, ut odit optio modi minima necessitatibus deserunt, adipisci, in alias vitae deleniti nemo consectetur accusamus. Voluptas officiis maiores explicabo voluptatem temporibus a, necessitatibus quas dolores esse pariatur ipsa magnam non ratione. Tenetur reprehenderit perferendis dicta! Quis, libero commodi delectus incidunt est quibusdam esse eveniet nulla, et rerum dolores accusantium quam! </p>
  <ul class='testCol'>
    <li> <img src="https://fakeimg.pl/100x100/">. </li>
    <li> <img src="https://fakeimg.pl/100x100/">.</li>
    <li> <img src="https://fakeimg.pl/100x100/">.</li>
    <li> <img src="https://fakeimg.pl/100x100/">.</li>
  </ul>
</template>
<script>
// vue-scroll-datepicker-cashbac
import 'vue-scroll-datepicker-cashbac/assets/scrolldatepicker.scss'
import scrolldatepicker from 'vue-scroll-datepicker-cashbac/components/Scrolldatepicker'
import { useStore } from 'vuex'
import { fetchFakeApi } from '../../api/fakeApi'
import { fetchFakeApiTW } from '../../api/fakeApi2'
import { reactive, ref, onMounted } from 'vue'
export default {
  components: {
    scrolldatepicker
  },
  setup () {
    const store = useStore()
    const fakeData = reactive({
      column: []
    })
    const fakeDataTW = reactive({
      column: []
    })
    const timeData = reactive({
      column: []
    })
    const resultData = reactive({
      column: []
    })
    const redStatus = ref(1)
    function getStatus (value) {
      redStatus.value = value
    }
    function getApi () {
      fetchFakeApi().then((res) => {
        // console.log(res.data.infos)
        fakeData.column = res.data.infos
        fakeData.column.reverse()
        const firstNum = res.data.infos[0]
        store.commit('SETDATA', firstNum)
      })
    }
    const dd = ref('')

    // function getApiTW () {
    //   const ary4 = new Set()
    //   fetchFakeApiTW().then((res) => {
    //     console.log('2', res.data.infos)
    //     fakeDataTW.column = res.data.infos
    //     fakeDataTW.column.forEach(item => {
    //       const ary = item.time.split('')
    //       const Tindex = ary.findIndex(item => item === 'T')
    //       const ary2 = ary.slice(0, Tindex) // 留日期
    //       const ary5 = ary.slice(Tindex + 1) // 留時間
    //       console.log(ary5)
    //       const ary3 = ary2.join('') // 留日期
    //       const ary6 = ary5.join('') // 留時間
    //       item.createTime = ary3 // 創造屬性 比對用
    //       item.time = ary6
    //       ary4.add(ary3) // 創造集合 (不重複加入)
    //     })
    //     timeData.column = [...ary4] // 集合(obj)轉陣列
    //     console.log(fakeDataTW.column)
    //     console.log(timeData)
    //   })
    // }

    // function getApiSE () {
    //   fetchFakeApiTW().then((res) => {
    //     console.log('2', res.data.infos)
    //     fakeDataTW.column = res.data.infos
    //     fakeDataTW.column.forEach(item => {
    //       const ary = item.time.split('')
    //       const Tindex = ary.findIndex(item => item === 'T')
    //       const ary2 = ary.slice(0, Tindex) // 留日期
    //       const ary5 = ary.slice(Tindex + 1) // 留時間
    //       console.log(ary5)
    //       const ary3 = ary2.join('') // 留日期
    //       const ary6 = ary5.join('') // 留時間
    //       item.createTime = ary3 // 創造屬性 比對用
    //       item.time = ary6
    //     })
    //     const result = fakeDataTW.column.reduce((acc, cur) => {
    //       const ary7 = []
    //       const proper = Object.prototype.hasOwnProperty.call(acc, cur.createTime)
    //       if (!proper) {
    //         ary7.push(cur)
    //         acc[cur.createTime] = ary7
    //       } else {
    //         acc[cur.createTime].push(cur)
    //       }

    //       return acc
    //     }, {})
    //     resultData.column = result
    //     console.log(result)
    //     console.log(fakeDataTW.column)
    //   })
    // }

    // function getApifour () {
    //   fetchFakeApiTW().then((res) => {
    //     console.log('2', res.data.infos)
    //     fakeDataTW.column = res.data.infos
    //     fakeDataTW.column.forEach(item => {
    //       const ary = item.time.split('')
    //       const Tindex = ary.findIndex(item => item === 'T')
    //       const ary2 = ary.slice(0, Tindex) // 留日期
    //       const ary5 = ary.slice(Tindex + 1) // 留時間
    //       console.log(ary5)
    //       const ary3 = ary2.join('') // 留日期
    //       const ary6 = ary5.join('') // 留時間
    //       item.createTime = ary3 // 創造屬性 比對用
    //       item.time = ary6
    //     })
    //     const result = fakeDataTW.column.reduce((acc, cur) => {
    //       const time = 'createTime'
    //       const newkey = cur[time]
    //       if (!acc[newkey]) {
    //         acc[newkey] = []
    //       }
    //       acc[newkey].push(cur)
    //       return acc
    //     }, [])
    //     resultData.column = result
    //     console.log(result)
    //   })
    // }
    onMounted(() => {
      // getApi()
      // getApiTW()
      // getApiSE()
      // getApifour()
    })

    return {
      redStatus,
      getStatus,
      getApi,
      timeData,
      fakeDataTW,
      resultData,
      fetchFakeApiTW,
      dd
    }
  }
}

</script>

<style lang="scss" scoped>

* {
  box-sizing: border-box;
}
li {
  list-style: none;
}
.outner{
  display: grid;
}
.boxG{
  width: 100%;
  height: 200px;
  margin: 10px;
  background: red;

}
.boxGA{
    grid-column: 1/2;
}
.boxGB{
    grid-column: 3/4;
}
.menu {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    border: 3px solid red;
    width: 105px;
    padding: 10px;
    position: relative;
   .colbox {
     width: 15px; /*設定長方形寬度*/
     height: 100%; /*設定長方形高度*/
     background: lightgreen; /*設定長方形顏色*/
     position: absolute; /*設定與<div>區塊的相對位置*/
     left: 0px; /*從<div>區塊左上角起算，與左邊距離為0，即靠左的意思*/
     top: 0px; /*從<div>區塊左上角起算，與上方距離為100%時才開始產生這個長方形，因此長方形會在整塊<div>區塊的下方*/
}
  }
}
.container {
  width: 1536px;
  display: flex;
  justify-content: center;
  margin: auto;
}
.boxGroup {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
}
.inner {
  display: flex;
}
.box {
  width: 200px;
  height: 200px;
  border: 2px solid black;
}
.box1 {
  width: 80%;
  margin-left: auto;
}
.box2 {
  width: 20%;
}
.box3 {
  width: 80%;
}
.testCol{
  width: 100%;
  padding: 20px 0px;
  background: skyblue;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 20vh;
  img{
    width: 80%;
    height: 80%;
  }
}
.cardTest{
  margin-bottom: 100px;
}
.cardTest{
  max-width: 610px;
  .card{
    width: 100%;
  h5{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    margin: 10px 0px;
    width: 80%;
  }
}
}

</style>
