/* eslint-disable camelcase */
/* eslint-disable no-console */
import onekit_behavior from '../../behavior/onekit_behavior'
import toutiao_behavior from '../../behavior/toutiao_behavior'

Component({
  behaviors: [onekit_behavior, toutiao_behavior],
  options: {
    virtualHost: true
  },
  properties: {
    src: {
      type: String,
      value: '',
    },
    autoplay: {
      type: Boolean,
      value: false,
    },
    poster: {
      type: String,
      value: '',
    },
    loop: {
      type: Boolean,
      value: false,
    },
    showFullscreenBtn: {
      type: Boolean,
      value: false,
    },
    showPlayBtn: {
      type: Boolean,
      value: false,
    },
    controls: {
      type: Boolean,
      value: true,
    },
    objectFit: {
      type: String,
      value: 'contain',
    },
    playBtnPosition: {
      type: String,
      value: 'center',
    },
    preRollUnitId: {
      type: String,
      value: '',
    },
  },
  methods: {
    video_play() {
      this.triggerEvent('Play')
    },
    video_pause() {
      this.triggerEvent('Pause')
    },
    video_ended() {
      this.triggerEvent('Ended')
    },
    video_error() {
      this.triggerEvent('Error')
    },
    video_timeupdate(wx_e) {
      const wx_detail = wx_e.wx_detail
      const tt_detail = wx_detail
      this.triggerEvent('Timeupdate', tt_detail)
    },
    video_fullscreenchange() {
      this.triggerEvent('Fullscreenchange')
    },
  }

})
