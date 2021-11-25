<template>
  <div class="validate-code">
    <canvas ref="canvasDom"
            @click="draw">您的浏览器不支持Canvas</canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';
import type { Ref } from 'vue'
export default defineComponent({
  name: 'validateCode',
  props: {
    codeLength: {
      default: 4,
      type: Number
    }
  },
  setup(props, { emit }) {
    const canvasDom = ref<HTMLCanvasElement>()
    let ctx = ref<CanvasRenderingContext2D>()
    const colors = ['red', 'yellow', 'blue', 'green', 'pink', 'black']
    let codes: Ref<string[]> = ref<string[]>([])

    watch(() => codes.value, newValue => {
      let result = ''
      for (let i = 0; i < newValue.length; i++) {
        result += newValue[i]
      }
      emit('update', result.toUpperCase())
    })

    function generateRandom() {
      codes.value = []
      const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
      const charsArr = chars.split('')
      for (let i = 0; i < props.codeLength; i++) {
        const num = Math.floor(Math.random() * charsArr.length)
        codes.value.push(charsArr[num])
      }
    }

    function draw() {
      generateRandom()
      drawText()
    }

    function drawLine() {
      const lineNumber = 3 // 线条条数
      const lineX = 160
      const lineY = 30 // 最大线条坐标
      for (let i = 0; i < lineNumber; i++) {
        if (!ctx.value) return
        ctx.value.strokeStyle = colors[Math.floor(Math.random() * 5)]
        ctx.value.beginPath()
        ctx.value.moveTo(
          Math.floor(Math.random() * lineX),
          Math.floor(Math.random() * lineY)
        )
        ctx.value.lineTo(
          Math.floor(Math.random() * lineX),
          Math.floor(Math.random() * lineY)
        )
        ctx.value.stroke()
      }
    }

    function drawText() {
      const canvas = canvasDom.value as HTMLCanvasElement
      canvas.width = 160
      canvas.height = 40
      ctx.value = canvas.getContext('2d') as CanvasRenderingContext2D
      if (!ctx.value) return
      ctx.value.fillStyle = '#BFEFFF'
      ctx.value.fillRect(0, 0, 160, 40)
      ctx.value.font = '20px Verdana'
      let x = 15
      for (let i = 0; i < 4; i++) {
        ctx.value.fillStyle = colors[Math.floor(Math.random() * 5)]
        ctx.value.fillText(codes.value[i], x, 25)
        x = x + 40
      }
      drawLine()
    }

    onMounted(() => {
      draw()
    })
    return {
      canvasDom,
      colors,
      ctx,
      draw
    }
  }
})
</script>

<style lang="scss" scoped>
.validate-code {
  width: 100%;
  line-height: 0;
  border-radius: 4px;
  overflow: hidden;
  canvas {
    cursor: pointer;
  }
}
</style>
