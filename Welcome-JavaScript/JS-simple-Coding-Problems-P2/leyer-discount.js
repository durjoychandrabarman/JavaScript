/**
 * 1 - 100 = 5;
 * 101 - 200 = 3;
 * above 200 = 2;
 *
 */

function getAmount (quantity){
    const first100Price = 5;
    const second100Price = 3;
    const above200Price = 2;

    if(quantity <=100 ){
        const firstQunatityBill = quantity * first100Price;
        return firstQunatityBill;
    }
    else if (quantity <= 200){
        const firstquantity = 100 * first100Price;
        const remaningQuantity = quantity - 100;
        const remaningQuantityBill = remaningQuantity *second100Price;
        const getSecondBill = firstquantity +remaningQuantityBill;
        return getSecondBill;

    }
    else{
        const firstquantity = 100 * first100Price;
        const secondqunatity = 100 * second100Price;
        const thrdqunatity = quantity -200;
        const thirdQuantityTotal = thrdqunatity *above200Price;
        const getTotal = firstquantity + secondqunatity +thirdQuantityTotal;
        return getTotal; 
    }
}

const yourbill = getAmount (110)
console.log(yourbill)