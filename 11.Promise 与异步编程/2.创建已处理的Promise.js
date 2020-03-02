
let promise = Promise.resolve(42);

console.log('1')
promise.then(value=>{
    
    console.log('11')
    console.log(value);
    

})


console.log('2')
promise.then(value=>{

    console.log('22')
    console.log(value);
})



let thenable = {
    then:function(resolve,reject){
        resolve(42);
    }
};

let p1 = Promise.resolve(thenable);

p1.then(value=>{
    console.log('p1');
})