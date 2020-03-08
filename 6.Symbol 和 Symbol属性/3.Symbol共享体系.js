
//ES6 提供了一个可以随时访问的全局Symbol注册表.

let uid = Symbol.for('uid');

let object = {};

object[uid] = '12345';


console.log(object[uid]);

console.log(uid);


let uid2 = Symbol.for('uid');

console.log(uid === uid2) // true;
console.log(object[uid2]); //12345;
console.log(uid2); //Symbol(uid)


//可以使用Symbol.keyFor()方法在Symbol全局注册表中检索与Symbol有关的建.

console.log(Symbol.keyFor(uid)); //"uid"
console.log(Symbol.keyFor(uid2)); // "uid"

let uid3  = Symbol('uid');

console.log(Symbol.keyFor(uid3));//undefined