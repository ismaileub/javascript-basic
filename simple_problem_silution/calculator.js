function sum(num1,num2){
    return num1+num2;
}
function sub(num1,num2){
    return num1-num2;
}
function mul(num1,num2){
    return num1*num2;
}
function div(num1,num2){
    return num1/num2;
}

function calculator(a,b, operation){
    if(operation === 'sum'){
        return sum(a,b);
    }
   else if(operation === 'sub'){
        return sum(a,b);
    }
  else  if(operation === 'mul'){
        return sum(a,b);
    }
   else if(operation === 'div'){
        return sum(a,b);
    }

    else{
        return " only 'sum', 'sub','mul', 'div' is available ";
    }

}

const result = calculator(5,12, 'sum');
console.log(result);
