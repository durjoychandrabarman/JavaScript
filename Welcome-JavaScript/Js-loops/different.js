/**ami 1 thake 30 projonto je number gula 3 and 5 diye bivajo si number gula ber korbo */
/*
for ( let i = 1 ; i < 30 ; i++){
    if( i % 3 === 0 || i % 5 === 0){
        console.log( i)
    }
}*/


/**  ami aber 1 thake 30 projonto je number gula 3 diye  5 diye bivajo si number gula ber korbo /
 * mane je number 3 diye o 5 diye bivarjo hobe /  shudu 3 diye bivarjo hole hobe na ba / shudu 5 diye bivarjo hole hobe na*/
//  dui ta number diye bivarjo hote hobe 

/*
for ( let i = 1 ; i < 30 ; i++){
    if( i % 3 === 0 && i % 5 === 0){
        console.log( i)
    }
}*/

// akhon ami 3 diy bivarjo number gulo diye  sum ber korbo
let sum = 0;
for ( let num = 1 ; num <=30; num ++){
    if ( num % 3 === 0 ){
        console.log( '3 dara bivarjo :',num)
        sum = sum + num
        console.log('1ta kore number sum:', sum)
    }
}
console.log( 'total sum number:', sum)