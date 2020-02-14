<template>
    <div class="main">
        <h2>关注博客</h2>
        <div class="top">
            <div class="search">
                <input type="text" placeholder="请输入你要查询的内容">
                <i class="el-icon-search"></i>
            </div>
        </div>
        <tome/>
        <message/>
    </div>
</template>

<script>
import tome from './tome'
import message from './liuyan'
export default {
    components:{
        tome,
        message
    }
}
</script>

<style lang="scss" scoped>
    .top{
        .search{
            width: 100%;
            height: 50px;
            border: 1px solid #9999;
            border-radius: 5px;
            display: flex;
            background: white;
            align-items: center;
            input{
                flex: 1;
                height: 90%;
                border: none;
                outline: none;
                font-size: 24px;
            }
            i{
                font-size: 30px
            }

        }
        
    }

</style>