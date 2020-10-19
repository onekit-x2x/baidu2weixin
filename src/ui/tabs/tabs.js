/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import baidu_behavior from '../../behavior/baidu_behavior'
import onekit from '../../js/onekit'
import swan from '../../swan'

Component({
  behaviors: [onekit_behavior, baidu_behavior],
  properties: {
    urlQueryName: {type: String},
    maxTabItemAmount: {type: Number, value: 5},
    activeName: {type: String},
    tabBackgroundColor: {type: String, value: '#fff'}, // 选项卡背景颜色
    tabActiveTextColor: {type: String, value: '#000'}, // 选中选项卡字体颜色
    tabInactiveTextColor: {type: String, value: '#666'}, // 未选中选项卡字体颜色
    tabUnderlineColor: {type: String, value: '#333'}, // 选中选项卡下划线颜色
  },
  lifetimes: {
    created() {
      this.tabItems = {}
    },
    ready() {
      let activeName
      if (this.properties.activeName) {
        activeName = this.properties.activeName
      } else if (this.properties.urlQueryName) {
        const page = onekit.current()
        this.data.activeName = activeName = page.query[this.properties.urlQueryName]
      }
      if (!activeName) {
        activeName = this.firstName
      }

      const tab = this.tabItems[activeName]
      tab._reset(true)
    },
  },
  relations: {
    '../tab-item/tab-item': {
      type: 'child',
      linked(tab) {
        const name = tab._name()
        if (Object.keys(this.tabItems).length <= 0) {
          this.firstName = name
        }
        this.tabItems[name] = tab
        //
        const tabBackgroundColor = this.properties.tabBackgroundColor
        const tabActiveTextColor = this.properties.tabActiveTextColor
        const tabInactiveTextColor = this.properties.tabInactiveTextColor
        const tabUnderlineColor = this.properties.tabUnderlineColor
        tab._init({
          tabBackgroundColor, tabActiveTextColor, tabInactiveTextColor, tabUnderlineColor
        })
      },
    }
  },
  /*
  observers: {
    activeName(activeName) {
      const that = this
      // //////////
      if (that.data.activeName) {
        const tab = this.tabItems[that.data.activeName]
        if (tab) { tab._reset(false) }
      }
      const tab2 = this.tabItems[activeName]
      if (tab2) { tab2._reset(true) }
    }
  },
  */
  methods: {
    tab_click(e) {
      const that = this
      // //////////
      const name = e.detail.name
      //
      if (that.data.activeName) {
        const tab = this.tabItems[that.data.activeName]
        tab._reset(false)
      }
      //
      that.data.activeName = name
      //
      this.triggerEvent('Tabchange', {name})
      if (this.properties.urlQueryName) {
        const urlQuery = {}
        urlQuery[this.properties.urlQueryName] = name
        swan.setURLQuery(urlQuery)
      }
    }
  }
})
