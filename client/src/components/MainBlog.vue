<template>
  <ul class="post-list">
    <li v-for="post in postlist" :key="post.path" class="post-list-item">
      <article class="post-block">
        <h2 class="post-title">
          <router-link :to="post.path" class="post-title-link">
            {{ post.title }}
          </router-link>
        </h2>
        <div class="post-info">{{ post.date |formdate}}</div>
        <div class="post-content" v-html="md2html(post.excerpt)"></div>
        <router-link :to="post.path">
          <span class="read-more">READ MORE</span>
        </router-link>
      </article>
    </li>
  </ul>
</template>

<script>
import imgLoadAni from '@/utils/img-load-animation'
import { md2html } from '@/utils/markdown-and-html'

export default {
  name: 'MainBlog',
  data() {
    return {}
  },
  computed: {
    siteConfig() {
      return this.$store.state.siteConfig
    },
    themeConfig() {
      return this.$store.state.themeConfig
    },
    postlist() {
      return this.$store.state.postlist
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.commit('setView', 'index')
    })
  },
  methods: {
    md2html
  },
  updated: imgLoadAni
}
</script>

<style>
.post-list .post-list-item {
  padding: 1em 0 2em;
  border-bottom: 1px solid #ddd;
}
.post-list .post-list-item:last-child {
  border-bottom: 0px;
}
.post-list .post-content h2:before,
.post-list .post-content h3:before,
.post-list .post-content h4:before,
.post-list .post-content h5:before,
.post-list .post-content h6:before {
  content: '';
}
.post-list .post-content > ul {
  list-style: initial;
}
.post-list .read-more {
  color: #42b983;
}
</style>


