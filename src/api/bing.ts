import fetch from '@/utils/request'
// interface imageStruct {
//   startdate: string
//   fullstartdate: string
//   enddate: string
//   url: string
//   urlbase: string
//   copyright: string
//   copyrightlink: string
//   title: string
//   quiz: string
//   wp: boolean
//   hsh: string
//   drk: number
//   top: number
//   bot: number
//   hs: []
// }

// interface toolTips {
//   loading: string
//   previous: string
//   next: string
//   walle: string
//   walls: string
// }
// interface resType {
//   images: imageStruct[],
//   tooltips: toolTips
// }

export function apiGetImage(formData: any): Promise<any> {
  // 获取用户Tag
  return fetch({
    url: `/HPImageArchive.aspx`,
    method: 'get',
    params: formData
  })
}
export function apiGetConverstory(formData: any): Promise<any> {
  // 获取Tag
  return fetch({
    url: `/cnhp/coverstory`,
    method: 'get',
    params: formData
  })
}
