<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="testBox">
      <div class="content" v-html="content"></div>
      <!-- <div class="content"><p>"As Chiang becomes more refined through life, the glistens of time, like fine nectar after a long period of brewing, also flow between life and art in a freer way--whether the light within his heart or</p></div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'aboutView',
  setup () {
    const content = `
    <p>336 <br/>
      "As Chiang becomes more refined through life, the glistens of time, like fine nectar after a long period of brewing, also flow between life and art in a freer way--whether the light within his heart or</p>`
    return {
      content
    }
  }
}
</script>
<style lang="scss" scoped>
.testBox {
  text-align: left;
  .content{
    margin: 0 auto;
    width: 300px;
    border: 1px solid black;

    // text-overflow
    ::v-deep p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
    }
  }
}
</style>
