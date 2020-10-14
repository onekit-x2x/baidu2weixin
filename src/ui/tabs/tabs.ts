Component({
  options: {
    addGlobalClass: true,
    // 指定所有 _ 开头的数据字段为纯数据字段
    pureDataPattern: /^_/,
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    tabBackgroundColor: {type: String, value: '#fff'}, // 选项卡背景颜色
    tabActiveTextColor: {type: String, value: '#000'}, // 选中选项卡字体颜色
    tabInactiveTextColor: {type: String, value: '#666'}, // 未选中选项卡字体颜色
    tabUnderlineColor: {type: String, value: '#333'}, // 选中选项卡下划线颜色
    activeName: {type: String, value: ''}, // 当前激活tab
    //activeTab: {type: Number, value: 0}, // 当前激活tab
    urlQueryName:{type: String, value: ''},
    maxTabItemAmount:{type: Number, value: 5},

    // tabs: {type: Array, value: []}, // 数据项格式为 `{title}`
    // tabClass: {type: String, value: ''}, // 选项卡样式
    // swiperClass: {type: String, value: ''}, // 内容区域swiper的样式
    // activeClass: {type: String, value: ''}, // 选中选项卡样式
    // duration: {type: Number, value: 500}, // 内容区域切换时长
  },
  data: {
    // currentView: 0
  },

  observers: {
    // activeTab: function(activeTab) {
    //   const len = this.data.tabs.length
    //   if (len === 0) return

    //   let currentView = activeTab - 1
    //   if (currentView < 0) currentView = 0
    //   if (currentView > len - 1) currentView = len - 1
    //   this.setData({currentView})
    // }
  },

  lifetimes: {
    created() {
      
    }
  },

  methods: {
    // handleTabClick(e) {
    //   const index = e.currentTarget.dataset.index
    //   this.setData({activeName: index})
    //   this.triggerEvent('tabclick', {index})
    // },

    handleSwiperChange(e) {
      const name = e.detail.current
      this.setData({activeName: name})
      this.triggerEvent('change', {name})
    }
  }
})
  
