const app = getApp();
Page({
    data: {
        reload: 1,
        msgsList: null
    },

    onShow() {
        let self = this;
        app.util.loadingGet('/api/chat/get_chat_list', {},
            data => {
                // for (let i = 0; i < data.length; i++) {
                //     data[i].distance = app.util.distanceUnit(data[i].distance);
                // }
                self.setData({ reload: 0, msgsList: data });
            },app.globalData.token);

    },

    toChat(e) {
        wx.navigateTo({ url: 'chat?id=' + e.currentTarget.dataset.id })
    }
});