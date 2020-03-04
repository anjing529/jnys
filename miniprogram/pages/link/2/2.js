//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    
    hunlis:[
      {
        id: 'Fall in love',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%A4%8D%E5%8F%A4/Fall%20in%20love%20%282%29.jpeg',
        link: '../../list/fugu/5/index'
      }, 
      {
        id:'Accompany',
        src:'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%A4%8D%E5%8F%A4/Accompany%20%284%29.jpg',
        link:'../../list/fugu/1/1'
      }, 
      {
        id: 'LOVE EACH OTHER FOR FOREVER',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%A4%8D%E5%8F%A4/LOVE%20EACH%20OTHER%20FOR%20FOREVER%20%289%29.jpg',
        link: '../../list/fugu/2/2'
      },
      {
        id: '复古国潮风',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%A4%8D%E5%8F%A4/%E5%A4%8D%E5%8F%A4%E5%9B%BD%E6%BD%AE%E9%A3%8E%20%283%29.jpg',
        link: '../../list/fugu/3/3'
      },
      {
        id: '让它去复古吧',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E5%A4%8D%E5%8F%A4/%E8%AE%A9%E5%AE%83%E5%8E%BB%E5%A4%8D%E5%8F%A4%E5%90%A7%20%286%29.jpg',
        link: '../../list/fugu/4/index'
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
