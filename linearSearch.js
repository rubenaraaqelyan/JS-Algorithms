const arr = [1,4,5,9,8,5,11,2,3,6]
let count = 0;

function search(array,item){
    for (let i = 0; i < array.length; i++) {
        count += 1;
        if (array[i] === item){
            return i;
        }
    }
    return null;
}

console.log(search(arr,1))
console.log('count-->' ,count)
