const productCard =[
        {name :'Shirt', Price :500},
        {name :'Pant', Price :500},
        {name :'juta', Price :1500},
    ]

function getTotal (product){
    let total = 0;
    for (const shop of product){
        total = total + shop.Price;
    }
    return total;
}

const totalPrice = getTotal(productCard);
console.log('total Amount :', totalPrice)