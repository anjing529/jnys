//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    
    hunlis:[
      {
        id:'简约主题',
        src:'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%AE%80%E7%BA%A6/Right%20Here%20Waiting%20for%20You%20%286%29.jpg',
        link:'../link/1/1'
      }, 
      {
        id: '复古主题',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%A4%8D%E5%8F%A4/Accompany%20%2811%29.jpg',
        link: '../link/2/2'
      },
      {
        id: '童话主题',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%AB%A5%E8%AF%9D/%E5%B0%8F%E7%8E%8B%E5%AD%90%E4%B8%8E%E7%8E%AB%E7%91%B0%E8%8A%B1%20%283%29.jpg',
        link: '../link/3/3'
      },
      {
        id: '森系主题',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%A3%AE%E7%B3%BB/%E6%9E%97%E4%B8%AD%E5%B0%8F%E5%B1%8B%20%289%29.jpg',
        link: '../link/4/4'
      },
      {
        id: '泰式婚礼',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%B3%B0%E5%BC%8F/%E3%80%90Unique%20warmth%20%E3%80%91%E7%8B%AC%E7%89%B9%E7%9A%84%E6%B8%A9%E6%9A%96%20%284%29.jpg',
        link: '../link/5/5'
      },
      {
        id: '中式婚礼',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E4%B8%AD%E5%BC%8F/%E9%B8%BE%E5%87%A4%E5%92%8C%E9%B8%A3%20%283%29.jpg',
        link: '../link/6/6'
      },
      {
        id: '新中式婚礼',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%96%B0%E4%B8%AD%E5%BC%8F/%E7%94%9F%E6%B4%BB%E7%9A%84%E5%86%97%E9%95%BF%E4%B8%8E%E6%B5%AA%E6%BC%AB%E7%9A%86%E6%9D%A5%E8%87%AA%E4%BA%8E%E4%BD%A0%20%286%29.jpg',
        link: '../link/7/7'
      },
      {
        id: '户外婚礼',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E6%88%B7%E5%A4%96/My%20.%E5%94%AF%E4%B8%80%20%281%29.jpg',
        link: '../link/8/8'
      },
      {
        id: '小众婚礼',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%B0%8F%E4%BC%97/%E5%88%9D%E8%A7%81%E5%8A%A8%E5%BF%83%20%283%29.jpg',
        link: '../link/9/9'
      },
      {
        id: '爆款特价',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E7%88%86%E6%AC%BE/%E5%87%A4%E5%87%B0%E9%BD%90%E9%A3%9E%20%283%29.jpg',
        link: '../link/10/10'
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
