/* eslint-disable no-console */
import onekit from '../../js/onekit'

Component({
  properties: {
    urlQueryName: {type: String},
    maxTabItemAmount: {type: Number, value: 5},
    activeName: {type: String},
  },
  lifetimes: {
    created() {
      this.tabItems = {}
    },
    ready() {
      let defaultName
      if (this.properties.activeName) {
        defaultName = this.properties.activeName
      } else if (this.properties.urlQueryName) {
        const page = onekit.current()
        defaultName = page.query[this.properties.urlQueryName]
      }
      if (!defaultName) {
        defaultName = this.firstName
      }

      const tab = this.tabItems[defaultName]
      tab._reset(true)
    },
  },
  relations: {
    './../tab-item/tab-item': {
      type: 'child',
      linked(tab) {
        const name = tab._name()
        if (Object.keys(this.tabItems).length <= 0) {
          this.firstName = name
        }
        this.tabItems[name] = tab
      },
    }
  },
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
  methods: {
    tab_TabClick(e) {
      const that = this
      // //////////
      const name = e.detail.name
      this.triggerEvent('tabchange', {name})
      //
      if (that.data.activeName) {
        const tab = this.tabItems[that.data.activeName]
        tab._reset(false)
      }
      //
      that.data.activeName = name
    }
  }
})
