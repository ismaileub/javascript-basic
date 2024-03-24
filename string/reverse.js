const sentence = "I am a CSE  student of EUB";
// ismail
// l
// i 
// si 
// msi 
// amsi 
// iamsi 
// liamsi 
let reverse = '';
for (const letter of sentence) {
    reverse = letter + reverse;
}
console.log(reverse);

//another way
let rev = '';
for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    rev = letter + rev;
}
console.log(reverse);

//another way
const reversed = sentence.split('').reverse().join('');
console.log(reversed);


