const mobile = {
    brand: 'samsung',
    price: 25000,
    camera: '12mpx',
    isNew: true
}

// for in use in object

for(const property in mobile){
    console.log(property)
    console.log(mobile[property])
}


const keys = Object.keys(mobile);
console.log(keys)
// for of use in array
for(const key of keys ){
    // console.log(key)
    console.log(key, ':', mobile[key])
}
