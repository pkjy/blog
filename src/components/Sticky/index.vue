<template>
  <div :style="{height: height, zIndex: zIndex}"
       ref="el">
    <div :class="className"
         :style="{top: (isSticky ? stickyTop +'px' : ''), zIndex: zIndex, position: position, width: width, height: height}">
      <slot>
        <div>sticky</div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onActivated, onMounted, onUnmounted, ref } from 'vue';

export default defineComponent({
  name: 'Sticky',
  props: {
    stickyTop: {
      default: 0,
      type: Number
    },
    zIndex: {
      default: 1,
      type: Number
    },
    className: {
      default: '',
      type: String
    }
  },
  setup(props) {
    const el = ref()
    let active = ref(false)
    let position = ref('')
    let isSticky = ref(false)
    let width = ref('auto')
    let height = ref('auto')

    const sticky = () => {
      if (active.value) {
        return
      }
      position.value = 'fixed'
      active.value = true
      width.value = width.value + 'px'
      isSticky.value = true
    }

    const handleReset = () => {
      if (!active.value) {
        return
      }
      position.value = ''
      width.value = 'auto'
      active.value = false
      isSticky.value = false
    }

    const handleScroll = () => {
      const tempWidth = el.value.getBoundingClientRect().width
      width.value = (tempWidth.toString() + 'px') || 'auto'
      const offsetTop = el.value.getBoundingClientRect().top
      if (offsetTop < props.stickyTop) {
        sticky()
        return
      }
      handleReset()
    }

    const handleResize = () => {
      if (isSticky.value) {
        width.value = el.value.getBoundingClientRect().width.toString() + 'px'
      }
    }

    onMounted(() => {
      height.value = el.value.getBoundingClientRect().height.toString() + 'px'
      window.addEventListener('scroll', handleScroll)
      window.addEventListener('resize', handleResize)
    })

    onActivated(() => {
      handleScroll()
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    })

    return {
      el,
      height,
      width,
      position,
      isSticky,
      active
    }
  }
})
</script>
