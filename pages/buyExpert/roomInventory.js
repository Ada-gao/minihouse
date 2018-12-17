// pages/buyExpert/roomInventory.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mobile: '',
    form: {}
  },
  bindMobileInput: function (e) {
    this.setData({
      mobile: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.address) {
      this.setData({
        address: options.address
      })
    } else {
      this.data.form = JSON.parse(options.obj)
      this.data.form.likeList = [...this.data.form.checked1, ...this.data.form.checked2, ...this.data.form.checked3]
    }
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