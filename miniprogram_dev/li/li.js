// import {OnekitPage} from '../baidu2weixin/index';
// import {swan} from '../baidu2weixin/index';
// var app = getApp();
// OnekitPage({
//     data:{
//         tabs:[
//             {
//                 name:'一',
//                 label:'标签一'
//             },
//             {
//                 name:'二',
//                 label:'标签二'
//             },
//             {
//                 name:'三',
//                 label:'标签三'
//             }
//         ],
//         content:'一',
//         activeNameOne:'一',
//         tabsTwo:[
//             {
//                 name:'一',
//                 label:'标签一'
//             },
//             {
//                 name:'二',
//                 label:'标签二'
//             },
//             {
//                 name:'三',
//                 label:'标签三'
//             },
//             {
//                 name:'四',
//                 label:'标签四'
//             },
//             {
//                 name:'五',
//                 label:'标签五'
//             },
//             {
//                 name:'六',
//                 label:'标签六'
//             },
//             {
//                 name:'七',
//                 label:'标签七'
//             }
//         ],
//         contentTwo:'一',
//         activeNameTwo:'一',
//         tabsThree:[
//             {
//                 name:'一',
//                 label:'标签一'
//             },
//             {
//                 name:'二',
//                 label:'标签二'
//             },
//             {
//                 name:'三',
//                 label:'标签三'
//             }
//         ],
//         contentThree:'一',
//         activeNameThree:'一',
//         tabsFour:[
//             {
//                 name:'一',
//                 label:'标签一',
//                 badgeType:'text',
//                 badgeText:'99+'
//             },
//             {
//                 name:'二',
//                 label:'标签二',
//                 badgeType:'dot'
//             },
//             {
//                 name:'三',
//                 label:'标签三'
//             }
//         ],
//         contentFour:'一',
//         activeNameFour:'一'
//     },
//     onShow:function(){
//         var openParams = app.globalData.openParams;
//         if(openParams){
//         swan.reportAnalytics('pageshow',{
//             fr:openParams,
//             type:'component',
//             name:'tabs'
//         });
//     }
//     },
//     onHide:function(){
//         app.globalData.openParams = '';
//     },
//     tabsOne:function(e){
//         this.setData({
//         content:e.detail.name,
//         activeNameOne:e.detail.name
//     });
//     },
//     tabsTwo:function(e){
//         this.setData({
//         contentTwo:e.detail.name,
//         activeNameTwo:e.detail.name
//     });
//     },
//     tabsThree:function(e){
//         this.setData({
//         contentThree:e.detail.name,
//         activeNameThree:e.detail.name
//     });
//     },
//     tabsFour:function(e){
//         this.setData({
//         contentFour:e.detail.name,
//         activeNameFour:e.detail.name
//     });
//     },
//     enterNewTabsPage:function(){
//         swan.navigateTo({
//         url:'../new-tabs/new-tabs?position=二'
//     });
//     }
// });


Page({
    data: {
      tab: [],
      activeTab: 0,
    },
  
    onLoad() {
      const titles = ['首页', '外卖', '商超生鲜', '购物', '美食饮品', '生活服务', '休闲娱乐', '出行']
      const tabs = titles.map(item => ({title: item}))
      this.setData({tabs})
    },
  
    onTabCLick(e) {
      const index = e.detail.index
      this.setData({activeTab: index})
    },
  
    onChange(e) {
      const index = e.detail.index
      this.setData({activeTab: index})
    }
  
  })
  