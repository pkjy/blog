<template>
  <div class="navbar">
    <Hamburger id="hamburger-container"
               :is-active="sidebar.opened"
               class="hamburger-container"
               @toggleClick="toggleSideBar" />
    <Breadcrumb id="breadcrumb-container"
                class="breadcrumb-container" />
    <div class="right-menu">
      <ErrorLog class="errLog-container right-menu-item hover-effect" />
      <ScreenFull class="right-menu-item hover-effect" />
      <el-dropdown class="avatar-container right-menu-item hover-effect"
                   trigger="click">
        <div class="avatar-wrapper">
          <img src="//avatars.githubusercontent.com/u/14119424?v=4"
               class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>
        <template v-slot:dropdown>
          <el-dropdown-menu>
            <router-link to="/home">
              <el-dropdown-item>
                首页
              </el-dropdown-item>
            </router-link>
            <el-dropdown-item divided
                              @click="logout">
              <span style="display:block;">
                退出登录
              </span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

import Breadcrumb from '@/components/Breadcrumb/index.vue'
import ErrorLog from '@/components/ErrorLog/index.vue'
import Hamburger from '@/components/Hamburger/index.vue'
import ScreenFull from '@/components/ScreenFull/index.vue'
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  name: 'Navbar',
  components: {
    Breadcrumb,
    ErrorLog,
    Hamburger,
    ScreenFull,
  },
  setup() {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    const sidebar = computed(() => {
      return store.state.app.sidebar
    })
    const device = computed(() => {
      return store.state.app.device.toString()
    })
    const avatar = computed(() => {
      return store.state.app.avatar
    })

    const toggleSideBar = () => {
      store.dispatch('app/ToggleSideBar', false)
    }
    const logout = async () => {
      await store.dispatch('user/LogOut')
      router.push(`/login?redirect=${route.fullPath}`)
    }
    return {
      logout,
      toggleSideBar,
      sidebar,
      device,
      avatar
    }
  }
})
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    padding: 0 15px;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          margin-left: 10px;
          margin-right: 5px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
