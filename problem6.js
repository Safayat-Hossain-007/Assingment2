// Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.
function lowercaseFirstLetter(text){
  
    let finalText = s[0].toLowerCase();
    for(let i=1;i<text.length;i++){
        finalText +=text[i];
    }
    return finalText;
}
s = "SAIUYFGUSafa";
console.log(lowercaseFirstLetter(s));