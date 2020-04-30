import swan from "../../onekit/swan"
/*
 * @demo page component for picker
 * @author lvlei
 */

/* globals Page */
Page({
    data: {
        time: '12:12',
        dateDay: '2018-01-05',
        dateMonth: '2018-01',
        dateYear: '2018',
        regionData: ['全部', '全部', '全部'],
        customItem: '全部'
    },
    timeChange(e) {
        console.log('picker-time changed，值为', e.detail.value);
        swan.setData(this,'time', e.detail.value);
    },
    dateChangeDay(e) {
        console.log('picker-date changed，值为', e.detail.value);
        swan.setData(this,
            'dateDay', e.detail.value
        );
    },
    dateChangeMonth(e) {
        console.log('picker-date changed，值为', e.detail.value);
        swan.setData(this,
            'dateMonth', e.detail.value
        );
    },
    dateChangeYear(e) {
        console.log('picker-date changed，值为', e.detail.value);
        swan.setData(this,
            'dateYear', e.detail.value
        );
    },
    regionChange(e) {
        swan.setData(this,
            'regionData', e.detail.value
        );
        console.log('picker-time changed，值为', e.detail.value);
    }
});
