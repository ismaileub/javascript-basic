const products = [
    {name: 'shirt', price: 500},
    {name: 't-shirt', price: 400,},
    {name: 'pant', price: 600 }
]

function totalShopping (){
    let total = 0;
    for(const product of products){
        total= total+product.price;
    }

    return total;
}

const total = totalShopping (products);

console.log(total);