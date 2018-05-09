<template>
  <section>
    <div class="archive">
      <template v-for="(post, index) in postlist">
        <h2 class="archive-year" v-if="yearChange(index)" :key="post.date">
          {{ post.date|formdate('YYYY-MM-DD') }}
        </h2>
        <div class="post-item" :key="post.path">
          <div class="post-info">{{ post.date|formdate }}</div>
          <router-link :to="post.path" class="post-title-link">{{ post.title }}</router-link>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainArchives',
  computed: {
    postlist() {
      return this.$store.state.postlist
    }
  },
  methods: {
    yearChange(index) {
      if (index === 0) {
        return true
      }
      const postlist = this.$options.computed.postlist.call(this)
      return (
        postlist[index].date.slice(0, 4) !==
        postlist[index - 1].date.slice(0, 4)
      )
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.commit('setView', 'archives')
    })
  }
}
</script>

<style>
.archive .post-item {
  padding: 2px 0 0 50px;
}

.archive .post-time,
.archive .post-title-link {
  font-size: 1rem;
}

.archive .post-title-link {
  display: block;
  margin-left: 125px;
  color: #42b983;
  word-break: break-all;
}

.archive .post-title-link:hover {
  border-bottom: 0;
  color: #267b54;
}

.archive .post-info {
  float: left;
  width: 125px;
  color: #7f8c8d;
}
</style>

