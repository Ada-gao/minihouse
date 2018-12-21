// components/swiperTab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    areaDefault: '区域',
    salePriceDefault: '售价',
    houseTypeDefault: '户型',
    sizeDefault: '面积',
    typeDefault: '类型',
    rentDefault: '方式',
    areaList: ['松江新城', '泗泾', '大学城', '体育场', '醉白池', '欢乐谷'],
    // priceIndex: -1,
    priceSelectIdx: [],
    priceSelectTempIdx: [],
    priceList: [{
        name: '100以下',
        value: '0',
        checked: false
      },
      {
        name: '100-200万',
        value: '1',
        checked: false
      },
      {
        name: '200-300万',
        value: '2',
        checked: false
      },
      {
        name: '300-400万',
        value: '3',
        checked: false
      },
      {
        name: '400-500万',
        value: '4',
        checked: false
      },
      {
        name: '500-800万',
        value: '5',
        checked: false
      },
      {
        name: '800-1000万',
        value: '6',
        checked: false
      },
      {
        name: '1000万以上',
        value: '7',
        checked: false
      }
    ],
    // houseTypeIndex: -1,
    houseTypeSelectIdx: [],
    houseTypeTempIdx: [],
    houseTypeSelectList: [],
    houseTypeList: [{
        name: '一室',
        value: '0',
        checked: false
      },
      {
        name: '两室',
        value: '1',
        checked: false
      },
      {
        name: '三室',
        value: '2',
        checked: false
      },
      {
        name: '四室',
        value: '3',
        checked: false
      },
      {
        name: '五室',
        value: '4',
        checked: false
      },
      {
        name: '五室以上',
        value: '5',
        checked: false
      }
    ],
    sizeIndex: -1,
    sizeSelectIdx: null,
    sizeList: [{
        name: '50平以下',
        value: '0',
        checked: false
      },
      {
        name: '50-70平',
        value: '1',
        checked: false
      },
      {
        name: '70-90平',
        value: '2',
        checked: false
      },
      {
        name: '90-110平',
        value: '3',
        checked: false
      },
      {
        name: '110-130平',
        value: '4',
        checked: false
      },
      {
        name: '130-150平',
        value: '5',
        checked: false
      },
      {
        name: '150平以上',
        value: '6',
        checked: false
      }
    ],
    currentTab: 0,
    showMask: true,
    areaSelected: false,
    houseTypeSelected: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabNav: function(e) {
      if (this.data.currentTab === e.currentTarget.dataset.current - 0) {
        return false
      } else {
        this.filterList(this.data.houseTypeList, this.data.houseTypeSelectIdx)
        this.filterList(this.data.priceList, this.data.priceSelectIdx)
        this.setData({
          currentTab: e.currentTarget.dataset.current,
          sizeSelectIdx: this.data.sizeIndex,
          houseTypeSelectList: this.data.houseTypeList,
          houseTypeTempIdx: this.data.houseTypeSelectIdx,
          priceSelectTempIdx: this.data.priceSelectIdx,
          priceList: this.data.priceList
        })
      }
    },
    filterList: function(list, idxList) {
      list.forEach(item => {
        item.checked = false
        if (!idxList.length) return false
        idxList.map(val => {
          if (val === item.value) {
            item.checked = true
          }
        })
        return list
      })
    },
    showMaskTab: function(e) {
      this.filterList(this.data.houseTypeList, this.data.houseTypeSelectIdx)
      this.filterList(this.data.priceList, this.data.priceSelectIdx)
      this.setData({
        showMask: false,
        currentTab: e.currentTarget.dataset.select,
        sizeSelectIdx: this.data.sizeIndex,
        houseTypeSelectList: this.data.houseTypeList,
        houseTypeTempIdx: this.data.houseTypeSelectIdx,
        priceSelectTempIdx: this.data.priceSelectIdx,
        priceList: this.data.priceList
      })
    },
    clickArea: function(e) {
      this.setData({
        showMask: true,
        areaDefault: this.data.areaList[e.currentTarget.dataset.area],
        areaSelected: true
      })
    },
    singleSelection: function(e) {
      let obj = e.currentTarget.dataset
      if(obj.sizeIdx) {
        this.setData({
          sizeSelectIdx: e.currentTarget.dataset.sizeIdx,
        })
      }
    },
    salePriceChange: function(e) {
      if (e.type === 'tap') return
      this.setData({
        priceSelectTempIdx: e.detail.value
      })
      let data = this.data
      this.filterList(data.priceList, data.priceSelectTempIdx)
      this.setData({
        priceList: data.priceList
      })
    },
    cancelPriceChoose: function() {
      let list = this.data.priceList
      list.forEach(item => item.checked = false)
      this.setData({
        priceList: list,
        priceSelectIdx: [],
        priceSelectTempIdx: [],
        salePriceSelected: false,
        salePriceDefault: '售价'
      })
    },
    submitPriceChoose: function(e) {
      this.setData({
        priceSelectIdx: this.data.priceSelectTempIdx
      })
      if (this.data.priceSelectIdx.length === 1) {
        this.setData({
          showMask: true,
          salePriceDefault: this.data.priceList[this.data.priceSelectIdx[0]].name,
          salePriceSelected: true
        })
      } else if (this.data.priceSelectIdx.length > 1) {
        this.setData({
          showMask: true,
          salePriceDefault: '多选',
          salePriceSelected: true
        })
      } else {
        this.setData({
          showMask: true,
          salePriceSelected: false,
          salePriceDefault: '售价'
        })
      }
    },
    houseTypeChange: function(e) {
      if (e.type === 'tap') return
      this.setData({
        houseTypeTempIdx: e.detail.value
      })
      this.filterList(this.data.houseTypeList, this.data.houseTypeTempIdx)
      this.setData({
        houseTypeSelectList: this.data.houseTypeList
      })
    },
    submitHouseTypeChoose: function(e) {
      this.setData({
        houseTypeSelectIdx: this.data.houseTypeTempIdx
      })
      if (this.data.houseTypeSelectIdx.length === 1) {
        this.setData({
          showMask: true,
          houseTypeDefault: this.data.houseTypeList[this.data.houseTypeSelectIdx[0]].name,
          houseTypeSelected: true,
          houseTypeList: this.data.houseTypeSelectList
        })
      } else if (this.data.houseTypeSelectIdx.length > 1) {
        this.setData({
          showMask: true,
          houseTypeDefault: '多选',
          houseTypeSelected: true,
          houseTypeList: this.data.houseTypeSelectList
        })
      } else {
        this.setData({
          showMask: true,
          houseTypeSelected: false,
          houseTypeDefault: '户型'
        })
      }
    },
    cancelHouseTypeChoose: function(e) {
      let list = this.data.houseTypeList
      list.forEach(item => item.checked = false)
      this.setData({
        houseTypeSelectIdx: [],
        houseTypeTempIdx: [],
        houseTypeSelectList: list,
        houseTypeSelected: false,
        houseTypeDefault: '户型'
      })
    },
    submitSizeChoose: function() {
      if (this.data.sizeSelectIdx === -1) {
        this.setData({
          showMask: true,
          sizeSelected: false,
          sizeDefault: '面积'
        })
      } else {
        this.setData({
          sizeIndex: this.data.sizeSelectIdx,
          showMask: true,
          sizeDefault: this.data.sizeList[this.data.sizeSelectIdx].name,
          sizeSelected: true
        })
      }
    },
    cancelSizeChoose: function() {
      this.setData({
        sizeIndex: -1,
        sizeSelectIdx: -1,
        sizeDefault: '面积',
        sizeSelected: false
      })
    },
    hideModal: function() {
      this.setData({
        showMask: true,
        sizeSelectIdx: -1,
        houseTypeSelectList: this.data.houseTypeList
      })
    }
  }
})