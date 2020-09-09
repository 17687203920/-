// miniprogram/pages/home/home.js
import {
  getMultiData,
  getHomeGoods
} from '../../service/home.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    banner: [],
    recommend: [],
    page: 1,
    type: 'pop',
    goods: {
      pop: {
        page: 0,
        list: []
      },
      new: {
        page: 0,
        list: []
      },
      sell: {
        page: 0,
        list: []
      },
    },
    showBackTop: false,
    isTabfiexd: false



  },
  handleTabClick(e) {
    this.setData({
      type: e.detail.type
    })
    // 根据类型获得相应的推荐商品数据
    this.getHomeGoods(this.data.type)

    // console.log(this.data.type,this.data.page);
    // 获得组件对象
    // const tabct = this.selectComponent('#tab-control')
    // console.log(tabct);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 请求基本数据
    getMultiData().then(res => {
      this.setData({
        banner: res.data.data.banner.list,
        recommend: res.data.data.recommend.list
      })
      // console.log(res);    
    }).catch(error => {
      console.log(error);
    })
    //  获得推荐数据
    this.getHomeGoods(this.data.type)
  },
  getHomeGoods(type) {
    // 请求推荐数据
    let page = this.data.goods[type].page + 1
    getHomeGoods(type, page)
      .then(res => {
        // 获得推荐数据
        const list = res.data.data.list
        const oldlist = this.data.goods[type].list
        oldlist.push(...list)
        // console.log(oldlist);
        const typeKey = `goods.${type}.list`

        this.setData({
          [typeKey]: oldlist,

        })
        // console.log(this.data.goods);
        // console.log(res);
      }).catch(error => {
        console.log(error);
      })
  },
  onReachBottom() {
    this.getHomeGoods(this.data.type)
  },
  onPageScroll(e) {
    // console.log(e);
    const scrollTop = e.scrollTop
    const flag = scrollTop >= 577
    if (flag != this.data.showBackTop) {
      this.setData({
        showBackTop: flag,
        isTabfiexd:true
      })
      // console.log('aaaa');
      
    }else if(scrollTop < 577 ){
        this.setData({
          isTabfiexd:false
        })
        // console.log('bbb');
        
    }


  }
})