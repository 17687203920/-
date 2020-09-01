// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: '尚未比较',
    num1: 0,
    num2: 0
  },
  fromsubmit(e) {
    // console.log(e);
    this.data.num1 = Number(e.detail.value.num1)
    this.data.num2 = Number(e.detail.value.num2)
    let result = ''
    if (this.data.num1 > this.data.num2) {
      result = '第一个数大'
    } else if (this.data.num1 < this.data.num2) {
      result = '第二个数大'
    } else {
      result = '两个数一样大'
    }
    this.setData({
      result: result
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