// 8) Write a function named findAverage that takes an array of numbers and returns the average of all elements.

function findAverage(array){
    let sum = 0;
    for(let i=0;i<array.length;i++){
        sum=sum+array[i];
    }
    return sum/array.length;
}

const array = [1,2,3,4,5] //--> 15/5=3
const ans = findAverage(array);
console.log(ans);