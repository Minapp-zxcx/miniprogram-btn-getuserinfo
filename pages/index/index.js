//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {}
  },
  login(userInfoRaw){
    app.login((err, res)=>{
      this.setData({
        userInfo: res
      })
    }, userInfoRaw)
  }
})
