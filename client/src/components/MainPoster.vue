<template>
  <section class="poster-wrap" ref="PosterWrap">
    <NavBarMenu></NavBarMenu>
    <section class="poster-mask"></section>
    <section class="poster-conver-story">
      <section class="content">
        <div>
          <h3 class="inline-block">{{todayConverstoryResponse.title}}</h3>
          <h4 class="inline-block m-l_4 f-s_13">{{todayConverstoryResponse.attribute}}</h4>
        </div>
        <p class="f-s_13">{{todayConverstoryResponse.para1}}</p>
      </section>
      <footer class="footer">
        {{currentImage.copyright}} | 湘ICP备18012183号
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
  computed: {
    currentImage() {
      if (!this.todayImageResponse.images) return {}
      return this.todayImageResponse.images[0]
    }
  },
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
      this.$refs.PosterWrap.style.background = `url(${BING_BASE_URL}${
        this.todayImageResponse.images[0].url
      })`
      this.getConverstory()
      // console.log('res', res)
    },
    async getConverstory() {
      const formData = { d: this.currentImage.enddate }
      const res = await apiGetConverstory(formData)
      this.todayConverstoryResponse = res.data
      // console.log('res', res)
    }
  },
  mounted() {
    this.getImage()
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
.poster-conver-story {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  align-items: center;
  display: flex;
}
.poster-conver-story .content {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* align-items: center; */
  color: #fff;
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

