<template>
    <div class="message">
        <h3>最新评论</h3>
        <div class="sketch">
            <img src="@/assets/img/head.png" alt="">
            <div>
                <div style="color:red;font-size:20px;font-weight:800">用户名字</div>
                <p>简述内容</p>
                <p>time</p>
            </div>
        </div>

        <div class="sketch">
            <img src="@/assets/img/head.png" alt="">
            <div>
                <div style="color:red;font-size:20px;font-weight:800">用户名字</div>
                <p>简述内容</p>
                <p>time</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>


<style lang="scss" scoped>
.message{
    background: white;
    padding:0 10px;
    .sketch{
        display: flex;
        border-top: 1px solid #ccc;
        padding-top: 5px;
        align-items: center;
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            margin: 16px;
        }
    }
}
    
</style>