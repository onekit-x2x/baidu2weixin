import swan from "../../onekit/swan"
/**
 * @file component for picker-view
 * @author swan
 */

const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
    years.push(i)
}

for (let i = 1; i <= 12; i++) {
    months.push(i)
}

for (let i = 1; i <= 31; i++) {
    days.push(i)
}

let app = getApp();

Page({
    data: {
        years,
        year: date.getFullYear(),
        months,
        month: 2,
        days,
        day: 2,
        value: [9999, 1, 1]
    },
    onShow() {
        // 打点操作
        var openParams= app.globalData.openParams;
        if (openParams) {
            swan.reportAnalytics('pageshow', {
                fr: openParams,
                type: 'component',
                name: 'picker-view',
           });
        }
    },
    onHide() {
        getApp().globalData.openParams = ''
    },
    bindChange(e) {
        const val = e.detail.value
        this.setData({
            year: this.data.years[val[0]],
            month: this.data.months[val[1]],
            day: this.data.days[val[2]]
        })
    }
});
