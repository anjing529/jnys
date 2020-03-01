//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    
    hunlis:[
      {
        id:'不染',
        src:'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E4%B8%AD%E5%BC%8F/%E4%B8%8D%E6%9F%93%20%283%29.jpg',
        link:'../../list/zhongshi/1/1'
      }, 
      {
        id: '红.愿',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E4%B8%AD%E5%BC%8F/%E7%BA%A2.%E6%84%BF%20%281%29.jpg',
        link: '../../list/zhongshi/2/2'
      },
      {
        id: '鸾凤和鸣',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E4%B8%AD%E5%BC%8F/%E9%B8%BE%E5%87%A4%E5%92%8C%E9%B8%A3%20%282%29.jpg',
        link: '../../list/zhongshi/3/3'
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
