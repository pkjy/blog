const fs = require('fs')

const { mkdirFunction, readDir } = require('../lib/node-mkdir.js')
const { archiveFullDir, docFullDir, apiFullDir } = require('../lib/config.js')

const PostList = require('../lib/postlist.js')
const Post = require('../lib/post.js')

let readmeContentObj = {}
// 创建日期相关的文件夹
mkdirFunction(archiveFullDir)
// 读取draft文件夹下的md
readDir(docFullDir, function (files) {
  files.forEach(v => {
    // 当前处于draft状态下的md文件路径
    const currentDraftFile = `${docFullDir}/${v}`
    // 打开每个md文件
    let postListFullFile = `${apiFullDir}/postlist.json`
    // 处理的文件的名称为时间戳
    let timeStamp = v.split('.')[0]

    // # 处理文件内的内容
    // 先根据md文件内的头部内容提取标题等信息
    readmeContentObj = renderExcerpt(currentDraftFile)

    // 1、把自身复制一份到archive文件夹下
    fs.copyFile(currentDraftFile, `${archiveFullDir}/${v}`, (err) => {
      if (err) throw err;
      console.log(`文件 ${v} 已成功备份到 ${archiveFullDir}/${v}`);
    });

    // 2、生成list文件放在api文件夹下
    updatePostList(postListFullFile, timeStamp)

    // 3、单独文件放在api文件夹下
    const currentFilePath = PostList.timeStampToFolders(timeStamp)
    mkdirFunction(`${apiFullDir}${currentFilePath}`)
    createFile(`${apiFullDir}${currentFilePath}`, timeStamp)

    // 4、删除draft文件夹下的源文件
    fs.unlink(currentDraftFile)
  })
})

function updatePostList(postListFullFile, timeStamp, file) {
  let data = fs.readFileSync(postListFullFile, 'utf8');
  let newPostList = JSON.parse(data)

  newPostList.push(new PostList(timeStamp, readmeContentObj.title, readmeContentObj.excerpt))
  fs.writeFileSync(postListFullFile, JSON.stringify(newPostList));
}

function createFile(path, timeStamp) {
  let data = new Post(timeStamp, readmeContentObj.title, readmeContentObj.excerpt)
  fs.appendFile(`${path}/index.json`, JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log('Post的文章已经生成');
  });
}


function renderExcerpt(file) {
  const data = fs.readFileSync(file, 'utf8')
  const jsonHeadContent = data.split(';;;')[0]
  const jsonMainContent = data.split(';;;')[1]
  const objContent = JSON.parse(jsonHeadContent)
  return {
    title: objContent.title,
    excerpt: jsonMainContent.slice(0, 80),
    content: jsonMainContent
  }
}
