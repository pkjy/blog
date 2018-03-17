var express = require("express")
var router = express.Router()
var User = require("../models/users")
var URL = require("url")

var good = require("../controllers/users.js")
/* GET users listing. */
router
  // .get("/", function(req, res, next) {
  //   res.send("respond with a resource")
  // })
  .get("/info", function(req, res, next) {
    var user = new User()
    var params = URL.parse(req.url, true).query

    if (params.id == "1") {
      user.name = "ligh"
      user.age = "1"
      user.city = "北京市"
    } else {
      user.name = "SPTING"
      user.age = "1"
      user.city = "杭州市"
    }

    var response = { status: 1, data: user }
    res.send(JSON.stringify(response))
  })
  .get("/goods", function(req, res, next) {
    console.log("123", req, res, next)
    good.goodAll(req, res, next)
  })
  .get("/goodAdd", function(req, res, next) {
    good.goodadd(req, res, next)
  })

module.exports = router
