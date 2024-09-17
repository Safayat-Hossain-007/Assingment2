//7) Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string.
function countVowels(element){
    let count = 0;
    for(let i=0;i<element.length;i++){
        if(element[i] ==="a" || element[i] ==="e" || element[i] ==="i" || element[i]==="o" || element[i] ==="u" || element[i] ==="A" || element[i] ==="E" || element[i] ==="I" || element[i] ==="O" || element[i] ==="U"){
           count++;
        };
    }
    return count;
}

const ans = countVowels("Safayat Hossain");
console.log(ans);