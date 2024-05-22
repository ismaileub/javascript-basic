const product = {
    name: 'glass',
    color: 'white',
    price: 12,
    isClean: true
};

console.log(product);
const keys = Object.keys(product);
//[ 'name', 'color', 'price', 'isClean' ]
console.log(keys);

const values = Object.values(product);
//[ 'glass', 'white', 12, true ]
console.log(values);

const entries = Object.entries(product);
/*   array of array / two dimensional array
[
    [ 'name', 'glass' ],
    [ 'color', 'white' ],
    [ 'price', 12 ],
    [ 'isClean', true ]
  ]
  */
console.log(entries);

/* delete some properties*/

// way---1
delete product.isClean;
//console.log(product);

// way--2
const { isClean, ...shortGlass } = product;   //it create new object
//console.log(shortGlass);

/******************/

// freeze 

//Object.freeze(product);  //it doesn't allow to change the object
Object.seal(product);   //it  allow to change the object properties , but can't add or remove new properties

product.madeIn = 'Bangladesh';
product.price = 50;
delete product.name;
console.log(product);




