
//add
let set = new Set();
set.add('1');
set.add(1);

console.log(set.size); // 2


//过滤重复值
let set2 = new Set([1,2,3,4,5,6,2]);

console.log(set2.size); //6

set2.delete(2);
set2.clear();

console.log(set2.size);//0


//forEach
let set3 = new Set([1,2,3,4]);

set3.forEach((value,key,set)=>{

    console.log(value,key);
})


//转化为数组

let set4 = new Set([1,2,3,3,4,5]);
    array = [...set4];

console.log(array); //[ 1, 2, 3, 4, 5 ]


function eliminateDuplicates(items){//去除重复的元素
    return [...new Set(items)];
}

let numbers = [1,2,3,3,3,4,5];
noDuplicates = eliminateDuplicates(numbers);

console.log(noDuplicates); //[ 1, 2, 3, 4, 5 ]

