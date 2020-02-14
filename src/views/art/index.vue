<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/art' }">技术分享</el-breadcrumb-item>
    </el-breadcrumb>
    <step/>

  </div>
</template>

<script>
import step from './step'
export default {
    components:{
        step
    }
}
</script>