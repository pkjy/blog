<template>
  <div :class="classObj"
       class="app-wrapper">
    <div v-if="classObj.mobile && sidebar.opened"
         class="drawer-bg"
         @click="handleClickOutside" />
    <Sidebar class="sidebar-container" />
    <div :class="{hasTagsView: true}"
         class="main-container">
      <div :class="{'fixed-header': fixedHeader}">
        <Navbar />
        <TagsView />
      </div>
      <AppMain />
      <RightPanel v-if="showSettings">
        <Settings />
      </RightPanel>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex'
import { AppMain, Navbar, Settings, Sidebar, TagsView } from './components'
import RightPanel from '@/components/RightPanel/index.vue'
import ResizeMixin from './mixin/resize'

export default defineComponent({
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    RightPanel,
    Settings,
    Sidebar,
    TagsView
  },
  setup() {
    const { sidebar } = ResizeMixin()
    const store = useStore()

    const settings = computed(() => {
      return store.state.settings
    })

    const showSettings = computed(() => {
      return store.getters['settings/showSettings']
    })

    const fixedHeader = computed(() => {
      return store.getters['settings/fixedHeader']
    })

    const classObj = computed(() => {
      return {
        hideSidebar: !sidebar.value.opened,
        openSidebar: sidebar.value.opened,
        withoutAnimation: sidebar.value.withoutAnimation,
        mobile: store.getters['app/isMobile']
      }
    })

    const handleClickOutside = () => {
      store.dispatch('app/CloseSideBar', false)
    }

    return {
      classObj,
      showSettings,
      fixedHeader,
      handleClickOutside,
      settings,
      sidebar
    }
  }
})

</script>

<style lang="scss" scoped>
$sideBarWidth: 210px;

.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.main-container {
  min-height: 100%;
  background-color: #f0f2f5;
  transition: margin-left 0.28s;
  margin-left: $sideBarWidth;
  position: relative;
}

.sidebar-container {
  transition: width 0.28s;
  width: $sideBarWidth !important;
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  border-right: 1px solid #f0f0f0;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar {
  .main-container {
    margin-left: 54px;
  }

  .sidebar-container {
    width: 54px !important;
  }

  .fixed-header {
    width: calc(100% - 54px);
  }
}

/* for mobile response 适配移动端 */
.mobile {
  .main-container {
    margin-left: 0px;
  }

  .sidebar-container {
    transition: transform 0.28s;
    width: $sideBarWidth !important;
  }

  &.openSidebar {
    position: fixed;
    top: 0;
  }

  &.hideSidebar {
    .sidebar-container {
      pointer-events: none;
      transition-duration: 0.3s;
      transform: translate3d(-$sideBarWidth, 0, 0);
    }
  }

  .fixed-header {
    width: 100%;
  }
}

.withoutAnimation {
  .main-container,
  .sidebar-container {
    transition: none;
  }
}
</style>

<style lang="scss">
.el-menu-item {
  font-size: 16px !important;
}
</style>