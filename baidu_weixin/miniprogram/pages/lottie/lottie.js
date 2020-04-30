import swan from "../../onekit/swan"
/**
 * @file demo page for lottie
 * @author rabbit77
 */
/* globals Page, swan */
Page({
    data: {
        title: 'lottie',
        action: 'play',
        hidden: false,
        path: '/anims/lottie_example.json',
        loop: true,
        autoplay: true,
        status: '停止',
        updateImgSrc: 'https://b.bdstatic.com/searchbox/icms/searchbox/img/bg-new.png',
        textImgSrc: 'https://b.bdstatic.com/searchbox/icms/searchbox/img/title.png'
    },
    playLottie() {
        // 切换播放状态
        let action = this.data.action;
        action = action === 'pause' ? 'play' : 'pause';
        let status = action === 'pause' ? '播放' : '停止';

        swan.setData(this,{
            action,
            status
        });
    }
});
