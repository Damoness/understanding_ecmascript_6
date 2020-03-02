

const  fs =  require('fs');


function readFile(fileName){

    console.log('readFile')

    return new Promise((resolve,reject)=>{

        console.log('promise')

        fs.readFile(fileName,(err,data)=>{

            if(err){
                reject(err);
            }else{
                resolve(data);
            }

        })


    });


}


let promise = readFile('../function.js')

console.log('1');

promise.then(contents=>{
    
    console.log('promise1:');
})

console.log('2');

setTimeout(()=>{
    promise.then(contents=>{
        console.log('contents2');
    })
    
},5000)




