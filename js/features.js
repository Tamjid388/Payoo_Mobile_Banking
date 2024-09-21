document.getElementById('show-cashout').addEventListener('click',
    function(){
       document.getElementById('cashout-form').
       classList.remove('hidden')

       document.getElementById('addMoney-form').
       classList.add('hidden')

       document.getElementById('transaction-section').
       classList.add('hidden')
    }
)


document.getElementById('show-addMoney')
.addEventListener('click',
    function(){
       document.getElementById('cashout-form').
       classList.add('hidden')
       document.getElementById('transaction-section').
       classList.add('hidden')

       document.getElementById('addMoney-form').
       classList.remove('hidden')

    }
)

document.getElementById('show-transaction')
.addEventListener('click',
    function(){
       document.getElementById('cashout-form').
       classList.add('hidden')

       document.getElementById('addMoney-form').
       classList.add('hidden')


       document.getElementById('transaction-section').
       classList.remove('hidden')

    }
)
