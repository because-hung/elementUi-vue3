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
</template>

<style>
    *{
            box-sizing: border-box;
        }
        .container{

          width: 1536px;
          display: flex;
          justify-content: center;
          margin: auto;
        }
        .boxGroup{
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 600px;
        }
        .inner{
            display: flex;

        }
        .box{
            width: 200px;
            height: 200px;
            border: 2px solid black;
        }
        .box1{
            width: 80%;
            margin-left: auto;
        }
        .box2{
            width: 20%;
        }
        .box3{
            width: 80%;
        }
</style>
