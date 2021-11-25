``<template>
  <div v-if="!item.meta || !item.meta.hidden"
       :class="[isCollapse ? 'simple-mode' : 'full-mode', {'first-level': isFirstLevel}]">
    <template v-if="!alwaysShowRootMenu && theOnlyOneChild && !theOnlyOneChild.children">
      <sidebar-item-link v-if="theOnlyOneChild.meta"
                         :to="resolvePath(theOnlyOneChild.path)">
        <el-menu-item :index="resolvePath(theOnlyOneChild.path)"
                      :class="{'submenu-title-noDropdown': isFirstLevel}">
          <Svg v-if="theOnlyOneChild.meta.icon"
               :name="theOnlyOneChild.meta.icon"></Svg>
          <template #title
                    v-if="theOnlyOneChild.meta.title">{{ theOnlyOneChild.meta.title }}</template>
        </el-menu-item>
      </sidebar-item-link>
    </template>
    <el-sub-menu v-else
                 :index="resolvePath(item.path)"
                 popper-append-to-body>
      <template #title>
        <Svg v-if="item.meta && item.meta.icon"
             :name="item.meta.icon"></Svg>
        <template v-if="item.meta && item.meta.title && !isCollapse">{{ item.meta.title }}</template>
      </template>
      <template v-if="item.children">
        <sidebar-item v-for="child in item.children"
                      :key="child.path"
                      :item="child"
                      :is-collapse="isCollapse"
                      :is-first-level="false"
                      :base-path="resolvePath(child.path)"
                      class="nest-menu" />
      </template>
    </el-sub-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRef, computed, unref } from 'vue';
import path from 'path'
import { isExternal } from '@/utils/validate'
import SidebarItemLink from './SidebarItemLink.vue'
interface chhildren {
  meta: { hidden: boolean }
}
interface item {
  meta: {
    alwaysShow: false
  }
  children: chhildren[]
}
export default defineComponent({
  name: 'SidebarItem',
  components: {
    SidebarItemLink
  },
  props: {
    item: {
      required: true,
      type: Object as PropType<item>,
    },
    isCollapse: {
      default: false,
      type: Boolean
    },
    isFirstLevel: {
      default: true,
      type: Boolean
    },
    basePath: {
      default: '',
      type: String
    },
  },
  setup(props) {
    const basePath = toRef(props, 'basePath')
    const item = toRef(props, 'item')

    const alwaysShowRootMenu = computed(() => {
      if (unref(item).meta && unref(item).meta.alwaysShow) {
        return true
      }
      return false
    })
    const showingChildNumber = computed(() => {
      if (unref(item).children) {
        const showingChildren = unref(item).children.filter((item) => {
          if (item.meta && item.meta.hidden) {
            return false
          } else {
            return true
          }
        })
        return showingChildren.length
      }
      return 0
    })

    const theOnlyOneChild = computed(() => {
      if (showingChildNumber.value > 1) {
        return null
      }
      if (unref(item).children) {
        for (const child of unref(item).children) {
          if (!child.meta || !child.meta.hidden) {
            return child
          }
        }
      }
      // If there is no children, return itself with path removed,
      // because this.basePath already conatins item's path information
      return { ...unref(item), path: '' }
    })


    const resolvePath = (routePath: string): string => {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(basePath.value)) {
        return basePath.value
      }
      return path.resolve(basePath.value, routePath)
    }
    return { resolvePath, theOnlyOneChild, alwaysShowRootMenu }
  }
})
</script>

<style lang="scss">
svg{
  font-size: 20px;
}

.full-mode {
  svg {
    width: 1em;
    height: 1em;
    display: inline-block;
    margin: 0 16px 0 5px;
    color: rgb(191, 203, 217);
  }
  .nest-menu .el-sub-menu > .el-sub-menu__title,
  .el-sub-menu .el-menu-item {
    min-width: 210px !important;
    background-color: #fff !important;

    &:hover {
      background-color: #f3f3f3 !important;
    }
  }
}

.simple-mode {
  &.first-level {
    .submenu-title-noDropdown {
      padding: 0 !important;
      position: relative;

      .el-tooltip {
        padding: 0 !important;
      }
    }

    .el-sub-menu__title,
    .el-tooltip {
      text-align: center;
    }

    .el-sub-menu {
      overflow: hidden;

      & > .el-sub-menu__title {
        padding: 0px !important;

        .el-sub-menu__icon-arrow {
          display: none;
        }

        & > span {
          display: none;
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.svg-icon {
  margin-right: 16px;
}

.simple-mode {
  .svg-icon {
    margin-left: 20px;
  }
}
.el-menu-item:hover {
  background: #f3f3f3;
}

</style>
