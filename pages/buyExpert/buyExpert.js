// pages/buyExpert/buyExpert.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    haveAddress: true,
    address: '',
    budgetValue: 0,
    sliderMin: 0,
    sliderMax: 1000,
    form: {
      sliderValueText: '',
      checked: [],
      checked1: [],
      checked2: [],
      checked3: []
    },
    checkedIndex: 0,
    checkedIndex1: 0,
    checkedIndex2: 0,
    checkedIndex3: 0,
    checkboxItems: [
      { name: '一室', value: '0', checked: true },
      { name: '两室', value: '1', checked: false },
      { name: '三室', value: '2', checked: false },
      { name: '四室', value: '3', checked: false },
      { name: '五室', value: '4', checked: false },
      { name: '五室以上', value: '5', checked: false }
    ],
    checkboxItems1: [
      { name: '满五唯一', value: '0', checked: false },
      { name: '满两年', value: '1', checked: false },
      { name: '南北通透', value: '2', checked: false },
      { name: '无贷款', value: '3', checked: true },
      { name: '电梯房', value: '4', checked: false },
      { name: '近地铁', value: '5', checked: false },
      { name: '近学校', value: '6', checked: false }
    ],
    checkboxItems2: [
      { name: '多层', value: '0', checked: false },
      { name: '小高层', value: '1', checked: true },
      { name: '高层', value: '2', checked: false }
    ],
    checkboxItems3: [
      { name: '非顶楼', value: '0', checked: false },
      { name: '非底楼', value: '1', checked: false }
    ],
    countryCodes: [
      { label: '不限', value: '0' },
      { label: '南九亭', value: '1' },
      { label: '松江新城', value: '2' },
      { label: '泗泾', value: '3' },
      { label: '佘山', value: '4' },
      { label: '松江老城', value: '5' }
    ],
    countryCodesIndex: 0
  },
  switchChange: function (e) {
    // console.log('switch发生change事件，携带value值为：', e)
    this.setData({
      haveAddress: e.detail.value
    })
  },
  checkboxChange: function (e) {
    console.log(e)
    let index = 0
    console.log('checkbox发生change事件，携带value值为：' + e.detail.value)
    var checkboxItems = this.data.checkboxItems
    var values = e.detail.value
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value === values[j]) {
          checkboxItems[i].checked = true
          // console.log(this.data.form.checked[index])
          // this.data.form.checked[index] = checkboxItems[i].name
          index++
          break
        }
      }
    }
    this.setData({
      checkboxItems: checkboxItems
    })
  },
  checkboxChange1(e) {
    let index = 0
    console.log('checkbox发生change1事件，携带value值为：' + e.detail.value)
    var checkboxItems = this.data.checkboxItems1
    var values = e.detail.value
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value === values[j]) {
          checkboxItems[i].checked = true
          this.data.form.checked1[index] = checkboxItems[i].name
          index++
          break
        }
      }
    }
    // this.checkboxItems1 = checkboxItems
    this.setData({
      checkboxItems1: checkboxItems
    })
  },
  checkboxChange2(e) {
    let index = 0
    console.log('checkbox发生change2事件，携带value值为：' + e.detail.value)
    var checkboxItems = this.data.checkboxItems2
    var values = e.detail.value
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value === values[j]) {
          checkboxItems[i].checked = true
          this.data.form.checked2[index] = checkboxItems[i].name
          index++
          break
        }
      }
    }
    this.setData({
      checkboxItems2: checkboxItems
    })
  },
  checkboxChange3(e) {
    let index = 0
    console.log('checkbox发生change3事件，携带value值为：' + e.detail.value)
    var checkboxItems = this.data.checkboxItems3
    var values = e.detail.value
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value === values[j]) {
          checkboxItems[i].checked = true
          this.data.form.checked3[index] = checkboxItems[i].name
          index++
          break
        }
      }
    }
    this.setData({
      checkboxItems3: checkboxItems
    })
  },
  bindCountryCodeChange: function (e) {
    this.setData({
      countryCodesIndex: e.detail.value
    })
  },
  bindAddressInput: function (e) {
    this.setData({
      address: e.detail.value
    })
  },
  bindSliderChange: function (e) {
    this.setData({
      budgetValue: e.detail.value
    })
  },
  submitHandle: function () {
    if (this.data.address && this.data.haveAddress) {
      // 有意向地址
      wx.navigateTo({ url: '/pages/buyExpert/roomInventory?address=' + this.data.address })
    } else if (!this.data.haveAddress) {
      // 无意向地址
      console.log(this.data.form)
      wx.navigateTo({ url: '/pages/buyExpert/roomInventory?obj=' + JSON.stringify(this.data.form) })
    }
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

  }
})