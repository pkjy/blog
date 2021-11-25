<template>
  <section class="app-main">
    <router-view v-slot="{ Component }">
      <transition name="slide-fade"
                  mode="out-in">
        <keep-alive :include="cachedViews">
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>

<script lang="ts">
import { defineComponent ,computed } from 'vue';
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'
export default defineComponent({
  name: 'AppMain',
  setup(){
    const store = useStore()
    const route = useRoute()
    const cachedViews = computed(()=>{
       return store.state.tagsView.cachedViews
    })
    const key = computed(()=>{
       return route.path
    })
    return {
      cachedViews,
      key
    }
  }
})
</script>

<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.fixed-header + .app-main {
  padding-top: 50px;
  height: 100vh;
  overflow: auto;
}

.hasTagsView {
  .app-main {
    min-height: calc(100vh - 92px);
  }

  .fixed-header + .app-main {
    padding-top: 84px;
  }
}
</style>
