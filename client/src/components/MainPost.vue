<template>
  <div class="post">
    <article class="post-block">
      <h1 class="post-title">{{ postTitle }}</h1>
      <div class="post-info">{{ postDate | formdate}}</div>
      <div class="post-content" v-html="postContent"></div>
    </article>
  </div>
</template>

<script>
import imgLoadAni from '@/utils/img-load-animation'

export default {
  name: 'MainPost',
  computed: {
    postTitle() {
      return this.$store.state.currentPost.title
    },
    postDate() {
      return this.$store.state.currentPost.date
        ? this.$store.state.currentPost.date
        : new Date()
    },
    postContent() {
      return this.$store.state.currentPost.content
    }
  },
  // beforeRouteEnter(to, from, next) {
  //   next(vm => {
  //     vm.$store.dispatch('getPost', to.path)
  //   })
  // },
  beforeRouteLeave(to, from, next) {
    this.$store.commit('clearCurrent')
    next()
  },
  created() {
    this.$store.dispatch('getPost', this.$route.path)
  },
  watch: {
    $route: function(val, old) {
      if (val) this.$store.dispatch('getPost', val.path)
    }
  },
  updated: imgLoadAni
}
</script>

<style>
.post {
  padding-top: 1em;
}

.post-block .post-info {
  color: #7f8c8d;
  margin: 1.2em 0;
}

.post-block .post-info span {
  margin-left: 0.5rem;
}

.post-block .post-info a.post-from {
  margin-left: 0.5rem;
  padding: 3px 6px;
  border-radius: 5px;
  font-size: 12px;
  color: white;
  background-color: #e36b6b;
}

.post-content ul li {
  width: 100%;
}
.post-content h2,
.post-content h3,
.post-content h4,
.post-content h5,
.post-content h6 {
  position: relative;
  margin: 1em 0;
}

.post-content h2 a:before,
.post-content h3 a:before,
.post-content h4 a:before,
.post-content h5 a:before,
.post-content h6 a:before {
  content: '#';
  color: #42b983;
  position: absolute;
  left: -0.7em;
  top: -4px;
  font-size: 1.2em;
  font-weight: bold;
}

.post-content h4 a:before,
.post-content h5 a:before,
.post-content h6 a:before {
  content: '';
}

.post-content h2,
.post-content h3 {
  font-size: 22px;
}

.post-content h4,
.post-content h5,
.post-content h6 {
  font-size: 18px;
}

.post-content a {
  color: #42b983;
  word-break: break-all;
}

.post-content blockquote {
  margin: 2em 0;
  padding-left: 20px;
  border-left: 4px solid #42b983;
}

.post-content img {
  display: block;
  max-width: 100%;
  margin: 1em auto;
}

.post-content > table,
.post-content > figure.highlight {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.125);
}

.post-content .tip {
  position: relative;
  margin: 2em 0;
  padding: 12px 24px 12px 30px;
  border-left: 4px solid #f66;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  background-color: #f8f8f8;
}

.post-content .tip br {
  display: none;
}

.post-content .tip:before {
  position: absolute;
  top: 14px;
  left: -12px;
  content: '!';
  width: 20px;
  height: 20px;
  border-radius: 100%;
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
  text-align: center;
  background-color: #f66;
  font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
}
</style>

