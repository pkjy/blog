<template>
  <div>
    <example-card>
      <template slot="header">二维码解码</template>
      <template slot="content">
        <input type="file" multiple @change="handleChange">
        <div class="text-left" style="margin-top:16px;">
          <div>
            二维码值为：
            <span style="text-decoration:underline;margin-right:5px;" v-for="(item,idx) in result" :key="idx">{{item.text}} </span>
          </div>
        </div>
      </template>
      <template slot="desc">
        简介：先上传二维码文件，再点击解码。项目仓库
        <a href="https://github.com/pkjy/qrcode-pure">qrcode-pure</a>。
      </template>
    </example-card>

    <example-card>
      <template slot="header">二维码编码</template>
      <template slot="content">
        <input placeholder="请输入二维码值" type="text" v-model="qrvalue">
        <el-button @click="encode" type="primary" size="mini" class="m-l_2">编码</el-button>
        <div class="text-left" style="margin-top:16px;">
          <div class="canvas-box" ref="canvasBox">
          </div>
        </div>
      </template>
      <template slot="desc">
        简介：输入需要编码的值，再点击编码即可。项目仓库
        <a href="https://github.com/pkjy/qrcode-pure">qrcode-pure</a>。
      </template>
    </example-card>
  </div>
</template>

<script>
import ExampleCard from '@/components/common/ExampleCard'
import qrdecode from 'qrcode-pure/lib/qrdecode'
import qrencode from 'qrcode-pure/lib/qrencode'

export default {
  name: 'MainGalleryQrcodePure',
  components: {
    ExampleCard
  },
  data() {
    return {
      result: [],
      qrvalue: ''
    }
  },
  methods: {
    handleChange(e) {
      if (e.target.files.length === 0) return
      this.result = []
      let self = this
      Object.values(e.target.files).forEach(v => {
        let canvas = document.createElement('canvas'),
          ctx = canvas.getContext('2d'),
          reader = new FileReader()

        reader.onload = function(e) {
          var img = new Image()

          img.onload = function() {
            canvas.width = img.width
            canvas.height = img.height
            ctx.drawImage(img, 0, 0)

            let result = qrdecode(canvas)
            self.result.push(result)
          }

          img.src = e.target.result
        }

        v && reader.readAsDataURL(v)
      })
    },
    encode() {
      let result = qrencode({ text: this.qrvalue })
      if (this.$refs.canvasBox.hasChildNodes()) {
        this.$refs.canvasBox.removeChild(this.$refs.canvasBox.firstChild)
      }
      this.$refs.canvasBox.appendChild(result.canvas)
    }
  },
  created() {},
  mounted() {}
}
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
