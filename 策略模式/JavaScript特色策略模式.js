// 直接使用对象代替class生成的策略类
var strategy = {
  Jiyou: function (name) {
    console.log(name + '你昨天内裤落我家里了')
  },
  Shabi: function (name) {
    console.log(name + '啥b')
  },
  Nvshen: function (name) {
    console.log(name + '周末我能请你吃kfc吗')
  }
}
// Myself依旧作为Context
var myself = function (type, name) {
  return strategy[type](name)
}
myself('Jiyou', '基友') // 基友你昨天内裤落我家里了
myself('Nvshen', '女神') // 女神周末我能请你吃kfc吗
