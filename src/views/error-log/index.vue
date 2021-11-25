<template>
  <div class="errPage-container">
     <ErrorA />
    <h3>请点击右上角bug小图标</h3>
    <aside>
      现在的管理后台基本都是spa的形式了，它增强了用户体验，但同时也会增加页面出问题的可能性，可能一个小小的疏忽就导致整个页面的死锁。好在 Vue 官网提供了一个方法来捕获处理异常，你可以在其中进行错误处理或者异常上报。
    </aside>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ErrorA from './components/ErrorA.vue'
export default defineComponent({
  name: 'ErrorLog',
  components: { ErrorA }
})
</script>

<style lang="scss" scoped>
.errPage-container {
  padding: 30px;
}
</style>
