<template>
  <div :class="[{'is-active': isActive}]"
       @click="toggleClick">
    <Svg name="kai-caidanzhankai"></Svg>
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
export default defineComponent({
  name: 'Hamburger',
  props: {
    isActive: {
      default: false,
      type: Boolean
    }
  },
  setup(props,context) {
    const toggleClick = () => {
      context.emit('toggleClick')
    }
    return{
      toggleClick,
    }
  }
})
</script>

<style lang="scss" scoped>
.kai {
  vertical-align: middle;
}

.is-active {
  transform-origin: center;
  transform: rotate(180deg);
}
</style>
