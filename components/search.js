// components/search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    houseIndex: {
      type: Number,
      default: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showInput: function () {
      this.setData({
        inputShowed: true
      })
      wx.navigateTo({
        url: '/pages/searchBar/searchBar?houseIndex=' + this.data.houseIndex,
      })
    },
    hideInput: function () {
      this.setData({
        inputShowed: false,
        inputVal: ''
      })
    },
    inputTyping: function (e) {
      console.log(e)
      this.setData({
        inputVal: e.detail.value
      })
    }
  }
})
