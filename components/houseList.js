// components/houseList.js
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
    recommendList: [{
      imgSrc: '/images/building1.png',
      houseType: '大江苑 3居 朝南 电梯房',
      houseSize: '3室2厅2卫 100平 24/26F',
      address: '大江苑',
      houseTag: ['新增房源', '满2年'],
      totalPrice: '500万',
      averagePrice: '50000元/㎡'
    }, {
        imgSrc: '/images/building2.png',
      houseType: '大江苑-1 3居 朝南 电梯房',
      houseSize: '3室2厅2卫 100平 24/26F',
      address: '大江苑',
      houseTag: ['新增房源', '满2年'],
      totalPrice: '500万',
      averagePrice: '50000元/㎡'
    }, {
        imgSrc: '/images/building1.png',
      houseType: '大江苑-2 3居 朝南 电梯房',
      houseSize: '3室2厅2卫 100平 24/26F',
      address: '大江苑',
      houseTag: ['新增房源', '满2年'],
      totalPrice: '500万',
      averagePrice: '50000元/㎡'
    }, {
        imgSrc: '/images/building2.png',
      houseType: '大江苑-3 3居 朝南 电梯房',
      houseSize: '3室2厅2卫 100平 24/26F',
      address: '大江苑',
      houseTag: ['新增房源', '满2年'],
      totalPrice: '500万',
      averagePrice: '50000元/㎡'
    }, {
        imgSrc: '/images/building1.png',
      houseType: '大江苑-4 3居 朝南 电梯房',
      houseSize: '3室2厅2卫 100平 24/26F',
      address: '大江苑',
      houseTag: ['新增房源', '满2年'],
      totalPrice: '500万',
      averagePrice: '50000元/㎡'
    }, {
        imgSrc: '/images/building2.png',
      houseType: '大江苑-5 3居 朝南 电梯房',
      houseSize: '3室2厅2卫 100平 24/26F',
      address: '大江苑',
      houseTag: ['新增房源', '满2年'],
      totalPrice: '500万',
      averagePrice: '50000元/㎡'
    }, {
        imgSrc: '/images/building1.png',
      houseType: '大江苑-6 3居 朝南 电梯房',
      houseSize: '3室2厅2卫 100平 24/26F',
      address: '大江苑',
      houseTag: ['新增房源', '满2年'],
      totalPrice: '500万',
      averagePrice: '50000元/㎡'
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleDetail(e) {
      console.log(e)
      let item = e.currentTarget.dataset.item
      wx.navigateTo({
        url: `/pages/houseInfo/houseInfo?title=${item.houseType}&from=${this.fromName}`
      })
    }
  }
})