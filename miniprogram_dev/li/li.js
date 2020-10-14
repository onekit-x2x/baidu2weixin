Page({
    data: {
      tabs: [],
      tab: [],
      activeTab: 0,
    },
  
    onLoad() {
      const titles = ['首页', '外卖', '商超生鲜', '购物', '美食饮品', '生活服务', '休闲娱乐', '出行']
      const titles2 = ['a', 'b', 'c']
      const tabs = titles.map(item => ({title: item}))
      const tab = titles2.map(item => ({title: item}))
      // this.setData({tabs})
      this.setData({tabs,tab})
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
  