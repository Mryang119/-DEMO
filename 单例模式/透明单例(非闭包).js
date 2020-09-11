// 透明单例 (非闭包)
var instance
function Singleton (name) {
  if (!instance) {
    return (instance = this)
  }
  return instance
}
let a = new Singleton('a1')
let b = new Singleton('b1')
console.log(a === b)
