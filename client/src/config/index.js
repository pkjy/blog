export const emptyPic =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"

export const pattMobile = new RegExp(/^(\+?0?86\-?)?1[345789]\d{9}$/)
export const pattIDCard = new RegExp(/^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/)
export const pattPassword = new RegExp(/.{8}/)
export const pattMobileMosaic = new RegExp(/(\d{3})\d*(\d{4})/)
export const pattNotes = new RegExp(/^([a-z0-9]{6})?$/)
export const pattFloat = new RegExp(/^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/) // 正浮点数

export const PROXY_BASE_URL = 'https://www.pkjy.xyz/bing'
export const BING_BASE_URL = 'https://cn.bing.com'
