/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import toutiao_behavior from '../../behavior/toutiao_behavior'

Component({
  behaviors: [onekit_behavior, toutiao_behavior],

  options: {
    virtualHost: true
  },

  data: {},
  properties: {
    preRollUnitId: {type: String, value: ''},
    adIntervals: {type: Number, value: 0},
    type: {type: String, value: 'banner'},
  },
  methods: {
    ad_load() {
      this.triggerEvent('Load')
    },
    ad_error() {
      this.triggerEvent('Error')
    },
    ad_close() {
      this.triggerEvent('Close')
    },

  }
})
