var app = getApp()
Page({
  data: {
    src:[
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%B3%B0%E5%BC%8F/%E9%81%87%E5%88%B0%E4%BD%A0%E4%B9%8B%E5%90%8E%20%281%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%B3%B0%E5%BC%8F/%E9%81%87%E5%88%B0%E4%BD%A0%E4%B9%8B%E5%90%8E%20%2810%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%B3%B0%E5%BC%8F/%E9%81%87%E5%88%B0%E4%BD%A0%E4%B9%8B%E5%90%8E%20%282%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%B3%B0%E5%BC%8F/%E9%81%87%E5%88%B0%E4%BD%A0%E4%B9%8B%E5%90%8E%20%283%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%B3%B0%E5%BC%8F/%E9%81%87%E5%88%B0%E4%BD%A0%E4%B9%8B%E5%90%8E%20%284%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%B3%B0%E5%BC%8F/%E9%81%87%E5%88%B0%E4%BD%A0%E4%B9%8B%E5%90%8E%20%285%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%B3%B0%E5%BC%8F/%E9%81%87%E5%88%B0%E4%BD%A0%E4%B9%8B%E5%90%8E%20%286%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%B3%B0%E5%BC%8F/%E9%81%87%E5%88%B0%E4%BD%A0%E4%B9%8B%E5%90%8E%20%287%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%B3%B0%E5%BC%8F/%E9%81%87%E5%88%B0%E4%BD%A0%E4%B9%8B%E5%90%8E%20%288%29.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%B3%B0%E5%BC%8F/%E9%81%87%E5%88%B0%E4%BD%A0%E4%B9%8B%E5%90%8E%20%289%29.jpg',


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