//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    
    hunlis:[
      {
        id:'林中小屋',
        src:'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%A3%AE%E7%B3%BB/%E6%9E%97%E4%B8%AD%E5%B0%8F%E5%B1%8B%20%284%29.jpg',
        link:'../../list/senxi/1/1'
      }, 
      {
        id: '我申请加入你的人生',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%A3%AE%E7%B3%BB/%E6%88%91%E7%94%B3%E8%AF%B7%E5%8A%A0%E5%85%A5%E4%BD%A0%E7%9A%84%E4%BA%BA%E7%94%9F%20%282%29.jpg',
        link: '../../list/senxi/2/2'
      },
      {
        id: '心中的日月',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%A3%AE%E7%B3%BB/%E5%BF%83%E4%B8%AD%E7%9A%84%E6%97%A5%E6%9C%88%20%285%29.jpg',
        link: '../../list/senxi/3/3'
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
