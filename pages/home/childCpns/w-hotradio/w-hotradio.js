// pages/home/childCpns/w-hotradio/w-hotradio.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 电台广场
     */
    handleClick: function () {
      this.triggerEvent('getRadiosPark')
    },
  }
})
