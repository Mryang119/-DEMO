// class语法 透明单例
class CreateSingleton {
  constructor (name) {
    if (!CreateSingleton.instance) {
      this.name = name
      CreateSingleton.instance = this
    }
    return CreateSingleton.instance
  }
}
let a = new CreateSingleton('a1')
let b = new CreateSingleton('b2')
console.log(a === b)
