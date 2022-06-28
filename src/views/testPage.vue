<template>
<div class="fontTest">
  <font-awesome-icon :icon="[ 'fas', 'angles-left' ]" />
</div>
<div class="testScroll">
  <scrolldatepicker
        placeholder="May 28, 1989"
        v-model="dateBirth"
        :theme-color="'#CDCDCD'"
        :min="'2000-01-01'"
        :max="'2022-01-01'"
        :input-class="'vue-date-input'"
        :input-style="{color:'#333333'}"
      />
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
    const redStatus = ref(1)
    function getStatus (value) {
      redStatus.value = value
    }
    function getApi () {
      fetchFakeApi().then((res) => {
        console.log(res.data.infos)
        fakeData.column = res.data.infos
        fakeData.column.reverse()
        const firstNum = res.data.infos[0]
        store.commit('SETDATA', firstNum)
      })
    }
    onMounted(() => {
      getApi()
    })

    return {
      redStatus,
      getStatus
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
