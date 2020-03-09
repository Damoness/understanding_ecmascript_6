
let map = new Map();

map.set('title','Understanding ECMAScript 6');
map.set('year','2020');

console.log(map.get('title'));
console.log(map.get('year'));

//使用对象做健名

let map2 = new Map();
key1 = {};
key2 = {};

map.set(key1,5);
map.set(key2,6);


console.log(map.get(key1));
console.log(map.get(key2));

//初始化

let map3 = new Map([['name','damon'],['age',28]]);

console.log(map3.has('name'));//true
console.log(map3.get('name'));//damon
console.log(map3.has('age'));//true
console.log(map3.get('age'));//28
console.log(map3.size);//2


map3.forEach((value,key)=>{
    console.log(value,key);
})
