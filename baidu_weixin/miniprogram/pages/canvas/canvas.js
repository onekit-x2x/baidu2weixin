import swan from "../../onekit/swan"
/**
 * @file demo component for canvas
 * @author swan
 */

let app = getApp();

/* globals Page, swan */
/* eslint-disable */

Page({
    /* eslint-enable */
    data: {},
    onShow() {
        // 打点操作
        let openParams = app.globalData.openParams;
        if (openParams) {
            swan.reportAnalytics('pageshow', {
                fr: openParams,
                type: 'component',
                name: 'canvas'
            });
        }
    },
    onHide() {
        app.globalData.openParams = '';
    },
    onUnload() {
        this.interval && clearInterval(this.interval);
    },
    onReady() {
        this.point = {
            x: Math.random() * 305,
            y: Math.random() * 305,
            dx: Math.random() * 10,
            dy: Math.random() * 10,
            r: Math.round(Math.random() * 255 | 0),
            g: Math.round(Math.random() * 255 | 0),
            b: Math.round(Math.random() * 255 | 0)
        };

        this.interval = setTimeout(this.draw.bind(this), 17);
        // 使用 swan.createContext 获取绘图上下文 context
        this.ctx = swan.createCanvasContext('myCanvas');
    },
    draw() {
        const {ctx} = this;
        console.log(ctx)
        ctx.weixinCanvasContext.setFillStyle('#FFF');
        ctx.weixinCanvasContext.fillRect(0, 0, 610, 610);
        ctx.weixinCanvasContext.beginPath();
        ctx.weixinCanvasContext.arc(this.point.x, this.point.y, 14, 0, 2 * Math.PI);
        ctx.weixinCanvasContext.setFillStyle('rgb(' + this.point.r + ', ' + this.point.g + ', ' + this.point.b + ')');
        ctx.weixinCanvasContext.fill();
        ctx.weixinCanvasContext.draw();

        // this.point.x += this.point.dx;
        // this.point.y += this.point.dy;
        // if (this.point.x <= 10 || this.point.x >= 305) {
        //     this.point.dx = -this.point.dx;
        //     this.point.r = Math.round(Math.random() * 255 | 0);
        //     this.point.g = Math.round(Math.random() * 255 | 0);
        //     this.point.b = Math.round(Math.random() * 255 | 0);
        // }

        // if (this.point.y <= 10 || this.point.y >= 305) {
        //     this.point.dy = -this.point.dy;
        //     this.point.r = Math.round(Math.random() * 255 | 0);
        //     this.point.g = Math.round(Math.random() * 255 | 0);
        //     this.point.b = Math.round(Math.random() * 255 | 0);
        // }
    },
    touchstart(e) {
        console.log('touchstart', e);
    },
    touchmove(e) {
        console.log('touchmove', e);
    },
    touchend(e) {
        console.log('touchend', e);
    },
    touchcancel(e) {
        console.log('touchcancel', e);
    },
    longtap(e) {
        console.log('longtap', e);
    },
    error(e) {
        console.log('error', e.detail.errMsg);
    }
});