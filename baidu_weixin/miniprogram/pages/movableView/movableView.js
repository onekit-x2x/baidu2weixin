import swan from "../../onekit/swan"
/**
 * @file demo page for lottie
 * @author rabbit77
 */
/* globals Page, swan */
Page({
    data: {
        title: 'movable-view',
        x: 0,
        y: 0,
        scale: 2
    },
    move() {
        swan.setData(this,{
            x: 30,
            y: 30
        })
    },
    scale() {
        swan.setData(this,{
            scale: 3
        })
    },
    onChange(e) {
        console.log(e.detail)
    },
    onScale(e) {
        console.log(e.detail)
    }
});
