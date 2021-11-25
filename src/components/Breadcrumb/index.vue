<template>
  <el-breadcrumb class="app-breadcrumb"
                 separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in breadcrumbs"
                          :key="item.path">
        <span v-if="item.redirect === 'noredirect' || index === breadcrumbs.length-1"
              class="no-redirect">{{item.meta.title }}</span>
        <a v-else
           @click.prevent="handleLink(item)">{{item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script lang="ts">
import { compile } from 'path-to-regexp'
import { defineComponent, ref, onMounted, watch } from 'vue';
import { RouteRecord, useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'Breadcrumb',
  setup() {
    const route = useRoute()
    const router = useRouter()

    let breadcrumbs = ref()

    watch(route, (route) => {
      if (route.path.startsWith('/redirect/')) {
        return
      }
      getBreadcrumb()
    })

    const getBreadcrumb = () => {
      let matched = route.matched.filter((item) => item.meta && item.meta.title)
      const first = matched[0]
      if (!isDashboard(first)) {
        matched = [{ path: '/manage/dashboard', meta: { title: '首页' } } as any].concat(matched)
      }
      breadcrumbs.value = matched.filter((item) => {
        return item.meta && item.meta.title && item.meta.breadcrumb !== false
      })
    }

    const isDashboard = (route: RouteRecord) => {
      const name = route && route.name
      if (!name) {
        return false
      }
      return (name as string).trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
    }

    const pathCompile = (path: string) => {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = route
      const toPath = compile(path)
      return toPath(params)
    }

    const handleLink = (item: any) => {
      const { redirect, path } = item
      if (redirect) {
        router.push(redirect).catch(err => {
          // Throw Error "NavigationDuplicated"
          // https://github.com/vuejs/vue-router/issues/2872#issuecomment-522341874
          console.log(err)
        })
        return
      }
      router.push(pathCompile(path)).catch(err => {
        // Throw Error "NavigationDuplicated"
        // https://github.com/vuejs/vue-router/issues/2872#issuecomment-522341874
        console.log(err)
      })
    }

    onMounted(() => {
      getBreadcrumb()
    })
    return {
      breadcrumbs,
      handleLink
    }
  }
})
</script>

<style lang="scss" scoped>
.el-breadcrumb__inner,
.el-breadcrumb__inner a {
  font-weight: 400 !important;
}

.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
