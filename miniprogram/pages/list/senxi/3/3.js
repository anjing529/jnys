var app = getApp()
Page({
  data: {
    src:[
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%A3%AE%E7%B3%BB/%E5%BF%83%E4%B8%AD%E7%9A%84%E6%97%A5%E6%9C%88%20%281%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%A3%AE%E7%B3%BB/%E5%BF%83%E4%B8%AD%E7%9A%84%E6%97%A5%E6%9C%88%20%282%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%A3%AE%E7%B3%BB/%E5%BF%83%E4%B8%AD%E7%9A%84%E6%97%A5%E6%9C%88%20%283%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%A3%AE%E7%B3%BB/%E5%BF%83%E4%B8%AD%E7%9A%84%E6%97%A5%E6%9C%88%20%284%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%A3%AE%E7%B3%BB/%E5%BF%83%E4%B8%AD%E7%9A%84%E6%97%A5%E6%9C%88%20%285%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%A3%AE%E7%B3%BB/%E5%BF%83%E4%B8%AD%E7%9A%84%E6%97%A5%E6%9C%88%20%286%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%A3%AE%E7%B3%BB/%E5%BF%83%E4%B8%AD%E7%9A%84%E6%97%A5%E6%9C%88%20%287%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%A3%AE%E7%B3%BB/%E5%BF%83%E4%B8%AD%E7%9A%84%E6%97%A5%E6%9C%88%20%288%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%A3%AE%E7%B3%BB/%E5%BF%83%E4%B8%AD%E7%9A%84%E6%97%A5%E6%9C%88%20%289%29.jpg',


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