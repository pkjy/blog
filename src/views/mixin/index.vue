<template>
  <div style="padding:20px;">
    <example-card>
      <template v-slot:header>mixin之下载Canvas：</template>
      <template v-slot:content>
        <div>
          <!-- <qrcode-vue id="mycanvas"
                      :value="shareLink"
                      :size="150" /> -->
        </div>
        <div class="block space-top-1">图片名称：</div>
        <el-input v-model="fileName"
                  type="text"
                  style="width:150px;" /><br>
        <el-button type="primary"
                   style="width:150px;margin:10px auto 0;"
                   @click="downloadCanvas">
          下载
        </el-button>
      </template>
      <template v-slot:desc>
        简介：引入Tools的Mixin之后，即可调用exportCanvasAsPNG函数进行下载。该函数接收两个参数，第一个为CANVAS的DOM，第二个为文件名称。
      </template>
    </example-card>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ExampleCard from '@/components/ExampleCard/index.vue'
import { exportCanvasAsPNG } from '@/utils/tools'

export default defineComponent({
  name: 'Mixin',
  components: { ExampleCard },
  data() {
    return {
      fileName: '',
      shareLink: 'hello world',
    }
  },
  methods: {
    downloadCanvas() {
      const canvas = (document.getElementById('mycanvas') as any)
        .getElementsByTagName('canvas')[0]
      exportCanvasAsPNG(canvas, `${this.fileName}`)
    },
  }

})
</script>

<style>
</style>
