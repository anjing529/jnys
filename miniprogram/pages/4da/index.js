//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    
    hunlis:[
      {
        id:'化妆',
        src:'https://jnys0532.oss-cn-qingdao.aliyuncs.com/4%E5%A4%A7/%E5%8C%96%E5%A6%86%E5%A4%B4%E5%9B%BE.jpg',
        link:'./huazhuang/index'
      }, 
      {
        id: '主持',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/4%E5%A4%A7/%E4%B8%BB%E6%8C%81%E5%A4%B4%E5%9B%BE.jpg',
        link: './zhuchi/index'
      },
      {
        id: '摄影团队',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/4%E5%A4%A7/%E6%91%84%E5%BD%B1%E5%A4%B4%E5%9B%BE.jpg',
        link: './sheying/index'
      },
      {
        id: '摄像团队',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/4%E5%A4%A7/%E6%91%84%E5%83%8F%E5%A4%B4%E5%9B%BE.jpg',
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
