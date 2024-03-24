/*
# TERNARY --> three parts
* .....?.....:.....
*syntax
*condition?do something when true:do something when false 

*/
const age = 17;
age >=18? console.log('vote dio') : console.log('gumai thako');

let price = 500;
// const isLeader = true;
const isLeader = false;
// if(isLeader === true)
// {
//     price = 0;
// }
// else
// {
//     price = price + 100;
// }

price = isLeader ==true? 0: price + 100;

console.log(price);
// ***********
if(isLeader === true)
{
    if(price > 1000)
    {
        price=price/2;
    }
    else
    {
        price = 0;
    }
    //price>1000 ? price=price/2 : 0;
}
else
{
    price = price + 1000;
}

price = isLeader==true? price>1000 ? price=price/2 : 0; : price = price + 1000;