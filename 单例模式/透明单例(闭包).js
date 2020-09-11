// 透明的单例(闭包)
var CreateSingleton = (function () {
  var instance
  var CreateSingleton = function (name) {
    this.name = name
    if (instance) {
      return instance
    }
    return (instance = this)
  }
  return CreateSingleton
})()
let a = new CreateSingleton('a1')
let b = new CreateSingleton('b2')
console.log(a.name, b.name)
