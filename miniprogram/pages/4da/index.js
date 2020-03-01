//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    
    hunlis:[
      {
        id:'化妆',
        src:'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%AE%80%E7%BA%A6/Right%20Here%20Waiting%20for%20You%20%286%29.jpg',
        link:'./huazhuang/index'
      }, 
      {
        id: '主持',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%A4%8D%E5%8F%A4/Accompany%20%2811%29.jpg',
        link: './zhuchi/index'
      },
      {
        id: '摄影团队',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%AB%A5%E8%AF%9D/%E5%B0%8F%E7%8E%8B%E5%AD%90%E4%B8%8E%E7%8E%AB%E7%91%B0%E8%8A%B1%20%283%29.jpg',
        link: './sheying/index'
      },
      {
        id: '摄像团队',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%A3%AE%E7%B3%BB/%E6%9E%97%E4%B8%AD%E5%B0%8F%E5%B1%8B%20%289%29.jpg',
        link: './shexiang/index'
      },
      
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
