var app = getApp()
Page({
  data: {
    
    car: [
      
      {
        id: '主持人',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/4%E5%A4%A7/%E4%B8%BB%E6%8C%81%E4%BA%BA.png'
      }
    ]

    
  },
  onShareAppMessage: function share(res) {
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
  }
  
})