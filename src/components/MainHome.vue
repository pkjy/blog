<template>
  <section class="main-content">
    <h2>Self-introduction</h2>
    <p>
      <strong>基本信息：</strong>彭君怡，男，籍贯怀化，长沙工作。
    </p>
    <p>
      <strong>技术栈：</strong>前端：HTML\JS\CSS\Vue\Cordova 后端：Nodejs\eggjs 服务器：ubuntu\debian\windows
    </p>
    <p>{{experienceInfo.fe}} 年前端开发经验; {{experienceInfo.be}} 年后端经验(nodejs); {{experienceInfo.crawler}} 年爬虫开发经验</p>

    <h2>项目经验</h2>
    <div>开发过的项目数量太多，只挑几个不同类型的展示。(ps:大致按时间先后顺序)</div>
    <table>
      <tbody>
        <tr>
          <th>名称</th>
          <th>概述</th>
        </tr>
        <tr>
          <td>“征信”类查询SaaS平台</td>
          <td>一个帮B端客户查询C端“信用”的平台。涵盖了B端后台，管理员后台，C端Mobile端以及C端App。前期独自负责PC后台的内容，后期重构了Mobile端框架以及代码逻辑。APP采用Hybrid APP方案，使用JSBridge与native通讯，独自负责H5部分的实现。</td>
        </tr>
        <tr>
          <td>前端基础功能建设</td>
          <td>实现在命令行快速创建具备登录、注册、权限登基础功能的新项目。</td>
        </tr>
        <tr>
          <td>表单项目</td>
          <td>一个表单的功能，后台可以创建表单，支持各种类型的填写（文本、文本域、经纬度、表格、手机号等等）。后端提供基础的CRUD功能，独自负责整个表单前端数据结构的定义，后台与用户Mobile端界面的搭建。</td>
        </tr>
        <tr>
          <td>智能呼叫机器人</td>
          <td>对话术进行录入，进行智能语音电销。前期负责整个项目的进度跟进与安排，负责所有前端部分的功能开发。（后台主要难点为在线流程图的实现，移动端录音的实现等）。中期了解了sip的流程以及运营商模拟线路、中继线路、IMS线路、手机卡GOIP等通信行业的一些安装、开发流程。</td>
        </tr>
        <tr>
          <td>积分商城</td>
          <td>使用eggjs完成商城后端部分的开发，并对前端项目进行性能优化。优化前端首屏加载、兼容性等，优化过后均超过竞品。也碰到过过CC攻击、SQL注入等情况。</td>
        </tr>
        <tr>
          <td>爬虫项目</td>
          <td>交付完成若干个需要使用浏览器爬取的项目，逆向并分析风控代码。</td>
        </tr>
        <tr>
          <td>视频播放APP</td>
          <td>空闲时候开发的项目，主要用于熟悉vue3的语法+cordova打包APP。用cordova打包成APP。后端目前用eggjs写的，支持注册登录等功能，后续会尝试使用nestjs。</td>
        </tr>
      </tbody>
    </table>

    <h2>经历</h2>
    <table>
      <tbody>
        <tr>
          <th>时期</th>
          <th>经历</th>
        </tr>
        <tr>
          <td>2019.02-</td>
          <td>
            <div>湖南心镜科技有限公司研发部副部长</div><br>
          </td>
        </tr>
        <tr>
          <td>2017.02-2019.02</td>
          <td>
            <div>湖南心镜科技有限公司前端主程</div><br>
            <ul>
              <li></li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>2016.03-2017.03</td>
          <td>
            <a target="_blank"
               href="https://ife.baidu.com">百度IFE</a>——2016年春季班学习——
            <a target="_blank"
               href="https://github.com/pkjy/ife-task">查看仓库</a>
          </td>
        </tr>
        <tr>
          <td>2015.09</td>
          <td>为政法系制作
            <a target="_blank"
               href="https://player.youku.com/player.php/sid/XMTQxODEzNzIwMA==/v.swf">《最美系部》</a>系部宣传片
          </td>
        </tr>
        <tr>
          <td>2014.09-2015.09</td>
          <td>政法系学生分会新闻部部长
            <ul>
              <li>做过
                <router-link to="/home">海报</router-link>请柬，商家的
                <router-link to="/home">宣传单</router-link>
              </li>
              <li>拍摄并后期了
                <a target="_blank"
                   href="https://player.youku.com/player.php/Type/Folder/Fid/23402758/Ob/1/sid/XNzgzNTU0MjYw/v.swf">迎新趣味短视频</a>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>2013.09-2016.09</td>
          <td>政法系系部内刊《相中历史论坛》学生主编</td>
        </tr>
        <tr>
          <td>2013.09-2014.09</td>
          <td>政法系学生分会新闻部干事
            <ul>
              <li>会声会影制作过
                <a target="_blank"
                   href="https://player.youku.com/player.php/Type/Folder/Fid/23402758/Ob/1/sid/XNjIyOTExMTI0/v.swf">电子相册</a>
              </li>
              <li>拍摄和后期了系部
                <a target="_blank"
                   href="https://player.youku.com/player.php/Type/Folder/Fid/23402758/Ob/1/sid/XNzgzNDU2OTIw/v.swf">微视频（定格动画）</a>
              </li>
              <li>用AE模板做了个
                <a target="_blank"
                   href="https://player.youku.com/player.php/sid/XNjg4NzA1NTYw/v.swf">小片头</a>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>证书</td>
          <td>
            <ul>
              <li>CET6级证书</li>
              <li>计算机一级证书</li>
              <li>普通话水平测试2乙证书</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
    <h2>Demo.(College)</h2>
    <strong>HTML+CSS静态网页类</strong>
    <ul>
      <li>Demo1，大型企业官网静态页面→
        <a target="_blank"
           href="https://pkjy.github.io/ife-task/2016_spring/part1/task07.html"
           title="task07">查看</a>
      </li>
      <li>Demo2，信息查询管理静态页面→
        <a target="_blank"
           href="https://pkjy.github.io/ife-task/2016_spring/part1/task09.html"
           title="task09">查看</a>
      </li>
    </ul>
    <strong>Javascript</strong>
    <ul>
      <li>Demo1，算法可视化(简单的冒泡算法)→
        <a target="_blank"
           href="https://pkjy.github.io/ife-task/2016_spring/part2/task19/"
           title="task19">查看</a>
      </li>
      <li>Demo2，表格控件(支持内容排序、首行冻结)→
        <a target="_blank"
           href="https://pkjy.github.io/ife-task/2016_spring/part3/task38/"
           title="task38">查看</a>
      </li>
      <li>Demo3，日历控件→
        <a target="_blank"
           href="https://pkjy.github.io/ife-task/2016_spring/part3/task40/"
           title="task40">查看</a>
      </li>
      <li>Demo4，听指令的小方块→
        <a target="_blank"
           href="https://pkjy.github.io/ife-task/2016_spring/part2/task35/"
           title="task35">查看</a>
      </li>
      <li>Demo5，图片马赛克化——
        <a target="_blank"
           href="https://pkjy.github.io/front-end-skills/src/mosaic-canvas/">查看</a>
      </li>
    </ul>
    <strong>综合类</strong>
    <ul>
      <li>Demo1，jQuery Mobile框架写的计时功能的TODO，WEB版+安卓版——
        <a target="_blank"
           href="https://pkjy.github.io/front-end-skills/src/Hours/"
           title="Web版">查看Web版</a>——
        <a target="_blank"
           href="https://pkjy.github.io/front-end-skills/src/Hours/Hours.apk"
           title="APK下载">下载
          <i class="fa fa-android fa-2x"></i>
        </a>
      </li>
      <li>Demo2，微型调查问卷平台——
        <a target="_blank"
           href="https://pkjy.github.io/ife-task/2016_spring/part4/task50/index.html"
           title="task50">查看</a>
      </li>
      <li>Demo3，一个相册库，集成三种布局方式——
        <a target="_blank"
           href="https://pkjy.github.io/ife-task/2016_spring/part4/task51/index.html"
           title="task51">查看</a>
      </li>
    </ul>
  </section>
