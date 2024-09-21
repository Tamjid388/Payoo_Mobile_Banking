document.getElementById('btn-login').addEventListener('click',
    function(event){
       event.preventDefault();


    //    get the number
    const phonenumber=document.getElementById('phone-number').value
   

   const pinNumber=document.getElementById('pin-number').value;
   console.log(phonenumber,pinNumber);
   if(pinNumber==='1234'){
    console.log("You are logged in");
    window.location.href='home.html'
   }
   else{
    alert("Incorrect pin or number")
   }
}
)