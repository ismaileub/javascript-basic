const data = [{ id: 1, name: 'abul', address: 'mirpur-1' }];
console.log(data[0].address);

const product = {
    count: 500,
    data: [
        { id: 1, name: 'lenovo', price: 65000 },
        { id: 2, name: 'macbook', price: 165000 }

    ]
}
console.log(product.data[1].price);

const user = {
    id: 5001,
    name: 'abid',
    address: {
        thana: 'mirpur',
        street: {
            house: 24 / 1,
            road: 9
        }

    }
}

const user2 = {
    id: 5001,
    name: 'najmul',
    address: {
        thana: 'gabtoli',
        goli: 'buter goli'

    }
}

//console.log(user.address.street.road);
console.log(user.address.street?.road);
console.log(user2.address.street?.road);