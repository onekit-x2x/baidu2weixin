Component({
  options: {
    // 指定所有 _ 开头的数据字段为纯数据字段
    pureDataPattern: /^_/,
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    urlQueryName: { type: String, value: '' },
    maxTabItemAmount: { type: Number, value: 5 },
    tabs: {type: Array, value: []}, // 数据项格式为 `{title}`
  },
  // relations: {
  //   '../tab-item/tab-item': {
  //     type: 'child', // 关联的目标节点应为子节点
  //     linked: function(target) {
  //       // 每次有custom-li被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
  //       console.log('[tabs] a child is linked: ', target)
  //     },
  //     linkChanged: function(target) {
  //       // 每次有custom-li被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
  //     },
  //     unlinked: function(target) {
  //       // 每次有custom-li被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
  //     }
  //   }
  // },

  // methods: {
  //   _getAllLi: function () {
  //     // 使用getRelationNodes可以获得nodes数组，包含所有已关联的custom-li，且是有序的
  //     var nodes = this.getRelationNodes('../tab-item/tab-item')
  //     // console.log(nodes)
  //   },
  //   _getName(e){
  //     this.properties.activeName = e.detail.data
  //     console.log(this.properties.activeName);
  //   }
  // },

  // ready: function () {
  //   this._getAllLi()
  //   this._getName()
  // }

  // observers: {
  //   activeName: function(activeName) {
  //     const len = this.data.tabs.length
  //     if (len === 0) return

  //     let currentView = activeName - 1
  //     if (currentView < 0) currentView = 0
  //     if (currentView > len - 1) currentView = len - 1
  //     this.setData({currentView})
  //   }
  // },

  methods:{
    ui_tap(e){
      console.log(e.detail.data)
      this.setData({
        tabs: e.detail.data //这里是改变Page中data上的值
      })
    }
  }
})

