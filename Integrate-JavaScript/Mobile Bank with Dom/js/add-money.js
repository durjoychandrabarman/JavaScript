document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const pin = document.getElementById('pin').value;
    const pinConverted = parseInt(pin)

    const amount = document.getElementById('amount-input').value;
    const amountConverted = parseFloat(amount)
    // console.log(typeof amount)
    const mainBalance = document.getElementById('main-balance').innerText;
    const mainBalanceConvert = parseInt(mainBalance);

    const bankAccountNumber = document.getElementById('Bank-account-number').value;
    // console.log(bankAccountNumber)

    if (bankAccountNumber.length === 11) {
        if (amount) {
            if (pinConverted === 1234 ) {
                const sum = mainBalanceConvert + amountConverted;
                const addedMainBalance = document.getElementById('main-balance');
                addedMainBalance.innerText = sum;

                const clearAmountInput = document.getElementById('amount-input').value = '';

                alert('Add Money successfull')
            }
            else {
                alert('Please Type your current PIN')
            }
        }
        else {
            alert('Please added amount ')
        }
    }
    else {
        alert('Please Need valid BankNumber')
    }
    // console.log(pinConverted)
})