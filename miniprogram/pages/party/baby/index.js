var app = getApp()
Page({
  data: {
    src:[
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/5c2ca6fef4080.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/5c2ca6ffdd61c.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/5c2ca7025186e.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/5c2ca7057aeac.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/5c2ca705d608b.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/5c2ca70752da3.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E6%A3%AE%E6%9E%97%20%281%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E6%A3%AE%E6%9E%97%20%2810%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E6%A3%AE%E6%9E%97%20%2811%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E6%A3%AE%E6%9E%97%20%2813%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E6%A3%AE%E6%9E%97%20%282%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E6%A3%AE%E6%9E%97%20%285%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E6%A3%AE%E6%9E%97%20%286%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E6%A3%AE%E6%9E%97%20%287%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E6%A3%AE%E6%9E%97%20%288%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E6%A3%AE%E6%9E%97%20%289%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E7%B2%89%E8%89%B2%20%2814%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E7%B2%89%E8%89%B2%20%2815%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E7%B2%89%E8%89%B2%20%2816%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E7%B2%89%E8%89%B2%20%2817%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E7%B2%89%E8%89%B2%20%2818%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E7%B2%89%E8%89%B2%20%2819%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E7%B2%89%E8%89%B2%20%2821%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E7%B2%89%E8%89%B2%20%2822%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E7%B2%89%E8%89%B2%20%2824%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E7%B2%89%E8%89%B2%20%2825%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E7%B2%89%E8%89%B2%20%2826%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E7%B2%89%E8%89%B2%20%2827%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E7%B2%89%E8%89%B2%20%2828%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E7%B2%89%E8%89%B2%20%2829%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E7%B2%89%E8%89%B2%20%2830%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E7%B2%89%E8%89%B2%20%2832%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E7%B2%89%E8%89%B2%20%2833%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E8%93%9D%20%281%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E8%93%9D%20%282%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E8%93%9D%20%283%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E8%93%9D%20%284%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E8%93%9D%E8%89%B2%20%281%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E8%93%9D%E8%89%B2%20%282%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E8%93%9D%E8%89%B2%20%283%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E8%93%9D%E8%89%B2%20%284%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E8%93%9D%E8%89%B2%20%285%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E8%93%9D%E8%89%B2%20%286%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E8%93%9D%E8%89%B2%20%287%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E8%93%9D%E8%89%B2%20%288%29.jpg',


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