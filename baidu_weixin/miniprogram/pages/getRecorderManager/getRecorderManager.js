import swan from "../../onekit/swan"
/**
 * @file test for getRecorderManager api
 * @author haoyang
 */
/* globals Page, swan */
/* eslint-disable new-cap */
Page({
    data: {
        isEnd: false, // 是否停止录制
        isRecord: false, // 是否正在录制
        isPlay: false, // 是否正在播放
        nearFinish: false, // 是否即将超时
        startTime: '00:00.00',
        endTime: ''
    },
    onReady() {
        this.options = {
            duration: 60000,
            sampleRate: 44100,
            numberOfChannels: 1,
            encodeBitRate: 96000,
            format: 'aac'
        };
        this.recorderManager = swan.getRecorderManager(); // 创建录音实例
        this.recorderManager.onStart(() => {
            this.timeRecoder(1);
        });
        this.recorderManager.onStop(res => {
            this.tempFilePath = res.tempFilePath;
        });
        this.syncTimer = null;
    },
    startRecord() {
        // 开始录音
        swan.setData(this,'isRecord', true);
        this.recorderManager.start(this.options);
    },
    stopRecord() {
        // 结束录音
        let endTime = swan.getData(this,'startTime');
        swan.setData(this,{
            isRecord: false,
            isEnd: true,
            nearFinish: false,
            endTime: endTime,
            startTime: '00:00.00'
        });
        this.recorderManager.stop();
        this.syncTimer && clearInterval(this.syncTimer);
    },
    playRecord() {
        // 创建音频实例，播放音频
        swan.setData(this,'isPlay', true);
        if (this.innerAudioContext) {
            this.innerAudioContext.destroy();
        }

        this.innerAudioContext = swan.createInnerAudioContext();
        this.innerAudioContext.onEnded(() => {
            swan.setData(this,{
                isPlay: false,
                startTime: '00:00.00'
            });
            swan.showToast({
                title: '录音自然结束'
            });
            this.syncTimer && clearInterval(this.syncTimer);
        });

        this.innerAudioContext.src = this.tempFilePath;
        this.innerAudioContext.play();
        this.timeRecoder();
    },
    pauseRecord() {
        // 停止播放音频
        swan.setData(this,{
            isPlay: false,
            nearFinish: false,
            startTime: '00:00.00'
        });
        this.innerAudioContext.stop();
        this.syncTimer && clearInterval(this.syncTimer);
    },
    deleteRecord() {
        // 停止播放音频，摧毁语音实例
        swan.setData(this,{
            isEnd: false,
            isPlay: false,
            isRecord: false,
            nearFinish: false,
            startTime: '00:00.00'
        });
        this.syncTimer && clearInterval(this.syncTimer);
        if (this.innerAudioContext) {
            this.innerAudioContext.stop();
            this.innerAudioContext.destroy();
        }
    },
    onHide() {
        // 监听页面隐藏时重置计时器及摧毁语音实例
        let endStatus = swan.getData(this,'isEnd');
        if (!endStatus) {
            // 未结束录音前隐藏小程序，回退到录音初始状态
            swan.setData(this,{
                isRecord: false,
                startTime: '00:00.00'
            });
            this.syncTimer && clearInterval(this.syncTimer);
            this.recorderManager.stop();
        } else {
            // 录音结束隐藏小程序，回退到录音播放状态
            swan.setData(this,{
                isPlay: false,
                startTime: '00:00.00'
            });
            this.syncTimer && clearInterval(this.syncTimer);
            if (this.innerAudioContext) {
                this.innerAudioContext.pause();
            }
        }
    },
    onUnload() {
        // 监听页面卸载时摧毁语音实例
        if (this.innerAudioContext) {
            this.innerAudioContext.stop();
            this.innerAudioContext.destroy();
        }
    },
    formatTime(name) {
        name = name.toString();
        return name.length !== 1 ? name : '0' + name;
    },
    timeRecoder(isRecord) {
        // 录音计时器
        let min;
        let sec;
        let ms;
        let start = 0;
        clearInterval(this.syncTimer);
        this.syncTimer = setInterval(() => {
            start += 10;
            if (isRecord) {
                this.maxLength = start;
            } else if (start >= this.maxLength) {
                clearInterval(this.syncTimer);
                this.pauseRecord();
            }

            if (start >= 50000) {
                swan.setData(this,'nearFinish', true);
            }

            ms = this.formatTime(parseInt((start % 1000) / 10, 10));
            sec = this.formatTime(parseInt(start / 1000, 10));
            min = '00';
            this.setStartTime(min + ':' + sec + '.' + ms);

            if (start >= 60000) {
                ms = '00';
                sec = '00';
                min = '01';
                this.setStartTime(min + ':' + sec + '.' + ms);
                clearInterval(this.syncTimer);
                this.stopRecord();
            }
        }, 10);
    },
    setStartTime(startTime) {
        swan.setData(this,{startTime});
    }
});
