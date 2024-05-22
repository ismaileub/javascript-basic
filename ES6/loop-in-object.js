const product = {
    name: 'glass',
    color: 'white',
    price: 12,
    isClean: true
};
/* using for in*/

for (const key in product) {
    const value = product[key];    // here cant.t use dot notation to access the object properties
    //console.log(key);
    //console.log(key, value);
}

/* using for of*/
const keys = Object.keys(product);

for (const key of keys) {
    const value = product[key];
    //console.log(key);
    console.log(key, value);
}