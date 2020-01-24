const reasonInput = document.querySelector('#input-reason');
const reasonAmount = document.querySelector('#input-amount');   
const cancelBtn = document.querySelector('#button-cancel');
const confirmBtn = document.querySelector('#button-confirm'); 
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const alertCtrl = document.querySelector('ion-alert-controller')

let totalExpenses = 0;

const Clear = () => {
    reasonInput.value = '';
    reasonAmount.value = '';
}

 confirmBtn.addEventListener('click', () => {
     const enteredReason = reasonInput.value;
     const enteredAmount = reasonAmount.value;

     if(
         enteredReason.trim().length <= 0 ||
         enteredAmount <= 0 ||
         enteredAmount.trim().length <= 0
     ){
         alertCtrl.create({
             header: 'Invalid Inputs',
             message : 'Please Enter Valid Reason And Amounts Before Adding To Budget List',
             buttons : ['Okay']
         }).then( alertElement => {
                 alertElement.present();
             } );
         
         return;
     }
     const newItem = document.createElement('ion-item');
     newItem.textContent = enteredReason + ': ' + '₦' + enteredAmount;

     expensesList.appendChild(newItem)
     totalExpenses += +enteredAmount;

     totalExpensesOutput.textContent = '₦' + totalExpenses ;
     
     Clear();
 });

 cancelBtn.addEventListener('click', Clear);

     