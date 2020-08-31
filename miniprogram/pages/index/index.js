Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'小潘',
    student:[
     {id: 110 , name: '小潘' , age: 18 },
     {id: 111 , name: 'aa' , age: 18 },
     {id: 112 , name: 'vv' , age: 18 },
     {id: 113 , name: 'dd' , age: 18 },
    ],
    count:0
  },
  click(){
      this.setData({
        count:this.data.count+1
      })
  },
  clicksub(){
    this.setData({
      count:this.data.count-1
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