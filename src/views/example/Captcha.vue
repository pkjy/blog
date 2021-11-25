<template>
  <div>
    <example-card>
      <template v-slot:header>图形验证码</template>
      <template v-slot:content>
        <validate-code ref="validate-code"
                       @update="code=> validateCode = code" />
        <div class="m-t_1">当前验证码：{{validateCode}}</div>
      </template>
      <template v-slot:desc>
        简介：使用canvas绘制图形验证码, update 事件接收当前验证码内容作为入参。安全考虑，生产环境请使用服务端渲染验证码。
      </template>
    </example-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ExampleCard from './ExampleCard.vue'
import ValidateCode from '@/components/ValidateCode/index.vue'

export default defineComponent({
  name: 'Captcha',
  components: {
    ExampleCard,
    ValidateCode
  },
  setup() {
    const validateCode = ref('')

    return {
      validateCode
    }
  }
})
</script>