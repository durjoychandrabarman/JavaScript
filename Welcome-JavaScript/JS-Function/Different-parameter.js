function evenSizeString (str){
    const size = str.length
    console.log(str,size)
    if (size % 2 === 0 ){
        console.log('even number')
        return true;
    }
    else{
        console.log('Not even Number')
        return false;
    }

}
/*
evenSizeString('Durjoy')
const joy = evenSizeString('joy')
console.log(joy)
*/
/** 📌 condition holo ai je  ami kono akta number dibo ami jai number dai na keno 
 * jodi number er(5 ,true) shate true dile  sei number ti ke double koro dibe  are jodi (4,false)
 * false dile si number er shate 3 gun dibe 
 */
function doubleTriple ( number , doDouble){
    if (doDouble === true){
        const result = number *2;
        return result;
    }
    else{
        const result = number *3;
        return result;
    }
}

console.log(doubleTriple(4,true));
// console.log(doubleTriple (10,false))
console.log(doubleTriple(3,false))

function numberOfElement (num){
    const len = num.length;
    return len;
}
let list = [22, 343, 545, 656, 565, 454 ,454,454,232,32,67];

console.log(numberOfElement(list))