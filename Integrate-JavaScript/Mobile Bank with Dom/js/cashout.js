document.getElementById('cashout-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const amountWithdraw = document.getElementById('amount-withdraw').value;
    const amountWithdrawConverted = parseFloat(amountWithdraw);

    const cashoutPinNumber = document.getElementById('cashout-pin-number').value;
    const cashoutPinConverted = parseInt(cashoutPinNumber)
    // console.log(typeof cashoutPinConverted)

    const agentNumber = document.getElementById('agent-number').value;
    const mainBalance = document.getElementById('main-balance').innerText;
    const mainbalanceConvert = parseFloat(mainBalance);
    if (agentNumber) {
        if (amountWithdraw) {
            if (cashoutPinConverted === 1234) {
                if (amountWithdrawConverted <= mainbalanceConvert) {
                    const cashOut = mainbalanceConvert - amountWithdrawConverted;
                    const mainBalanceSet = document.getElementById('main-balance');
                    mainBalanceSet.innerText = cashOut;

                    const amount = document.getElementById('amount-withdraw').value = '';
                    alert('Cash Out succesfull')
                    // console.log(amountWithdraw.value);
                }
                else {
                    alert('Insufficient balance');
                    return;
                }


            }
            else {
                alert('Need valid pin Number')
            }
        }
        else {
            alert('Added your amount')
        }
    }
    else {
        alert('Added your Agent number')
    }

})