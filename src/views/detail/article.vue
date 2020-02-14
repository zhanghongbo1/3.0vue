<template>
  <div>
    <div class="article">
      <h3>如何建立博客</h3>
      <div class="matter">
        <img src="@/assets/img/22.jpg" alt />
        <div class="include">
          <p>
            <span>zhangongbo</span>
            <span>发布事件:time</span>
            <span>分类:技术分享</span>
            <span>阅读数量()</span>
          </p>
          <div class="text">
              23esfs高贵的人格各位特委托热狗但如果的人格特特 特人也而哥特隔热条额士大夫方法方法烦烦烦烦烦烦烦烦烦烦烦烦v
              23esfs高贵的人格各位特委托热狗但如果的人格特特 特人也而哥特隔热条额士大夫方法方法烦烦烦烦烦烦烦烦烦烦烦烦v
              23esfs高贵的人格各位特委托热狗但如果的人格特特 特人也而哥特隔热条额士大夫方法方法烦烦烦烦烦烦烦烦烦烦烦烦v
              </div>
        </div>
      </div>
    </div>

    <div class="article">
      <h3>如何建立博客</h3>
      <div class="matter">
        <img src="@/assets/img/22.jpg" alt />
        <div class="include">
          <p>
            <span>zhangongbo</span>
            <span>发布事件:time</span>
            <span>分类:技术分享</span>
            <span>阅读数量()</span>
          </p>
          <div class="text">
              23esfs高贵的人格各位特委托热狗但如果的人格特特 特人也而哥特隔热条额士大夫方法方法烦烦烦烦烦烦烦烦烦烦烦烦v
              23esfs高贵的人格各位特委托热狗但如果的人格特特 特人也而哥特隔热条额士大夫方法方法烦烦烦烦烦烦烦烦烦烦烦烦v
              23esfs高贵的人格各位特委托热狗但如果的人格特特 特人也而哥特隔热条额士大夫方法方法烦烦烦烦烦烦烦烦烦烦烦烦v
              </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss">
.article {
  background: yellow;
  padding-right: 20px;
  img {
    width: 200px;
    height: 200px;
  }
  .matter {
    display: flex;
    .include {
      padding: 0 20px;
      .text {
          font-size: 20px;
        overflow: hidden; //隐藏多余行数
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3; //规定显示几行，其余行数用小数点代替
        -webkit-box-orient: vertical; //规定为垂直方向排列
      }
    }
    p {
      font-size: 20px;

      span {
        margin-right: 20px;
      }
    }
  }
}
</style>