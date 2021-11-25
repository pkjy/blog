<template>
  <div class="login-container">
    <div :class="['container',{'sign-up-mode':loginMode}]">
      <div class="form-warp">
        <form class="sign-in-form">
          <div class="form-title">登录</div>
          <el-form ref="refLoginForm"
                   :model="loginForm"
                   :rules="loginRules"
                   autocomplete="on"
                   label-position="left">
            <el-form-item prop="username">
              <el-input ref="refUsername"
                        v-model="loginForm.username"
                        placeholder="请输入用户名"
                        name="username"
                        type="text"
                        autocomplete="on">
                <template #prefix>
                  <Svg name="kai-zhanghaoguanli"></Svg>
                </template>
              </el-input>
            </el-form-item>

            <el-tooltip v-model="capsTooltip"
                        content="Caps lock is On"
                        placement="right"
                        manual>
              <el-form-item prop="password">
                <el-input :key="passwordType"
                          ref="refPassword"
                          v-model="loginForm.password"
                          :type="passwordType"
                          placeholder="请输入密码"
                          name="password"
                          autocomplete="on"
                          @keyup="checkCapslock"
                          @blur="capsTooltip = false"
                          @keyup.enter="handleLogin">
                  <template #prefix>
                    <Svg name="kai-password"></Svg>
                  </template>
                  <template #suffix>
                    <Svg :name="passwordType === 'password' ? 'kai-yincangmima3' : 'kai-xianshimima2'"
                         class="show-pwd"
                         @click="showPwd"></Svg>
                  </template>
                </el-input>
              </el-form-item>
            </el-tooltip>
            <el-button :loading="loading"
                       type="primary"
                       class="submit-btn"
                       @click.prevent="handleLogin">
              登录
            </el-button>
            <div style="position:relative">
              <div class="tips">
                <span>账号 : admin </span>
                <span>密码 : 随便填 </span>
              </div>
            </div>

          </el-form>
        </form>
        <form class="sign-up-form">
          <div class="form-title">注册</div>
          <el-form ref="refRegForm"
                   :model="regForm"
                   :rules="loginRules"
                   autocomplete="on"
                   label-position="left">
            <el-form-item prop="username">
              <el-input ref="refUsername"
                        v-model="regForm.username"
                        placeholder="请输入用户名"
                        name="username"
                        type="text"
                        autocomplete="on">
                <template #prefix>
                  <Svg name="kai-zhanghaoguanli"></Svg>
                </template>
              </el-input>
            </el-form-item>

            <el-tooltip v-model="capsTooltip"
                        content="Caps lock is On"
                        placement="right"
                        manual>
              <el-form-item prop="password">
                <el-input :key="passwordType"
                          ref="refPassword"
                          v-model="regForm.password"
                          :type="passwordType"
                          placeholder="请输入密码"
                          name="password"
                          autocomplete="on"
                          @keyup="checkCapslock"
                          @blur="capsTooltip = false">
                  <template #prefix>
                    <Svg name="kai-password"></Svg>
                  </template>
                  <template #suffix>
                    <Svg :name="passwordType === 'password' ? 'kai-yincangmima3' : 'kai-xianshimima2'"
                         class="show-pwd"
                         @click="showPwd"></Svg>
                  </template>
                </el-input>
              </el-form-item>
            </el-tooltip>
            <el-button type="primary"
                       :disabled="true"
                       class="submit-btn">
              立即注册
            </el-button>
          </el-form>
        </form>
      </div>
      <div class="desc-warp">
        <div class="desc-warp-item sign-up-desc">
          <div class="content">
            <button @click="loginMode=true">注册</button>
          </div>
          <img src="./log.svg"
               alt="">
        </div>
        <div class="desc-warp-item sign-in-desc">
          <div class="content">
            <button @click="loginMode=false">登录</button>
          </div>
          <img src="./register.svg"
               alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue';
