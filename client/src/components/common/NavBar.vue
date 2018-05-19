<template>
  <div class="relative">
    <div class="wpb_row full-width-section " style="position: relative;padding: 100px 90px 255px;margin-left: -90px;visibility: visible;" data-top-percent="12%" data-bottom-percent="8%">
      <div class="row-bg-wrap">
        <div class="row-bg using-image"></div>
      </div>
      <div class="nectar-shape-divider-wrap" style=" height:350px;fill:#fff;">
        <svg class="nectar-shape-divider" fill="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 300" preserveAspectRatio="none">
          <path d="M 1014 264 v 122 h -808 l -172 -86 s 310.42 -22.84 402 -79 c 106 -65 154 -61 268 -12 c 107 46 195.11 5.94 275 137 z"></path>
          <path d="M -302 55 s 235.27 208.25 352 159 c 128 -54 233 -98 303 -73 c 92.68 33.1 181.28 115.19 235 108 c 104.9 -14 176.52 -173.06 267 -118 c 85.61 52.09 145 123 145 123 v 74 l -1306 10 z"></path>
          <path d="M -286 255 s 214 -103 338 -129 s 203 29 384 101 c 145.57 57.91 178.7 50.79 272 0 c 79 -43 301 -224 385 -63 c 53 101.63 -62 129 -62 129 l -107 84 l -1212 12 z"></path>
          <path d="M -24 69 s 299.68 301.66 413 245 c 8 -4 233 2 284 42 c 17.47 13.7 172 -132 217 -174 c 54.8 -51.15 128 -90 188 -39 c 76.12 64.7 118 99 118 99 l -12 132 l -1212 12 z"></path>
          <path d="M -12 201 s 70 83 194 57 s 160.29 -36.77 274 6 c 109 41 184.82 24.36 265 -15 c 55 -27 116.5 -57.69 214 4 c 49 31 95 26 95 26 l -6 151 l -1036 10 z"></path>
        </svg>
      </div>
    </div>

    <div class="container header">
      <router-link to="/" class="logo-link">
        <img id="logo" :src="logoLogo" alt="logo">
      </router-link>
      <ul class="nav nav-list">
        <li class="nav-list-item" v-for="(value, key) in themeConfig.menu" :key="key">
          <router-link :to="value" class="nav-list-link">{{ key.toUpperCase() }}</router-link>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: "NavBar",
  computed: {
    themeConfig() {
      return this.$store.state.themeConfig;
    }
  },
  data() {
    return {
      logoLogo: require("@/assets/img/pjy.png")
    };
  }
};
</script>

<style>
ul.nav {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.row-bg-wrap {
  overflow: visible;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.row:before,
.row:after,
.modal-footer:before,
.modal-footer:after {
  content: " ";
  display: table;
}

.full-width-section .row-bg {
  position: absolute;
  height: 100%;
}

.row-bg-wrap:after {
  background: #00b7ef;
  background: linear-gradient(135deg, #00b7ef 0%, #ff1053 100%);
  opacity: 0.3;
}
.nectar-shape-divider-wrap {
  position: absolute;
  top: auto;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 200px;
  z-index: 2;
  transform: translateZ(0);
}
.nectar-shape-divider {
  width: 100%;
  left: 0;
  bottom: -1px;
  height: 100%;
  position: absolute;
}
.wpb_row .row-bg-wrap:after,
.wpb_row
  .row-bg[data-enable_gradient="true"][data-overlay_strength="image_trans"]:before {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: " ";
  z-index: 2;
}

.nectar-shape-divider-wrap svg path:nth-child(1) {
  opacity: 0.15;
}
.nectar-shape-divider-wrap svg path:nth-child(2) {
  opacity: 0.3;
}
.nectar-shape-divider-wrap svg path:nth-child(3) {
  opacity: 0.18;
}
.nectar-shape-divider-wrap svg path:nth-child(4) {
  opacity: 0.33;
}

.using-image {
  background: url("http://7xttt4.com1.z0.glb.clouddn.com/cool-wallpaper-3-min.jpg"),
    linear-gradient(233deg, #e56420, #c22525, #3d9c31, #37bbde);
  width: 100%;
  background-size: cover;
  background-blend-mode: hard-light;
  background-position: 35% 50%;
  background-repeat: no-repeat;
  animation: hue-rotate 3s linear infinite;
}

@keyframes hue-rotate {
  from {
    -webkit-filter: hue-rotate(0);
    -moz-filter: hue-rotate(0);
    -ms-filter: hue-rotate(0);
    filter: hue-rotate(0);
  }
  to {
    -webkit-filter: hue-rotate(360deg);
    -moz-filter: hue-rotate(360deg);
    -ms-filter: hue-rotate(360deg);
    filter: hue-rotate(360deg);
  }
}
</style>
