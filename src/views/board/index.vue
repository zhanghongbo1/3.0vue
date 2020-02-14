<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/board' }">留言板</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="bor">
      <div class="left">
        <liuyan @textto="get"></liuyan>
        <show :arr1="arr"></show>
      </div>
      <div class="right">
        <rightTop />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import liuyan from "@/components/liuyan.vue";
import show from "./show";
import rightTop from "../detail/right/top";
export default {
  components: {
    liuyan,
    show,
    rightTop
  },
  data() {
    return {
      val: "",
      arr: []
    };
  },
  methods: {
     get(val) {
       if(!val){
         alert("请输入留言内容")
       }else{
         this.$store.dispatch('show/getMessage',{"val":val,'this':this})
       }
      
  
    }
  }
};
</script>
<style lang="scss">
.bor {
  display: flex;
  margin-top: 20px;
  .left {
    width: 1000px;
    margin-right: 14px;
  }
  .right {
    flex: 1;
  }
  h2 {
    margin-top: 0;
  }
}
</style>