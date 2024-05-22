const products = [
    {id: 1, name: 'phone', price: 20000},
    {id: 2, name: 'iphone', price: 20000},
    {id: 3, name: 'lenovo laptop', price: 20000},
    {id: 4, name: ' nokia phone', price: 20000},
    {id: 5, name: 'mac book', price: 20000},
    {id: 6, name: ' samsung phone', price: 20000},
    {id: 7, name: 'dell laptop', price: 20000}
]

function matchedProducts(products, search){

    const matched = [];
    for( const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'phone'.toLocaleLowerCase());
console.log(result);