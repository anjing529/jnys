//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    
    hunlis:[
      {
        id:'love you as ever',
        src:'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%88%B7%E5%A4%96/love%20you%20as%20ever%20%288%29.jpg',
        link:'../../list/huwai/1/1'
      }, 
      {
        id: 'My .唯一',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%88%B7%E5%A4%96/My%20.%E5%94%AF%E4%B8%80%20%281%29.jpg',
        link: '../../list/huwai/2/2'
      },
      {
        id: 'The fusion of love ',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%88%B7%E5%A4%96/The%20fusion%20of%20love%20%285%29.jpg',
        link: '../../list/huwai/3/3'
      },
      {
        id: '光 · 音',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%88%B7%E5%A4%96/%E5%85%89%20%C2%B7%20%E9%9F%B3%20%287%29.jpg',
        link: '../../list/huwai/4/4'
      },
      {
        id: '觅光',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%88%B7%E5%A4%96/%E8%A7%85%E5%85%89%20%282%29.jpg',
        link: '../../list/huwai/5/5'
      },
      {
        id: '世界不同，因爱而转',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%88%B7%E5%A4%96/%E4%B8%96%E7%95%8C%E4%B8%8D%E5%90%8C%EF%BC%8C%E5%9B%A0%E7%88%B1%E8%80%8C%E8%BD%AC%20%283%29.jpg',
        link: '../../list/huwai/6/6'
      },
      {
        id: '起风了',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%88%B7%E5%A4%96/%E8%B5%B7%E9%A3%8E%E4%BA%86%20%281%29.jpg',
        link: '../../list/huwai/7/index'
      },
      {
        id: '夕と秋',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%88%B7%E5%A4%96/%E5%A4%95%E3%81%A8%E7%A7%8B%20%281%29.jpg',
        link: '../../list/huwai/8/index'
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
