const products = [
    {name: 'shirt',  price: 500, quantity: 5},
    {name: 't-shirt',price: 400, quantity: 3},
    {name: 'pant',  price: 600,  quantity: 2}
]

function totalShopping (){
    let total = 0;
    for(const product of products){
        total= total+product.price*product.quantity;
    }

    return total;
}

const total = totalShopping (products);

console.log(total);