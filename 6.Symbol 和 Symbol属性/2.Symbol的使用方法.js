
let firstName= Symbol('first name');

let person = {
    [firstName]:'Damon'
}



Object.defineProperty(person,firstName,{writable:false});


let lastName = Symbol('last name');

Object.defineProperties(person,{
    [lastName]:{
        writable:false,
        value:'Wu'
    },
    test:{
        writable:true,
        value:'test'
    }
})



console.log(person[firstName]); // Damon
console.log(person[lastName]); //Wu
person.test = 'test1'
console.log(person.test);