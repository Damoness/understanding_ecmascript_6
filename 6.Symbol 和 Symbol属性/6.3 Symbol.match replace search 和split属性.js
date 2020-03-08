
const str = 'my name is damon';
const regex = /n/g;

console.log(str.split(regex)); //[ 'my ', 'ame is damo', '' ]
console.log(str.replace(regex,'s')) //my same is damos
console.log(str.match(regex));//[ 'n', 'n' ]
console.log(str.search(regex));//3


let hasLengthOf10 = {

    [Symbol.match]:function(value){

        return value.length === 10 ? [value] : null;

    },
    [Symbol.replace]:function(value,replacement){

        return value.length === 10 ? replacement : value;

    },
    [Symbol.split]:function(value){

        return value.length === 10 ? [,]:[value];
    },
    [Symbol.search]:function(value){

        return value.length === 10 ? 0 : -1;

    }

}

let message1 = "Hello world"; //11个字符
let message2 = 'Hello John'; //10个字符


let match1 = message1.match(hasLengthOf10);
let match2 = message2.match(hasLengthOf10);

console.log(match1);
console.log(match2)






