/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import baidu_behavior from '../../behavior/baidu_behavior'

Component({
  behaviors: [onekit_behavior, baidu_behavior],
  options: {
    virtualHost: true
  },
  properties: {
    tabBackgroundColor: {type: String, value: '#fff'}, // 选项卡背景颜色
    tabActiveTextColor: {type: String, value: '#000'}, // 选中选项卡字体颜色
    tabInactiveTextColor: {type: String, value: '#666'}, // 未选中选项卡字体颜色
    tabUnderlineColor: {type: String, value: '#333'}, // 选中选项卡下划线颜色
    label: {type: String, value: ''},
    name: {type: String, value: ''},
    badgeType: {type: String, value: ''},
    badgeText: {type: String, value: ''},
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
    tab_tap() {
      this.setData({isCurrent: true})
      //
      const name = this.properties.name
      this.triggerEvent('TabClick', {name}, {bubbles: true, composed: true})
    }
  }
})
