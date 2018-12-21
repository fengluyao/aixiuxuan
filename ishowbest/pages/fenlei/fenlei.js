// pages/fenlei/fenlei.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navlist:[
      { id: "hot", name: "热卖" },
      { id: "hufu", name: "护肤" },
      { id: "caiz", name: "彩妆" },
      { id: "gongj", name: "工具" },
      { id: "taoz", name: "套装" }
    ],
    curIndex:0,
    curnav:0,
    hot:false,
    content:[
      { id: 1, url: "../../images/hot/hot1.png" },
      { id: 2, url: "../../images/hot/hot2.png" },
      { id: 3, url: "../../images/hot/hot3.png" },
      { id: 4, url: "../../images/hot/hot4.png" },
    ],
    hufu: [
      { id: 1, url: "../../images/HFfenlei/1.png", name: "水乳", bottom: "../../images/HFfenlei/bottom.png" },
      { id: 2, url: "../../images/HFfenlei/2.png", name: "面霜", bottom: "../../images/HFfenlei/bottom.png" },
      { id: 3, url: "../../images/HFfenlei/3.png", name: "精华", bottom: "../../images/HFfenlei/bottom.png" },
      { id: 4, url: "../../images/HFfenlei/4.png", name: "面膜", bottom: "../../images/HFfenlei/bottom.png" },
      { id: 5, url: "../../images/HFfenlei/5.png", name: "洁面", bottom: "../../images/HFfenlei/bottom.png" },
      { id: 6, url: "../../images/HFfenlei/6.png", name: "卸妆", bottom: "../../images/HFfenlei/bottom.png" },
      { id: 7, url: "../../images/HFfenlei/7.png", name: "防晒", bottom: "../../images/HFfenlei/bottom.png" },
      { id: 8, url: "../../images/HFfenlei/8.png", name: "祛痘", bottom: "../../images/HFfenlei/bottom.png" },
      { id: 9, url: "../../images/HFfenlei/9.png", name: "眼霜", bottom: "../../images/HFfenlei/bottom.png" },
    ],
    caizhuang:[
      { id: 1, url: "../../images/CZfenlei/1.png", name: "唇妆", bottom: "../../images/CZfenlei/bottom.png" },
      { id: 2, url: "../../images/CZfenlei/2.png", name: "眼妆", bottom: "../../images/CZfenlei/bottom.png" },
      { id: 3, url: "../../images/CZfenlei/3.png", name: "眉妆", bottom: "../../images/CZfenlei/bottom.png" },
      { id: 4, url: "../../images/CZfenlei/4.png", name: "定妆", bottom: "../../images/CZfenlei/bottom.png" },
      { id: 5, url: "../../images/CZfenlei/5.png", name: "底妆", bottom: "../../images/CZfenlei/bottom.png" },
      { id: 6, url: "../../images/CZfenlei/6.png", name: "修容", bottom: "../../images/CZfenlei/bottom.png" },
    ]
  },
  switchCategory(e) {
    // console.log(e.currentTarget.dataset.id);
    var curIndex = e.currentTarget.dataset.index ? e.currentTarget.dataset.index : 0;
    var cur = parseInt(e.currentTarget.dataset.index);
    this.setData({
      toView: e.currentTarget.dataset.id,
      curIndex,
      curnav:cur
    });
  },
  next(){
    wx.navigateTo({
      url: '../detail/detail'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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