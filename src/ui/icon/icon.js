/* eslint-disable camelcase */

import onekit_behavior from '../../behavior/onekit_behavior'
import baidu_behavior from '../../behavior/baidu_behavior'

Component({
  behaviors: [onekit_behavior, baidu_behavior],
  options: {
    virtualHost: true
  },
  properties: {
    type: {type: String, value: ''},
    size: {type: Number, value: 24},
    color: {type: String, value: ''},

  }

})
