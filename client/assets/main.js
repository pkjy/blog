/*! Copyright 2017 PkJY http://pkjy.github.io/ */
;(function() {
  var tempDe = 0.6
  var tempIn = 0
  window.onscroll = function() {
    var scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop
    if (scrollTop > 350) {
      document.getElementsByClassName("go-top")[0].style.display = "block"
      document.getElementsByClassName("go-top")[0].style.opacity = tempIn
      tempIn = tempIn + 0.1
    } else {
      document.getElementsByClassName("go-top")[0].style.opacity = tempDe
      tempDe = tempDe - 0.1
      if (scrollTop == 0) {
        tempDe = 0.6
        setTimeout(function() {
          document.getElementsByClassName("go-top")[0].style.display = "none"
        }, 800)
      }
    }
  }

  //添加新标签栏打开
  var aTags = document.getElementsByTagName("a")
  for (var i = 0; i < aTags.length; i++) {
    aTags[i].setAttribute("target", "_blank")
  }

  renderCanvas()
})()

function goTop() {
  //改用scrollTo方法代替原来的滚动，更好的进行不同浏览器的hack
  var userAgent = navigator.userAgent

  var moveTo = setInterval(function() {
    var scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop
    window.scrollTo(0, scrollTop - 25)
    if (scrollTop <= 0) {
      clearInterval(moveTo)
    }
  }, 10)
}

function throttle(method, context) {
  //用函数节流优化rezise——《高程》
  clearTimeout(method.tId)
  method.tId = setTimeout(function() {
    method.call(context)
  }, 100)
}

function renderCanvas() {
  var test = document.getElementById("myCanvas")
  if (test) {
    document.body.removeChild(test)
  }

  var box = document.getElementById("main-content"),
    canvas = document.createElement("canvas")
  canvas.height = box.offsetHeight
  canvas.width = document.body.offsetWidth //Chrome里有18像素的滚动条？改成body的offsetWidth完美解决
  canvas.id = "myCanvas"

  var headerHeight = document.getElementById("page-header").offsetHeight
  canvas.style.marginTop = headerHeight + "px"

  var ctx = canvas.getContext("2d")
  document.body.appendChild(canvas)
  setInterval(loop, 36)

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
    var col = "rgba(33,184,126,0.3)"

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
    if (arr.length > 500) {
      arr.shift()
    }
  }
}

window.onresize = function() {
  throttle(renderCanvas)
}
// window.onload = function(){//音频最后加载
//     var audio = document.createElement('audio');
//     audio.src="sources/audio/蔡健雅 - 停格.mp3";
//     audio.autoplay = "true";
//     audio.loop = "true";
//     audio.preload = 'auto';

//     audio.id ='bgm';
//     document.body.appendChild(audio);
// }
// function toggleMusic(){
//     try{//唯独FF要抽风,那FF就不放歌了
//         var bgm =  document.getElementById('bgm');
//         if(bgm.paused){
//             bgm.play()
//         }else{
//             bgm.pause()
//         }
//     }catch(e){
//         console.log(e.message)
//     }
// }
