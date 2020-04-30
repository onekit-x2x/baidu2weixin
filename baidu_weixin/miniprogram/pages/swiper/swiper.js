import swan from "../../onekit/swan"
/**
 * @file demo page for swan
 * @author lvlei
 */

/* globals Page */
Page({
    data: {
        items: [
            {
                className: 'color-a',
                value: 'A'
            }, {
                className: 'color-b',
                value: 'B'
            }, {
                className: 'color-c',
                value: 'C'
            }
        ],
        imgUrls: [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'
        ],
        current: 0,
        switchIndicateStatus: true,
        switchAutoPlayStatus: false,
        switchDuration: 500,
        autoPlayInterval: 2000
    },
    
    swiperChange(e) {
        console.log('swiperChange:', e.detail);
    },
    switchIndicate() {
        swan.setData(this,{
            switchIndicateStatus: !swan.getData(this,'switchIndicateStatus')
        });
    },
    switchAutoPlay() {
        swan.setData(this,{
            switchAutoPlayStatus: !swan.getData(this,'switchAutoPlayStatus')
        });
    },
    changeSwitchDuration(e) {
        swan.setData(this,{
            switchDuration: e.detail.value
        });
    },
    changeAutoPlayInterval(e) {
        swan.setData(this,{
            autoPlayInterval: e.detail.value
        });
    }
});
