/**
 * Created by yubowen on 2017/12/30.
 */
function ajax(callback) {
  // 用这个setTimeout,假装为一个ajax操作去拿到数据
  var data;
  setTimeout(()=>{
    if (true) {
      data = [1,2,3,4,5,6,7,8,9,0];
      callback && callback(data)
    }else{
      data = []
    }
  },1000)
}

exports.ajax = ajax