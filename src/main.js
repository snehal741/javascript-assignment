function map(arr, cb){
    const result = [];
    for(let i=0 ; i<arr.length ; i+=1){
        result.push(cb(arr[i]));
    }
    return result;
}

function filter(arr, cb){
    const result = [];
    for(let i=0 ; i<arr.length ; i++){
        if(cb(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}

function reduce(array, cb, initialValue) {
    let result = initialValue;
    for (let i = 0; i < array.length; i += 1) {
      result = cb.call(undefined, result, array[i], i, array);
    }
    return result;
}

function forEach(arr, cb){
    for(let i=0 ; i<arr.length ; i++){
        arr[i] = cb(arr[i]);
    }
}

let arr = [1,2,3,4,5];
let val1 = map(arr, item => item + 1);
let val2 = filter(arr, item => item >= 3);
let val3 = reduce(arr, (result, item) => {
            result.push(item * 2);
            return result;
         }, []);


console.log(val1);
console.log(val2);
console.log(val2);

forEach(arr, item => console.log(item) );

