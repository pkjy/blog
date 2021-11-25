<template>
  <example-card>
    <template v-slot:header>水印示例</template>
    <template v-slot:content>
      <el-button type="primary"
                 class="mr-2"
                 @click="setWatermark('pkjy')">
        水印一
      </el-button>
      <el-button type="success"
                 class="mr-2"
                 @click="setWatermark('水印二')">
        水印二
      </el-button>
      <el-button class="mr-2"
                 type="danger"
                 @click="clear"> 清除 </el-button>
    </template>
    <template v-slot:desc>
      简介：全屏添加水印。
    </template>
  </example-card>
</template>
<script lang="ts">
import ExampleCard from './ExampleCard.vue'
import { defineComponent } from 'vue';
import { useWatermark } from '@/utils/waterMark';
export default defineComponent({
  name:'WaterMark',
  components: { ExampleCard },
  setup() {
    const { setWatermark, clear } = useWatermark();
    return {
      setWatermark,
      clear,
    };
  },
});
</script>