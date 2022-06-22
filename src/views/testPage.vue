<template>
  <div class="container">
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
  <ul class="menu">
    <li @click='getStatus(1)'>about<div  v-if='redStatus === 1' class="colbox"></div></li>
    <li @click='getStatus(2)'>home<div  v-if='redStatus === 2' class="colbox"></div></li>
    <li @click='getStatus(3)'>TTT<div  v-if='redStatus === 3' class="colbox"></div></li>
    <li @click='getStatus(4)'>CCC<div  v-if='redStatus === 4' class="colbox"></div></li>
  </ul>
</template>
<script>
import { ref } from 'vue'
export default {
  setup () {
    const redStatus = ref(1)
    function getStatus (value) {
      redStatus.value = value
    }
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
</style>
