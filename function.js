//ESMAScript 默认参数

function makeRequest(url,timeout=2000,callback=function(){}){

    console.log('url',url);
    console.log('timeout',timeout);
    console.log('callback',callback);
}

makeRequest('/foo')

makeRequest('/foo',500)

makeRequest('/foo',500,function(body){

    //do something
})


//默认参数值 对 arguments 对象的影响

function mixArgs(first,second){

    //'use strict'
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
    //console.log(arguments);
    first = "c";
    second = "d";
    //console.log(arguments);
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);

}


mixArgs("a","b");


//使用严格模式 "use strict", arguments不会改变, 不使用,arguments不能改变