import { LocationQuery, useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { isValidUsername } from '@/utils/validate'

export default defineComponent({
  name: 'Login',
  setup() {
    const refUsername = ref()
    const refPassword = ref()
    const refLoginForm = ref()
    let loading = ref(false)
    const loginMode = ref(false)
    let capsTooltip = ref(false)
    let passwordType = ref('password')

    const store = useStore()
    const router = useRouter()
    const route = useRoute()

    let redirect = ref()
    let otherQuery = ref({})

    const loginForm = ref({
      username: 'admin',
      password: '111111'
    })

    const regForm = ref({
      username: '',
      password: ''
    })

    watch(() => route, (val) => {
      const query = val.query
      if (query) {
        if (query.redirect) redirect.value = query.redirect
        otherQuery.value = getOtherQuery(query)
      }
    })

    const getOtherQuery = (query: LocationQuery) => {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {} as LocationQuery)
    }

    const handleLogin = () => {
      refLoginForm.value.validate(async (valid: boolean) => {
        if (valid) {
          loading.value = true
          await store.dispatch('user/Login', loginForm.value)
          router.push({
            path: redirect.value || '/manage/dashboard',
            query: otherQuery.value
          })
          // Just to simulate the time of the request
          setTimeout(() => {
            loading.value = false
          }, 0.5 * 1000)
        } else {
          return false
        }
      })
    }


    const validateUsername = (rule: any, value: string, callback: (arg0?: Error) => unknown | Error) => {
      if (!isValidUsername(value)) {
        callback(new Error('请输入正确账号'))
      } else {
        callback()
      }
    }

    const validatePassword = (rule: any, value: string, callback: (arg0?: Error) => unknown | Error) => {
      if (value && value.length < 6) {
        callback(new Error('密码长度最低6位'))
      } else {
        callback()
      }
    }

    const checkCapslock = (e: KeyboardEvent) => {
      const { key } = e
      capsTooltip.value = !!key && key.length === 1 && (key >= 'A' && key <= 'Z')
    }

    let loginRules = ref({
      username: [{ validator: validateUsername, trigger: 'blur' }],
      password: [{ validator: validatePassword, trigger: 'blur' }]
    })

    const showPwd = () => {
      if (passwordType.value === 'password') {
        passwordType.value = ''
      } else {
        passwordType.value = 'password'
      }
      // this.$nextTick(() => {
      //   this.$refs.refPassword.focus()
      // })
    }

    onMounted(() => {
      if (loginForm.value.username === '') {
        refUsername?.value.focus()
      } else if (loginForm.value.password === '') {
        refPassword?.value.focus()
      }
    })
    return {
      refUsername,
      refPassword,
      refLoginForm,
      loginForm,
      loginMode,
      regForm,
      handleLogin,
      loading,
      checkCapslock,
      capsTooltip,
      loginRules,
      showPwd,
      passwordType
    }
  }
})
</script>

<style lang="scss">
$loginCursorColor: #fff;
$lightGray: #eee;

// References: https://www.zhangxinxu.com/wordpress/2018/01/css-caret-color-first-line/
// @supports (-webkit-mask: none) and (not (cater-color: $loginCursorColor)) {
//   .el-input {
//     input {
//       color: $loginCursorColor;
//     }
//     input::first-line {
//       color: $lightGray;
//     }
//   }
// }
</style>

<style lang="scss" scoped>
$darkGray: #889aa4;
$lightGray: #eee;

