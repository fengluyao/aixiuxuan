// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      { id: 1, img_url: "../../iamges/detail/dimg.png", ename: "Estee Lauder", cname: "雅诗兰黛 红石榴", title: "保湿|补水|滋润", price: "218.00", xinde:"112"},
      { id: 1, img_url: "../../iamges/detail/dimg.png", ename: "Estee Lauder", cname: "雅诗兰黛 红石榴", title: "保湿|补水|滋润", price: "218.00", xinde: "112" },
      { id: 1, img_url: "../../iamges/detail/dimg.png", ename: "Estee Lauder", cname: "雅诗兰黛 红石榴", title: "保湿|补水|滋润", price: "218.00", xinde: "112" },
      { id: 1, img_url: "../../iamges/detail/dimg.png", ename: "Estee Lauder", cname: "雅诗兰黛 红石榴", title: "保湿|补水|滋润", price: "218.00", xinde: "112" },
      { id: 1, img_url: "../../iamges/detail/dimg.png", ename: "Estee Lauder", cname: "雅诗兰黛 红石榴", title: "保湿|补水|滋润", price: "218.00", xinde: "112" },
      { id: 1, img_url: "../../iamges/detail/dimg.png", ename: "Estee Lauder", cname: "雅诗兰黛 红石榴", title: "保湿|补水|滋润", price: "218.00", xinde: "112" }
    ],
    selectd:true,
    selectd1: false,
    selectd2:false,
    block:[
      { id: 1, text: "综合排序", url:"../../images/detail/dh.png" },
      { id: 2, text: "价格由高到低", url: "../../images/detail/dh.png" },
      { id: 3, text: "价格由低到高", url: "../../images/detail/dh.png" },
    ],
    close:false,
    closed: false,
    fllist:[
      {id:1,value:"爽肤水"},
      { id: 2, value: "原液" },
      { id: 3, value: "乳液" },
      { id: 4, value: "水乳套装" }
    ],
    gnlist:[
      { id: 1, value: "抗衰老抗氧化" },
      { id: 2, value: "收敛毛孔" },
      { id: 3, value: "补水保湿" },
      { id: 4, value: "水油平衡" },
      { id: 5, value: "晒后修复" },
      { id: 6, value: "提拉紧致" },
      { id: 7, value: "祛黄提亮" },
      { id: 8, value: "淡化色斑" },
    ],
    fzlist:[
      { id: 1, value: "所有肌肤" },
      { id: 2, value: "干性肤质" },
      { id: 3, value: "混干肤质" },
      { id: 4, value: "油性肤质" },
      { id: 5, value: "混油肤质" },
      { id: 6, value: "敏感肤质" },
    ]
  },
  getblock1(){
    this.setData({
      selectd: true,
      selectd1: false,
      selectd2: false,
      close: false
    })
  },
  getblock2() {
    this.setData({
      selectd: false,
      selectd1: true,
      selectd2: false,
      close: false
    })
  },
  getblock3() {
    this.setData({
      selectd: false,
      selectd1: false,
      selectd2: true,
      close: false
    })
  },
  open(){
    this.setData({
      close:true
    })
  },
  close() {
    this.setData({
      close: false
    })
  },
  open1() {
    this.setData({
      closed: true
    })
  },
  close1() {
    this.setData({
      closed: false
    })
  },
  getBack(){
    wx.switchTab({
      url: '../fenlei/fenlei',
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