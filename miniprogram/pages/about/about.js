//about.js
//获取应用实例
var app = getApp()
Page({
  data: {
    logosrc: '../../image/logo.png',
    adrimg: '../../image/icon-address.png',
    clockimg: '../../image/icon-clock.png',
    phoneimg: '../../image/icon-phone.png',
    jtimg: '../../image/icon-jt.png',
    picimg: '../../image/icon-pic.png'
  },
    calling1: function () {
      wx.makePhoneCall({
        phoneNumber: '18863980227',
      })
    },
  calling2: function () {
    wx.makePhoneCall({
      phoneNumber: '15192071314',
    })
  },
    getLocation: function () {
      wx.openLocation({
        latitude: 36.08917,
        longitude: 120.37748,
        name: "晶诺一生私人订制创意婚礼",
        address: "山东省青岛市市北区徐州北路145号新兴大院",
        scale: 28
      })
    },
    onLoad: function (options) {
      // 页面初始化 options为页面跳转所带来的参数
    },
    onReady: function () {
      // 页面渲染完成
    },
    onShow: function () {
      // 页面显示
    },
    onHide: function () {
      // 页面隐藏
    },
    onUnload: function () {
      // 页面关闭
    },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '晶诺一生私人订制创意婚礼',
      path: '/pages/index/index',
      imageUrl: '/image/share.png',
      success: function (res) {
        // 转发成功
        console.log("转发成功")
      },
      fail: function (res) {
        // 转发失败
        onsole.log("转发失败")
      }
    }
  },
  
})