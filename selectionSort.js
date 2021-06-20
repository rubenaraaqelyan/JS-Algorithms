const arr = [8,9,6,3,78,45,62,56,8,1,0,23,62,78,2,-5,-7,-12];
let count = 0;

function select(array){
    for (let i = 0; i < array.length; i++) {
        let indexMin = i;
        for (let j = i +1; j < array.length; j++) {
            if (array[i] < array[indexMin]){
                indexMin = j;
            }
            count += 1
        }
        let tmp = array[i]
        array[i] = array[indexMin]
        array[indexMin] = tmp;
    }
    return array;
}

console.log(select(arr));
console.log(arr.length)
console.log('count-->', count)
