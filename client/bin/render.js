const { exec } = require('child_process');
const { docFullDir, dateStamp } = require('../lib/config.js')
const { mkdirFunction } = require('../lib/node-mkdir.js')
const fs = require('fs')

function createFile() {
  const writerStream = fs.createWriteStream(`${docFullDir}/${dateStamp}.md`);

  // 使用 utf8 编码写入数据
  writerStream.write(`"title": "Hello World",
"date": "2013/7/13 20:46:25"
;;;`, 'UTF8');

  // 标记文件末尾
  writerStream.end();

  // 处理流事件 --> data, end, and error
  writerStream.on('finish', function () {
    console.log("写入完成。");
    exec(`code ${docFullDir}/${dateStamp}.md`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      // console.log(`stdout: ${stdout}`);
      // console.log(`stderr: ${stderr}`);
    });
  });

  writerStream.on('error', function (err) {
    console.log(err.stack);
  });
}

// 创建日期相关的文件夹
mkdirFunction(docFullDir)
createFile()