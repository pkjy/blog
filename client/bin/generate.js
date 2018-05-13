const fs = require('fs')

const { mkdirFunction, readDir } = require('../lib/node-mkdir.js')
const { archiveFullDir, docFullDir, apiFullDir } = require('../lib/config.js')

const PostList = require('../lib/postlist.js')
const Post = require('../lib/post.js')

// 创建日期相关的文件夹
mkdirFunction(archiveFullDir)
// 读取draft文件夹下的md
readDir(docFullDir, function (files) {
  files.forEach(v => {
    // 打开每个md文件
    let postListFullFile = `${apiFullDir}/postlist.json`
    // 处理的文件的名称为时间戳
    let timeStamp = v.split('.')[0]

    // # 处理文件内的内容

    // 1、把自身复制一份到archive文件夹下
    fs.copyFile(`${docFullDir}/${v}`, `${archiveFullDir}/${v}`, (err) => {
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
    fs.unlink(`${docFullDir}/${v}`)
  })
})

function updatePostList(postListFullFile, timeStamp) {
  let data = fs.readFileSync(postListFullFile, 'utf8');
  let newPostList = JSON.parse(data)
  newPostList.push(new PostList(timeStamp, 'hahaha', '随便说说'))
  fs.writeFileSync(postListFullFile, JSON.stringify(newPostList));
}

function createFile(path, timeStamp) {
  let data = new Post(timeStamp, '我是标题', '我是描述')
  fs.appendFile(`${path}/index.json`, JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log('Post的文章已经生成');
  });
}
