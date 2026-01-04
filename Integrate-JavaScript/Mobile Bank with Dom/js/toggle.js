document.getElementById('Cashout-section').style.display = 'none'

document.getElementById('add-money-card').addEventListener('click',function(){
    document.getElementById('add-money-section').style.display = 'block'
    document.getElementById('Cashout-section').style.display = 'none'

    
})

document.getElementById('cashout-card').addEventListener('click',function(){
    const addMoney = document.getElementById('add-money-section');
    addMoney.style.display = 'none'
    const cashOut =  document.getElementById('Cashout-section').style.display = 'block';

    
})

