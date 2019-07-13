<template>
  <div class="copyright">
    <p>© {{ yearInfo }}
      <a :href="this.$store.state.themeConfig.url">{{ this.$store.state.themeConfig.author }}</a>PKJY. With
      <span style="color:#D43F57">❤</span> from Changsha, Hunan. 湘ICP备18012183号</p>
  </div>
</template>

<script>
export default {
  name: 'FooterCopyright',
  computed: {
    yearInfo() {
      const currentDate = new Date()
      const year = currentDate.getFullYear()
      const startyear = this.$store.state.themeConfig.startyear
      return !startyear || year === startyear ? year : `${startyear} - ${year}`
    }
  }
}
</script>

<style>
.copyright {
  margin-top: 4em;
  padding: 1em 0;
  border-top: 1px solid #ddd;
  text-align: center;
}

.copyright p,
.copyright a {
  color: #aaa;
  font-size: 14px;
  font-weight: 100;
}

.copyright a:hover {
  color: #888;
}
</style>
