//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    
    hunlis:[
      {
        id: '\“S\'il Suffisait D\'aimer\”有爱已足够',
        src:'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%B3%B0%E5%BC%8F/%E2%80%9CS%27il%20Suffisait%20D%27aimer%E2%80%9D%E6%9C%89%E7%88%B1%E5%B7%B2%E8%B6%B3%E5%A4%9F%20%2811%29.jpg',
        link:'../../list/taishi/1/1'
      }, 
      {
        id: '【Unique warmth】独特的温暖',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%B3%B0%E5%BC%8F/%E3%80%90Unique%20warmth%20%E3%80%91%E7%8B%AC%E7%89%B9%E7%9A%84%E6%B8%A9%E6%9A%96%20%289%29.jpg',
        link: '../../list/taishi/2/2'
      },
      {
        id: '素',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%B3%B0%E5%BC%8F/%E7%B4%A0%20%287%29.jpg',
        link: '../../list/taishi/3/3'
      },
      {
        id: '遇到你之后',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%B3%B0%E5%BC%8F/%E9%81%87%E5%88%B0%E4%BD%A0%E4%B9%8B%E5%90%8E%20%288%29.jpg',
        link: '../../list/taishi/4/4'
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
