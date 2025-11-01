const shoppingAmount = 6000;

/** Number 1  */
if ( shoppingAmount >= 10000){
    // 10 % discount  mane 10000 taker shopping korle 10 % discount
    const discount = shoppingAmount * 10 / 100;
    const payAmount = shoppingAmount - discount;
    console.log( payAmount)
}
else if (shoppingAmount >= 6000){
    // 6% discount  mane 6000 taker shopping korle  6% discount
    const discount = shoppingAmount * 6 / 100;
    const payAmount = shoppingAmount - discount;
    console.log(payAmount)
}
else {
    console.log( 'No discount Sir , payAmount')
}