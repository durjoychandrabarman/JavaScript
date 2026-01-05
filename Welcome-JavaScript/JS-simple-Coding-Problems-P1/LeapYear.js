function isLeapYear (year){
    if (year % 4 === 0){
        return true
    }
    else{
        return false;
    }
}
const leapYear = isLeapYear(2052);
// console.log(leapYear)

function isLeapYear2 (year){
    if (year % 100 !==0 && year % 4 ===0){
        return true;
    }
    else if (year % 400 ===0){
        return true;
    }
    return false
}

const leapYear1 = isLeapYear2(2045);
const leapYear2 = isLeapYear2(2400);
const leapYear3 = isLeapYear2(1900);
const leapYear4 = isLeapYear2(2200);
const leapYear5 = isLeapYear2(2052);
console.log(leapYear1);
console.log(leapYear2);
console.log(leapYear3);
console.log(leapYear4);
console.log(leapYear5);
