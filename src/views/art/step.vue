
<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item timestamp="2018/4/12" placement="top">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/12 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/3" placement="top">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/3 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/2" placement="top">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/2 20:46</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>


<style lang="scss">
.el-timeline {
  padding: 0;
  margin-top: 20px;
}
.el-timeline-item__timestamp.is-top {
  color: yellow;
}
.el-card__body {
  position: relative;
  height: 100px;
  p{
      position: absolute;
      right: 0;
      bottom: 0;
      font-size: 20px;
      font-weight: 500;
      color: red;
  }
}
</style>