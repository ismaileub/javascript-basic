// A parameter is a variable in the function definition, while an argument is the actual value that is passed to the function when it is called.


function square(number){        //square(parameter)

    const Sqr = number * number;
    console.log( "The square of the number:",Sqr);
}

square(4);   //square(argument)

function add(num1, num2){
    const sum = num1 + num2;
    console.log( "The sum of the numbers:",sum);

}

add(40,50);