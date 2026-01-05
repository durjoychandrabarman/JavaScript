const Mobile = [
    {name:'Redmi', price: 18000, camera :'20pm' , color : 'black'},
    {name:'Samgsung', price: 28000, camera :'20pm' , color : 'black'},
    {name:'IPhone', price: 180000, camera :'20pm' , color : 'black'},
    {name:'realme', price: 15000, camera :'20pm' , color : 'black'},
    {name:'itel', price: 12000, camera :'20pm' , color : 'black'},
    {name:'Infinix', price: 16000, camera :'20pm' , color : 'black'},
    {name:'Tecno', price: 16500, camera :'20pm' , color : 'black'},
]

function MobilePrice (Phones){
    let min = Phones[0]
    for (const phone of Phones){
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}

const BestMobile = MobilePrice(Mobile);
console.log(BestMobile) 

