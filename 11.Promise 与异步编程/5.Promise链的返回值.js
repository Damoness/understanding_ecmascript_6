


let p1 = new Promise((resolve,reject)=>{
    resolve(42);
})

p1.then(value=>{

    return value+1;

}).then(value=>{
    
    console.log(value); // 43
})



let p2 = new Promise((resolve,reject)=>{
    reject(42);
})

p2.catch(value=>{

    return value +1;
}).then(value=>{

    console.log(value);
})