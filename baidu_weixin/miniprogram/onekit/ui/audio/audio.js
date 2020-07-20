Component({
  // options: {
  //         addGlobalClass: true,
  //     },
      properties: {
          id: {
              type: String, 
              value: "",
          },
          src: {
              type: String, 
              value: "",
          },
          loop: {
              type: Boolean, 
              value: false,
          },
          controls: {
              type: Boolean, 
              value: false,
          },
          poster: {
              type: String, 
              value: "",
          },
          name: {
              type: String, 
              value: "未知音频",
          },
          author: {
              type: String, 
              value: "未知作者",
          },
      },
  
      methods: {
         audio_play(e){
          this.triggerEvent('play',e.details)
         },
         audio_pause(e){
          this.triggerEvent("pause",e.details)
         },
         audio_timeupdate(e){
          this.triggerEvent("timeupdate",e.details)
         },
         audio_ended(e){
          this.triggerEvent("ended",e.details)
         },
         audio_error(e){
          this.triggerEvent("error",e.details)
         },
      }
  });