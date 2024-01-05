export const emptyPic =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
/* eslint-disable no-useless-escape */
export const pattMobile = new RegExp(/^(\+?0?86\-?)?1\d{10}$/)
export const pattIDCard = new RegExp(/^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/)
export const pattPassword = new RegExp(/.{8}/)
export const pattMobileMosaic = new RegExp(/(\d{3})\d*(\d{4})/)
export const pattEmail = new RegExp(
  /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
)
export const pattNote = new RegExp(/^[a-z0-9]{6}$/)
export const pattLendingContract = new RegExp(
  /^i\/[a-z0-9]*\/lending\/[a-z0-9]*$/
)
// 小程序名称可以由中文、数字、英文。长度在4-30个字符之间，一个中文字等于2个字符。
/* eslint-disable no-control-regex */
export const pattWXName = new RegExp(/^([^\x00-\xff]|[a-zA-Z0-9]){2,30}$/)
export const pattEnName = new RegExp(/^.{4,30}$/)
// 注册名称可以由中文、数字、下划线、英文。长度在4-30个字符之间，一个中文字等于2个字符。
export const pattUserName = new RegExp(/^([\u4e00-\u9fa5]|\w){2,30}$/)
export const pattMobileForParrot = new RegExp(/(1\d{10})|10010|10086/ig)

export const PROXY_BASE_URL = 'http://demoapi.pkjy.xyz/bing'
export const BING_BASE_URL = 'https://cn.bing.com'
