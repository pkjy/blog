<template>
  <div class="copyright">
    <p>
      © {{ yearInfo }}
      <a :href="url">{{ author }}</a> With
      <span style="color:#D43F57">❤</span> from Changsha, Hunan. 湘ICP备18012183号
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'Copyright',
  setup() {
    const url = 'https://pkjy.github.io/'
    const author = 'PKJY'
    const yearInfo = computed(() => {
      const currentDate = new Date()
      const year = currentDate.getFullYear()
      const startyear = 2016
      return !startyear || year === startyear ? year : `${startyear} - ${year}`
    })

    return { yearInfo, url, author }
  }
})
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
