// pages/searchBar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: true,
    inputVal: '',
    houses: ["二手房", "新房", "租房"]
  },
  // showInput: function () {
  //   this.setData({
  //     inputShowed: true
  //   })
  // },
  hideInput: function () {
    this.setData({
      // inputShowed: false,
      inputVal: ''
    })
    wx.navigateBack({
      delta: 1
    })
  },
  inputTyping: function (e) {
    console.log(e)
    this.setData({
      inputVal: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.houseIndex)
    console.log(this.data.houses[options.houseIndex])
    wx.setNavigationBarTitle({
      title: this.data.houses[options.houseIndex],
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