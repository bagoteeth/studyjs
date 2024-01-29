'use strict';

//自定义比较器
var arr =[1,10,2,20];
arr.sort(function(x,y){
    if(x<y){
        return -1;
    }
    else{
        return 1;
    }
});
console.log(arr)