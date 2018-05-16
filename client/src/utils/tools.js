/**
 * canvas转图片
 * @description 用的canvas自带的toDataURL方法
 * @param {DOM} canvas canvas的DOM
 * @param {String} fileName 文件名，需要带上文件的后缀，如.png
 */
export const exportCanvasAsPNG = (canvas, fileName) => {
  var MIME_TYPE = "image/png"
  var dlLink = document.createElement("a")
  dlLink.download = fileName
  dlLink.href = canvas.toDataURL("image/png")
  dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.href].join(":")
  document.body.appendChild(dlLink)
  dlLink.click()
  document.body.removeChild(dlLink)
}