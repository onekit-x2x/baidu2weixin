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
    tabBackgroundColor: {type: String, value: '#fff'}, // 选项卡背景颜色
    tabActiveTextColor: {type: String, value: '#000'}, // 选中选项卡字体颜色
    tabInactiveTextColor: {type: String, value: '#666'}, // 未选中选项卡字体颜色
    tabUnderlineColor: {type: String, value: '#333'}, // 选中选项卡下划线颜色
    activeName: {type: String, value: ''}, // 当前激活tab
    label: {type: String, value: ''},
    name: {type: String, value: ''},
    badgeType: {type: String, value: ''},
    badgeText: {type: String, value: ''},
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTabClick(e) {
      const name = e.currentTarget.dataset
      // eslint-disable-next-line no-console
      console.log(name)
      this.setData({activeName: name})
      this.triggerEvent('handleTabClick', {name})
    }
  },
  // relations: {
  //   '../tabs/tabs': {
  //     type: 'parent', // 关联的目标节点应为父节点
  //     linked(target) {
  //       // 每次被插入到custom-ul时执行，target是custom-ul节点实例对象，触发在attached生命周期之后
  //       console.log('child linked to ', target)
  //     },
  //     linkChanged(target) {
  //       // 每次被移动后执行，target是custom-ul节点实例对象，触发在moved生命周期之后
  //       console.log('child linkChanged to ', target)
  //     },
  //     unlinked(target) {
  //       // 每次被移除时执行，target是custom-ul节点实例对象，触发在detached生命周期之后
  //       console.log('child unlinked to ', target)
  //     }
  //   }
  // }
})
