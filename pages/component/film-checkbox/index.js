Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isShowCheckbox: { // 是否显示勾选模块
      type: Boolean,
      value: true
    },
    isActive: { // 勾选模块是否选中   
      type: Boolean,
      value: false
    },
    title: {  // 勾选模块标题
      type: String,
      value: '勾选模块'
    },
    isEdit: { // 编辑内容是否显示
      type: Boolean,
      value: false
    },
    editTitle: { // 编辑内容标题
      type: String,
      value: '编辑内容'
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    isActive: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 勾选模块点击事件
     */
    onFilmCheck() {
      this.setData({
        isActive: !this.data.isActive
      })
    },
    /**
     * 内容编辑点击事件
     */
    onFilmEdit() {
      wx.navigateTo({
        url:"../merchant-template-film/merchant-template-film"
      });
    }
  }
})
