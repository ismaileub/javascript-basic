const products = [
    { id: 1, name: 'lenovo', price: 65000 },
    { id: 2, name: 'dell', price: 45000 },
    { id: 3, name: 'macbook', price: 165000 },
    { id: 4, name: 'hp', price: 40000 }
]

//map
const names = products.map(p => p.name);
console.log(names);

// forEach
products.forEach(p => console.log(p.id));

//filter
const expensive = products.filter(p => p.price > 60000);
console.log(expensive);

//find

const cheapest = products.find(p => p.price < 50000);
console.log(cheapest);

//reduce
const totalPrice = products.reduce((acum, current) => acum + current.price, 0);
console.log(totalPrice);



