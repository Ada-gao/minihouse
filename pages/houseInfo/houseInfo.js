// pages/houseInfo/houseInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pData: {
      totalPrice: 4000,
      houseType: '四居室',
      area: '123.34',
      average: '5243',
      year: '1999年',
      floor: '3F',
      totalFloor: '20F',
      property: '70年',
      orientation: '朝南',
      no: '1234',
      decoration: '精装',
      update: '2018年',
      tags: ['新增房源', '满2年']
    },
    markers: [{
      // iconPath: '/resources/others.png',
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    isRent: false,
    showRecommand: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    wx.setNavigationBarTitle({
      title: options.title,
    })
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

  }
})