function inchiToFeet (inchi){
    const feet = inchi / 12
    return feet;
}

const durjoyHeight =inchiToFeet(75);
console.log(durjoyHeight)

// 📌 Example 2
function inchToFeet2(inch){
    const feetfraction = inch / 12;
    const feetNumber = parseInt(feetfraction);
    const inchRemaining = inch % 12;
    const result = feetNumber +' feet '+ inchRemaining +' inch .'
    return result;
}
const durjoyHeight2 = inchToFeet2(65);
// console.log(durjoyHeight2)

function kiloToMile ( kilo){
    const mile = kilo *  0.62137119;
    return mile;
}
const kiloFromMile = kiloToMile(1000);
console.log(kiloFromMile);

function mileToKilo (mile){
    const kilo = mile * 1.60934;
    return kilo;
}

const mileFromKilo =mileToKilo(1000);
console.log(mileFromKilo);


