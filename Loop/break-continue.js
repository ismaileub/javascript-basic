// break --> I am done with this loop. loop end
// continue --> skip rest of the code for this iteration

let n = 0;

while( n<20) {
    n++;
    
    if( n%2==1 ){
        continue;
    }

    if( n>10 ){
        break;
    }

    console.log(n);
    
}