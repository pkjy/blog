<template>
  <section ref="PosterWrap"
           class="poster-wrap">
    <NavBarMenu />
    <section class="poster-mask" />
    <section class="poster-cover-story">
      <section class="content">
        <div>
          <h3 class="inline-block">{{ todayConverstoryResponse.title }}</h3>
          <h4 class="inline-block m-l_4 f-s_13">{{ todayConverstoryResponse.attribute }}</h4>
        </div>
        <p class="f-s_13">{{ todayConverstoryResponse.para1 }}</p>
      </section>
      <footer class="footer">
        {{ currentImage.copyright }} | 湘ICP备18012183号
      </footer>
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, onMounted, ref } from 'vue';
import { BING_BASE_URL } from '@/config'
import NavBarMenu from '@/layout/home/NavBarMenu.vue'
import axios from 'axios'
export default defineComponent({
  name: 'Poster',
  components: {
    NavBarMenu
  },
  setup() {
    let todayImageResponse: any = ref({})
    let todayConverstoryResponse: any = ref({})
    const PosterWrap = ref()

    let currentImage = reactive(computed(() => { //vue3中computed的使用
      if (!todayImageResponse.value.images) return {}
      return todayImageResponse.value.images[0]
    }) as { enddate?: string })


    const getConverstory = async () => {
      const res = await axios.get(`https://pkjy.xyz/bing/cnhp/coverstory?d=${currentImage.enddate}`)
      todayConverstoryResponse.value = res.data
    }

    onMounted(async () => {
      const res = await axios.get('https://pkjy.xyz/bing/HPImageArchive.aspx?format=js&idx=0&n=1')
      todayImageResponse.value = res.data;
      if (PosterWrap.value) PosterWrap.value.style.backgroundImage = `url(${BING_BASE_URL}${todayImageResponse.value.images[0].url})`
      getConverstory()
    })

    return {
      todayImageResponse,
      todayConverstoryResponse,
      currentImage,
      PosterWrap
    }
  }
})
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
.poster-cover-story {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  align-items: center;
  display: flex;
}
.poster-cover-story .content {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* align-items: center; */
  color: #fff;
}

.poster-cover-story .footer {
  position: absolute;
  bottom: 0;
  right: 0;
  color: #fff;
  font-size: 12px;
  margin-bottom: 15px;
  margin-right: 10px;
}
</style>
