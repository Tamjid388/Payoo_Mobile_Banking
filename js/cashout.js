console.log("Cahsout");
document.getElementById('btn-cashout').addEventListener
("click",function(event){
    event.preventDefault();
    const cashout=document.getElementById('input-cashout').value ;
const pinNumber=document.getElementById('cashout-pin-number').value ;
if(pinNumber==='1234'){
    const balance=document.getElementById('account-balance').innerText;
    console.log(balance);
    const balanceNumber=parseFloat(balance);
    const cashoutNumber=parseFloat(cashout);
    // Calculation
    const newBalance=balanceNumber-cashoutNumber
// uI
    document.getElementById('account-balance').innerText=newBalance
}else{
    alert("failed to cashout")
}


})
