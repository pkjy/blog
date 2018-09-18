<template>
  <section class="poster-wrap" ref="PosterWrap">
    <NavBarMenu></NavBarMenu>
    <section class="poster-mask"></section>
    <section class="poster-conver-story">
      <footer class="footer">
        湘ICP备18012183号
      </footer>
    </section>
  </section>
</template>

<script>
import NavBarMenu from '@/components/common/NavBarMenu'
import { apiGetImage, apiGetConverstory } from '@/api/bing'
import { BING_BASE_URL } from '@/config'
export default {
  name: 'MainPoster',
  components: { NavBarMenu },
  computed: {},
  data() {
    return {
      todayImageResponse: {},
      todayConverstoryResponse: {}
    }
  },
  methods: {
    async getImage() {
      const formData = { format: 'js', idx: 0, n: 1 }
      const res = await apiGetImage(formData)
      this.todayImageResponse = res.data
      this.$refs.PosterWrap.style.background = `url(${BING_BASE_URL}/${
        this.todayImageResponse.images[0].url
      })`
      console.log('res', res)
    },
    async getConverstory() {
      const formData = { d: 20180919 }
      const res = await apiGetConverstory(formData)
      this.todayConverstoryResponse = res.data
      console.log('res', res)
    }
  },
  mounted() {
    this.getImage()
    this.getConverstory()
  }
}
</script>

<style>
.poster-wrap {
  position: absolute;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-color: #666;
  background-size: cover;
}
.poster-mask {
  position: absolute;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
}
.poster-conver-story .footer {
  position: absolute;
  bottom: 0;
  right: 0;
  color: #fff;
  font-size: 12px;
  margin-bottom: 15px;
  margin-right: 10px;
}
</style>

