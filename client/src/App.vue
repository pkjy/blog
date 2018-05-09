<template>
  <div id="app">
    <div class="wrap">
      <app-nav />
      <div v-if="this.$store.state.loadingContent" class="loading-warp-content">
        <div class="sk-wave loading-grid-content">
          <div class="sk-rect sk-rect1 loading-element-content"></div>
          <div class="sk-rect sk-rect2 loading-element-content"></div>
          <div class="sk-rect sk-rect3 loading-element-content"></div>
          <div class="sk-rect sk-rect4 loading-element-content"></div>
          <div class="sk-rect sk-rect5 loading-element-content"></div>
        </div>
      </div>
      <transition name="slide-fade">
        <router-view v-if="!this.$store.state.loadingContent" class="container" />
      </transition>
      <footer>
        <paginator />
        <copyright />
      </footer>
    </div>
  </div>
</template>

<script>
import 'normalize.css'
import '@/assets/css/common.css'
import '@/assets/css/base.css'
import '@/assets/css/header.css'
import '@/assets/css/custom.css'
import '@/assets/css/md.css'

import appNav from '@/components/common/NavBar'
import copyright from '@/components/common/FooterCopyright'
import paginator from '@/components/common/PagePaginator'

import '../node_modules/spinkit/css/spinkit.css'

export default {
  name: 'App',
  components: {
    appNav,
    copyright,
    paginator
  },
  computed: {
    logoPath() {
      let path = this.$store.state.themeConfig.logo
      if (/^(https?:\/\/|\/)/.test(path)) {
        return path
      }
      path = this.$store.state.root + path
      return path
    }
  },
  data() {
    return {}
  },
}
</script>

<style>
#myCanvas {
  position: absolute;
  top: 0;
  z-index: -1;
}

.img-load-animation {
  display: flex;
  align-items: center;
  height: 150px;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0s;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.loading-warp-main {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #42b983;
}

.loading-grid-main {
  width: 120px;
  height: 100px;
}

.loading-element-main {
  background-color: #ffffff !important;
}

.loading-warp-content {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
}

@media screen and (min-height: 900px) {
  .loading-warp-content {
    height: 700px;
  }
}

@media screen and (max-height: 900px) {
  .loading-warp-content {
    height: 450px;
  }
}

.loading-grid-content {
  width: 70px;
  height: 70px;
}

.loading-element-content {
  background-color: #42b983 !important;
}
</style>
