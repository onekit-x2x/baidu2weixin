/* eslint-disable no-console */
/* eslint-disable camelcase */
module.exports = Behavior({

  properties: {
    animation: {type: Object},
  },
  methods: {
    ui_tap() {
      this.triggerEvent('Tap',)
    },
    ui_touchstart() {
      this.triggerEvent('Touchstart')
    },
    ui_touchmove() {
      this.triggerEvent('Touchmove')
    },
    ui_touchcancel() {
      this.triggerEvent('Touchcancel')
    },
    ui_touchend() {
      this.triggerEvent('Touchend')
    },
    ui_longpress() {
      this.triggerEvent('Longpress')
    },
    ui_longtap() {
      this.triggerEvent('Longtap')
    },
    ui_transitionend() {
      this.triggerEvent('Transitionend')
    },
    ui_animationstart() {
      this.triggerEvent('Animationstart')
    },
    ui_animationiteration() {
      this.triggerEvent('Animationiteration')
    },
    ui_animationend() {
      this.triggerEvent('Animationend')
    },
    ui_touchforcechange() {
      this.triggerEvent('Touchforcechange')
    },
  },
})
