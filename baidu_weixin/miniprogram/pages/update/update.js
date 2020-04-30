import swan from "../../onekit/swan"
Page({
    data: {
        updateImgSrc: '../../images/update-smartprogram.png'
    },
    update() {
        swan.navigateTo({
            url: 'pages/openAppStore/openAppStore'
        });
    }
});
