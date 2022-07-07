<template >
    <div>
        <div class="agent-block">
            <img src="../assets/banner.png" alt="">
            <div class="btnGroup">
                <a href="google.com" class="hoverBtn skypeIcon"><img src="../assets/icon01.png" alt=""><div class="iconTitle">skype</div></a>
                <a href="youtube.com" class="hoverBtn tgIcon"><img src="../assets/icon02.png" alt=""><div class="iconTitle tgTitle">合營tg</div></a>
                 <button class="join-us-btn">
                <img src="../assets/btn.jpg" alt="">
                </button>
            </div>
        </div>
          <div class="agent-block">
            <img src="../assets/banner.png" alt="">
        </div>
          <div class="agent-block">
            <img src="../assets/banner.png" alt="">
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
    padding: 10px;
    cursor: pointer;
    border-radius: 10px;
    margin-right: 30px;
    text-decoration: none
}

.hoverBtn:hover{
    opacity: 1;
}
.skypeIcon{
    width: 2vw;
}
.skypeIcon > a{
    text-decoration: none;
    padding: 20px;
}
.iconTitle{
    color: gray;
    font-size: 14px;
    word-break: keep-all;
    margin-top: 10px;
}
.tgIcon{
    width: 2vw;
}

/* .tgtitle{
    transform: translateY(-8px);
} */

.btnGroup .join-us-btn{
    width: 11vw;
}
</style>
