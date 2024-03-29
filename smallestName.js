const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

let smallestName = names[0];

for (let i = 1; i < names.length; i++) {
    if (names[i].length < smallestName.length) {
        smallestName = names[i];
    }
}

console.log("The friend with the smallest name is:", smallestName);
