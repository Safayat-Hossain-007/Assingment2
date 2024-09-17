// 5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.
function sortArrayDescending(array) {
    let n = array.length;
    
    // Bubble sort algorithm
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-1-i;j++){
            if(array[j] <array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }  
    return array;
}

let array = [6, 3, 2, 7, 4];
let result = sortArrayDescending(array);
console.log(result);  // Output: [7, 6, 4, 3, 2]
