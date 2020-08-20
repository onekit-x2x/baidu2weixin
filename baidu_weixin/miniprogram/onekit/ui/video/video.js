Component({
    options: {  virtualHost: true
      },
  properties: {
    onekitClass: {
        type: String,
        value: ""
      },
      onekitStyle: {
        type: String,
        value: ""
      },
      onekitId: {
        type: String,
        value: ""
      },
    src:{
        type: String,
        value: "",
    },
      video:{
          type: String,
          value: "",
      },
      objectFit:{
        type: String,
        value: "",
    },
      duration:{
          type: Number,
          value: "",
      },
      controls:{
          type: Boolean,
          value: false,
      },
      danmuList:{
          type: Array,
          value: "",
      },

      danmuBtn:{
          type: Boolean,
          value: false,
      },
      enableBanmu:{
          type: Boolean,
          value: false,
      },
      autoplay:{
          type: Boolean,
          value: true,
      },
      loop:{
          type: Boolean,
          value: false,
      },
      muted:{
          type: Boolean,
          value: false,
      },
      initialTime:{
          type: Number,
          value: '0',
      },
      pageGesture:{
          type: Boolean,
          value: false,
      },
      direction:{
          type: Number,
          value: "",
      },
      showProgress:{
          type: Boolean,
          value: true,
      },
      showFullscreenBtn:{
          type: Boolean,
          value: true,
      },

      showPlayBtn:{
          type: Boolean,
          value: true,
      },
      showCenterPlayBtn:{
          type: Boolean,
          value: true,
      },
      enableProgressGesture:{
          type: Boolean,
          value: true,
      },
      poster:{
          type: String,
          value:'',
      },
      showMuteBtn:{
          type: Boolean,
          value:false,
      },
      title:{
          type: String,
          value: "",
      },
      enablePlayGesture:{
          type: Boolean,
          value:false,
      },
      pageGesture:{
          type: Boolean,
          value:false,
      },
      vslideGestureInFullscreen:{
          type: Boolean,
          value:true,
      },
      enableDanmu:{
      type: Boolean,
      value:false,
      }
  },
  methods: {
    video_play(e){
    console.log("video_play", e);
     this.triggerEvent('play',e.details)
    },
    video_pause(e){
    console.log("video_pause", e);
     this.triggerEvent('pause',e.details)
    },
    video_ended(e){
    console.log("video_ended", e);
     this.triggerEvent('ended',e.details)
    },
    video_timeupdate(e){
    console.log("video_timeupdate", e);
     this.triggerEvent('timeupdate',e.details)
    },
    video_fullscreenchang(e){
    console.log("video_fullscreenchang", e);
     this.triggerEvent('fullscreenchang',e.details)
    },
    video_waiting(e){
    console.log("video_waiting", e);
     this.triggerEvent('waiting',e.details)
    },
    video_error(e){
    console.log("video_error", e);
     this.triggerEvent('error',e.details)
    },
    video_loadedmetadata(e){
    console.log("video_loadedmetadata", e);
     this.triggerEvent('loadedmetadata',e.details)
    },
 }

});
