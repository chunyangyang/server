const app  = getApp();
Page({
    data: {
        nickName:'好友',
        friendHeadUrl: '',
        textMessage: '',
        chatItems: [],
        scrollTopTimeStamp: 0,
        scrollTop:0,
        load:0,
        to_uid:0,
        chat_id:null,
        to_user:null,
        my_user:null,
        distance:null,
        serviceItem:null,
        toUserReadTime:0,
        sendService:null
    },

    chatInput:require('../../modules/chat-input/chat-input'),
    audioList:[],
    playAudio:null,
    previewImage(e){
        wx.previewImage({
          current:e.target.dataset.src,
          urls: [e.target.dataset.src]
        });
    },

    initVoice(src) {
        let innerAudio = wx.createInnerAudioContext();
        innerAudio.src = src;
        innerAudio.index = this.audioList.length;
        innerAudio.status = 0;
        innerAudio.onPlay(_ => {
            console.log('开始播放');
        });

        innerAudio.onStop(_ => {
            console.log('停止播放');
            innerAudio.status = 0;
        });

        innerAudio.onEnded(_ => {
            console.log('自然停止播放');
            innerAudio.status = 0;
        });

        innerAudio.onCanplay(_ => {
            console.log('可以播放');
        });

        innerAudio.onWaiting(() => {
            console.log('等待播放');
        });

        innerAudio.onError(res => {
            console.log(res.errMsg);
            console.log(res.errCode);
        });
        this.audioList.push(innerAudio);
        return this.audioList.length-1;
    },

    bottom() {
        let margin_height = this.data.chatItems.length*20*10,
            query = wx.createSelectorQuery();

        query.select('.input-flex-column').boundingClientRect();
        query.exec(res => {
            wx.pageScrollTo({ scrollTop: res[0].bottom+margin_height });
        });
    },

    add(data) {
        let preChat;
        if ( this.data.chatItems.length > 0 ){
            preChat = this.data.chatItems[this.data.chatItems.length-1];
        }
          

        let time;
        // if ( !preChat || data.create_time.getTime() - preChat.create_time >= 3*60*1000 ) {
        if ( !preChat || data.create_time.getTime() - preChat.create_time >= 1000 ) {
            if ( new Date().getTime() - data.create_time.getTime() <= 24*3600*1000 ) {
                let min = data.create_time.getMinutes();
                if ( min < 10 ) min = '0'+min.toString();
                time = data.create_time.getHours()+':'+min;
            } else {
                time = app.util.formatTimeShot(data.create_time);
            }
        }
        

        let chatItems = this.data.chatItems;
        chatItems.push({
            // is_read:data.is_read,
            create_time: data.create_time,
            // add_time_int:data.add_time_int,
            // add_time:data.add_time.getTime(),
            type:data.type,
            mode:data.mode,
            // userInfo:data.userInfo,
            content:data.content,
            index:data.index
        });
        this.setData({ chatItems:chatItems });

        let self=this;
        setTimeout(_ => { self.bottom(); }, 500)
    },

    sendData(){
        this.setData({ 'inputObj.extraObj.chatInputShowExtra':false });      
    },

    socket:require('../../utils/socket.js'),

    onLoad(options) {
        this.initData();
        console.log(options)
        this.setData({
            // serviceItem:options,
            chat_id:options.id ? options.id : 0,
            // to_uid:options.to_uid ? options.to_uid : 0,
            // my_user:app.globalData.userInfo
        });
        this.initSocket();
    },

    onShow(){
        //发送推荐服务项目
        // console.log(123)
        // if ( this.data.sendService ) {
        //     let add_time = new Date();
        //     this.add({
        //         content:this.data.sendService, 
        //         type:'service', 
        //         userInfo:app.globalData.userInfo,
        //         add_time:add_time,
        //         add_time_int:this.data.toUserReadTime-1,
        //         index:false
        //     });
        //     wx.sendSocketMessage({
        //         data: JSON.stringify({
        //             content:    this.data.sendService,
        //             openid:     app.globalData.openid,
        //             chat_id:    this.data.chat_id,
        //             type:       'service',
        //             add_time:   add_time.getTime()
        //         })
        //     });
        //     this.setData({ sendService : null });
        // }
    },

    onUnload() {
        this.socket.close();
    },

    initSocket() {
        let self = this;
        wx.showToast({ title : '加载中', icon : 'loading', mask : true });
        this.socket.socket(this.data.chat_id, this.data.to_uid, app.globalData.openid, data => {
            wx.hideToast();
            if ( data.type == 'login_success' ) {
                self.setData({chat_id: data.data.chat_id});
                wx.sendSocketMessage({
                    data: JSON.stringify({
                        openid:app.globalData.openid,
                        chat_id:data.data.chat_id,
                        action:'login_success'
                    })
                });
            } else if ( data.type == 'message' || data.type == 'init_message' ) {
                for ( let i = 0; i < data.data.length; i++ ) { 
                    let index = false;
                    if ( data.data[i].type == 'voice' ) index = self.initVoice(data.data[i].content);
                    // let add_time = new Date();
                    // add_time.setTime(data.data[i].add_time*1000);
                    self.add({
                        // is_read:data.data[i].is_read, 
                        content:data.data[i].content, //内容
                        type:data.data[i].type, //内容类型
                        create_time:new Date(parseInt(data.data[i].create_time)*1000),//顶部时间
                        mode:data.data[i].mode,//标识是发送给家自己还是自己发送
                        // userInfo:data.data[i].userInfo,                      
                        // add_time:add_time,
                        // add_time_int:add_time.getTime(),
                        index:index
                    });
                    self.bottom();
                }
                // self.bottom();

                if ( data.type == 'init_message' ) {
                    
                    self.setData({
                        nickName:data.name,
                        to_user:{avatarUrl:data.to_avatar_url},
                        // chat_id:this.data.chat_id,
                        my_user:{avatarUrl:data.avatar_url},
                        // distance:app.util.distanceUnit(data.to_user.distance),
                        // toUserReadTime:data.to_user.last_login_time*1000
                    });
                    wx.setNavigationBarTitle({
                        title: data.name
                    });
                    setTimeout(_ => {
                      self.bottom();
                    },200);
                } 
                // else {
                //     wx.sendSocketMessage({
                //         data: JSON.stringify({
                //             openid:app.globalData.openid,
                //             chat_id:self.data.chat_id,
                //             action:'update_login'
                //         })
                //     });
                // }
            } else if ( data.type == 'update_login' ) {
                let list = self.data.chatItems;
                for ( let i = 0; i < list.length; i++ ) {
                    list[i].is_read = 1;
                }
                self.setData({
                    chatItems:list,
                    toUserReadTime:data.to_user.last_login_time*1000
                });
            } else if ( data.type == 'system' ) {
                wx.showToast({title:data.msg});
            }
        }, app.globalData.token);

    },

    initData() {
        let self = this, systemInfo = wx.getSystemInfoSync(), exArr = [];

        exArr.push({ picName: 'choose_picture', description: '照片' });
        exArr.push({ picName: 'take_photos', description: '拍摄' });

        if ( app.globalData.userInfo && app.globalData.userInfo.is_technician == 1 ) {
            exArr.push({ picName:'service_list', description: '服务推荐' });
        }

        // exArr.push({ picName: 'close_chat', description: '自定义功能' });

        this.chatInput.init(this, {
            systemInfo: systemInfo,
            minVoiceTime: 1,
            maxVoiceTime: 60,
            startTimeDown: 56,
            format: 'mp3',//aac/mp3
            sendButtonBgColor: 'mediumseagreen',
            sendButtonTextColor: 'white',
            extraArr: exArr
        });

        self.setData({ pageHeight: systemInfo.windowHeight });
        self.textButton();
        self.extraButton();
        self.voiceButton();
    },

    textButton() {
        let self = this;
        this.chatInput.setTextMessageListener(e => {
            let create_time = new Date();
            self.add({
                content:e.detail.value, 
                type:'1', 
                mode: 1,
                // userInfo:app.globalData.userInfo,
                // userInfo:'1',
                create_time:create_time,
                // add_time_int:self.data.toUserReadTime-1,
                index:false
            });
            
            wx.sendSocketMessage({
                data: JSON.stringify({
                    content:e.detail.value,
                    chat_id:self.data.chat_id,
                    type:'1',
                    // add_time:add_time.getTime()
                })
            });
        });
    },
    voiceButton () {
        let self = this;
        self.chatInput.recordVoiceListener( (res, duration) => {
            app.util.uploadVoice(res.tempFilePath, file => {
                let create_time = new Date();
                self.add({
                    content:file,
                    type:'voice',
                    userInfo:app.globalData.userInfo,
                    create_time:create_time,
                    add_time_int:self.data.toUserReadTime-1,
                    index:self.initVoice(file)
                });
                wx.sendSocketMessage({
                    data: JSON.stringify({
                        content:file,
                        type:'voice',
                        openid:app.globalData.openid,
                        chat_id:self.data.chat_id,
                        add_time:add_time.getTime()
                    }),
                });
            });
        });
        self.chatInput.setVoiceRecordStatusListener(status => {
            switch (status) {
                case self.chatInput.VRStatus.START://开始录音
                    break;
                case self.chatInput.VRStatus.SUCCESS://录音成功
                    break;
                case self.chatInput.VRStatus.CANCEL://取消录音
                    break;
                case self.chatInput.VRStatus.SHORT://录音时长太短
                    break;
                case self.chatInput.VRStatus.UNAUTH://未授权录音功能
                    break;
                case self.chatInput.VRStatus.FAIL://录音失败(已经授权了)
                    break;
            }
        })
    },

    clickVoice(e) {
        if ( this.playAudio && this.playAudio.index == e.currentTarget.dataset.sindex ) {
            if ( this.playAudio.status == 1 ) {
                this.playAudio.pause();
                this.playAudio.status = 0;
            }
            else {
                this.playAudio.play();
                this.playAudio.status = 1;
            }
        } else {
            if ( this.playAudio && this.playAudio.status == 1 )  this.playAudio.stop();
            this.playAudio = this.audioList[e.currentTarget.dataset.sindex];
            this.playAudio.play();
            this.playAudio.status = 1;
        }
    },

    extraButton(){
        let self = this;
        this.chatInput.clickExtraListener(e => {
            let itemIndex = parseInt(e.currentTarget.dataset.index), sourceType = false;

            console.log(itemIndex);
            if ( itemIndex < 2 ) {
                if ( itemIndex === 0 )  sourceType = 'album';
                else                    sourceType = 'camera';

                app.util.upload(sourceType, res => {
                    let create_time = new Date();
                    self.add({
                        content:res,
                        type:'image',
                        userInfo:app.globalData.userInfo,
                        add_time_int:self.data.toUserReadTime-1,
                        create_time:create_time,
                        index:0
                    });
                    
                    wx.sendSocketMessage({
                        data: JSON.stringify({
                            content: res,
                            type:'image',
                            openid:app.globalData.openid,
                            chat_id:self.data.chat_id,
                            create_time:create_time.getTime()
                        }),
                    });
                });
            } else {
                if ( app.globalData.userInfo.is_technician == 1 && itemIndex == 2 )
                    wx.navigateTo({ url: 'serviceList/serviceList' });
                else 
                    self.myFun();
            }
        });
        this.chatInput.setExtraButtonClickListener(dismiss => {
            console.log('Extra弹窗是否消息', dismiss);
        });
    },
    myFun() {
        // let toast = require('../../utils/toast.js');
        wx.showModal({
            title: '小贴士',
            content: '这是用于拓展的自定义功能！',
            confirmText: '确认',
            showCancel: true,
            success: res => {
                // if (res.confirm) toast.show('success', '自定义功能');
            }
        })
    },

    resetInputStatus () {
        this.chatInput.closeExtraView();
    }
});