/** amer restaurants a ami age dekha discount dibo */
const age = 10 ;
const amount = 200;

if ( age <= 12 ){
    const discount = amount * 50 / 100;
    const yourbill = amount - discount;
    console.log(yourbill)
}
else if (age >=13 ){
    const discount = amount * 10 / 100;
    const apnerBill = amount - discount;
    console.log(apnerBill)
}

else{
    console.log ( 'Pay full amount');
}