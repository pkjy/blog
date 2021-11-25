<template>
  <div class="drawer-container">
    <div>
      <h3 class="drawer-title">
        {{ $t('settings.title') }}
      </h3>

      <div class="drawer-item">
        <span>{{ $t('settings.theme') }}</span>
        <theme-picker style="float: right;height: 26px;margin: -3px 8px 0 0;"
                      @change="themeChange" />
      </div>

      <div class="drawer-item">
        <span>{{ $t('settings.showTagsView') }}</span>
        <el-switch v-model="showTagsView"
                   class="drawer-switch" />
      </div>

      <div class="drawer-item">
        <span>{{ $t('settings.showSidebarLogo') }}</span>
        <el-switch v-model="showSidebarLogo"
                   class="drawer-switch" />
      </div>

      <div class="drawer-item">
        <span>{{ $t('settings.fixedHeader') }}</span>
        <el-switch v-model="fixedHeader"
                   class="drawer-switch" />
      </div>

      <div class="drawer-item">
        <span>{{ $t('settings.sidebarTextTheme') }}</span>
        <el-switch v-model="sidebarTextTheme"
                   class="drawer-switch" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ThemePicker from '@/components/ThemePicker/index.vue'

export default defineComponent({
  name: 'Settings',
  components: {
    ThemePicker
  },
  methods: {
    themeChange(value: string) {
      this.$store.dispatch('ChangeSetting', { key: 'theme', value })
    }
  },
  computed: {
    fixedHeader() {
      this.$store.dispatch('ChangeSetting', { key: 'fixedHeader', value: this.fixedHeader })
      return this.$store.state.settings.fixedHeader
    },
    showTagsView() {
      this.$store.dispatch('ChangeSetting', { key: 'showTagsView', value: this.showTagsView })
      return this.$store.state.settings.showTagsView
    },
    showSidebarLogo() {
      this.$store.dispatch('ChangeSetting', { key: 'showSidebarLogo', value: this.showSidebarLogo })
      return this.$store.state.settings.showSidebarLogo
    },
    sidebarTextTheme() {
      this.$store.dispatch('ChangeSetting', { key: 'sidebarTextTheme', value: this.sidebarTextTheme })
      return this.$store.state.settings.sidebarTextTheme
    }
  }
})
</script>

<style lang="scss" scoped>
.drawer-container {
  padding: 24px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;

  .drawer-title {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    line-height: 22px;
  }

  .drawer-item {
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    padding: 12px 0;
  }

  .drawer-switch {
    float: right;
  }
}
</style>
