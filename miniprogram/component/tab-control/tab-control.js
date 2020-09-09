// component/tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles :{
      type:Array,
      value:[]
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    carrentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    carrentIndex(e){
      let index =  e.target.dataset.index
      let type = ''
      this.setData({carrentIndex : index})
      // 发送自定义事件this.triggerEvent('事件名'，value)
      if (index == '0') {
          type = 'pop'
      }else if (index == '1') {
        type = 'new'
      }else if (index == '2') {
        type = 'sell'
      }
      this.triggerEvent('itemclick',{index,type},{})
    }
  }
})
