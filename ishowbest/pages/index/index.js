Page({

  /**
   * 页面的初始数据
   */
  data: {
    navlist: [{ id: 1, url: "../../images/index/1_09.png", text: "每周新品" },
    { id: 2, url: "../../images/index/1_11.png", text: "积分商城" },
    { id: 3, url: "../../images/index/1_04.png", text: "美妆分类" },
    { id: 4, url: "../../images/index/1_06.png", text: "加盟分销" }],
    isScroll:true,
    qiandao:true
  },
  open(e){
    var e = e.currentTarget.dataset.id;
    if(e==3){
      wx.switchTab({
        url: '../fenlei/fenlei',
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  wcQd:function(){
    this.setData({
      qiandao:false
    })
  },
  offQd: function () {
    this.setData({
      isScroll: false
    })
  },
  openQd: function () {
    this.setData({
      isScroll: true
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})