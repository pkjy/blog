<template>
  <div id="tags-view-container"
       class="tags-view-container">
    <scroll-pane ref="scrollPane"
                 class="tags-view-wrapper">
      <router-link v-for="tag in visitedViews"
                   ref="tag"
                   :key="tag.path"
                   :class="isActive(tag) ? 'active' : ''"
                   :to="{path: tag.path, query: tag.query, fullPath: tag.fullPath}"
                   tag="span"
                   class="tags-view-item"
                   @click.middle="!isAffix(tag)?closeSelectedTag(tag):''"
                   @contextmenu.prevent="openMenu(tag, $event)">
        {{ tag.meta.title }}
        <span v-if="!isAffix(tag)"
              class="el-icon-close"
              @click.prevent.stop="closeSelectedTag(tag)" />
      </router-link>
    </scroll-pane>
    <ul v-show="visible"
        :style="{left: left+'px', top: top+'px'}"
        class="contextmenu">
      <li @click="refreshSelectedTag(selectedTag)">
        刷新
      </li>
      <li v-if="!isAffix(selectedTag)"
          @click="closeSelectedTag(selectedTag)">
        关闭
      </li>
      <li @click="closeOthersTags">
        关闭其他
      </li>
      <li @click="closeAllTags(selectedTag)">
        关闭全部
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import path from 'path'
import { defineComponent } from 'vue';
import { RouteRecordRaw } from 'vue-router'
import { ITagView } from '@/store/modules/tags-view'
import ScrollPane from './ScrollPane.vue'
interface data {
  visible: boolean
  top: number
  left: number
  selectedTag: { fullPath?: string }
  affixTags: ITagView[]
}
export default defineComponent({
  name: 'TagsView',
  components: {
    ScrollPane
  },
  data() {
    return {
      visible: false,
      top: 0,
      left: 0,
      selectedTag: {},
      affixTags: [],
    } as data
  },
  computed: {
    visitedViews() {
      return this.$store.state.tagsView.visitedViews
    },
    routes() {
      return this.$store.state.permission.routes
    }
  },
  watch: {
    $route: function () {
      this.addTags()
      this.moveToCurrentTag()
    },
    visible: function (value: boolean) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu, { passive: true })
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    }
  },
  mounted() {
    this.initTags()
    this.addTags()
  },
  methods: {
    isActive(route: ITagView) {
      return route.path === this.$route.path
    },
    isAffix(tag: ITagView) {
      return tag.meta && tag.meta.affix
    },
    filterAffixTags(routes: RouteRecordRaw[], basePath = '/') {
      let tags: ITagView[] = []
      routes.forEach(route => {
        if (route.meta && route.meta.affix) {
          const tagPath = path.resolve(basePath, route.path)
          tags.push({
            fullPath: tagPath,
            path: tagPath,
            name: route.name,
            meta: { ...route.meta }
          })
        }
        if (route.children) {
          const childTags = this.filterAffixTags(route.children, route.path)
          if (childTags.length >= 1) {
            tags = [...tags, ...childTags]
          }
        }
      })
      return tags
    },
    initTags() {
      this.affixTags = this.filterAffixTags(this.routes)
      for (const tag of this.affixTags) {
        // Must have tag name
        if (tag.name) {
          this.$store.dispatch('tagsView/addVisitedView', tag)
        }
      }
    },
    addTags() {
      const { name } = this.$route
      if (name) {
        this.$store.dispatch('tagsView/addView', this.$route)
      }
    },
    moveToCurrentTag() {
      const tags = this.$refs.tag as any[] // TODO: better typescript support for router-link
      this.$nextTick(() => {
        for (const [, tag] of Object.entries(tags)) {
          if (tag?.to && (tag.to.path === this.$route.path)) {
            (this.$refs.scrollPane as typeof ScrollPane).moveToTarget(tag as any)
            // When query is different then update
            if ((tag.to as ITagView).fullPath !== this.$route.fullPath) {
              this.$store.dispatch('tagsView/updateVisitedView', this.$route)
            }
            break
          }
        }
      })
    },
    refreshSelectedTag(view: { fullPath: string }) {
      this.$store.dispatch('tagsView/delCachedView', view)
      const { fullPath } = view
      this.$nextTick(() => {
        this.$router.replace({
          path: '/redirect' + fullPath
        })
      })
    },
    closeSelectedTag(view: ITagView) {
      this.$store.dispatch('tagsView/delView', view)
      if (this.isActive(view)) {
        this.toLastView(this.$store.state.tagsView.visitedViews, view)
      }
    },
    closeOthersTags() {
      if (this.selectedTag.fullPath !== undefined) {
        this.$router.push(this.selectedTag.fullPath)
      }
      this.$store.dispatch('tagsView/delOthersViews', this.selectedTag)
      this.moveToCurrentTag()
    },
    closeAllTags(view: ITagView) {
      this.$store.dispatch('tagsView/delAllViews')
      if (this.affixTags.some(tag => tag.path === this.$route.path)) return
      this.toLastView(this.$store.state.tagsView.visitedViews, view)
    },
    toLastView(visitedViews: ITagView[], view: ITagView) {
      const latestView = visitedViews.slice(-1)[0]
      if (latestView !== undefined && latestView.fullPath !== undefined) {
        this.$router.push(latestView.fullPath)
      } else {
        // Default redirect to the home page if there is no tags-view, adjust it if you want
        if (view.name === 'Dashboard') {
          // to reload home page
          this.$router.replace({ path: '/redirect' + view.fullPath })
        } else {
          this.$router.push('/')
        }
      }
    },
    openMenu(tag: ITagView, e: MouseEvent) {
      const menuMinWidth = 105
      const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
      const offsetWidth = (this.$el as HTMLElement).offsetWidth // container width
      const maxLeft = offsetWidth - menuMinWidth // left boundary
      const left = e.clientX - offsetLeft + 15 // 15: margin right
      if (left > maxLeft) {
        this.left = maxLeft
      } else {
        this.left = left
      }
      this.top = e.clientY
      this.visible = true
      this.selectedTag = tag
    },
    closeMenu() {
      this.visible = false
    }
  }
})
</script>

<style lang="scss">
.tags-view-wrapper {
  .tags-view-item {
    .el-icon-close {
      width: 16px;
      height: 16px;
      vertical-align: 1px;
      margin-left: 8px;
      border-radius: 50%;
      text-align: center;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform-origin: 100% 50%;

      &:before {
        transform: scale(0.6);
        display: inline-block;
        vertical-align: -1px;
      }

      &:hover {
        background-color: #b4bccc;
        color: #fff;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.tags-view-container {
  height: 41px;
  width: 100%;
  background: #fff;
  margin-top: 1px;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);

  .tags-view-wrapper {
    .tags-view-item {
      display: inline-block;
      position: relative;
      cursor: pointer;
      height: 40px;
      line-height: 40px;
      border: 1px solid #d8dce5;
      color: #495060;
      background: #fff;
      padding: 0 16px;
      font-size: 12px;
      border: none;

      &:hover {
        background: #409eff14;
      }

      &.active {
        background-color: #409eff14;
        color: rgb(77, 112, 255);
        border-color: #f4f4f4;

        &::before {
          content: "";
          background: rgb(77, 112, 255);
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
          margin-right: 8px;
        }
      }
    }
  }

  .contextmenu {
    margin: 0;
    background: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);

    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;

      &:hover {
        background: #eee;
      }
    }
  }
}
</style>
