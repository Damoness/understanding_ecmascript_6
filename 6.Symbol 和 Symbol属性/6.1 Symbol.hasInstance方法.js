// function MyObject(){


// }


class MyObject{


}

let obj = new MyObject();


Object.defineProperty(MyObject,Symbol.hasInstance,{
    value:function(v){
        return false;
    }
})

console.log(obj instanceof MyObject);




function SpecialNumber(){

}


Object.defineProperty(SpecialNumber,Symbol.hasInstance,{
    value:(v)=>{

        return (v instanceof Number) && (v >= 1 && v <= 100) 

    }
})


var two = new Number(2);
var zero = new Number(3);


console.log(two instanceof SpecialNumber);
console.log(two instanceof SpecialNumber);


