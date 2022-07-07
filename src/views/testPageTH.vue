<template >
    <div>
        <div class="agent-block">
            <img src="../assets/banner.png" alt="">
            <div class="btnGroup">
                <div class="btnIcon skypeIcon">
                <a href="" class="hoverStatus"><img src="../assets/icon01.png" alt=""><div class="iconTitle">skype</div></a>
                </div>
                <div class="btnIcon tgIcon">
                <a href="" class="hoverStatus"><img src="../assets/icon02.png" alt=""><div class="iconTitle tgTitle">tg</div></a>
                </div>
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

.btnIcon{
    background: white;
    opacity: 0.7;
    border: 0px;
    padding: 20px;
    margin: 0px 30px;
    cursor: pointer;
    border-radius: 10px;
    width: 100px;
}
.tgIcon .hoverStatus{
    padding: 20px;
}
.skypeIcon{
    width: 2vw;
}
.skypeIcon .hoverStatus{
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
.tgIcon > a{
    text-decoration: none;
}

/* .tgtitle{
    transform: translateY(-8px);
} */

.btnGroup .join-us-btn{
    width: 11vw;
    background: transparent;
    opacity: 1;
}
</style>
