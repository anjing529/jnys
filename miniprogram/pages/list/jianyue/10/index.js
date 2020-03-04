var app = getApp()
Page({
  data: {
    src:[
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%AE%80%E7%BA%A6/%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A8%20%281%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%AE%80%E7%BA%A6/%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A8%20%2810%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%AE%80%E7%BA%A6/%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A8%20%2811%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%AE%80%E7%BA%A6/%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A8%20%2812%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%AE%80%E7%BA%A6/%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A8%20%2813%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%AE%80%E7%BA%A6/%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A8%20%2814%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%AE%80%E7%BA%A6/%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A8%20%2815%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%AE%80%E7%BA%A6/%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A8%20%2816%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%AE%80%E7%BA%A6/%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A8%20%2817%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%AE%80%E7%BA%A6/%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A8%20%2818%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%AE%80%E7%BA%A6/%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A8%20%282%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%AE%80%E7%BA%A6/%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A8%20%283%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%AE%80%E7%BA%A6/%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A8%20%284%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%AE%80%E7%BA%A6/%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A8%20%285%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%AE%80%E7%BA%A6/%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A8%20%286%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%AE%80%E7%BA%A6/%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A8%20%287%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%AE%80%E7%BA%A6/%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A8%20%288%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%AE%80%E7%BA%A6/%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A8%20%289%29.jpg',




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