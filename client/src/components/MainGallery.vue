<template>
  <section>
    <el-button type="success" @click="$router.push({name:'MainGalleryDirective'})">自定义指令</el-button>
    <el-button type="primary" @click="$router.push({name:'MainGalleryMixin'})">Mixin混入</el-button>
    <el-button type="primary" @click="$router.push({name:'MainGalleryCsv'})">表格下载</el-button>
  </section>
</template>

<script>
export default {
  name: "MainGallery",
  computed: {},
  methods: {}
};
</script>

<style>
</style>

