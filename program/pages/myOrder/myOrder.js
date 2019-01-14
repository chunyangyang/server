const app = getApp()
Page({

  data: {
    background:'',
    color:'',
    border:'',
    count:'',
    list:["全部","待服务","待支付","待评价"],
    curIndex:0,
    reload:0,
    listAll:null,
    listService:null,
    listPay:null,
    listEvaluate:null,
    is_del:0
  },

  loadList(index) {
    if ( this.data.reload == 1 ) {
      this.setData({
        listAll:null,
        listService:null,
        listPay:null,
        listEvaluate:null,
        reload:0
      });
    } 

    if ( 
      (index == 0 && this.data.listAll) ||
      (index == 1 && this.data.listService) ||
      (index == 2 && this.data.listPay) ||
      (index == 3 && this.data.listEvaluate)
      ) {
      return false;
    }

    let self = this;
    app.util.loadingGet('get_order_list', {
      type:index,
      openid:app.globalData.openid
    }, data => {
        if ( index == 0 ) {
          self.setData({ listAll: data.list, count: data.count.all});
          let list=self.isDel(self.data.listAll);
          self.setData({ listAll: list});
        } else if ( index == 1 ) {
          self.setData({ listService: data.list, count: data.count.status1});
          let list = self.isDel(self.data.listService);
          self.setData({ listService: list });
        } else if ( index == 2 ) {
          self.setData({ listPay: data.list, count: data.count.status2});
          let list = self.isDel(self.data.listPay);
          self.setData({ listPay: list });
        } else if ( index == 3 ) {
          self.setData({ listEvaluate: data.list, count: data.count.status3});
          let list = self.isDel(self.data.listEvaluate);
          self.setData({ listEvaluate: list });
        }

        self.setData({
          list:[
          `全部(${data.count.all})`,
          `待服务(${data.count.status1})`,
          `待支付(${data.count.status2})`,
          `待评价(${data.count.status3})`
          ]
        });
    });
  },

  clicktab(e){
   let index=e.target.dataset.index;
   this.setData({ curIndex:index });
   this.loadList(index);
  },

  onShow(){
    if (this.data.reload == 1) this.loadList(this.data.curIndex);
  },

  onLoad(options) {
    let index=options.index,count =options.count;
    this.setData({ curIndex:index, count:count });
    this.loadList(index);
  },

  isDel(obj){
    let list = this.data.obj;
    for (let i = 0; i < obj.length;i++)
      obj[i].is_del = this.data.is_del;
  
    return obj;
  },

  delOrder:function(e){
    app.util.loadingGet('del_order', {
      openid:app.globalData.openid,
      order_id:e.currentTarget.dataset.order_id
    }, res => {
        wx.showToast({
          title : '删除成功'
        });
    });
  }
})