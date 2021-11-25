<template>
  <div class="app-container">
    <el-button icon="el-icon-question"
               type="primary"
               @click.prevent.stop="guide">
      向导
    </el-button>
  </div>
</template>

<script lang="ts">
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import { defineComponent, onMounted, ref } from 'vue';
import type { Ref } from 'vue'
import steps from './steps'

export default defineComponent({
  name: 'Guide',
  setup() {
    const driver: Ref<Driver | null> = ref(null)

    const guide = () => {
      if (driver.value) {
        driver.value.defineSteps(steps)
        driver.value.start()
      }
    }

    onMounted(() => {
      driver.value = new Driver()
    })

    return {
      guide
    }
  }
})
</script>
