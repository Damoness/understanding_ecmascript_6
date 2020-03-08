

// Object.keys() //返回所有所有可枚举的属性名
// Object.getOwnPropertyNames() //不考虑属性的可枚举一律放回
//Object.getOwnPropertySymbols() //检索对象中的Symbol属性



let uid = Symbol.for("uid");


let object = {
    [uid]:'12345'
};

let symbols = Object.getOwnPropertySymbols(object);

console.log(symbols.length);
console.log(symbols[0]);
console.log(object[symbols[0]]);

