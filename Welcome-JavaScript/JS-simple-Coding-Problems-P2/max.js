const Durjoy = 400;
const Joy = 449;

if (Durjoy > Joy){
    console.log(Durjoy)
}
else{
    console.log(Joy)
}

function getMax (num1 , num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}

const max = getMax(55, 76,);
const max2 = getMax(80, 106,);
const ultimax =getMax(max , max2)
console.log('the beggest max is:', ultimax)

