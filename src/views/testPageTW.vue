<template lang="pug">
.container
  .btnGr
    button enter
    button log
    button logOut
  .btnGrid
    button.one enter
    button.sec log
    button.thir logOut
el-button.diaBtn(@click='getDialogVisble()') enter
el-dialog.dialog(title='title' v-model="DialogVisble"  width="30%")
  span 666
</template>
<script>
import { ref } from 'vue'
export default {
  setup () {
    const DialogVisble = ref(false)
    function getDialogVisble () {
      DialogVisble.value = true
    }
    return {
      getDialogVisble,
      DialogVisble
    }
  }
}
</script>
<style lang="sass">
.container
  max-width: 768px
  display: flex
  flex-direction: column
  background: aqua
  margin: 0 auto
  .btnGr
    width: 70%
    background: green
    button
      width: 30%
      margin: 5px
      border: 1px black solid
      background: red
      color: white
  .btnGrid
    margin-top: 50px
    width: 90%
    background: brown
    display: grid
    button
      margin: 5px
      border: 1px black solid
      background: red
      color: white
    .one
      grid-column: 3/4
    .sec
      grid-column: 2/3
    .thir
      grid-column: 1/2
  .diaBtn
    margin-top: 50px
    width: 100px
    height: 100px
  .dialog
    width: 500px
    height: 500px
    background: red
</style>
