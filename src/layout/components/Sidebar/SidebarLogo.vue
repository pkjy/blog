<template>
  <div class="sidebar-logo-container"
       :class="{'collapse': collapse}">
    <transition name="sidebarLogoFade">
      <router-link v-if="collapse"
                   key="collapse"
                   class="sidebar-logo-link"
                   :to="{name:'Dashboard'}">
        <img src="favicon.png"
             class="sidebar-logo">
      </router-link>
      <router-link v-else
                   key="expand"
                   class="sidebar-logo-link"
                   :to="{name:'Dashboard'}">
        <img src="favicon.png"
             class="sidebar-logo">
        <h1 class="sidebar-title">
          {{ title }}
        </h1>
      </router-link>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import settings from '@/settings'

export default defineComponent({
  name: 'SidebarLogo',
  props: {
    collapse: {
      required: true,
      type: Boolean
    }
  },
  data() {
    return {
      title: settings.title
    }
  }
})
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: linear-gradient(135deg, #00b7ef 0%, #ff1053 100%);
  opacity: 0.5;
  width: 100%;
  color: #333;
  background-size: cover;
  background-blend-mode: hard-light;
  background-position: 35% 50%;
  background-repeat: no-repeat;
  animation: hue-rotate 3s linear infinite;
  text-align: center;
  overflow: hidden;

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;

    & .sidebar-logo {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      margin-right: 12px;
    }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
      letter-spacing: 3px;
    }
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }
}
</style>
