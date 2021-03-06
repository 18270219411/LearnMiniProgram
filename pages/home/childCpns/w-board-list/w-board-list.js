// pages/home/childCpns/w-board-list/w-board-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    boardPoster: {
      type: String,
      value: ''
    },
    boardList: {
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
     * 返回
     */
    handleClick: function () {
      this.triggerEvent('goBack')
    },

    /**
     * 播放全部
     */
    handlePlayAll: function () {
      this.triggerEvent('playAll')
    },

    /**
     * 播放
     */
    handlePlay: function (e) {
      const index = e.currentTarget.dataset.index
      const data = { index: index }
      this.triggerEvent('readyPlay', data)
    }
  }
})
