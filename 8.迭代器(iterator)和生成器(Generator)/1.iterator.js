


function createIterator(items){

    var i = 0;


    return{
        
        next:function(){

            let done;
            let value;

            if(i < items.length){

                done = false;
                value = items[i];
                i++;

            }else{

                done = true;
                value = undefined;

            }

            return{
                value:value,
                done:done
            }

        }

    }


}


let  iterator =  createIterator([1]);


let next = iterator.next();

while(!next.done){

    console.log(next.value);

    next = iterator.next();
}
