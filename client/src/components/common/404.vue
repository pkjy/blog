<template>
  <div style="margin-top: -20px;height:100%;">
    <div class="wscn-http404">
      <div class="pic-404">
        <img class="pic-404__parent" :src="img_404" alt="404">
        <img class="pic-404__child left" :src="img_404_cloud" alt="404">
        <img class="pic-404__child mid" :src="img_404_cloud" alt="404">
        <img class="pic-404__child right" :src="img_404_cloud" alt="404">
      </div>
      <div class="content-404">
        <div class="content-404__oops">OOPS!</div>
        <!-- <div class="content-404__info">您访问的地址不存在
          <a class='link-type' target='_blank'></a>
        </div> -->
        <div class="content-404__headline">{{ message }}</div>
        <div class="content-404__info">请检查您输入的网址是否正确</div>
        <!-- <a href="javascript:;" @click="$router.go(-1)" class="content-404__return-home">返回上一页</a> -->
        <a href="/" class="content-404__return-home">返回首页</a>
      </div>
    </div>
  </div>
</template>

<script>
import img_404 from '@/assets/img/404.png'
import img_404_cloud from '@/assets/img/404_cloud.png'

export default {
  name: 'page404',
  computed: {
    message() {
      return '您访问的地址不存在'
    },
    loginStyle() {
      return { height: document.documentElement.clientHeight + 'px' }
    }
  },
  data() {
    return {
      img_404,
      img_404_cloud
    }
  }
}
</script>

<style  scoped>
.wscn-http404 {
  position: relative;
  width: 1200px;
  margin: 20px auto 0;
  padding: 0;
  overflow: hidden;
}
.wscn-http404 .pic-404 {
  position: relative;
  float: left;
  width: 600px;
  padding: 150px 0;
  overflow: hidden;
}
.wscn-http404 .pic-404__parent {
  width: 100%;
}
.wscn-http404 .pic-404__child {
  position: absolute;
}
.wscn-http404 .pic-404__child.left {
  width: 80px;
  top: 17px;
  left: 220px;
  opacity: 0;
  animation-name: cloudLeft;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-delay: 1s;
}
.wscn-http404 .pic-404__child.mid {
  width: 46px;
  top: 10px;
  left: 420px;
  opacity: 0;
  animation-name: cloudMid;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-delay: 1.2s;
}
.wscn-http404 .pic-404__child.right {
  width: 62px;
  top: 100px;
  left: 500px;
  opacity: 0;
  animation-name: cloudRight;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-delay: 1s;
}
@keyframes cloudLeft {
  0% {
    top: 17px;
    left: 220px;
    opacity: 0;
  }
  20% {
    top: 33px;
    left: 188px;
    opacity: 1;
  }
  80% {
    top: 81px;
    left: 92px;
    opacity: 1;
  }
  100% {
    top: 97px;
    left: 60px;
    opacity: 0;
  }
}
@keyframes cloudMid {
  0% {
    top: 10px;
    left: 420px;
    opacity: 0;
  }
  20% {
    top: 40px;
    left: 360px;
    opacity: 1;
  }
  70% {
    top: 130px;
    left: 180px;
    opacity: 1;
  }
  100% {
    top: 160px;
    left: 120px;
    opacity: 0;
  }
}
@keyframes cloudRight {
  0% {
    top: 100px;
    left: 500px;
    opacity: 0;
  }
  20% {
    top: 120px;
    left: 460px;
    opacity: 1;
  }
  80% {
    top: 180px;
    left: 340px;
    opacity: 1;
  }
  100% {
    top: 200px;
    left: 300px;
    opacity: 0;
  }
}
.wscn-http404 .content-404 {
  position: relative;
  float: left;
  width: 350px;
  padding: 230px 0 150px;
  overflow: hidden;
}
.wscn-http404 .content-404__oops {
  font-size: 32px;
  font-weight: bold;
  line-height: 40px;
  color: #1482f0;
  opacity: 0;
  margin-bottom: 20px;
  animation-name: slideUp;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
.wscn-http404 .content-404__headline {
  font-size: 20px;
  line-height: 24px;
  color: #1482f0;
  opacity: 0;
  margin-bottom: 10px;
  animation-name: slideUp;
  animation-duration: 0.5s;
  animation-delay: 0.1s;
  animation-fill-mode: forwards;
}
.wscn-http404 .content-404__info {
  font-size: 13px;
  line-height: 21px;
  color: grey;
  opacity: 0;
  margin-bottom: 30px;
  animation-name: slideUp;
  animation-duration: 0.5s;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;
}
.wscn-http404 .content-404__return-home {
  display: block;
  float: left;
  width: 110px;
  height: 36px;
  margin-right: 10px;
  background: #1482f0;
  border-radius: 100px;
  text-align: center;
  color: #ffffff;
  opacity: 0;
  font-size: 14px;
  line-height: 36px;
  cursor: pointer;
  animation-name: slideUp;
  animation-duration: 0.5s;
  animation-delay: 0.3s;
  animation-fill-mode: forwards;
}
@keyframes slideUp {
  0% {
    transform: translateY(60px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/*# sourceMappingURL=archive-post-list.css.map */
</style>
