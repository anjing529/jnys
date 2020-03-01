var app = getApp()
Page({
  data: {
    src:[
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%B0%8F%E4%BC%97/HOME%20%282%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%B0%8F%E4%BC%97/HOME%20%283%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%B0%8F%E4%BC%97/HOME%20%284%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%B0%8F%E4%BC%97/HOME%20%285%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%B0%8F%E4%BC%97/HOME%20%286%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%B0%8F%E4%BC%97/HOME%20%287%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%B0%8F%E4%BC%97/HOME%20%288%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%B0%8F%E4%BC%97/HOME%20%289%29.jpg',




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