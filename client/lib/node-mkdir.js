const fs = require('fs')
const path = require('path')

// 根据传入的路径，创建文件夹
const mkdirFunction = function mkdirsSync(dirname) {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true;
    }
  }
}

const readDir = function (path, cb) {
  fs.readdir(path, function (err, files) {
    if (err) throw err
    cb(files)
  })
}

const FILE = {
  mkdirFunction,
  readDir
}

module.exports = FILE