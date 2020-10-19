/* eslint-disable no-console */
Component({
  properties: {
    urlQueryName: {type: String, value: ''},
    maxTabItemAmount: {type: Number, value: 5},
    activeName: {type: String}
  },
  lifetimes: {
    created() {
      this.tabItems = {}
    },
    ready() {
      console.log('xxxxxxxxxxx', this.properties)
      if (this.properties.activeName) {
        console.log('yyyyyyyyyyyy', this.tabItems)
        const tab = this.tabItems[this.properties.activeName]
        tab._reset(true)
      }
    },
  },
  relations: {
    './../tab-item/tab-item': {
      type: 'child',
      linked(tab) {
        const name = tab._name()
        this.tabItems[name] = tab
      },
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
