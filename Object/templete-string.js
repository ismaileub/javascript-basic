const myPet = {
    name : "Travis",
    food : "Fish",
    color : "Black"
};
//My pet name is Travis. His favorite food is Fish and his color is black.

const sentence = "My pet name is " + myPet.name + ". His favorite food is " + myPet.food + " and his color is " + myPet.color;

console.log(sentence)
/* another way */
const sen = `My pet name is ${myPet.name}. His favorite food is ${myPet.food } and his color is ${myPet.color}.`;

console.log(sen)