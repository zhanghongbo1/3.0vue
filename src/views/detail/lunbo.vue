<template>
<div>
  <el-carousel :interval="4000" type="card" height="400px">
    <el-carousel-item v-for="item in picList" :key="item.id">
      <!-- <h3 class="medium">{{ item }}</h3> -->
      <img :src="item.sr" alt="" style="width:100%;height:100%"> 
    </el-carousel-item>
  </el-carousel>

  </div>
</template>


<script>
export default {
    data() {
        return {
            picList:[
                {id:"1",sr:require('../../assets/img/1.jpg')},
                {id:"2",sr:require('../../assets/img/2.jpg')},
                {id:"3",sr:require('../../assets/img/3.jpg')},
                {id:"4",sr:require('../../assets/img/4.jpg')},
                {id:"5",sr:require('../../assets/img/5.jpg')},
                {id:"6",sr:require('../../assets/img/6.jpg')}
            ]
        }
    },
}
</script>
<style lang="scss" scoped>

 
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>