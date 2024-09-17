//4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(array){
    let filteredArray = [];
    for(let i=0;i<array.length;i++){
        if(array[i] %2 === 0){
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}

let array = [2,5,4,6,3,2,7,3];
console.log(filterEvenNumbers(array));