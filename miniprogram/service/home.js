import request from '../service/network.js'
export function getMultiData (){
  return request({
    url:'http://152.136.185.210:8000/api/z8/home/multidata'
  })
}
export function getHomeGoods(type,page) {
  return request({
      url:'http://152.136.185.210:8000/api/z8/home/data',
      data:{
          type,
          page,
      }
  })
}