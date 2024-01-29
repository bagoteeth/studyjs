'use strict';

function pow(x){
    return x*x;
}

// map 给arr的每个元素调用map指定的函数
var arr = [1,2,3,4,5];
var res = arr.map(pow);
console.log(res);
console.log(res.map(String));

// reduce [x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)
var res2 = res.reduce(function(x,y){
    return x+y;
});
console.log(res2);
var one = [123];
// 如果数组元素只有1个，那么还需要提供一个额外的初始参数以便至少凑够两。实际上如果没有额外测试参数，会返回自身
console.log(one.reduce(function(x,y){
    return x*y;
},2));

var arr2 = ['1','2','3'];
console.log(arr2.map(parseInt));
console.log(arr2.map(x=>parseInt(x)));