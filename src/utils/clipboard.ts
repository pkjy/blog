import { ElMessage } from 'element-plus'

export const clipboardSuccess = () =>
  ElMessage({
    message: 'Copy successfully',
    type: 'success',
    duration: 1500
  })

export const handleClipboard = (value: any) => {
  if (!value) {
    ElMessage({
      message: "未输入任何内容。",
      type: "error"
    })
    return
  }

  const fakeElem = document.createElement("textarea")
  fakeElem.style.fontSize = "12pt"
  fakeElem.style.border = "0"
  fakeElem.style.padding = "0"
  fakeElem.style.margin = "0"
  fakeElem.style.position = "absolute"
  fakeElem.style.left = "-99999px"
  if (!document.documentElement) return
  const yPosition =
    window.pageYOffset || document.documentElement.scrollTop
  fakeElem.style.top = `${yPosition}px`

  fakeElem.setAttribute("readonly", "")

  document.body.appendChild(fakeElem)

  fakeElem.value = value
  fakeElem.focus()
  fakeElem.setSelectionRange(0, fakeElem.value.length)

  const successful = document.execCommand("copy", true)
  const msg = successful
    ? "复制成功"
    : "该浏览器不支持点击复制到剪贴板"
  if (successful) {
    ElMessage({
      message: msg,
      type: "success"
    })
  } else {
    ElMessage.error(msg)
  }
  document.body.removeChild(fakeElem)
}