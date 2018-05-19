<template>
  <div>
    <example-card>
      <template slot="header">水纹效果指令：（v-wave）</template>
      <template slot="content">
        <el-button type="primary" v-waves>v-wave</el-button>
        <el-button type="success" v-waves>v-wave</el-button>
        <el-button type="danger" v-waves>v-wave</el-button>
      </template>
      <template slot="desc">
        简介：在按钮上添加v-wave指令即可实现。
      </template>
    </example-card>

    <example-card>
      <template slot="header">下载CANVAS指令：（v-download）</template>
      <template slot="content">
        <div>
          <qrcode-vue :value="shareLink" :size="150" id="mycanvas" v-download="{status:downloadTag,fileName:fileName}"></qrcode-vue>
        </div>
        <div class="block space-top-1">图片名称：</div>
        <el-input type="text" v-model="fileName" style="width:150px;"></el-input><br>
        <el-button size="small" type="primary" style="width:150px;margin:10px auto 0;" @click="downloadTag=!downloadTag">下载</el-button>
      </template>
      <template slot="desc">
        简介：在canvas的DOM或者其父级上添加指令v-download，接收两个参数，status为开始下载的开关，布尔值，为真时将开始下载。fileName为文件的名称。
      </template>
    </example-card>
  </div>
</template>

<script>
import QrcodeVue from "qrcode.vue";
import ExampleCard from "@/components/common/ExampleCard";

export default {
  name: "Directive",
  components: {
    QrcodeVue,
    ExampleCard
  },
  data() {
    return {
      downloadTag: false,
      shareLink: "pkjy.github.io",
      fileName: "ok"
    };
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>
