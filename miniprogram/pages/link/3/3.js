//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    
    hunlis:[
      {
        id:'Kilig',
        src:'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%AB%A5%E8%AF%9D/Kilig%20%281%29.jpg',
        link:'../../list/tonghua/1/1'
      }, 
      {
        id: '翻开的童话故事',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%AB%A5%E8%AF%9D/%E7%BF%BB%E5%BC%80%E7%9A%84%E7%AB%A5%E8%AF%9D%E6%95%85%E4%BA%8B%20%287%29.jpg',
        link: '../../list/tonghua/2/2'
      },
      {
        id: '小王子与玫瑰花',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%AB%A5%E8%AF%9D/%E5%B0%8F%E7%8E%8B%E5%AD%90%E4%B8%8E%E7%8E%AB%E7%91%B0%E8%8A%B1%20%282%29.jpg',
        link: '../../list/tonghua/3/3'
      },
      {
        id: 'Lover',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%AB%A5%E8%AF%9D/Lover%20%285%29.jpg',
        link: '../../list/tonghua/4/index'
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
