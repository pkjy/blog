import { DeviceType } from '@/store/modules/app'
import { watch, computed, onBeforeMount, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const WIDTH = 992 // refer to Bootstrap's responsive design

export default function () {
  const route = useRoute()
  const store = useStore()
  console.log('store.state.app.device',store.state.app)
  const device = computed(() => store.state.app.device)
  const sidebar = computed(() => store.state.app.sidebar)

  function isMobile() {
    const rect = document.body.getBoundingClientRect()
    return rect.width - 1 < WIDTH
  }

  function resizeHandler() {
    if (!document.hidden) {
      const isMobileResult = isMobile()
      store.dispatch('app/ToggleDevice', isMobileResult ? DeviceType.Mobile : DeviceType.Desktop)
      if (isMobileResult) {
        store.dispatch('app/CloseSideBar', true)
      }
    }
  }

  watch(() => route, () => {
    if (device.value === DeviceType.Mobile && sidebar.value.opened) {
      store.dispatch('app/CloseSideBar', false)
    }
  })

  onBeforeMount(() => {
    window.addEventListener('resize', resizeHandler, { passive: true })
  })

  onMounted(() => {
    const isMobileResult = isMobile()
    console.log('isMobileResult',isMobileResult)
    if (isMobileResult) {
      store.dispatch('app/ToggleDevice', DeviceType.Mobile)
      store.dispatch('app/CloseSideBar', true)
    }
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeHandler)
  })

  return {
    sidebar,
    device,
    resizeHandler,
    isMobile,
    DeviceType
  }
}
