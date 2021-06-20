const arr = [8,9,6,3,78,23,62,56,8,1,0,23,62,78,2,-5,-7,-12];
let count = 0;


function quick(array){
    if (array.length <= 1){
        return array;
    }
    let pIndex = Math.floor(array.length / 2);
    let p = array[pIndex]
    let less = [];
    let more = [];
    for (let i = 0; i < array.length; i++) {
        count += 1;
        if (i === pIndex)
            continue
            if (array[i] < p){
                less.push(array[i])
            }else {
                more.push(array[i])
            }
        }
    return [...quick(less), p, ...quick(more)]
}

console.log(quick(arr))
console.log('count--->', count)