</template>

<script>
import imgLoadAni from '@/utils/img-load-animation'

export default {
  name: 'MainHome',
  computed: {},
  data() {
    return {
      interval: null,
      experienceInfo: {
        fe: new Date().getFullYear() - 2017,
        be: new Date().getFullYear() - 2020,
        crawler: new Date().getFullYear() - 2019
      }
    }
  },
  methods: {
    throttle(method, context) {
      //用函数节流优化rezise——《高程》
      clearTimeout(method.tId)
      method.tId = setTimeout(function () {
        method.call(context)
      }, 100)
    },
    renderCanvas() {
      var test = document.getElementById('myCanvas')
      if (test) {
        document.body.removeChild(test)
      }

      var box = document.getElementById('app'),
        canvas = document.createElement('canvas')
      canvas.height = box.offsetHeight
      canvas.width = document.body.offsetWidth //Chrome里有18像素的滚动条？改成body的offsetWidth完美解决
      canvas.id = 'myCanvas'

      // var headerHeight = document.getElementById('page-header').offsetHeight
      // canvas.style.marginTop = headerHeight + 'px'

      var ctx = canvas.getContext('2d')
      document.body.appendChild(canvas)
      this.interval = setInterval(loop, 36)

      function Circle(x, y, r, color) {
        this.x = x
        this.y = y
        this.r = r
        this.color = color
        this.grow = 3
        this.tremble = Math.random() - 0.5
        this.range = (Math.random() - 0.5) * 5
        this.drawCircle = function () {
          ctx.beginPath()
          ctx.fillStyle = this.color
          ctx.arc(this.x, this.y, r, 0, Math.PI * 2)
          ctx.fill()
          ctx.closePath()
        }
        this.pos = function () {
          var value = this.grow * this.tremble
          this.x = this.x + this.range
          this.y += value
        }
      }

      var arr = []
      function loop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        var col = 'rgba(39,207,195,0.3)'

        var circle = new Circle(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * 5,
          col
        )
        arr.push(circle)
        for (var i in arr) {
          arr[i].drawCircle()
          arr[i].pos()
        }
        if (arr.length > 300) {
          arr.shift()
        }
      }
    }
  },
  beforeDestroy() {
    window.clearInterval(this.interval)
    const domCanvas = document.getElementById('myCanvas')
    document.body.removeChild(domCanvas)
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.commit('setView', 'home')
    })
  },
  mounted() {
    this.throttle(this.renderCanvas)
  },
  updated: imgLoadAni
}
</script>
<style>
.main-content table {
  width: 100%;
  margin: 1em auto;
}

.main-content table thead {
  background-color: #ddd;
}

.main-content table thead th {
  padding: 5px;
  min-width: 20px;
}

.main-content table tr th:first-child,
.main-content table tr td:first-child {
  width: 190px;
}

.main-content table tbody tr:nth-child(2n) {
  background-color: #eee;
}

.main-content table tbody td {
  padding: 5px;
  vertical-align: text-top;
}

.main-content table th,
.main-content table td {
  border: 1px solid #eee;
}

.main-content h1,
.main-content h2,
.main-content h3,
.main-content h4,
.main-content h5 {
  color: #ef951b;
}
</style>
