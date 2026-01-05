const Mobile ={
    brand : 'Redmi',
    Price : 20000,
    color : 'black',
    camara : '64mp'
}
// console.log(Mobile)
 for (const Phone in Mobile){
    // console.log(Phone)
    // console.log(Mobile[Phone])
}

const property = Object.keys(Mobile);
console.log(property)

for (const prop of property){
    console.log(prop,':', Mobile[prop])
}

 