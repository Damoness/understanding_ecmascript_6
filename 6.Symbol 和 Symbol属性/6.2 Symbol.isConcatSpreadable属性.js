
let color1 = ['red','green'],
    color2 = color1.concat(['black','yellow']);

console.log(color2.length) //4
console.log(color2); // ['red','green','black','yellow'];



let collection ={
    0:'Hello',
    1:'world',
    length:2,
    [Symbol.isConcatSpreadable]:true, //设置为true, concat时,里面的元素会展开
}


let messages = ['Hi'].concat(collection); 

console.log(messages.length); // 3
console.log(messages); //[ 'Hi', 'Hello', 'world' ]


collection[Symbol.isConcatSpreadable]  = false; //设置为false, concat时,元素不会展开

let messages2 = ['Hi'].concat(collection);
console.log(messages2.length); // 2
console.log(messages2); 
// [
//     'Hi',
//     {
//       '0': 'Hello',
//       '1': 'world',
//       length: 2,
//       [Symbol(Symbol.isConcatSpreadable)]: false
//     }
//   ]



