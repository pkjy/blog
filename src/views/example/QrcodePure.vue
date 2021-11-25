<template>
  <div>
    <example-card>
      <template v-slot:header>二维码解码</template>
      <template v-slot:content>
        <input type="file"
               multiple
               @change="handleChange">
        <div class="text-left"
             style="margin-top:16px;">
          <div>
            二维码值为：
            <span style="text-decoration:underline;margin-right:5px;"
                  v-for="(item,idx) in result"
                  :key="idx">{{item.text}} </span>
          </div>
        </div>
      </template>
      <template v-slot:desc>
        简介：先上传二维码文件，再点击解码。项目仓库
        <a href="https://github.com/pkjy/qrcode-pure">qrcode-pure</a>。
      </template>
    </example-card>

    <example-card>
      <template v-slot:header>二维码编码</template>
      <template v-slot:content>
        <input placeholder="请输入二维码值"
               type="text"
               v-model="qrValue">
        <el-button @click="encode"
                   type="primary"
                   size="mini">编码</el-button>
        <div class="text-left"
             style="margin-top:16px;">
          <div class="canvas-box"
               ref="canvasBoxA">
          </div>
        </div>
      </template>
      <template v-slot:desc>
        简介：输入需要编码的值，再点击编码即可。项目仓库
        <a href="https://github.com/pkjy/qrcode-pure">qrcode-pure</a>。
      </template>
    </example-card>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';
import ExampleCard from './ExampleCard.vue'

import qrcodePure from 'qrcode-pure'

export default defineComponent({
  name: 'QrcodePure',
  components: {
    ExampleCard
  },
  setup() {
    let result = ref([]) as Ref<string[]>
    let qrValue = ref('')
    const canvasBoxA = ref()

    const handleChange = (e: any) => {
      if (e.target.files.length === 0) return
      result.value = []

      Object.values(e.target.files).forEach(v => {
        let canvas = document.createElement('canvas'),
          ctx = canvas.getContext('2d'),
          reader = new FileReader()
        reader.onload = function (e) {
          var img = new Image()

          img.onload = function () {
            canvas.width = img.width
            canvas.height = img.height
            if (!ctx) return
            ctx.drawImage(img, 0, 0)

            let resultTemp = qrcodePure.QRDecode(canvas)
            result.value.push(resultTemp)
          }

          img.src = (e && e.target && e.target.result) as string
        }

        v && reader.readAsDataURL((v as Blob))
      })
    }
    const encode = () => {
      let result = qrcodePure.QREncode({ text: qrValue.value })
      if (canvasBoxA.value.hasChildNodes()) {
        canvasBoxA.value.removeChild(canvasBoxA.value.firstChild)
      }
      canvasBoxA.value.appendChild(result.canvas)
    }

    return {
      handleChange,
      encode,
      result,
      qrValue,
      canvasBoxA
    }
  }
})
</script>

<style>
.canvas-box {
  width: 120px;
  height: 120px;
  border: 1px solid #000;
  margin-bottom: 12px;
}
.canvas-box canvas {
  width: 100%;
  height: 100%;
}
</style>
