<template>
  <div id="screenfull">
    <Svg :name="isFullscreen? 'kai-tuichuquanping': 'kai-quanpingqiehuan'"
         @click="click"></Svg>
  </div>
</template>

<script lang="ts">
import screenfull from 'screenfull'
import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue';
import { ElMessage } from 'element-plus'

const sf = screenfull

export default defineComponent({
  name: 'ScreenFull',
  setup() {
    let isFullscreen = ref(false)

    const change = () => {
      if (sf.isEnabled) {
        isFullscreen.value = sf.isFullscreen
      }
    }
    const click = () => {
      if (!sf.isEnabled) {
        ElMessage({
          message: 'you browser can not work',
          type: 'warning'
        })
        return false
      }
      sf.toggle()
    }
    onMounted(() => {
      if (sf.isEnabled) {
        sf.on('change', change)
      }
    })

    onBeforeUnmount(() => {
      if (sf.isEnabled) {
        sf.off('change', change)
      }
    })

    return {
      isFullscreen,
      click
    }
  }
})
</script>
