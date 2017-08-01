//app.js
App({
  login(callback, userInfoRaw) {
    wx.login({}) // 现在，调用 wx.login 是一个可选项了。只有当你需要使用微信登录鉴别用户，才需要用到它，用来获取用户的匿名识别符
    if (userInfoRaw.detail.errMsg == 'getUserInfo:ok') {
      let userInfo = JSON.parse(userInfoRaw.detail.rawData)
        //wx.request({}) // 将用户信息、匿名识别符发送给服务器，调用成功时执行 callback(null, res)
      try {
        wx.setStorageSync('user', userInfo)
      }
      catch (e) {
        // 处理错误
      }
      callback(null, userInfo)
    }
    else if (userinfo.detail.errMsg == 'getUserInfo:fail auth deny') {
      wx.showModal({
          title: '提示',
          content: '需要授权才能获取资料'
        }) // 提示用户，需要授权才能获取资料
      callback('fail to modify scope', null)
    }
  }
})