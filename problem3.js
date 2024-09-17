// 3) Write a function named findMin that takes an array of numbers and returns the smallest number in the array

function findMin(array){
    let temp = array[0] ;
    for(let i=0;i<array.length;i++){
        if(array[i]<temp){
            temp=array[i];
        }
    }
    return temp;
}

let array = [7,4,2,3,3];
const ans = findMin(array);
console.log(ans);