/*
* @ author sessionboy 
* @ github https://github.com/sessionboy
* @ website http://sinn.boyagirl.com
* @ use 统一引入和导出前端，以及管理后台的router
*/
var express = require("express")
var router = express.Router()

const backendRouter = require("./routes/users")
const backendIndex = require("./routes/index")
// router.all("*", backendRouter, backendIndex)

// module.exports = router
module.exports = {
  backendRouter,
  backendIndex
}
