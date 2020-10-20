/* eslint-disable max-len */
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
    tabsBackgroundColor: {type: String, value: '#fff'}, // 选项卡背景颜色
    tabsActiveTextColor: {type: String, value: '#000'}, // 选中选项卡字体颜色
    tabsInactiveTextColor: {type: String, value: '#666'}, // 未选中选项卡字体颜色
    tabsUnderlineColor: {type: String, value: '#333'}, // 选中选项卡下划线颜色
  },
  lifetimes: {
    created() {
      this.tabItems = {}
    },
    attached() {
      wx.createSelectorQuery().in(this).select('.weui-tabs')
        .fields({size: true})
        .exec((res) => {
          const WIDTH = res[0].width
          const count = Math.min(Object.keys(this.tabItems).length, this.properties.maxTabItemAmount)
          const width = WIDTH / count
          // console.log(WIDTH, count, width)
          for (const key of Object.keys(this.tabItems)) {
            const tabItem = this.tabItems[key]
            tabItem._setWidth(width)
          }
        })
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

      const tabItem = this.tabItems[activeName]
      tabItem._reset(true)
    },
  },
  relations: {
    '../tab-item/tab-item': {
      type: 'child',
      linked(tabItem) {
        const name = tabItem._name()
        if (Object.keys(this.tabItems).length <= 0) {
          this.firstName = name
        }
        this.tabItems[name] = tabItem
        //
        const tabsBackgroundColor = this.properties.tabsBackgroundColor
        const tabsActiveTextColor = this.properties.tabsActiveTextColor
        const tabsInactiveTextColor = this.properties.tabsInactiveTextColor
        const tabsUnderlineColor = this.properties.tabsUnderlineColor
        tabItem._init({
          tabsBackgroundColor, tabsActiveTextColor, tabsInactiveTextColor, tabsUnderlineColor
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
        const tabItem = this.tabItems[that.data.activeName]
        if (tabItem) { tabItem._reset(false) }
      }
      const tabItem2 = this.tabItems[activeName]
      if (tabItem2) { tabItem2._reset(true) }
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
        const tabItem = this.tabItems[that.data.activeName]
        tabItem._reset(false)
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
