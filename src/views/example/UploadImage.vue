<template>
  <div>
    <example-card>
      <template v-slot:header>上传图片</template>
      <template v-slot:content>
        <UploadImage :value="imageSrc" @upload="upLoad"/>
      </template>
      <template v-slot:desc>
        简介：利用el-upload组件，支持拖动上传。
      </template>
    </example-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ExampleCard from './ExampleCard.vue'
import UploadImage from '@/components/UploadImage/index.vue'

export default defineComponent({
  name: 'UploadImageExample',
  components: {
    ExampleCard,
    UploadImage
  },
  setup() {
    const imageSrc = ref('')

    const upLoad = (fileBase64: string) => {
      imageSrc.value = fileBase64
    }
    return {
      upLoad,
      imageSrc
    }
  }
})
</script>