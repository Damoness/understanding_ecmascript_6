//集合键名必须是一个对象





//私有对象数据

//传统方式, 无法获知对象实例何时被销毁
var Person = (function (){

    var privateData = {};
    var privateId = 0;

    function Person(name){
    
        Object.defineProperty(this,'_id',{value:privateId++});

        privateData[this._id] = {
            name:name
        }

    }
   

    Person.prototype.getName = function(){
        return privateData[this._id].name;
    }


    return Person;

})()

const person = new Person('damon');
console.log(person);
console.log(person.getName());


//使用WeakMap

let Person2 = (function(){

    let privateData = new WeakMap();

    function Person(name){

        privateData.set(this,{name:name});
    }

    Person.prototype.getName = function(){

        return privateData.get(this).name;

    }


    return Person;

})()


let person2 = new Person2('name');
console.log(person2.getName()); //name