.login-container {
  .tips {
    font-size: 14px;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .el-form-item {
    margin: 0;
    width: 280px;
  }
  .show-pwd {
    cursor: pointer;
    user-select: none;
  }
  .container {
    position: relative;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
  }
  .container::before {
    content: " ";
    position: absolute;
    width: 2000px;
    height: 2000px;
    border-radius: 50%;
    background-image: linear-gradient(-45deg, #6266f5 0%, #04befe 100%);
    transition: 1.4s ease-in-out;
    z-index: 6;
    top: -10%;
    right: 48%;
    transform: translateY(-50%);
  }
  .container.sign-up-mode::before {
    transform: translate(100%, -50%);
  }

  .form-warp {
    width: 50%;
    position: absolute;
    z-index: 5;
    left: 75%;
    top: 50%;
    z-index: 5;
    transform: translate(-50%, -50%);
    display: grid;
    grid-template-columns: 1fr;
    transition: 0.8s 0.5s ease-in-out;
  }
  .form-warp form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    /* 将两个 form 布局在 grid 同一位置 */
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    transition: all 0.1s 0.8s;
    opacity: 1;
    z-index: 4;
  }
  .form-title {
    color: #6266f5;
    font-size: 26px;
  }
  .form-warp .sign-up-form {
    opacity: 0;
    z-index: 3;
  }
  .container.sign-up-mode .form-warp {
    left: 25%;
  }
  .container.sign-up-mode .sign-in-form {
    opacity: 0;
    z-index: 3;
  }
  .container.sign-up-mode .sign-up-form {
    opacity: 1;
    z-index: 4;
  }
  input,
  .submit-btn {
    min-width: 300px;
    outline: none;
    padding: 12px 30px;
    line-height: 1;
    font-size: 16px;
    border-radius: 60px;
    color: #333;
    background-color: #6267f513;
    border: none;
  }
  input::placeholder {
    color: #cccc;
  }
  .submit-btn {
    width: 100%;
    background-color: #6266f5;
    color: #fff;
    text-align: center;
    min-width: 150px;
    font-size: initial;
    font-weight: bold;
    letter-spacing: 1.5px;
    cursor: pointer;
  }

  .desc-warp {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .desc-warp-item {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    text-align: center;
    text-align: center;
    padding: 3rem 17% 2rem 12%;
    z-index: 6;
  }
  /* 事件穿透 BEGIN */
  .sign-in-desc {
    pointer-events: none;
  }
  .sign-up-mode .sign-in-desc {
    pointer-events: all;
  }
  .sign-up-mode .sign-up-desc {
    pointer-events: none;
  }
  /* 事件穿透 END */
  .content {
    width: 100%;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.6s;
  }
  .sign-in-desc img,
  .sign-in-desc .content {
    transform: translateX(650px);
  }
  .sign-up-mode .sign-in-desc img,
  .sign-up-mode .sign-in-desc .content {
    transform: translateX(0);
  }

  .sign-up-mode .sign-up-desc img,
  .sign-up-mode .sign-up-desc .content {
    transform: translateX(-650px);
  }

  button {
    outline: none;
    padding: 6px 8px;
    min-width: 100px;
    text-align: center;
    border-radius: 30px;
    border: 2px solid #fff;
    background: none;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  button:active {
    background: rgba(255, 255, 255, 0.1);
  }
  img {
    width: 100%;
    display: block;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.5s;
  }

  /* 响应式 */
  @media screen and (max-width: 870px) {
    .container::before {
      width: 1500px;
      height: 1500px;
      transform: translateX(-50%);
      left: 30%;
      bottom: 68%;
      right: initial;
      top: initial;
      transition: 2s ease-in-out;
    }
    .container.sign-up-mode::before {
      transform: translate(-50%, 100%);
      bottom: 32%;
      right: initial;
    }
    .form-warp {
      width: 100%;
      top: 75%;
      left: 50%;
      transform: translate(-50%, -100%);
      transition: 1s 0.8s ease-in-out;
    }
    .container.sign-up-mode .form-warp {
      top: 25%;
      left: 50%;
      transform: translate(-50%, 0);
    }
    img {
      width: 200px;
      transition: transform 0.9s ease-in-out;
      transition-delay: 0.7s;
    }
    .desc-warp {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 2fr 1fr;
    }
    .desc-warp-item {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      padding: 2.5rem 8%;
      grid-column: 1 / 2;
    }
    .sign-in-desc {
      grid-row: 3 / 4;
    }

    .sign-in-desc img,
    .sign-in-desc .content {
      transform: translateY(800px);
    }

    .sign-up-mode .sign-in-desc img,
    .sign-up-mode .sign-in-desc .content {
      transform: translateY(0);
    }

    .sign-up-mode .sign-up-desc img,
    .sign-up-mode .sign-up-desc .content {
      transform: translateY(-800px);
    }
  }

  @media screen and (max-width: 570px) {
    .container::before {
      bottom: 72%;
      left: 50%;
    }
    img {
      display: none;
    }
  }
}
</style>
