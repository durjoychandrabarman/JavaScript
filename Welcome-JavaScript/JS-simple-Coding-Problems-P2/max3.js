const bijoy = 2000;
const roy = 1000;
const Durjoy = 4000;

if (Durjoy > bijoy && Durjoy > roy){
    console.log( 'Durjoy is best')
}
else if (roy > Durjoy && roy > bijoy){
    console.log('roy is best')
}
else{
    console.log('Bijoy is Best')
}

function maxOfThree (num1 , num2, num3) {
    if(num1 > num2 && num1 >num3){
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2
    }
    else{
        return num3;
    }
}

const maxName = maxOfThree(Durjoy , roy , bijoy)
console.log(maxName)

const maxtheNumber = Math.max(13, 345, 465, 767, 565 ,545)
console.log(maxtheNumber)