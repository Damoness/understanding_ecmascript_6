//可迭代对象具有Symbol.iterator属性,是一种与迭代器密切相关的对象
//Symbol.iterator通过指定的函数可以返回一个作用于附属对象的迭代器
//在ES6中,所有的集合对象(数组,Set集合以及Map集合)和字符串都是可迭代对象


let values = [1,2,3];

for (let num of values){
    console.log(num)
}


//访问默认迭代器
let iterator =  values[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


//具有Symbol.iterator的对象都有默认的迭代器
function isIterable(object){
    return typeof object[Symbol.iterator] == 'function'
}



//创建可迭代对象
let collection = {
    items:[],
    *[Symbol.iterator](){
        for(let item of this.items){
            yield item;
        }
    }
}

collection.items.push(1);
collection.items.push(2);
collection.items.push(3);

for(let i  of collection){
    console.log('c:',i);
}


