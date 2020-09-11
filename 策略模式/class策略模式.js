class Myself {
  constructor () {
    this.strategy = null // 打招呼方式的策略类
  }
  sayHi () {
    return this.strategy.Hello()
  }
  setStrategy (strategy) {
    this.strategy = strategy
  }
}

// 定义打招呼的策略类
class Jiyou {
  constructor (name) {
    this.name = name
  }
  Hello () {
    console.log(this.name + '你昨天内裤落我家里了')
  }
}
class Shabi {
  constructor (name) {
    this.name = name
  }
  Hello () {
    console.log(this.name + '啥b')
  }
}
class Nvshen {
  constructor (name) {
    this.name = name
  }
  Hello () {
    console.log(this.name + '周末我能请你吃kfc吗')
  }
}
let myself = new Myself()
myself.setStrategy(new Jiyou('基友'))
myself.sayHi()
