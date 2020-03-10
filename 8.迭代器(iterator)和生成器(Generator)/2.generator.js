

function *createIterator(){
    yield 1;
    yield 2;
    yield 3;
}

let iterator = createIterator();


console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);



function *createIterator2(items){

    for(let i = 0 ; i < items.length ; i++){
        yield items[i];
    }

}

let iterator2 = createIterator2([1,2,3]);


console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
