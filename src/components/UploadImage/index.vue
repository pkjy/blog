<template>
  <div class="upload-container">
    <el-upload :data="dataObj"
               :multiple="false"
               :show-file-list="false"
               :on-success="handleImageSuccess"
               class="image-uploader"
               drag
               action="https://httpbin.org/post">
      <i class="el-icon-upload" />
      <div class="el-upload__text">
        将文件拖到此处，或<em>点击上传</em>
      </div>
    </el-upload>
    <div class="image-preview">
      <div v-show="imageUrl.length>1"
           class="image-preview-wrapper">
        <img :src="imageUrl">
        <div class="image-preview-action">
          <i class="el-icon-delete"
             @click="rmImage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'UploadImage',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    const dataObj = reactive({ token: '', key: '' })

    const imageUrl = computed(() => {
      return props.value
    })

    const emitInput = (value: string) => {
      emit('upload', value)
    }

    const rmImage = () => {
      emitInput('')
    }

    const handleImageSuccess = (res: any) => {
      console.log('res', res)
      emitInput(res.files.file)
    }
    return {
      rmImage,
      handleImageSuccess,
      dataObj,
      imageUrl
    }
  }
})
</script>

<style lang="scss" scoped>
.upload-container {
  width: 100%;
  display: flex;
  position: relative;

  .image-uploader {
    flex: 1;
  }

  .image-preview {
    width: 200px;
    height: 200px;
    position: relative;
    border: 1px dashed #d9d9d9;
    float: left;
    margin-left: 50px;

    .image-preview-wrapper {
      position: relative;
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .image-preview-action {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      cursor: default;
      text-align: center;
      color: #fff;
      opacity: 0;
      font-size: 20px;
      background-color: rgba(0, 0, 0, 0.5);
      transition: opacity 0.3s;
      cursor: pointer;
      text-align: center;
      line-height: 200px;

      .el-icon-delete {
        font-size: 36px;
      }
    }

    &:hover {
      .image-preview-action {
        opacity: 1;
      }
    }
  }
}
</style>
