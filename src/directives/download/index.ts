import { exportCanvasAsPNG } from "@/utils/tools"
import type { Directive, App } from 'vue';

const downloadDirective: Directive = {
  updated(el, binding) {
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
  },
};

export function setupDownloadDirective(app: App) {
  app.directive('download', downloadDirective);
}

export default downloadDirective;