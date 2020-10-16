Component({
  options: {
    addGlobalClass: true,
    // 指定所有 _ 开头的数据字段为纯数据字段
    pureDataPattern: /^_/,
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    activeName: { type: String, value: '' }, // 当前激活tab
    urlQueryName: { type: String, value: '' },
    maxTabItemAmount: { type: Number, value: 5 },

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
    activeName(e) {
      // console.log(e.detail)
      // this.setData({
      //   activeName: e.detail //这里是改变Page中data上的值
      // })

      // console.log(e.detail.index)

      // const len = this.data.tabs.length
      // if (len === 0) return

      // let currentView = e.detail.index
      // if (currentView < 0) currentView = 0
      // if (currentView > len - 1) currentView = len - 1
      // this.setData({ currentView })
    }
  },

  lifetimes: {
    // attached() {

    // }
  },

  methods: {

  },

  // relations: {
  //   './tab-item': {
  //     type: 'child', // 关联的目标节点应为子节点
  //     linked: function(target) {
  //       // 每次有custom-li被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
  //       this.properties.activeName=name
  //       this.setData({activeName:this.properties.activeName})
  //     },
  //     linkChanged: function(target) {
  //       // 每次有custom-li被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
  //     },
  //     unlinked: function(target) {
  //       // 每次有custom-li被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
  //     }
  //   }
  // },
})

