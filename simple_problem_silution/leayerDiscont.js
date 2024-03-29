
function layeredDiscountTotal(){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity<=100){
        const total = quantity*first100Price;
        return total;
    }
   else if(quantity<=200){
        const first100total = quantity*first100Price;
        const reamingQuantity = quantity - 100;
        const reamingTotal = reamingQuantity * second100Price;
        const total = first100total+reamingTotal;
        return total;

    }
    else{
        const first100total = quantity *first100Price;
        const second100total = quantity *second100Price;
        const reamingQuantity = quantity - 200;
        const reamingTotal = reamingQuantity * above200Price ;

        const total = first100total+ second100total +reamingTotal;
        return total;

         

    }


}