module.exports = Behavior({

  properties: {
    onekitId: {
      type: String, value: `id${Math.random()}`
    },
    onekitStyle: {
      type: String, value: ''
    },
    onekitClass: {
      type: String, value: ''
    },
  },
})
