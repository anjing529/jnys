//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    
    hunlis:[
      {
        id:'Less is more',
        src:'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%AE%80%E7%BA%A6/Less%20is%20more%20%283%29.jpg',
        link:'../../list/jianyue/1/1'
      }, 
      {
        id: 'Right Here Waiting for You',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%AE%80%E7%BA%A6/Right%20Here%20Waiting%20for%20You%20%286%29.jpg',
        link: '../../list/jianyue/2/2'
      },
      {
        id: '爱 久处不厌',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%AE%80%E7%BA%A6/%E7%88%B1%20%E4%B9%85%E5%A4%84%E4%B8%8D%E5%8E%8C%20%284%29.jpg',
        link: '../../list/jianyue/3/3'
      },
      {
        id: '刚刚好',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%AE%80%E7%BA%A6/%E5%88%9A%E5%88%9A%E5%A5%BD%20%287%29.jpg',
        link: '../../list/jianyue/4/4'
      },
      {
        id: '欢喜',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%AE%80%E7%BA%A6/%E6%AC%A2%E5%96%9C%20%289%29.jpg',
        link: '../../list/jianyue/5/5'
      },
      {
        id: '安·鸽',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%AE%80%E7%BA%A6/%E5%AE%89%C2%B7%E9%B8%BD%20%282%29.jpg',
        link: '../../list/jianyue/6/index'
      },
      {
        id: '契合',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%AE%80%E7%BA%A6/%E5%A5%91%E5%90%88%20%287%29.jpg',
        link: '../../list/jianyue/7/index'
      },
      {
        id: '与幸福不期而遇',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%AE%80%E7%BA%A6/%E4%B8%8E%E5%B9%B8%E7%A6%8F%E4%B8%8D%E6%9C%9F%E8%80%8C%E9%81%87%20%283%29.jpg',
        link: '../../list/jianyue/8/index'
      },
      {
        id: '筑 . 梦',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%AE%80%E7%BA%A6/%E7%AD%91%20.%20%E6%A2%A6%20%282%29.jpg',
        link: '../../list/jianyue/9/index'
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
