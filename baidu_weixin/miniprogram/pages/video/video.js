import swan from "../../onekit/swan"
/**
 * @file test video componnent
 * @author jianglian
 */
/* globals Page, swan */

Page({
    data: {
        current: 0,
        srcList: ['https://b.bdstatic.com/swan-temp/940fe716b0eaad38f47b209d61657490.mp4', 'https://vd3.bdstatic.com/mda-ib0u8x1bvaf00qa8/mda-ib0u8x1bvaf00qa8.mp4?playlist=%5B%22hd%22%2C%22sc%22%5D'],
        src: 'https://b.bdstatic.com/swan-temp/940fe716b0eaad38f47b209d61657490.mp4',
        loop: false,
        autoplay: false
    },
    play: function (e) {
        console.log('play!');
    },
    pause: function (e) {
        console.log('pause');
    },
    fullscreen: function (e) {
        console.log('fullscreenchange!! 参数是' + JSON.stringify(e));
    },
    ended: function (e) {
        console.log('ended');
        this.next();
    },
    next: function (e) {
        let list = swan.getData(this,'srcList');
        let current = (swan.getData(this,'current') + 1) % list.length;
        swan.setData(this,'src', list[current]);
        swan.setData(this,'current', current);
    },
    setloop: function (e) {
        swan.setData(this,'loop', !swan.getData(this,'loop'));
    },
    setautoplay: function (e) {
        let autoplay = swan.getData(this,'autoplay');
        swan.setData(this,'autoplay', !autoplay);
    }
});