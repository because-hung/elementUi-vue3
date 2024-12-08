<template>
  <div>
    <div class="a">
      <div class="b"></div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
/* 1.*/
.a >>> .b {
  color: red;
}

/* 2.*/
.a /deep/ .b {
  color: red;
}

/* 3.*/
::v-deep .b {
  color: red;
}

/* 4.*/
:deep(.b) {
  color: red;
}
</style>
