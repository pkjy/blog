/**
 * 一键复制的函数
 * 通过mixin引入，即可直接使用
 * @name execCopy
 * @param value 参数value为需要复制的内容
 */
import { Message } from "element-ui"
import { exportCanvasAsPNG } from "@/utils/tools"
export default {
  methods: {
    exportCanvasAsPNG,
    execCopy(value) {
      if (!value) {
        Message({
          message: "未输入任何内容。",
          type: "error"
        })
        return
      }

      let fakeElem = document.createElement("textarea")
      fakeElem.style.fontSize = "12pt"
      fakeElem.style.border = "0"
      fakeElem.style.padding = "0"
      fakeElem.style.margin = "0"
      fakeElem.style.position = "absolute"
      fakeElem.style.left = "-99999px"
      let yPosition =
        window.pageYOffset || document.documentElement.scrollTop
      fakeElem.style.top = `${yPosition}px`

      fakeElem.setAttribute("readonly", "")

      document.body.appendChild(fakeElem)

      fakeElem.value = value
      fakeElem.focus()
      fakeElem.setSelectionRange(0, fakeElem.value.length)

      const successful = document.execCommand("copy", true)
      const msg = successful
        ? "成功复制到剪贴板"
        : "该浏览器不支持点击复制到剪贴板"
      if (successful) {
        Message({
          message: msg,
          type: "success"
        })
      } else {
        Message.error(msg)
      }
    }
  }
}
