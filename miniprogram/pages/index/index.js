//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    a1src: '../../image/a1.png',
    a2src: '../../image/a2.png',
    a3src: '../../image/a3.png',
    a4src: '../../image/a4.png',
    signupimg: '../../image/signup.png',
    imgsrc: '../../image/22.png',
    iconsrc: '../../image/usercount.png',
    jtsrc: '../../image/icon-jt.png',
    imgUrls: [
      '../../image/lbt1.jpg',
      '../../image/lbt2.jpg',
      '../../image/lbt3.jpg',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    hunlis:[
      {
        id:'简约',
        link:'../link/1/1',
        src:'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E8%BD%AE%E6%92%AD%E5%9B%BE/111.jpg'
      },
      {
        id: '复古',
        link: '../link/2/2',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E8%BD%AE%E6%92%AD%E5%9B%BE/222.jpg'
      },
      {
        id: '童话',
        link: '../link/3/3',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E8%BD%AE%E6%92%AD%E5%9B%BE/333.jpg'
      },
      {
        id: '森系',
        link: '../link/4/4',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E8%BD%AE%E6%92%AD%E5%9B%BE/444.jpg'
      },
      {
        id: '泰式',
        link: '../link/5/5',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E8%BD%AE%E6%92%AD%E5%9B%BE/555.jpg'
      },
      {
        id: '中式 ',
        link: '../link/6/6',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E8%BD%AE%E6%92%AD%E5%9B%BE/666.jpg'
      },
      {
        id: '新中式',
        link: '../link/7/7',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E8%BD%AE%E6%92%AD%E5%9B%BE/777.jpg'
      },
      {
        id: '户外',
        link: '../link/8/8',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E8%BD%AE%E6%92%AD%E5%9B%BE/888.jpg'
      },
      {
        id: '小众',
        link: '../link/9/9',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E8%BD%AE%E6%92%AD%E5%9B%BE/999.jpg'
      },
      {
        id: '爆款',
        link: '../link/10/10',
        src: 'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E8%BD%AE%E6%92%AD%E5%9B%BE/000.jpg'
      },
    ]
  },
  onShareAppMessage: function share(res) {
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
  imgH: function (e) {
    var winWid = wx.getSystemInfoSync().windowWidth;         //获取当前屏幕的宽度
    var imgh = e.detail.height;　　　　　　　　　　　　　　　　//图片高度
    var imgw = e.detail.width;
    var swiperH = winWid * imgh / imgw + "px"　　　　　　　　　　//等比设置swiper的高度。  
    this.setData({
      Hei: swiperH　　　　　　　　//设置高度
    })
  },
  gotohl: function () {
    wx.switchTab({
      url: '/pages/action/action'
    })
  }
  // tot1: function () {
  //   wx.reLaunch({
  //     url: '/pages/party/index'
  //   })
  // },
  // tot2: function () {
    
  // },
  // tot3: function () {
  //   wx.reLaunch({
  //     url: '/pages/car/index'
  //   })
  // },
  // tot4: function () {
    
  // }
  
})
