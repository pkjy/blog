<template>
  <div>
    <example-card>
      <template v-slot:header>水纹效果指令：（v-wave）</template>
      <template v-slot:content>
        <el-button type="primary"
                   v-waves>v-wave</el-button>
        <el-button type="success"
                   v-waves>v-wave</el-button>
        <el-button type="danger"
                   v-waves>v-wave</el-button>
      </template>
      <template v-slot:desc>
        简介：在按钮上添加v-wave指令即可实现。
      </template>
    </example-card>

    <example-card>
      <template v-slot:header>下载CANVAS指令：（v-download）</template>
      <template v-slot:content>
        <div class="text-left">
          <div class="canvas-box"
               v-download="{status:downloadTag,fileName:Date.now()}"
               ref="canvasBoxB">
          </div>
        </div>
        <el-button size="small"
                   type="primary"
                   style="width:150px;margin:10px auto 0;"
                   @click="downloadTag=!downloadTag">下载</el-button>
      </template>
      <template v-slot:desc>
        简介：在canvas的DOM或者其父级上添加指令v-download，接收两个参数，status为开始下载的开关，布尔值，为真时将开始下载。fileName为文件的名称。
      </template>
    </example-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, nextTick } from 'vue';

import ExampleCard from './ExampleCard.vue'
import qrcodePure from 'qrcode-pure'

export default defineComponent({
  name: 'Directive',
  components: {
    ExampleCard
  },
  setup() {
    const canvasBoxB = ref()
    const downloadTag = ref(false)

    const encode = async () => {
      let result = qrcodePure.QREncode({ text: 'hello,world' })
      await nextTick()
      if (canvasBoxB.value.hasChildNodes()) {
        canvasBoxB.value.removeChild(canvasBoxB.value.firstChild)
      }
      canvasBoxB.value.appendChild(result.canvas)
      canvasBoxB.value.setAttribute('v-download', '')
    }
    encode()
    return {
      downloadTag,
      shareLink: 'pkjy.github.io',
      canvasBoxB
    }
  }
})
</script>
