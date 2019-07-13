import Marked from "marked"
export const md2html = (content, config) => {
  return Marked(content)
}