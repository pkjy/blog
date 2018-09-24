<template>
  <div>
    <example-card>
      <template slot="header">微信小程序</template>
      <template slot="content">
        <div class="text-left"
             style="margin-top:16px;">
          <div>
            <img :src="miniprogramImage"
                 alt="小程序">
          </div>
        </div>
      </template>
      <template slot="desc">
        简介：功能一，语音输入，进行翻译；功能二，图片OCR。
      </template>
    </example-card>
  </div>
</template>

<script>
import ExampleCard from '@/components/common/ExampleCard'
export default {
  name: 'MainGalleryMiniprogram',
  components: {
    ExampleCard
  },
  data() {
    return {
      miniprogramImage: require('@/assets/img/mini-program.png')
    }
  },
  methods: {},
  created() {},
  mounted() {}
}
</script>

<style>
</style>
