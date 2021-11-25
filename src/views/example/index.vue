<template>
  <div class="example">
    <QrcodePure id='#QrcodePure' />
    <Directive />
    <WaterMark />
    <Captcha />
    <!-- <Miniprogram /> -->
    <UploadImage id='#UploadImage' />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import QrcodePure from './QrcodePure.vue'
// import Miniprogram from './Miniprogram.vue'
import Directive from './Directive.vue'
import WaterMark from './WaterMark.vue'
import Captcha from './Captcha.vue'
import UploadImage from './UploadImage.vue'

export default defineComponent({
  name: 'Example',
  components: {
    QrcodePure,
    // Miniprogram,
    Directive,
    WaterMark,
    Captcha,
    UploadImage
  }
})
</script>
<style lang="scss" scoped>
.example {
  margin-left: 10px;
  margin-bottom: 10px;
}
</style>
