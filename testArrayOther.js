'use strict';

// every判断arr是否每个元素都满足条件
var arrs=['asdfsdf','dsF','f'];
console.log(arrs.every(function(x){
    return x.length > 0;
}))
console.log(arrs.every(function(x){
    return x === x.toLowerCase();
}));
// find找第一个满足条件的元素
// findIndex找第一个满足条件的索引
// forEach对每个元素调用函数，不返回新数组