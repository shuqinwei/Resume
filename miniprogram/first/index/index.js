// first/index/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  getuserinfo:function (res) {
    console.log(res);
    var msg = res.detail.errMsg;
    //判断用户点击的按钮是 “允许” 还是 “拒绝”
    if (msg.indexOf("ok")>0){
      console.log("用户点击了允许,程序执行登录操作。");
      //登录
      wx.login({  
      })
      //跳转到主页
      wx.switchTab({
        url: '/first/main/main'
      })   
    }else{
      //点击的是拒绝
    }

  }

})