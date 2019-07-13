// 生成post的构造函数

class Post {
  constructor(timeStamp, title, content) {
    this.path = this.timeStampHandle(timeStamp);
    this.title = title;
    this.date = new Date(Number(timeStamp));
    this.updated = new Date().getTime()
    this.content = content;
    this.prev = this.getPrev();
    this.next = this.getNext();
  }

  timeStampHandle(timeStamp) {
    return Post.timeStampToFolders(timeStamp)
  }

  getPrev() {
    return ''
  }

  getNext() {
    return ''
  }

  static timeStampToFolders(timeStamp) {
    const fullDate = new Date(Number(timeStamp))
    const year = fullDate.getFullYear()
    const month = fullDate.getMonth() + 1 < 10 ? `0${fullDate.getMonth() + 1}` : fullDate.getMonth() + 1
    const day = fullDate.getDate()
    return `/${year}/${month}/${day}/${timeStamp}/`
  }
}
module.exports = Post