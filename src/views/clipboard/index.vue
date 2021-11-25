<template>
  <div class="app-container">
    <el-input v-model="inputData"
              placeholder="Please input"
              style="width:400px; max-width:100%;margin-right:20px;" />
    <el-button type="primary"
               icon="el-icon-document"
               @click="handleClipboard(inputData)">
      复制
    </el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { handleClipboard } from '@/utils/clipboard' // use clipboard directly

export default defineComponent({
  name: 'Clipboard',
  setup() {
    const inputData = ref('https://pkjy.github.io/#/')

    return {
      inputData,
      handleClipboard,
    }
  }
})
</script>
