/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import baidu_behavior from '../../behavior/baidu_behavior'

Component({
  behaviors: [onekit_behavior, baidu_behavior],
  options: {
    virtualHost: true
  },
  properties: {
    label: {type: String},
    name: {type: String},
    badgeType: {type: String},
    badgeText: {type: String},
  },
  data: {
    current: false
  },
  relations: {
    '../tabs/tabs': {
      type: 'parent'
    }
  },
  methods: {
    _name() {
      return this.properties.name
    },
    _reset(isCurrent) {
      this.setData({isCurrent})
    },
    _init(data) {
      this.setData(data)
    },
    tab_tap() {
      this.setData({isCurrent: true})
      //
      const name = this.properties.name
      this.triggerEvent('click', {name}, {bubbles: true, composed: true})
    }
  }
})
