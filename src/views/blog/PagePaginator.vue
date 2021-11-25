<template>
  <div class="paginator">
    <el-button v-if="prev"
               type="primary"
               class="prev"
               @click="$router.push({name: 'BlogDetail',params: {id: prev}})">
      上一篇
    </el-button>
    <el-button v-if="next"
               class="next"
               type="primary"
               @click="$router.push({name: 'BlogDetail',params: {id: next}})">
      下一篇
    </el-button>
  </div>
</template>

<script  lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'PagePaginator',
  computed: {
    prev() {
      if (!this.$store.state.blog.currentPost) return ''
      return this.$store.state.blog.currentPost.prev
        ? `${this.$store.state.blog.currentPost.prev}`
        : ''
    },
    next() {
      if (!this.$store.state.blog.currentPost) return ''
      return this.$store.state.blog.currentPost.next
        ? `${this.$store.state.blog.currentPost.next}`
        : ''
    },
    view() {
      return this.$store.state.blog.view
    }
  }
})
</script>

<style>
.paginator {
  margin: 4em 0;
  text-align: center;
}

.paginator .prev,
.paginator .next {
  display: inline-block;
  margin: 0 4px;
  padding: 4px 12px;
  border-radius: 4px;
  border-bottom: 4px solid #3aa373;
  font-size: 21px;
  color: #fff;
  background-color: #4fc08d;
  border-color: #4fc08d;
}

.paginator .prev:hover,
.paginator .next:hover {
  background-color: #22bd77;
}
</style>
