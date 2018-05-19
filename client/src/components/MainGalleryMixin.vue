<template>
  <div style="padding:20px;">
    <example-card>
      <template slot="header">mixin之一键复制：</template>
      <template slot="content">
        <el-input v-model="input" placeholder="请输入内容" style="width:300px;"></el-input>
        <el-button class="m-l_2" type="primary" @click="execCopy(input)">复制</el-button>
      </template>
      <template slot="desc">
        简介：引入Tools的Mixin之后，即可调用execCopy函数进行复制。该函数接收一个参数，即需要复制的内容。
      </template>
    </example-card>

    <example-card>
      <template slot="header">mixin之element表单校验函数：</template>
      <template slot="content">
        <el-form :model="loginValidateForm" label-position="top" ref="loginValidateForm" :rules="logRules" style="width:400px;">
          <el-form-item prop="phone" label="手机号码">
            <el-input placeholder="输入手机号码" prefix-icon="el-icon-my-mobilephone" v-model="loginValidateForm.phone"></el-input>
          </el-form-item>
          <el-form-item prop="pass" label="非空密码">
            <el-input type="password" placeholder="登录密码" prefix-icon="el-icon-my-unlock" v-model="loginValidateForm.pass" @keyup.enter.native="submitLogForm('loginValidateForm')"></el-input>
          </el-form-item>
          <el-form-item prop="IDCard" label="身份证">
            <el-input prefix-icon="el-icon-my-unlock" v-model="loginValidateForm.IDCard" @keyup.enter.native="submitLogForm('loginValidateForm')"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width: 100%;" @click="submitLogForm('loginValidateForm')">立即校验</el-button>
          </el-form-item>
        </el-form>
      </template>
      <template slot="desc">
        简介：引入ElementFunc的Mixin之后，在el-form的校验规则中，校验器（validator）直接填写mixin对应的函数即可，比如：mixinValidatePhone。
      </template>
    </example-card>

    <example-card>
      <template slot="header">mixin之下载Canvas：</template>
      <template slot="content">
        <div>
          <qrcode-vue :value="shareLink" id="mycanvas" :size="150"></qrcode-vue>
        </div>
        <div class="block space-top-1">图片名称：</div>
        <el-input type="text" v-model="fileName" style="width:150px;"></el-input><br>
        <el-button type="primary" style="width:150px;margin:10px auto 0;" @click="downloadCanvas">下载</el-button>
      </template>
      <template slot="desc">
        简介：引入Tools的Mixin之后，即可调用exportCanvasAsPNG函数进行下载。该函数接收两个参数，第一个为CANVAS的DOM，第二个为文件名称。
      </template>
    </example-card>

    <example-card>
      <template slot="header">mixin之element日期快捷选择：</template>
      <template slot="content">
        <el-date-picker v-model="search" type="daterange" align="right" unlink-panels range-separator="至" :clearable="false" start-placeholder="开始日期" end-placeholder="结束日期" size="small" @change="getLendingOrderListAction">
        </el-date-picker>
        <el-button @click="mixinSelectDateRange(0,getLendingOrderListAction)" size="small" class="m-l_2">今日</el-button>
        <el-button @click="mixinSelectDateRange(1,getLendingOrderListAction)" size="small">昨日</el-button>
        <el-button @click="mixinSelectDateRange(2,getLendingOrderListAction)" size="small">最近7天</el-button>
        <el-button @click="mixinSelectDateRange(3,getLendingOrderListAction)" size="small">最近30天</el-button>
      </template>
      <template slot="desc">
        简介：引入ElementFunc的Mixin之后，即可调用mixinSelectDateRange函数进行快捷操作。该函数接收两个参数，第一个为数字，0对应几天，1对应昨天，2对应最近7天，3对应最近30天；第二个为回调函数，该回调函数会返回时间段组成的数组。
      </template>
    </example-card>
  </div>
</template>

<script>
import Tools from "@/mixins/tools";
import ElementFunc from "@/mixins/element";
import { Message } from "element-ui";
import QrcodeVue from "qrcode.vue";
import ExampleCard from "@/components/common/ExampleCard";
export default {
  name: "Main",
  mixins: [Tools, ElementFunc],
  components: { QrcodeVue, ExampleCard },
  data() {
    return {
      input: "hello",

      loginValidateForm: {
        phone: "",
        pass: "",
        IDCard: ""
      },
      logRules: {
        phone: [
          { required: true, message: "手机号码不能为空" },
          { validator: this.mixinValidatePhone, trigger: "blur" }
        ],
        pass: [{ required: true, message: "密码不能为空" }],
        IDCard: [
          { required: true, message: "身份证不能为空" },
          { validator: this.mixinValidateIDCard, trigger: "blur" }
        ]
      },

      activeName: "first",
      fileName: "",
      shareLink: "hello world",

      search: ""
    };
  },
  methods: {
    submitLogForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          Message({
            message: "校验成功！",
            type: "success"
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    downloadCanvas() {
      const canvas = document
        .getElementById("mycanvas")
        .getElementsByTagName("canvas")[0];
      this.exportCanvasAsPNG(canvas, `${this.fileName}`);
    },
    getLendingOrderListAction(arr) {
      // 写请求等...
      // 返回的参数是时间段的数组
      [...this.search] = [arr[0].toString(), arr[1].toString()];
    }
  },
  created() {},
  mounted() {}
};
</script>

