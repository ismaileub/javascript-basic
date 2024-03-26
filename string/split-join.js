const sentence = "I am a CSE  student of EUB";
console.log(sentence)
const words = sentence.split(" ");
console.log(words)
const sen = words.join("_");
console.log(sen)

// console.log(sentence.split());
// console.log(sentence.split(''));
// console.log(sentence.split(' '));
// console.log(sentence.split(','));

const friends = ['Shuvo', 'Nahid', 'Shakib', 'Hridoy'];

console.log(friends.join());
console.log(friends.join('|'));
console.log(friends.join(' || '));