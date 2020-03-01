var app = getApp()
Page({
  data: {
    src:[
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E8%AE%A2%E5%A9%9A/005vXcVIly1gaqhl5a108j34g02yob2j.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E8%AE%A2%E5%A9%9A/005vXcVIly1gaqhlcofrdj32ta47xe8a.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E8%AE%A2%E5%A9%9A/005vXcVIly1gaqhlla6g6j32yo4g04qz.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E8%AE%A2%E5%A9%9A/006HOSJUgy1gb74ytbf06j32ds1scx6w.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E8%AE%A2%E5%A9%9A/006HOSJUgy1gb74yusyu9j30zk0qonja.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E8%AE%A2%E5%A9%9A/006J7aB9gy1gatp8r2u8lj32c02c0kjn.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E8%AE%A2%E5%A9%9A/006J7aB9gy1gatp8swounj32aq2aq1kz.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E8%AE%A2%E5%A9%9A/006J7aB9gy1gatp8vkdckj33402c0e85.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E8%AE%A2%E5%A9%9A/006XVHNhly1gaem7biwyyj30yi0yiahl.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E8%AE%A2%E5%A9%9A/006XVHNhly1gaem7brkh5j315p15pguf.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E8%AE%A2%E5%A9%9A/006XVHNhly1gaem7c1mdwj318k18kaj7.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E8%AE%A2%E5%A9%9A/006XVHNhly1gaem7cae7sj30yi0yitgi.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E8%AE%A2%E5%A9%9A/a0ab49dfly1gasr3mao0aj20zk0qnk2x.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E8%AE%A2%E5%A9%9A/a0ab49dfly1gasr3nmie2j20zk0qnds1.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E8%AE%A2%E5%A9%9A/e85be49ely1gbr5w6w5acj21900u0afi.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E8%AE%A2%E5%A9%9A/e85be49ely1gbr5w7rijjj21dc0ww4k4.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E8%AE%A2%E5%A9%9A/e85be49ely1gbr5w9cjv4j22tc2404qq.jpg',
      'https://jnys0532.oss-cn-qingdao.aliyuncs.com/%E8%AE%A2%E5%A9%9A/e85be49ely1gbr5wbdf4fj22tc240hdu.jpg',

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
  }
  
})