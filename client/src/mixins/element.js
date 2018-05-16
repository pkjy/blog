/**
 * 用于存放element相关公用函数
 */
import { pattMobile, pattPassword, pattIDCard } from "@/config"
import * as format from "date-fns/format"
import * as subDays from "date-fns/sub_days"

export default {
  methods: {
    // Form
    mixinValidatePhone(rule, value, callback) {
      if (pattMobile.test(value)) {
        callback()
      } else {
        callback(new Error("手机号格式错误"))
      }
    },
    mixinvalidatePassword(rule, value, callback) {
      if (pattPassword.test(value)) {
        callback()
      } else {
        callback(new Error("密码至少为8位"))
      }
    },
    mixinValidateIDCard(rule, value, callback) {
      if (pattIDCard.test(value)) {
        callback()
      } else {
        callback(new Error("请输入正确的身份证号"))
      }
    },

    // Date
    mixinSelectDateRange(typeCode, callback) {
      const mydate = new Date()

      let [start, end] = ["", format(mydate)]
      switch (typeCode) {
        case 0:
          start = format(
            new Date(mydate.getFullYear(), mydate.getMonth(), mydate.getDate())
          )
          break
        case 1:
          start = format(
            subDays(
              new Date(
                mydate.getFullYear(),
                mydate.getMonth(),
                mydate.getDate()
              ),
              1
            )
          )
          end = format(
            subDays(
              new Date(
                mydate.getFullYear(),
                mydate.getMonth(),
                mydate.getDate()
              ),
              1
            )
          )
          break
        // 7日
        case 2:
          start = format(
            subDays(
              new Date(
                mydate.getFullYear(),
                mydate.getMonth(),
                mydate.getDate()
              ),
              7
            )
          )
          break
        // 30日
        case 3:
          start = format(
            subDays(
              new Date(
                mydate.getFullYear(),
                mydate.getMonth(),
                mydate.getDate()
              ),
              30
            )
          )
          break
        default:
          break
      }
      // ;[...value] = [start.toString(), end.toString()]
      callback([start.toString(), end.toString()])
    }
  }
}
