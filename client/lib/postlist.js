// 生成postlist的构造函数

class PostList {
  constructor(timeStamp, title, excerpt) {
    this.path = this.timeStampHandle(timeStamp);
    this.title = title;
    this.date = timeStamp;
    this.updated = new Date().getTime()
    this.excerpt = excerpt;
  }

  timeStampHandle(timeStamp) {
    return PostList.timeStampToFolders(timeStamp)
  }

  static timeStampToFolders(timeStamp) {
    const fullDate = new Date(Number(timeStamp))
    const year = fullDate.getFullYear()
    const month = fullDate.getMonth() + 1 < 10 ? `0${fullDate.getMonth() + 1}` : fullDate.getMonth() + 1
    const day = fullDate.getDate()
    return `/${year}/${month}/${day}/${timeStamp}/`
  }
}
module.exports = PostList