import swan from "../../../onekit/swan"
Component({
  attached() {
  },
  detached() { },
  properties: {
    size: { type: String, value: "default" },
    type: { type: String, value: "default" },
    plain: { type: Boolean, value: false },
    disabled: { type: Boolean, value: false },
    loading: { type: Boolean, value: false },
    "hover-class": { type: String, value: "button-hover" },
    "hover-start-time": { type: Boolean, value: 20 },
    "hover-stay-time": { type: Number, value: 70 },
    "hover-stop-propagation": { type: Boolean, value: false },
    "form-type": { type: String, value: "buttonclick" },
    "open-type": { type: String, value: '' },
  },
  methods: {
    button_bindTap(e) {
      var that = this;
      if (this.props.openType) {
        switch (this.props.openType) {
          case "getUserInfo":
            swan.getUserInfo({
              withCredentials:true,
              success(res) {
                e.detail = res;
                that.props.bindGetUserInfo(e);
              }
            });
          break;
          case "contact":
            break;
          case "share":
            break;
          case "launchApp":
            break;
          case "openSetting":
            break;
          case "feedback":
            break;
          default:
            throw new Error(this.props.openType);
        }
      }
      this.props.openType(e);
    },
  },
});