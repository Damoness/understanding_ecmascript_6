
let set = new Set();
    key = {};

set.add(key);
console.log(set.size);//1

key = null;

console.log(set.size); //1


key = [...set][0];//重现取回原始的引用



//创建WeakSet集合

let weakSet = new WeakSet();
ket = {};

weakSet.add(ket);
console.log(weakSet.has(ket))//true

weakSet.delete(ket);

console.log(weakSet.has(ket));//false