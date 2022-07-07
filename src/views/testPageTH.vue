<template >
    <div>
        <div class="agent-block">
            <img src="../assets/banner.png" alt="">
            <div class="btnGroup">
                <a href="google.com" class="hoverBtn skypeIcon"><img src="../assets/icon01.png" alt=""><span class="iconTitle">skype</span></a>
                <a href="youtube.com" class="hoverBtn tgIcon"><img src="../assets/icon02.png" alt=""><span class="iconTitle tgTitle">合營tg</span></a>
                 <button class="join-us-btn">
                <img src="../assets/btn.jpg" alt="">
                </button>
            </div>
        </div>
          <!-- <div class="agent-block">
            <img src="../assets/banner.png" alt="">
        </div>
          <div class="agent-block">
            <img src="../assets/banner.png" alt="">
        </div> -->
    </div>
    <div class="section">
        <div class="testBox">
            <img src="../assets/icon01.png" alt="">
            <span>telegram1235555</span>
        </div>
         <div class="testBox">
            <img src="../assets/icon02.png" alt="">
            <span>telegram</span>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.agent-block{
    width: 100vw;
    position: relative;
    margin-bottom: 20px;
}
.agent-block img{
    width: 100%;
    display: block;
}
.btnGroup{
    position: absolute;
    top: 26.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65%;
}

.hoverBtn{
    background: white;
    opacity: 0.7;
    padding: 15px;
    cursor: pointer;
    border-radius: 10px;
    margin-right: 30px;
    text-decoration: none;
    /*rwd center*/
    display: flex;
    flex-direction: column;
    align-items: center;
}

.hoverBtn:hover{
    opacity: 1;
}
.skypeIcon{
    width: 2vw;
}

.tgIcon{
    width: 2vw;
}

/*改span */
.iconTitle{
    color: gray;
    font-size: 14px;
    word-break: keep-all;
    margin-top: 10px;

}

/* .tgtitle{
    transform: translateY(-8px);
} */

.join-us-btn{
    width: 11vw;
}

/* test */
.testBox{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.testBox > img{
    width: 30px;
}
</style>
