// components/sort.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    fromIndex: {
      type: String,
      value: '二手房'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    area: ["静安区", "黄浦区", "浦东新区"],
    areaIndex: 0,
    areaDefault: '区域',
    price: ["100", "200", "300"],
    priceIndex: 0,
    priceDefault: '售价',
    houseType: ["一室", "两室", "三室", "四室"],
    houseTypeIndex: 0,
    houseTypeDefault: '户型',
    size: ["100", "150", "200", "250"],
    sizeIndex: 0,
    sizeDefault: '面积',
    types: ["100", "150", "200", "250"],
    typesIndex: 0,
    typesDefault: '类型',
    joinRent: ["是", "否"],
    joinRentIndex: 0,
    joinRentDefault: '是否合租'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindAreaChange: function(e) {
      this.setData({
        areaIndex: e.detail.value,
        areaDefault: ''
      })
    },
    bindPriceChange: function(e) {
      this.setData({
        priceIndex: e.detail.value,
        priceDefault: ''
      })
    },
    bindHouseTypeChange: function(e) {
      this.setData({
        houseTypeIndex: e.detail.value,
        houseTypeDefault: ''
      })
      // console.log(this.data)
    },
    bindSizeChange: function(e) {
      this.setData({
        sizeIndex: e.detail.value,
        sizeDefault: ''
      })
    }
  }
})
