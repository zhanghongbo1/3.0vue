<template>
    <div>
        <lunbo/>

        <div class="ticle">
            <div class="left">
            <h2>热门推荐</h2>
            <art/>
            </div>
            <div class="right">
                <right/>
            </div>
        </div>
    </div>
</template>


<script>
import lunbo from './lunbo'
import art from './article'
import right from './right/top'
export default {
    components:{
        lunbo,
        art,
        right
    }
}
</script>
<style lang="scss" scoped>
    .ticle{
        display: flex;
        width:100%;
        .left{
            width: 1200px;
        }
        .right{
          flex: 1;
          padding-left: 20px;
        }
    }
</style>