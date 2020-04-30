import swan from "../../onekit/swan"
/**
 * @file demo page for component
 * @author lvlei
 */
/* globals Page, swan */

Page({
    data: {
        items: [{
            icon: '../../images/view.png',
            name: '视图容器',
            open: false,
            list: [{
                subName: 'view',
                id: 'view'
            }, {
                subName: 'scroll-view',
                id: 'scroll-view'
            }, {
                subName: 'swiper',
                id: 'swiper'
            }, {
                subName: 'movable-view',
                id: 'movableView'
            }]
        }, {
            icon: '../../images/basecontent.png',
            name: '基础内容',
            open: false,
            list: [{
                subName: 'icon',
                id: 'icon'
            }, {
                subName: 'text',
                id: 'text'
            }, {
                subName: 'progress',
                id: 'progress'
            }, {
                subName: 'lottie',
                id: 'lottie'
            }]
        }, {
            icon: '../../images/form.png',
            name: '表单组件',
            open: false,
            list: [{
                subName: 'form',
                id: 'form'
            }, {
                subName: 'button',
                id: 'button'
            }, {
                subName: 'checkbox',
                id: 'checkbox'
            }, {
                subName: 'input',
                id: 'input'
            }, {
                subName: 'label',
                id: 'label'
            // }, {
            //     subName: 'textarea',
            //     id: 'textarea'
            }, {
                subName: 'picker',
                id: 'picker'
            }, {
                subName: 'radio',
                id: 'radio'
            }, {
                subName: 'slider',
                id: 'slider'
            }, {
                subName: 'switch',
                id: 'switch'
            }]
        }, {
            icon: '../../images/navigate.png',
            name: '导航',
            open: false,
            list: [{
                subName: 'navigator',
                id: 'navigator'
            }]
        }, {
            icon: '../../images/media.png',
            name: '媒体组件',
            open: false,
            list: [{
                subName: 'audio',
                id: 'audio'
            }, {
                subName: 'image',
                id: 'image'
            }, {
                subName: 'video',
                id: 'video'
            }]
        }, {
            icon: '../../images/location.png',
            name: '地图',
            open: false,
            list: [{
                subName: 'map',
                id: 'map'
            }]
        }, {
            icon: '../../images/canvas.png',
            name: '画布',
            open: false,
            list: [{
                subName: 'canvas',
                id: 'canvas'
            }]
        }, {
            icon: '../../images/openingability.png',
            name: '开放能力',
            open: false,
            list: [{
                subName: 'webview',
                id: 'webview'
            }]
        }]
    },
    onLoad() {
        // lottie页面需要判断版本
        const t = this;
        swan.getSystemInfo({
            success: res => {
                if (res.platform === 'ios' && res.version < '11.2') {
                    t.data.items[1].list[3].id = 'update';
                }
            }
        });
    },
    oneItemClick: e => {
        let viewName = e.currentTarget.dataset.id;
        swan.navigateTo({
            url: '/pages/' + viewName + '/' + viewName
        });
    },

    toggleClick(e) {
        // 无子项直接跳转
        let apiName = e.currentTarget.dataset.id;
        if (apiName) {
            swan.navigateTo({
                url: '/pages/' + apiName + '/' + apiName
            });
            return;
        }

        // 子项展开与收起
        let items = swan.getData(this,'items');
        let index = e.currentTarget.dataset.index;
        items[index].open = !items[index].open;
        swan.setData(this,'items', items);
    }
});
