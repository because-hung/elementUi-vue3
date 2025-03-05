<template>
  <div>
    <div class="phoneHeader"></div>
    <div class="phone_wrap">
      <div class="box01"></div>
      <div class="box02">
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>1234564566</p>
        <p>77777777777</p>
        <p>77777777777</p>
        <p>77777777777</p>
        <p>77777777777</p>
        <p>77777777777</p>
        <p>77777777777</p>
        <p>77777777777</p>
        <p>77777777777</p>
        <p>77777777777</p>
        <p>77777777777</p>
        <p>77777777777</p>
        <p>77777777777</p>
        <p>77777777777</p>
        <p>77777777777</p>
        <p>99999999</p>
        <p>99999999</p>
        <p>99999999</p>
        <p>99999999</p>
        <p>99999999</p>
        <p>99999999</p>
        <p>99999999</p>
        <p>99999999</p>
        <p>99999999</p>
        <p>99999999</p>
        <p>99999999</p>
        <p>99999999</p>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted } from 'vue'
export default {
  name: 'testPhone',
  setup () {
    onMounted(() => {
      const documentHeight = () => {
        const doc = document.documentElement
        doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
      }
      window.addEventListener('resize', documentHeight)
      documentHeight()
    })
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
:root {
 --doc-height: 100%;
}
.phoneHeader{
  width: 50px;
  height: 50px;
}
.phone_wrap{
  width: 100%;
  height: 100vh;
  // height: calc(100vh - 50px);
  height: calc(var(--doc-height) - 50px);
  overflow-y: scroll;
  background-image: url('https://fastly.picsum.photos/id/6/375/677.jpg?hmac=YCA096Jy3OFBojBcgvPe0ryxIbzDjlmkJWL0KpE29rA');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  p{
    margin: 0;
  }
  .box01{
    width: 50px;
    height: 500px;
  }
}
</style>
