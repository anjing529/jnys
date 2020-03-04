//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    
    hunlis:[
      {
        id: 'Fiery邂逅',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%B0%8F%E4%BC%97/Fiery%E9%82%82%E9%80%85%20%20%282%29.jpg',
        link: '../../list/xiaozhong/6/index'
      },
      {
        id: 'ONLY',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%B0%8F%E4%BC%97/ONLY%20%20%281%29.jpg',
        link: '../../list/xiaozhong/7/index'
      },
      {
        id:'HOME',
        src:'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%B0%8F%E4%BC%97/HOME%20%289%29.jpg',
        link:'../../list/xiaozhong/1/1'
      }, 
      {
        id: '初见动心',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%B0%8F%E4%BC%97/%E5%88%9D%E8%A7%81%E5%8A%A8%E5%BF%83%20%287%29.jpg',
        link: '../../list/xiaozhong/2/2'
      },
      {
        id: '七年一刻',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%B0%8F%E4%BC%97/%E4%B8%83%E5%B9%B4%E4%B8%80%E5%88%BB%20%2811%29.jpg',
        link: '../../list/xiaozhong/3/3'
      },
      {
        id: '我在这里爱你',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%B0%8F%E4%BC%97/%E6%88%91%E5%9C%A8%E8%BF%99%E9%87%8C%E7%88%B1%E4%BD%A0%20%289%29.jpg',
        link: '../../list/xiaozhong/4/4'
      },
      {
        id: '愿与你共度此生',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%B0%8F%E4%BC%97/%E6%84%BF%E4%B8%8E%E4%BD%A0%E5%85%B1%E5%BA%A6%E6%AD%A4%E7%94%9F%20%2810%29.jpg',
        link: '../../list/xiaozhong/5/index'
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
