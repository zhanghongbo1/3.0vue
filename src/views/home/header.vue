<template>
  <div class="headr">
    <img src="@/assets/img/header.png" alt />
    <el-button type="primary" v-for="item in tab" :key="item.id" @click="pathto(item)">{{item.name}}</el-button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            tab:[
                {id:"1",name:"首页",path:"/detail"},
                {id:"1",name:"技术分享",path:"/art"},
                {id:"1",name:"个人学习",path:"/mine"},
                {id:"1",name:"羊毛分享",path:"/Wool"},
                {id:"1",name:"留言板",path:"/board"}
            ]
        }
    },
    methods: {
      pathto(item){
        this.$router.push({path:item.path})
      }
    },
};
</script>


<style lang="scss" scoped>
.headr {
    display: flex;
    align-items: center;
  img {
    width: 490px;
  }
  .el-button--primary{
      margin: 0 40px
  }
}
</style>