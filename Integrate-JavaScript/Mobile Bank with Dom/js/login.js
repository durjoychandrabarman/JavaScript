document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();

    const mobileNumber = document.getElementById('mobile-number').value ;
    const pin = document.getElementById('pin').value;
    const pinConverted = parseInt(pin);

    if(mobileNumber.length === 11){
        if (pinConverted === 1234){
            window.location.href = "./main.html"
        }
        else{
            alert('Please Type your current Pin Number')
        }
    }
    else{
        alert('Please Type your current Mobil Number')
    }
    
})