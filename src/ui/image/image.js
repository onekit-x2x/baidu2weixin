/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import baidu_behavior from '../../behavior/baidu_behavior'

Component({
  behaviors: [onekit_behavior, baidu_behavior],
  options: {
    virtualHost: true
  },
  properties: {
    src: {
      type: String,
      value: '',
    },
    mode: {
      type: String,
      value: 'scaleToFill',
    },
    webp: {
      type: Boolean,
      value: false,
    },
    lazyLoad: {
      type: Boolean,
      value: false,
    },
  },
  methods: {
    image_error(e) {
      // eslint-disable-next-line no-console
      console.log('image_error', e)
      this.triggerEvent('error', e.details)
    },
    image_load(e) {
      // eslint-disable-next-line no-console
      console.log('image_load', e)
      this.triggerEvent('load', e.details)
    },
  }
})
