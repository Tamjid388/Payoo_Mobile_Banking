document.getElementById('btn-add-money')
.addEventListener('click',function(e){
    e.preventDefault();
    const addMoneyInput=document.getElementById('input-add-money').value
    console.log(addMoneyInput);

    // Get the pin number
    const pinNumberInput=document.getElementById('input-pin-number').
    value
    console.log(pinNumberInput);

    // Varify Pin
    if(pinNumberInput==='1234'){
        console.log("Adding Money");
        // Getting the existing balance
      const balance=
        document.getElementById('account-balance').innerText;
        console.log(balance);


        // New Balance
        const addMoneyNumber=parseFloat(addMoneyInput);
        const balanceNumber=parseFloat(balance)
        const newBalance=(addMoneyNumber+balanceNumber)
        console.log(newBalance);

        // Update balance in UI
        document.getElementById('account-balance').innerText=newBalance

    }else{
        alert("Please Enter Valid Pin")
    }

})