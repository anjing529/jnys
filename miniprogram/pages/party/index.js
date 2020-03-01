//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    
    hunlis:[
      {
        id:'宝宝宴',
        src:'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%AE%9D%E5%AE%9D%E5%AE%B4/%E7%B2%89%E8%89%B2%20%2821%29.jpg',
        link:'./baby/index'
      }, 
      {
        id: '求婚仪式',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%B1%82%E5%A9%9A/%E6%B0%94%E7%90%83%20%282%29.jpg',
        link: './marry/index'
      },
      {
        id: '订婚仪式',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E8%AE%A2%E5%A9%9A/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200222140429.jpg',
        link: './dinghun/index'
      }
    ],
    
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
