// const name1 = "Ismail";
// const name2 = "ismail";

/* if( name1 === name2 ) */ 
// if( name1.toLowerCase() === name2 )
// {
//     console.log('Strings are same');
// }
// else{
//     console.log('Strings are not same');
// }

/* ************** */

const name1 = " Ismail";
/*const name1 = "Ism  ail";*/
const name2 = " Ismail  ";

// if( name1 === name2 )  
if( name1.trim() == name2.trim() )
{
    console.log('Strings are same');
}
else{
    console.log('Strings are not same');
}