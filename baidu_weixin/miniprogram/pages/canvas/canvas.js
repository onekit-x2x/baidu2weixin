import swan from "../../onekit/swan"
/**
 * @file test for view component
 * @author houyu
 */

Page({
    data: {
        canvasShow: false,
        canvasOff: '',
        cur: 0,
        position: [
            78,
            108,
            138
        ]
    },
    onLoad() {
        console.log('onLoad');
    },

    canvas() {
        console.log('tap');
    },
    delcanvas() {
        swan.setData(this,'canvasShow', false);
    },
    showcanvas() {
        swan.setData(this,'canvasShow', true);
    },
    canvas() {
        console.log('canvas-events');
    },
    mvcan() {
        console.log('canvas-mvcan');
    },
    changeCanvas() {
        !swan.getData(this,'canvasOff')
        ? swan.setData(this,'canvasOff', 'canvas-off')
        : swan.setData(this,'canvasOff', '');
    },
    sendadraw() {
        const ctx = swan.createCanvasContext('myCanvas');
        ctx.clearRect(0, 0, 500, 500);
        ctx.draw();
        let cur = swan.getData(this,'cur') % 3;
        let position = swan.getData(this,'position');
        swan.setData(this,'cur', cur + 1);
        ctx.setFontSize(16);
        ctx.textAlign = 'center';
        ctx.fillText('有事搜一搜，没事看一看', 80, position[cur]);
        ctx.stroke();
        ctx.draw();
    }
});
