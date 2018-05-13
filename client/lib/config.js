const nowDate = new Date()

const dateStamp = nowDate.getTime()
const year = nowDate.getFullYear()
const mon = nowDate.getMonth() + 1
const month = mon < 10 ? `0${mon}` : mon
const day = nowDate.getDate()

const rootDir = './__mock__'
// 生成的文档最终所处的子目录，是相对与fileRootDir的
// 如果是'api/'，那么通过generate生成的文档最终的路径是`./__mock__/api/...`
const subGenerateDir = '/api'
// 存放源文件
const subDocDir = '/draft'
// MD通过generate生成之后
// 将转移到archive文件夹存档
const subArchiveDir = '/archive'

const fileRootDir = `${rootDir}${subGenerateDir}`

const FILE = {
  rootDir,
  subGenerateDir,
  subDocDir,
  fileRootDir,
  docFullDir: `${rootDir}${subDocDir}`,
  archiveFullDir: `${rootDir}${subArchiveDir}`,
  apiFullDir: `${rootDir}${subGenerateDir}`,

  filePath: `${fileRootDir}/${year}/${month}/${day}`,
  dateStamp
}

module.exports = FILE