import fetch from "@/utils/fetch"

export function apiGetImage(formData) {
  // 获取用户Tag
  return fetch({
    url: `/HPImageArchive.aspx`,
    method: "get",
    params: formData
  })
}
export function apiGetConverstory(formData) {
  // 获取Tag
  return fetch({
    url: `/cnhp/coverstory`,
    method: "get",
    params: formData
  })
}
