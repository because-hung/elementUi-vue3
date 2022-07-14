<template lang="pug">
.containerA
  .testcont
    span 123
  .testContent( v-if='false' @mouseover='changeColor()' @mouseleave='changeColorV()')
    img.posit(src='../assets/btn.jpg')
    .logoA
      img(src='../assets/btn.jpg')
    .contentB
      .contA
        h2 生件
        .infoGroup
          .card
            .title 累積有效獎金
            h6 1600000
          .card
            .title 累積有效休假
            h6 1600000
      .contB
        h2 保件
        .card
          .title 累積有效補修
           h6 1600000
  .testPosit(v-if='false')
  img(src='../assets/btn.jpg' v-if='false')
  .testBanner(v-if='false')
    .testbox

</template>
<script>
import _ from 'lodash'
export default {
  setup () {
    // function changeColor (val) {
    //   const debo = _.debounce(function () {
    //     const domA = document.querySelector('.testContent')
    //     domA.style.backgroundColor = 'red'
    //     console.log('red')
    //   }, 300)
    //   debo()
    // }
    const thro = _.throttle(function () {
      const domA = document.querySelector('.testContent')
      domA.style.backgroundColor = 'red'
      console.log('red')
    }, 600, { trailing: false })

    function changeColor () {
      thro()
    }

    function changeColorV () {
      const domA = document.querySelector('.testContent')
      domA.style.backgroundColor = 'white'
      console.log('white')
    }
    return {
      changeColor,
      changeColorV
    }
  }
}
</script>
<style lang="sass" scoped>

.containerA
  border: 2px black solid
  height: 500px
  background: pink
  display: flex
  justify-content: center
  align-items: center
  .testcont
    width: 50%
    height: 250px
    background: red
    position: relative
    span
      color: white
      font-size: 24px
      display: inline-flex
      width: 150px
      height: 30px
      position: absolute
      top: 20px
      left: 100px
  .testContent
    width: 35%
    background: white
    position: relative
    .posit
      position: absolute
      width: 20%
      top: 50%
      left: 0
      transform: translate(-45px, -50%) rotate(90deg)
    .logoA
      display: flex
      justify-content: center
      img
        width: 20%
        margin: 20px 0px
    .contentB
      display: flex
      justify-content: center
      .contA
        // border-right: gray solid 3px
        padding-right: 10px
        .infoGroup
          display: flex
          justify-content: center
          .card
            margin-right: 10px
            h6
              margin: 20px 0px
      .contB
        padding-left: 10px
        h6
          margin: 20px 0px
  .testPosit
    width: 30%
    height: 200px
    background: yellow
    display: flex
    align-items: center
    position: relative
    z-index: 9
//   img
//     width: 50px
//     height: 100px
//     position: absolute
//     z-index: 10
//     left: 34%
//     //   transform: translateX(-25px)
    // 立體
  .testBanner
    width: 50%
    height: 300px
    background: white
    margin: 0 auto
    border-radius: 10px
    .testbox
      width: 100%
      background: gray
      height: 300px
      border-radius: 10px
      transform: translateX(4px)
</style>
