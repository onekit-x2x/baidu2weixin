import swan from "../../onekit/swan"
/**
 * @file demo component for picker
 * @author swan
 */
/* globals Page, swan */
let app = getApp();

Page({
    data: {
        selector: ['选项一', '选项二', '选项三'],
        time: '12:12',
        dateDay: '2018-01-05',
        arrIndex: 0,
        dateMonth: '2018-01',
        dateYear: '2018',
        regionData: ['全部', '全部', '全部'],
        customItem: '全部',
        multiIndex: [0, 0, 0],
        multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
    },
    onLoad(e) {
    },
    onShow() {
        // 打点操作
        var openParams= app.globalData.openParams;
        if (openParams) {
            swan.reportAnalytics('pageshow', {
                fr: openParams,
                type: 'component',
                name: 'picker',
           });
        }
    },
    onHide() {
        getApp().globalData.openParams = ''
    },
    selectorChange(e) {
        console.log('picker-selector changed，值为', e.detail.value);
        this.setData('arrIndex', e.detail.value);
    },
    timeChange(e) {
        console.log('picker-time changed，值为', e.detail.value);
        this.setData(
            'time', e.detail.value
        );
    },
    dateChangeDay(e) {
        console.log('picker-date changed，值为', e.detail.value);
        this.setData(
            'dateDay', e.detail.value
        );
    },
    dateChangeMonth(e) {
        console.log('picker-date changed，值为', e.detail.value);
        this.setData(
            'dateMonth', e.detail.value
        );
    },
    dateChangeYear(e) {
        console.log('picker-date changed，值为', e.detail.value);
        this.setData(
            'dateYear', e.detail.value
        );
    },
    regionChange(e) {
        this.setData(
            'regionData', e.detail.value
        );
        console.log('picker-time changed，值为', e.detail.value);
    },
    cancel() {
        swan.showToast({
            title: '用户取消选择',
            icon: 'none'
        });
    },
    bindMultiPickerChange: function (e) {
        console.log('picker-multiSelector changed，值为', e.detail.value)
        this.setData(
            'multiIndex', e.detail.value
        );
    },

    bindMultiPickerColumnChange: function (e) {
        console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
        var data = {
            multiArray: this.getData('multiArray'),
            multiIndex: this.getData('multiIndex')
        };
        data.multiIndex[e.detail.column] = e.detail.value;
        switch (e.detail.column) {
            case 0:
                switch (data.multiIndex[0]) {
                    case 0:
                        data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
                        data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
                        break;
                    case 1:
                        data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
                        data.multiArray[2] = ['鲫鱼', '带鱼'];
                        break;
                }
                data.multiIndex[1] = 0;
                data.multiIndex[2] = 0;
                break;
            case 1:
                switch (data.multiIndex[0]) {
                    case 0:
                        switch (data.multiIndex[1]) {
                            case 0:
                                data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
                                break;
                            case 1:
                                data.multiArray[2] = ['蛔虫'];
                                break;
                            case 2:
                                data.multiArray[2] = ['蚂蚁', '蚂蟥'];
                                break;
                            case 3:
                                data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
                                break;
                            case 4:
                                data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
                                break;
                        }
                        break;
                    case 1:
                        switch (data.multiIndex[1]) {
                            case 0:
                                data.multiArray[2] = ['鲫鱼', '带鱼'];
                                break;
                            case 1:
                                data.multiArray[2] = ['青蛙', '娃娃鱼'];
                                break;
                            case 2:
                                data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
                                break;
                        }
                        break;
                }
                data.multiIndex[2] = 0;
                break;
        }
        this.setData('multiArray', data.multiArray);
        this.setData('multiIndex', data.multiIndex);
    },
});
