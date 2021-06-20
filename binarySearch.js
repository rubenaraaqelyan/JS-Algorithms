const array = [0,1,2,3,4,5,6,7,8,9,10,11,12];
let count = 0;

function binary(array,item){
    let start = 0;
    let end = array.length;
    let middle;
    let found = false;
    let pos = -1;
    while (found === false && start <= end){
        count += 1;
            middle =  Math.floor((start + end) / 2)
        if (array[middle] === item){
            found = true;
            pos = middle;
            return pos;
        }
        if (item < array[middle]){
            end = middle - 1;
        }else {
            start = middle + 1;
        }
    }
    return pos;
}

console.log(binary(array,0))
console.log(count)


function recursion(array,item,start,end){
    let middle = Math.floor((start,end) / 2);
    count += 1;
    if (item === array[middle]){
        return middle;
    }
    if (item < array[middle]){
        return recursion(array, item, 8, middle -1)
    }else {
        return recursion(array, item, middle + 1, end)
    }
}

console.log(recursion(array, 8,array.length))
