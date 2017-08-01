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
  },
  canILogin(){
    console.log(wx.canIUse('button.open-type.getUserInfo'))
    if(!wx.canIUse('button.open-type.getUserInfo')){
      wx.showModal({
        title: "微信版本太旧",
        content: '使用旧版本微信，将无法登录、使用一些功能。请至 App Store、Play Store 或其他可信渠道更新微信。',
        confirmText:'好',
        showCancel: false
      })
    }
  }
})