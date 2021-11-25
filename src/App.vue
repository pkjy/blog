<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'app',
  created() {
    (document.querySelector('.loading-warp-main') as any).style.display = 'none';
  }
})
</script>
