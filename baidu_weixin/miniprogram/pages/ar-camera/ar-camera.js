import swan from "../../onekit/swan"
/**
 * @file demo for ar-camera
 * @author bailonggang
 */
/* globals Page, swan */
const RED_COLOR = '#ff1f30';

Page({
    data: {
        flashState: 'off',
        cameraState: 'record',
        isRecordStarted: false,
        isRecordComplete: false,
        isNetError: false,
        isLoading: false,
        breathTimer: null,
        photoSrc: '',
        videoSrc: '',
        startTime: '',
        endTime: ''
    },
    onLoad() {
        this.getNetworkState().then(
            () => {
                // 有网
                swan.showLoading({title: '模型加载中...'});
                swan.setData(this,{isLoading: true});
            },
            () => {
                // 网络错误
                swan.setData(this,{isNetError: true});
            });
    },
    onReady() {
        // 初始化canvas
        this.recordCanvasContext = swan.createCanvasContext('recordCanvas');
        // 初始化ar相机
        this.ARCameraContext = swan.createARCameraContext();
    },
    loadCameraSuccess() {
        swan.hideLoading();
        this.drawCameraButton(RED_COLOR);
    },
    drawCameraButton(changedColor) {
        // 外围灰色圆环
        this.drawCircle(this.recordCanvasContext, 'rgba(255,255,255,0.4)', 32, 32, 32);
        // 中间白色圆形
        this.drawCircle(this.recordCanvasContext, '#ffffff', 32, 32, 25);
        // 中间红色圆形
        this.drawCircle(this.recordCanvasContext, changedColor, 32, 32, 7);
        this.recordCanvasContext.draw();
    },
    drawCircle(ctx, color, x, y, r) {
        ctx.beginPath();
        ctx.setFillStyle(color);
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    },
    drawRing(ctx, color, lineW, x, y, r, start, end) {
        ctx.beginPath();
        ctx.setStrokeStyle(color);
        ctx.setLineWidth(lineW);
        ctx.arc(x, y, r, start, end);
        ctx.stroke();
        ctx.closePath();
    },
    drawRecordAnimation() {
        const DURING = 10;
        const START = 0.2;
        let changedColor = 'rgba(255,0,0,1)';
        // 外圈红色进度条
        let time = Date.now();
        this.data.breathTimer = setInterval(() => {
            const elapsedTime = (Date.now() - time) / 1000;

            const opacity = Math.abs(elapsedTime % 2 - 1);
            // 动画渐变范围为0.2-1
            const realOpacity = opacity * (1 - START) + START;

            changedColor = 'rgba(255,0,0,' + realOpacity + ')';

            const progress = Math.min(elapsedTime / DURING, 1);
            // 该进度所对应的弧度值
            const progressRadian = progress * 2 * Math.PI;
            // 圆的顶部所对应的弧度值
            const initialRadian = -(1 / 2 * Math.PI);
            // 所需绘制的终点位置为初始值+进度弧度值
            const endRadian = initialRadian + progressRadian;

            this.drawProgress(endRadian, changedColor);

        }, 32);
    },
    drawProgress(end, changedColor) {
        requestAnimationFrame(() => {

            // 外围灰色圆环
            this.drawCircle(this.recordCanvasContext, 'rgba(255,255,255,0.4)', 32, 32, 32);
            // 中间白色圆形
            this.drawCircle(this.recordCanvasContext, '#ffffff', 32, 32, 25);
            // 中间红色圆形
            this.drawCircle(this.recordCanvasContext, changedColor, 32, 32, 7);

            // 外围红色进度
            this.drawRing(this.recordCanvasContext, RED_COLOR, 3, 32, 32, 30, -(1 / 2 * Math.PI), end);
            this.recordCanvasContext.draw();
        });
    },
    getNetworkState() {
        return new Promise((resolve, reject) => {
            swan.getNetworkType({
                success: res => {
                    if (res.networkType === 'offline' || res.networkType === 'none') {
                        reject('无网络');
                    } else {
                        resolve();
                    }
                }, fail: error => {
                    reject(error);
                }
            });
        })
        // 捕获报错信息，包括无网络、包括getNetworkType api执行错误
        .catch(err => Promise.reject(err));
    },
    handleAction() {
        switch (this.data.cameraState) {
            case 'photo':
                this.takePhoto();
                break;
            case 'record':
                this.toggleRecord();
                break;
            default:
                // 无默认操作
                break;
        }
    },
    toggleRecord() {
        if (this.data.isRecordStarted) {
            // 如果动画是已经开启的状态，检查时长看是否停止拍摄
            this.data.endTime = new Date();
            if ((this.data.endTime - this.data.startTime) < 1500) {
                swan.showToast({
                    title: '请再多录制点时间',
                    duration: 1000,
                    icon: 'none'
                });
                return;
            }

            // 则此次点击的目的是关闭。（不再是开启状态，即false）
            this.data.isRecordStarted = false;
            this.ARCameraContext.stopRecord({
                success: res => {
                    clearInterval(this.data.breathTimer);
                    swan.setData(this,{
                        videoSrc: res.tempVideoPath,
                        isRecordComplete: true
                    });
                },
                fail: res => {
                    swan.showToast({
                        title: '抱歉，录制停止失败，请检查设备',
                        icon: 'none'
                    });
                }
            });
        } else {
            // 动画就是关闭的状态，开始拍摄
            this.data.isRecordStarted = true;

            // 记录开始的时间,用来容错过短时间
            this.data.startTime = new Date();

            this.ARCameraContext.startRecord({
                success: res => {
                    // 按钮的动画绘制
                    this.drawRecordAnimation();
                },
                fail: res => {
                    this.data.isRecordStarted = false;
                    swan.showToast({title: '拍摄失败'});
                },
                stopCallback: res => {
                    clearInterval(this.data.breathTimer);

                    this.data.isRecordStarted = false;
                    swan.setData(this,{
                        videoSrc: res.tempVideoPath,
                        isRecordComplete: true
                    });
                }
            });
        }
    },
    takePhoto() {
        this.ARCameraContext.takePhoto({
            quality: 'high',
            success: res => {
                swan.setData(this,{
                    photoSrc: res.tempImagePath,
                    isRecordComplete: true
                });
            },
            fail: res => {
                swan.showToast({
                    title: '请检查设备',
                    icon: 'none'
                });
            }
        });
    },
    switchToPhoto() {
        if (this.data.isRecordStarted) {
            return;
        }

        swan.setData(this,{cameraState: 'photo'});

        // 重绘圆形按钮
        this.drawCircle(this.recordCanvasContext, '#ffffff', 32, 32, 8);
        this.recordCanvasContext.draw(true);
    },
    switchToRecord() {
        if (this.data.isRecordStarted) {
            return;
        }

        swan.setData(this,{cameraState: 'record'});

        // 重绘圆形按钮
        this.drawCircle(this.recordCanvasContext, RED_COLOR, 32, 32, 7);
        this.recordCanvasContext.draw(true);
    },
    changeAction(e) {
        if (e === 'record') {
            // 中间红色圆形
            this.drawCameraButton(RED_COLOR);
            swan.setData(this,{
                cameraState: 'record'
            });
        } else {
            // 覆盖中间红色圆形
            this.drawCameraButton('#ffffff');
            swan.setData(this,{
                cameraState: 'photo'
            });
        }
    },
    reTake() {
        this.ARCameraContext.reTake({
            success: res => {
                swan.setData(this,{
                    isRecordComplete: false,
                    isUpload: false,
                    photoSrc: '',
                    videoSrc: ''
                }, () => {
                    this.changeAction(this.data.cameraState);
                });
            },
            fail: e => {
                swan.showToast({
                    title: JSON.stringify(e),
                    icon: 'none'
                });
            }
        });
    },
    save() {
        if (this.data.cameraState === 'record') {
            swan.saveVideoToPhotosAlbum({
                filePath: this.data.videoSrc,
                success: handleSaveSuccess.bind(this),
                fail: handleSaveFail.bind(this)
            });
        } else {
            swan.saveImageToPhotosAlbum({
                filePath: this.data.photoSrc,
                success: handleSaveSuccess.bind(this),
                fail: handleSaveFail.bind(this)
            });
        }

        function handleSaveSuccess(res) {
            swan.showToast({
                title: '保存成功',
                success: () => {
                    this.reTake();
                }
            });

            swan.setData(this,{
                isRecordComplete: true,
                isUpload: false
            });
        }

        function handleSaveFail(e) {
            swan.showToast({title: '保存失败'});
        }
    },
    toggleFlash() {
        const flashState = this.data.flashState === 'off' ? 'on' : 'off';
        swan.setData(this,{flashState});
    },
    message() {
        swan.navigateToSmartProgram({
            appKey: '79RKhZ2BTvyyHitg4W3Xle4kkFgwwXyp'
        });
    },
    reload() {
        // 通过跳转当前页面实现重新加载
        const url = this.privateProperties.accessUri.replace(/pages/, '..');

        // 重新加载前先判断网络状态，避免用户在无网络状态下反复刷新页面
        this.getNetworkState().then(
            () => {
                swan.redirectTo({url});
            }
        );
    },
    error() {

    },
    onUnload() {
        if (swan.getData(this,'isLoading')) {
            swan.hideLoading();
        }
    },
    touchStart(e) {
        this.startX = parseInt(e.changedTouches[0].clientX, 10);
    },
    touchEnd(e) {
        if (this.startX) {
            const endX = parseInt(e.changedTouches[0].clientX, 10);
            const cameraState = swan.getData(this,'cameraState');

            if (this.startX - endX > 10 && cameraState === 'record') {
                // 切换到拍照
                this.switchToPhoto();
            } else if (endX - this.startX > 10 && cameraState === 'photo') {
                // 切换到录像
                this.switchToRecord();
            }
            this.startX = null;
        }
    }
});