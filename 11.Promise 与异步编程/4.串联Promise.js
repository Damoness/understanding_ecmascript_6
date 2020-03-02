

// let p1 = new Promise((resolve,reject)=>{

//     resolve(42);

// })


// p1.then(value=>{
//     console.log(value);
// }).then(value=>{
//     console.log('finished');
// })



//捕获错误

let p2 = new Promise((resolve,reject)=>{
    throw new Error('Explosion!');
})

p2.catch(error=>{
    console.log(error.message);
    throw new Error('Boom!');

}).catch(error=>{

    console.log(error.message);
})
