import Marked from 'marked'
export const md2html = (content: any) => {
  return Marked(content)
}
