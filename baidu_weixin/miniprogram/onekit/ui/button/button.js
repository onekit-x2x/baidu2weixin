import swan from "../../../onekit/swan"
Component({
  behaviors: ['wx://form-field-button'],
  options: {  virtualHost: true
  
  },
  attached() {
  },
  detached() { },
  properties: {
    Class:{
      type:String,
      value:""
    },
    Style:{
      type:String,
      value:""
    },
    onekitId:{
      type:String,
      value:""
    },
    size: { type: String, value: "default" },
    type: { type: String, value: "default" },
    plain: { type: Boolean, value: false },
    formType: { type: String, value: "buttonclick" },
    openType: { type: String, value: "" },
    hoverClass: { type: String, value: "button-hover" },
    hoverStopPropagation: { type: Boolean, value: false },
    hoverStartTime: { type: Boolean, value: 20 },
    hoverStayTime: { type: Number, value: 70 },
    disabled: { type: Boolean, value: false },
    loading: { type: Boolean, value: false },
    
  },
  methods: {
    button_bindtap(e) {
      var that = this;
      if (this.properties.openType) {
        switch (this.properties.openType) {
          case "contact":
            break;
          case "getPhoneNumber":
            break;
          case "getUserInfo":
            break;
          case "openSetting":
            break;
          default:
          throw new Error(this.properties.openType);
        }
      }

      this.triggerEvent("tap",{}); 
    },
  },
});

