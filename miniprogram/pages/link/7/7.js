//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    
    hunlis:[
      {
        id:'粉月兰亭',
        src:'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%96%B0%E4%B8%AD%E5%BC%8F/%E7%B2%89%E6%9C%88%E5%85%B0%E4%BA%AD%20%282%29.jpg',
        link:'../../list/xinzhongshi/1/1'
      }, 
      {
        id: '江南忆',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%96%B0%E4%B8%AD%E5%BC%8F/%E6%B1%9F%E5%8D%97%E5%BF%86%20%285%29.jpg',
        link: '../../list/xinzhongshi/2/2'
      },
      {
        id: '生活的冗长与浪漫皆来自于你 ',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%96%B0%E4%B8%AD%E5%BC%8F/%E7%94%9F%E6%B4%BB%E7%9A%84%E5%86%97%E9%95%BF%E4%B8%8E%E6%B5%AA%E6%BC%AB%E7%9A%86%E6%9D%A5%E8%87%AA%E4%BA%8E%E4%BD%A0%20%283%29.jpg',
        link: '../../list/xinzhongshi/3/3'
      },
      {
        id: '流年锦时 ',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%96%B0%E4%B8%AD%E5%BC%8F/%E6%B5%81%E5%B9%B4%E9%94%A6%E6%97%B6%20%283%29.jpg',
        link: '../../list/xinzhongshi/4/index'
      },
      {
        id: '桃花灼灼 ',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%96%B0%E4%B8%AD%E5%BC%8F/%E6%A1%83%E8%8A%B1%E7%81%BC%E7%81%BC%20%287%29.jpg',
        link: '../../list/xinzhongshi/5/index'
      },
      {
        id: '温柔赠你 ',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%96%B0%E4%B8%AD%E5%BC%8F/%E6%B8%A9%E6%9F%94%E8%B5%A0%E4%BD%A0%20%288%29.jpg',
        link: '../../list/xinzhongshi/6/index'
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
