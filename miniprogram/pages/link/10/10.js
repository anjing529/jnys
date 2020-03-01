//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    
    hunlis:[
      {
        id:'Into my world',
        src:'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%88%86%E6%AC%BE/%20Into%20my%20world%20%20%282%29.jpg',
        link:'../../list/hot/1/1'
      },
      {
        id: 'The Autumn',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%88%86%E6%AC%BE/The%20Autumn%20%287%29.jpg',
        link: '../../list/hot/2/2'
      },
      {
        id: '凤凰齐飞',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%88%86%E6%AC%BE/%E5%87%A4%E5%87%B0%E9%BD%90%E9%A3%9E%20%281%29.jpg',
        link: '../../list/hot/3/3'
      },
      {
        id: '梦幻城堡',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%88%86%E6%AC%BE/%E6%A2%A6%E5%B9%BB%E5%9F%8E%E5%A0%A1%20%284%29.jpg',
        link: '../../list/hot/4/4'
      },
      {
        id: '月白与苍绿 ',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%88%86%E6%AC%BE/%E6%9C%88%E7%99%BD%E4%B8%8E%E8%8B%8D%E7%BB%BF%20%282%29.jpg',
        link: '../../list/hot/5/5'
      },
      {
        id: '朱红蜜域',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%88%86%E6%AC%BE/%E6%9C%B1%E7%BA%A2%E8%9C%9C%E5%9F%9F%20%281%29.jpg',
        link: '../../list/hot/6/6'
      },
      {
        id: 'RoseFairyTales',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%88%86%E6%AC%BE/RoseFairyTales%20%286%29.jpg',
        link: '../../list/hot/7/7'
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
