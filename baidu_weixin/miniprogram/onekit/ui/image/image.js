Component({
    options: {  virtualHost: true
      },
    properties: {
        Class: {
            type: String,
            value: ""
          },
          Style: {
            type: String,
            value: ""
          },
          Id: {
            type: String,
            value: ""
          },
        src: { 
            type: String, 
            value: "", 
        },
        mode: { 
            type: String, 
            value: "scaleToFill", 
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
       image_error(e){
       console.log("image_error", e);
        this.triggerEvent('error',e.details)
       },
       image_load(e){
       console.log("image_load", e);
        this.triggerEvent('load',e.details)
       },
    }
});