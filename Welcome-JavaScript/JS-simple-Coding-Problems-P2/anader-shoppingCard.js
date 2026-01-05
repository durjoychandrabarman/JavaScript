const productCard =[
        {name :'Shirt', Price :500 ,quantity :5},
        {name :'Pant', Price :500  ,quantity :4},
        {name :'juta', Price :1500 ,quantity :2 },
]

function totalAmount (products){
    let total =0;
    for (const product of products){
       /* const getTotalAmount = product.Price * product.quantity */
        total = total + product.Price * product.quantity;
    }
    return total;
}

const getAmount = totalAmount (productCard);
console.log('your total Amount of this item :',getAmount)