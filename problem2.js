// 2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.

function isOdd(num){
    if(num%2 === 0){
        return false;
    }
    else{
        return true;
    }   
}

const ans = isOdd(4);
console.log(ans);