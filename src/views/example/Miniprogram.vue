<template>
  <div>
    <example-card>
      <template v-slot:header>微信小程序</template>
      <template v-slot:content>
        <div class="text-left"
             style="margin-top:16px;">
          <div>
            <img :src="miniprogramImage"
                 alt="小程序">
          </div>
        </div>
      </template>
      <template v-slot:desc>
        简介：功能一，语音输入，进行翻译；功能二，图片OCR。
      </template>
    </example-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ExampleCard from './ExampleCard.vue'

export default defineComponent({
  name: 'Miniprogram',
  components: {
    ExampleCard
  },
  setup(){
    return{
      miniprogramImage: require('@/assets/img/mini-program.png')
    }
  }
})
</script>