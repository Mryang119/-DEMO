// 登录函数
var login = (function () {
  var cache = {}
  // 监听函数
  var listen = function (type, callback) {
    if (!cache[type]) {
      cache[type] = [] // 如果之前没订阅过就要给一个缓存列表
    }
    cache[type].push(callback)
  }
  // 发布信息
  var trigger = function (type, data) {
    cache[type].map(fn => {
      fn.call(this, data) // 给各个模块传递参数
    })
  }
  return {
    listen,
    trigger
  }
})()

// header模块
var header = (function () {
  // 订阅登录成功的消息
  login.listen('loginType', function (data) {
    // 会在登录成功后执行
    header.setAvatar(data)
    header.setUserName(data)
  })
  var setAvatar = function (data) {
    console.log('设置用户头像' + data.userImage)
  }
  var setUserName = function (data) {
    console.log('设置用户名' + data.userName)
  }
  return {
    setAvatar,
    setUserName
  }
})()
// 同事B开发的收货地址列表模块
var address = (function () {
  login.listen('loginType', function (data) {
    address.refresh(data)
  })
  var refresh = function (data) {
    console.log('刷新收获地址列表' + data.list)
  }
  return {
    refresh
  }
})()
// 模拟登陆

var ajax = function () {
  login.trigger('loginType', {
    userImage: 'http.jpg',
    userName: '无敌牛子',
    list: [1, 2, 3, 4]
  })
}

ajax()
