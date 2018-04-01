<template>
  <div>
    <section class="page-header" id="page-header">
      <div class="m-f_2">
        <div class="menu ori-pos" @click="isClick = !isClick">
          <div :class="['menu-line','menu-line-1',{'menu-line-1-click':isClick}]"></div>
          <div :class="['menu-line','menu-line-2',{'menu-line-2-click':isClick}]"></div>
          <div :class="['menu-line','menu-line-3',{'menu-line-3-click':isClick}]"></div>
        </div>
        <h1 class="inline-block  m-t_0 m-b_0 m-f_2 ">PKJY</h1>
      </div>
      <div style="display: flex;">
        <i class="pkjy-csdn pointer" @click="goWeb('csdn')" style="font-size: 24px;width: 50px;text-align: center;line-height:45px;background-color: rgb(217, 140, 140);"></i>
        <i class="pkjy-sina pointer" @click="goWeb('sina')" style="font-size: 24px;width: 50px;text-align: center;line-height:45px;background-color: rgb(217, 140, 190);"></i>
        <i class="pkjy-github pointer" @click="goWeb('github')" style="font-size: 24px;width: 50px;text-align: center;line-height:45px;background-color:#a88cd9; "></i>
      </div>
    </section>

    <nuxt style="padding-top:45px;" />

    <section :class="['aside-content',{'aside-left':isClick}]">
      <div class="vertical-centered-box">
        <div class="content">
          <div class="loader-circle"></div>
          <div class="loader-line-mask">
            <div class="loader-line"></div>
          </div>
        </div>
      </div>

      <img src="http://7xttt4.com1.z0.glb.clouddn.com/images/pjy_100x100.jpg" class="img-circle" alt="myPhoto">

      <h4 class="project-tagline">
        <span style="display:block">[长沙]</span>
        <span style="display:block">（心镜科技）</span>
      </h4>
    </section>
  </div>
</template>


<script>
export default {
  name: "Default",
  components: {},
  data() {
    return {
      isClick: false
    };
  },
  methods: {
    goWeb(target) {
      switch (target) {
        case "sina":
          window.open("http://weibo.com/u/3959538653");
          break;
        case "github":
          window.open("https://github.com/pkjy");
          break;
        case "csdn":
          window.open("http://blog.csdn.net/a214161398a");
          break;
      }
    }
  }
};
</script>


<style>
.menu {
  display: inline-block;
  cursor: pointer;
  z-index: 1000;
  left: 21px;
  top: 23px;
  text-align: right;
}

.menu .menu-line-1-click,
.menu .menu-line-2-click,
.menu .menu-line-3-click {
  transition: all 0.5s;
}

.menu .menu-line-1-click {
  transform: rotate(-45deg) translate(-5px, 5px);
}

.menu .menu-line-2-click {
  opacity: 0;
}

.menu .menu-line-3-click {
  width: 28px;
  transform: rotate(45deg) translate(-5px, -5px);
}

.menu-line {
  background-color: #e4e5e7;
  height: 2px;
  width: 28px;
  transition: all 0.5s;
}

.menu:hover .menu-line {
  width: 28px;
  transition: all 0.5s;
}

.menu-line-2 {
  width: 22px;
  margin-top: 5px;
}

.menu-line-3 {
  width: 16px;
  margin-top: 5px;
}
.aside-content {
  background-color: #161f26;
  width: 230px;
  position: fixed;
  left: -230px;
  top: 45px;
  bottom: 0;
  transition: all 0.5s;
  text-align: center;
  padding: 40px 0 0;
}
.aside-left {
  transition: all 0.5s;
  left: 0;
}
</style>
