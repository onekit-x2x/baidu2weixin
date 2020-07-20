// onekit/ui/radio-group/radio-group.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    styleIsolation: 'apply-shared'
  },
  properties: {
    Class:{type:String,value:""},
    Style:{type:String,value:""},
    
  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      // this.selectComponent('radio')
     // let child = this.selectComponent(".radio-child");
     // console.log("child",child);
    },
  },
  /**
   * 组件的初始数据
   */
  data: {

  },
  observers:{

  },
  /**
   * 组件的方法列表
   */
  methods: {

    radio_click(e){
      //console.log(e)
      this.createSelectorQuery().in(this).selectAll('.radio-group').boundingClientRect(function(e){
        console.log("createSelectorQuery",e);
      }).exec();
    //  console.log("radios",radios);
     // this.triggerEvent("Change",{})
    }
  }
})
