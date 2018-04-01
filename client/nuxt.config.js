module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "彭君怡 - 个人主页 - resume",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1,user-scalable=no"
      },
      {
        name: "description",
        content: "彭君怡-pkjy-pjy-个人主页，彭君怡的简历，pkjy的简历，pkjy的生活成长，彭君怡的生活成长"
      },
      {
        name: "keywords",
        content: "彭君怡的个人主页, pkjy个人主页, web前端,JavaScript,css,html,简历,resume"
      },
      { name: "author", content: "彭君怡,pkjy,pengjunyi,pjy" },
      {
        name: "description",
        content: "彭君怡-pkjy-pjy-个人主页，彭君怡的简历，pkjy的简历，pkjy的生活成长，彭君怡的生活成长"
      }
    ],
    link: [{
      rel: "icon",
      type: "image/x-icon",
      href: "http://7xttt4.com1.z0.glb.clouddn.com/images/pjy_50x50.png"
    }, {
      rel: "stylesheet",
      href: "//at.alicdn.com/t/font_612806_tdzd3ch8b1x4unmi.css"
    }, ],
    script: [],
  },
  plugins: [
    /*
     ** 谷歌分析插件
     */
    { src: "~plugins/ga.js", ssr: false }
  ],
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** 添加 postcss 插件
     */
    postcss: [
      require("postcss-nested")(),
      require("postcss-responsive-type")(),
      require("postcss-hexrgba")()
    ],
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  },
  /**
   * 全局CSS
   */
  css: ["~/assets/style/base.css", "~/assets/style/style.css"]
}