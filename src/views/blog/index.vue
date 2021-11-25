<template>
  <ul class="post-list">
    <li v-for="post in postlist"
        :key="post.path||post.id"
        class="post-list-item">
      <article class="post-block">
        <h1 class="post-main-title">
          <div class="post-title-link"
               @click="$router.push({name: 'BlogDetail',params: {id: post.path}})">
            {{ post.title }}
          </div>
        </h1>
        <div class="post-info">{{ post.date }}</div>
        <div class="post-content">{{post.abstractContent}}</div>
        <!-- <div class="post-content"
             v-html="md2html(post.excerpt)"></div> -->
        <router-link :to="post.path|| post.sourceURL">
          <span class="read-more">READ MORE</span>
        </router-link>
      </article>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { md2html } from '@/utils/markdown-and-html'
import { getArticles } from '@/api/articles'

export default defineComponent({
  name: 'Blog',
  computed: {
    siteConfig() {
      return this.$store.state.siteConfig
    },
    themeConfig() {
      return this.$store.state.themeConfig
    }
  },
  data() {
    return {
      postlist: [],
      interval: null,
    }
  },
  methods: {
    md2html
  },
  async mounted() {
    const res = await getArticles()
    this.postlist = (res.data as any).items
    console.log('res', res)
  },
})
</script>

<style>
.post-main-title {
  color: #27cfc3;
}
.post-title-link {
  cursor: pointer;
}
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
  content: "";
}
.post-list .post-content > ul {
  list-style: initial;
}
.post-list .read-more {
  color: #42b983;
}
</style>
