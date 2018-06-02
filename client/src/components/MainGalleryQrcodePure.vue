<template>
  <div>
    <example-card>
      <template slot="header">二维码解码</template>
      <template slot="content">
        <input type="file" @change="handleChange">
        <div class="text-left" style="margin-top:16px;">
          <div style="width:120px;height:120px;border:1px solid #000;margin-bottom:12px;">
            <canvas ref="decode-canvas" style="width:100%;height:100%;"></canvas>
          </div>
          <div>
            <el-button @click="decode" type="primary">解码</el-button>
            二维码值为：{{result}}
          </div>
        </div>
      </template>
      <template slot="desc">
        简介：先上传二维码文件，再点击解码。项目仓库
        <a href="https://github.com/pkjy/qrcode-pure">qrcode-pure</a>。
      </template>
    </example-card>
  </div>
</template>

<script>
import ExampleCard from '@/components/common/ExampleCard'
import qedecode from 'qrcode-pure/lib/qrdecode'
export default {
  name: 'MainGalleryQrcodePure',
  components: {
    ExampleCard
  },
  data() {
    return {
      result: ''
    }
  },
  methods: {
    decode() {
      let result = qedecode(this.$refs['decode-canvas'])

      if (result) {
        this.result = result
        console.log('当前二维码值为：', result)
      }
    },
    handleChange(e) {
      var canvas = this.$refs['decode-canvas'],
        ctx = canvas.getContext('2d'),
        file = e.target.files[0],
        reader = new FileReader()

      reader.onload = function(e) {
        var img = new Image()

        img.onload = function() {
          canvas.width = img.width
          canvas.height = img.height
          ctx.drawImage(img, 0, 0)
        }

        img.src = e.target.result
      }

      file && reader.readAsDataURL(file)
    }
  },
  created() {},
  mounted() {}
}
</script>
