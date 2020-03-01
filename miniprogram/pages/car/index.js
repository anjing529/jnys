var app = getApp()
Page({
  data: {
    
    car: [
      {
        id: '劳斯莱斯',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%A9%9A%E8%BD%A6/%E5%8A%B3%E6%96%AF%E8%8E%B1%E6%96%AF.jpg'
      },
      {
        id: '玛莎拉蒂',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%A9%9A%E8%BD%A6/%E7%8E%9B%E8%8E%8E%E6%8B%89%E8%92%82.jpg'
      },
      {
        id: '玛莎拉蒂',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%A9%9A%E8%BD%A6/%E7%8E%9B%E8%8E%8E%E6%8B%89%E8%92%822.jpg'
      },
      // {
      //   id: '玛莎拉蒂 总裁',
      //   src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%A9%9A%E8%BD%A6/%E7%8E%9B%E8%8E%8E%E6%8B%89%E8%92%82%E6%80%BB%E8%A3%81%E7%99%BD%E8%89%B2.jpg'
      // },
      {
        id: '黑色宾利',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%A9%9A%E8%BD%A6/%E9%BB%91%E8%89%B2%E5%AE%BE%E5%88%A9.jpg'
      },
      {
      id: '保时捷 帕拉梅拉',
      src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%A9%9A%E8%BD%A6/%E4%BF%9D%E6%97%B6%E6%8D%B7%E5%B8%95%E6%8B%89%E6%A2%85%E6%8B%89.jpg'
    },
    {
      id: '保时捷 帕拉梅拉',
      src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%A9%9A%E8%BD%A6/%E4%BF%9D%E6%97%B6%E6%8D%B7%E5%B8%95%E6%8B%89%E6%A2%85%E6%8B%892.jpg'
    },
   
    {
      id: '奔驰E',
      src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%A9%9A%E8%BD%A6/%E5%A5%94%E9%A9%B0E.jpg'
    },
    {
      id: '特斯拉红色',
      src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%A9%9A%E8%BD%A6/%E7%89%B9%E6%96%AF%E6%8B%89%E7%BA%A2%E8%89%B2.jpg'
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