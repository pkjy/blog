<template>
  <svg class="kai"
       :style="{fontSize:fontSize}"
       aria-hidden="true">
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Svg',
  props: {
    name: String,
    fontSize: String
  }
})
</script>