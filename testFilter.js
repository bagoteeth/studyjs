'use strict';

// filter调用函数返回bool来决定是否保留数组元素
var arr = [1,2,3,4,5];
console.log(arr.filter(function(x){
    return x%2==0;
}));

var arr2 = ['A','','B',null,undefined,'C','   '];
console.log(arr2.filter(function(x){
    return x && x.trim();
}));
// filter有3参数，元素，index，变量本身
// arr2.filter(function(elem,index,self){
//     console.log(elem);
//     console.log(index);
//     console.log(self);
//     return true;
// })
