<template>
  <div class="paginator"
       v-if="view === 'post'">
    <el-button v-if="prev"
               @click="$router.push({path:prev})"
               type="primary">上一篇</el-button>
    <el-button v-if="next"
               @click="$router.push({path:next})"
               type="primary">下一篇</el-button>

    <!-- <router-link v-if="prev" :to="prev" class="prev">上一篇</router-link>
    <router-link v-if="next" :to="next" class="prev">下一篇</router-link> -->
  </div>
</template>

<script>
export default {
  name: 'PagePaginator',
  computed: {
    prev() {
      return this.$store.state.currentPost.prev
        ? `/${this.$store.state.currentPost.prev}`
        : ''
    },
    next() {
      return this.$store.state.currentPost.next
        ? `/${this.$store.state.currentPost.next}`
        : ''
    },
    view() {
      return this.$store.state.view
    }
  }
}
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
  font-size: 14px;
  color: #fff;
  background-color: #4fc08d;
}

.paginator .prev:hover,
.paginator .next:hover {
  background-color: #22bd77;
}
</style>
