// components/category.js
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
    categoryList: {
      pageone: [{
        name: '二手房',
        src: '/images/category_1.png',
        link: '/pages/secHand/secHand'
      }, {
        name: '新房',
        src: '/images/category_2.png',
          link: '/pages/newHouse/newHouse'
      }, {
        name: '租房',
        src: '/images/category_3.png',
          link: '/pages/rent/rent'
      }, {
        name: '房东委托',
        src: '/images/category_4.png',
          link: '/pages/entrust/entrust'
      }, {
        name: '买房专家',
        src: '/images/category_5.png',
          link: '/pages/buyExpert/buyExpert'
      }]
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    choose: function (e) {
      let item = e.currentTarget.dataset.item
      wx.navigateTo({
        url: `${item.link}?from=${item.name}`
      })
    }
  }
})
