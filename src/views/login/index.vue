<template>
    <div>
        login
          <el-button type="primary" @click="go">主要按钮</el-button>
         

    </div>
</template>

<script>

export default {
    methods: {
        go(){
            this.$router.push({name:"system",query:{id:1}})
        }
    },
}
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>