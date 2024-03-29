const phones =[ 
    {name: 'Samsung', price: '20000', color: 'black'},
    {name: 'Xiaomi', price: '18000', color: 'white'},
    {name: 'Apple', price: '100000', color: 'black'},
    {name: 'Oppo', price: '22000', color: 'gray'},
    {name: 'Walton', price: '15000', color: 'red'}
] ;

function getCheapestPhone(){
    let min = phones[0];
    for(const phone of phones){
        if (parseInt(min.price) > parseInt(phone.price)){    //here we use parseInt() because we use price as a string
            min = phone;
        }
    }
    return min;

}
 const chep=  getCheapestPhone();
 console.log(chep);

