import { exportCanvasAsPNG } from "@/utils/tools"

export default {
  update(el, binding) {
    if (binding.value.status) {
      const tagName = el.tagName.toUpperCase()
      if (tagName !== "CANVAS") {
        exportCanvasAsPNG(
          el.getElementsByTagName("canvas")[0],
          binding.value.fileName
        )
      } else {
        exportCanvasAsPNG(el, binding.value.fileName)
      }
    }
  }
}
