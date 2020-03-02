

//Promise.all()方法
let p1 = new Promise((resolve,reject)=>{

    resolve(42);

})

let p2 = new Promise((resolve,reject)=>{

    resolve(43);
})

let p3 = new Promise((resolve,reject)=>{

    resolve(44);
})


let p4 = Promise.all([p1,p2,p3]);


p4.then(values=>{

    console.log(values)

})






//Promise.race()方法

let p11 = Promise.resolve(42);

let p22 = new Promise((resolve,reject)=>{
    resolve(43);
})

let p33 = new Promise((resolve,reject)=>{

    resolve(44)

})


let p44 =  Promise.race([p11,p22,p33]);

p44.then(value=>{
    console.log(value);
})