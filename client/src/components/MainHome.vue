<template>
  <section class="main-content">
    <h2>Self-introduction</h2>
    <p>
      <strong>基本信息：</strong>彭君怡，男，17年毕业，
    </p>
    <p>
      <strong>主技能：</strong>HTML\JS\CSS\Vue全家桶</p>
    <p>
      <strong>副技能：</strong>PS\AE\会声会影等使用</p>

    <h2>Experience</h2>
    <table>
      <tbody>
        <tr>
          <th>Period</th>
          <th>Experience</th>
        </tr>
        <tr>
          <td>2017.02-</td>
          <td>
            <a target="_blank" href="http://spiritframe.com">湖南心镜科技有限公司</a>前端<br> 负责多个项目的前端开发（PC端、Mobile端、APP混合开发）
          </td>
        </tr>
        <tr>
          <td>2016.03-2017.03</td>
          <td>
            <a target="_blank" href="https://ife.baidu.com">百度IFE</a>——2016年春季班学习——
            <a target="_blank" href="https://github.com/pkjy/ife-task">查看仓库</a>
          </td>
        </tr>
        <tr>
          <td>2015.09</td>
          <td>为政法系制作
            <a target="_blank" href="https://player.youku.com/player.php/sid/XMTQxODEzNzIwMA==/v.swf">《最美系部》</a>系部宣传片</td>
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
                <a target="_blank" href="https://player.youku.com/player.php/Type/Folder/Fid/23402758/Ob/1/sid/XNzgzNTU0MjYw/v.swf">迎新趣味短视频</a>
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
                <a target="_blank" href="https://player.youku.com/player.php/Type/Folder/Fid/23402758/Ob/1/sid/XNjIyOTExMTI0/v.swf">电子相册</a>
              </li>
              <li>拍摄和后期了系部
                <a target="_blank" href="https://player.youku.com/player.php/Type/Folder/Fid/23402758/Ob/1/sid/XNzgzNDU2OTIw/v.swf">微视频（定格动画）</a>
              </li>
              <li>用AE模板做了个
                <a target="_blank" href="https://player.youku.com/player.php/sid/XNjg4NzA1NTYw/v.swf">小片头</a>
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
        <a target="_blank" href="https://pkjy.github.io/ife-task/2016_spring/part1/task07.html" title="task07">查看</a>
      </li>
      <li>Demo2，信息查询管理静态页面→
        <a target="_blank" href="https://pkjy.github.io/ife-task/2016_spring/part1/task09.html" title="task09">查看</a>
      </li>
    </ul>
    <strong>Javascript</strong>
    <ul>
      <li>Demo1，算法可视化(简单的冒泡算法)→
        <a target="_blank" href="https://pkjy.github.io/ife-task/2016_spring/part2/task19/" title="task19">查看</a>
      </li>
      <li>Demo2，表格控件(支持内容排序、首行冻结)→
        <a target="_blank" href="https://pkjy.github.io/ife-task/2016_spring/part3/task38/" title="task38">查看</a>
      </li>
      <li>Demo3，日历控件→
        <a target="_blank" href="https://pkjy.github.io/ife-task/2016_spring/part3/task40/" title="task40">查看</a>
      </li>
      <li>Demo4，听指令的小方块→
        <a target="_blank" href="https://pkjy.github.io/ife-task/2016_spring/part2/task35/" title="task35">查看</a>
      </li>
      <li>Demo5，图片马赛克化——
        <a target="_blank" href="https://pkjy.github.io/front-end-skills/src/mosaic-canvas/">查看</a>
      </li>
    </ul>
    <strong>综合类</strong>
    <ul>
      <li>Demo1，jQuery Mobile框架写的计时功能的TODO，WEB版+安卓版——
        <a target="_blank" href="https://pkjy.github.io/front-end-skills/src/Hours/" title="Web版">查看Web版</a>——
        <a target="_blank" href="https://pkjy.github.io/front-end-skills/src/Hours/Hours.apk" title="APK下载">下载
          <i class="fa fa-android fa-2x"></i>
        </a>
      </li>
      <li>Demo2，微型调查问卷平台——
        <a target="_blank" href="https://pkjy.github.io/ife-task/2016_spring/part4/task50/index.html" title="task50">查看</a>
      </li>
      <li>Demo3，一个相册库，集成三种布局方式——
        <a target="_blank" href="https://pkjy.github.io/ife-task/2016_spring/part4/task51/index.html" title="task51">查看</a>
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
      interval: null
    }
  },
  methods: {
    throttle(method, context) {
      //用函数节流优化rezise——《高程》
      clearTimeout(method.tId)
      method.tId = setTimeout(function() {
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
        this.drawCircle = function() {
          ctx.beginPath()
          ctx.fillStyle = this.color
          ctx.arc(this.x, this.y, r, 0, Math.PI * 2)
          ctx.fill()
          ctx.closePath()
        }
        this.pos = function() {
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
