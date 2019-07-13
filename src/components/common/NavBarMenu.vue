<template>
  <div class="container header">
    <router-link to="/"
                 class="logo-link">
      <img id="logo"
           :src="logoLogo"
           alt="logo">
    </router-link>
    <ul class="nav nav-list">
      <li class="nav-list-item"
          v-for="(value, key) in themeConfig.menu"
          :key="key">
        <router-link :to="value"
                     class="nav-list-link">{{ key.toUpperCase() }}</router-link>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: 'NavBarMenu',
  computed: {
    themeConfig() {
      return this.$store.state.themeConfig
    }
  },
  data() {
    return {
      logoLogo: require('@/assets/img/pjy.png')
    }
  }
}
</script>
