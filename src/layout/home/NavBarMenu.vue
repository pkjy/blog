<template>
  <div class="container header">
    <router-link :to="{name:'Home'}"
                 class="logo-link">
      <img id="logo"
           :src="logoLogo"
           alt="logo">
    </router-link>
    <ul class="nav nav-list">
      <li v-for="(value, key) in menu"
          :key="key"
          class="nav-list-item">
        <router-link :to="value"
                     class="nav-list-link">
          {{ key.toUpperCase() }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBarMenu',
  setup() {
    const menu = {
      Home: '/home/index',
      Poster: '/home/poster',
      Admin: '/login'
    }
    return {
      menu,
      logoLogo: require('@/assets/img/pjy.png')
    }
  }
})
</script>

<style>
.poster-wrap {
  position: absolute;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-color: #666;
  background-size: cover;
}
.poster-mask {
  position: absolute;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
}
.poster-conver-story {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  align-items: center;
  display: flex;
}
.poster-conver-story .content {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* align-items: center; */
  color: #fff;
}

.poster-conver-story .footer {
  position: absolute;
  bottom: 0;
  right: 0;
  color: #fff;
  font-size: 12px;
  margin-bottom: 15px;
  margin-right: 10px;
}
</style>
