var app = getApp()
Page({
  data: {
    src:[
      "https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%A4%8D%E5%8F%A4/%E8%AE%A9%E5%AE%83%E5%8E%BB%E5%A4%8D%E5%8F%A4%E5%90%A7%20%281%29.jpg",
      "https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%A4%8D%E5%8F%A4/%E8%AE%A9%E5%AE%83%E5%8E%BB%E5%A4%8D%E5%8F%A4%E5%90%A7%20%2810%29.jpg",
      "https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%A4%8D%E5%8F%A4/%E8%AE%A9%E5%AE%83%E5%8E%BB%E5%A4%8D%E5%8F%A4%E5%90%A7%20%282%29.jpg",
      "https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%A4%8D%E5%8F%A4/%E8%AE%A9%E5%AE%83%E5%8E%BB%E5%A4%8D%E5%8F%A4%E5%90%A7%20%283%29.jpg",
      "https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%A4%8D%E5%8F%A4/%E8%AE%A9%E5%AE%83%E5%8E%BB%E5%A4%8D%E5%8F%A4%E5%90%A7%20%284%29.jpg",
      "https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%A4%8D%E5%8F%A4/%E8%AE%A9%E5%AE%83%E5%8E%BB%E5%A4%8D%E5%8F%A4%E5%90%A7%20%285%29.jpg",
      "https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%A4%8D%E5%8F%A4/%E8%AE%A9%E5%AE%83%E5%8E%BB%E5%A4%8D%E5%8F%A4%E5%90%A7%20%286%29.jpg",
      "https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%A4%8D%E5%8F%A4/%E8%AE%A9%E5%AE%83%E5%8E%BB%E5%A4%8D%E5%8F%A4%E5%90%A7%20%287%29.jpg",
      "https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%A4%8D%E5%8F%A4/%E8%AE%A9%E5%AE%83%E5%8E%BB%E5%A4%8D%E5%8F%A4%E5%90%A7%20%288%29.jpg",
      "https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%A4%8D%E5%8F%A4/%E8%AE%A9%E5%AE%83%E5%8E%BB%E5%A4%8D%E5%8F%A4%E5%90%A7%20%289%29.jpg",


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