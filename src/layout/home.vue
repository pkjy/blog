<template>
  <div class="app-home">
    <div class="wrap">
      <NavBar v-if="!hideHead" />
      <div v-if="this.$store.state.blog.loadingContent"
           class="loading-warp-content">
        <div class="spinner">
          <div class="double-bounce1 loading-element-main"></div>
          <div class="double-bounce2 loading-element-main"></div>
        </div>
      </div>

      <router-view v-slot="{ Component }"
                   class="container"
                   v-if="!this.$store.state.blog.loadingContent">
        <!-- <transition name="slide-fade"> -->
          <component :is="Component" />
        <!-- </transition> -->
      </router-view>

      <footer v-if="!hideHead">
        <PagePaginator />
        <Copyright />
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './home/NavBar.vue'
import Copyright from './home/Copyright.vue'
import '@/assets/home/common.css'
import '@/assets/home/base.css'
import '@/assets/home/header.css'
import '@/assets/home/custom.css'
import '@/assets/home/md.css'
import PagePaginator from '@/views/blog/PagePaginator.vue'

export default defineComponent({
  name: 'Layout',
  components: {
    NavBar,
    Copyright,
    PagePaginator
  },
  computed: {
    hideHead() {
      return this.$route?.meta?.fullScreenMode
    }
  }
})
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
  transition: all 0.3s;
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
  z-index: 99999;
}

.loading-grid-content {
  width: 70px;
  height: 70px;
}

.loading-element-content {
  background-color: #42b983 !important;
}
</style>
