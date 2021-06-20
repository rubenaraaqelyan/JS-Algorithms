const arr = [8,9,6,3,78,45,62,56,8,1,0,23,62,78,2,-5,-7,-12];
let count = 0;


function bubble(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j+1] < array[j]){
                let tmp = array[j];
                array[j] = array[j+1]
                array[j+1] = tmp;
            }
            count +=1
        }
    }
    return array;
}

console.log(bubble(arr))
console.log(arr.length)
console.log('count-->',count)
