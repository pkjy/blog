<template>
  <div :class="{'has-logo': showLogo}">
    <sidebar-logo :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu :default-active="activeMenu"
               :collapse="isCollapse"
               :background-color="variables.menuBg"
               :text-color="variables.menuText"
               :active-text-color="menuActiveTextColor"
               :unique-opened="false"
               :collapse-transition="false"
               mode="vertical">
        <sidebar-item v-for="route in routes"
                      :key="route.path"
                      :item="route"
                      :base-path="route.path"
                      :is-collapse="isCollapse" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

import SidebarItem from './SidebarItem.vue'
import SidebarLogo from './SidebarLogo.vue'
import variables from '@/assets/styles/_variables.scss'
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'SideBar',
  components: {
    SidebarItem,
    SidebarLogo
  },
  setup() {
    const store = useStore()
    const route = useRoute()
    const routes = computed(() => {
      return store.state.permission.routes
    })

    const showLogo = computed(() => {
      return store.state.settings.showSidebarLogo
    })

    const menuActiveTextColor = computed(() => {
      if (store.state.settings.sidebarTextTheme) {
        return store.state.settings.theme
      } else {
        return variables.menuActiveText
      }
    })

    const activeMenu = computed(() => {
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta?.activeMenu) {
        return meta?.activeMenu
      }
      return path
    })

    const isCollapse = computed(() => {
      return !store.state.app.sidebar.opened
    })
    
    return {
      variables,
      routes,
      showLogo,
      menuActiveTextColor,
      activeMenu,
      isCollapse
    }
  }
})
</script>

<style lang="scss">
.sidebar-container {
  // reset element-ui css
  .horizontal-collapse-transition {
    transition: 0s width ease-in-out, 0s padding-left ease-in-out,
      0s padding-right ease-in-out;
  }

  .scrollbar-wrapper {
    overflow-x: hidden !important;
  }

  .el-scrollbar__view {
    height: 100%;
  }

  .el-scrollbar__bar {
    &.is-vertical {
      right: 0px;
    }

    &.is-horizontal {
      display: none;
    }
  }
}
</style>

<style lang="scss" scoped>
.el-scrollbar {
  height: 100%;
}

.has-logo {
  .el-scrollbar {
    height: calc(100% - 50px);
  }
}

.el-menu {
  border: none;
  height: 100%;
  width: 100% !important;

}
</style>
