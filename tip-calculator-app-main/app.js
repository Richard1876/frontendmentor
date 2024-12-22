const totalEl = document.getElementById('total');
const btnEl = document.querySelectorAll('.btn');
const customBtnEl = document.getElementById('custom-btn');
const numberOfPeopleEl = document.getElementById('number-of-people');
const tipEl = document.getElementById('tip-per-person');
const totalPerPerson = document.getElementById('total-per-person');
const resetBtnEl = document.getElementById('reset-btn');
const cantBe = document.getElementById('cant-be');

let totalAmount = 0; // This will store the total amount

// Listen for changes to the total input field
totalEl.addEventListener('change', () => {
    totalAmount = parseFloat(totalEl.value); // Ensure totalAmount is a float
    calculateTip(); // Recalculate the tip when total amount changes
    
});

// Function to calculate and display the tip
function calculateTip(percentage = 0) {
    if (totalAmount > 0) {
        const numberOfPeople = parseInt(numberOfPeopleEl.value) || 1; // Default to 1 if the input is invalid
        const calculatedTip = totalAmount * (percentage / 100) / numberOfPeople;
        tipEl.innerText = calculatedTip.toFixed(2); // Show the tip per person (rounded to 2 decimal places)
        totalPerPerson.innerText = (totalAmount  / numberOfPeople).toFixed(2);
    } else {
        tipEl.innerText = '0.00'; // If totalAmount is invalid, display 0
    }

    if (numberOfPeopleEl.value <= 0){
        cantBe.style.display = "block"
        numberOfPeopleEl.classList.add('error')
    }
    

    



    setTimeout(function() {
        cantBe.style.display = "none"
        numberOfPeopleEl.classList.remove('error')
    }, 5000)

    
}


btnEl.forEach(btn => {
    
    
    btn.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active')
        const percentage = parseFloat(btn.value); // Get the percentage as a number
        calculateTip(percentage); // Calculate the tip based on the percentage
        btn.classList.add('active')

        if(totalEl.value !== '0' || tipEl.innerText !== '0.00' || totalPerPerson.innerText !== '0.00' || numberOfPeopleEl.value !== '0'  ){
            resetBtnEl.disabled = false;
            resetBtnEl.style.backgroundColor = '#9FE8DF'
        } 

        
    });

    

    
   
});



resetBtnEl.addEventListener('click', () =>{
    totalEl.value = '0'
    tipEl.innerText = '0.00'
    totalPerPerson.innerText = '0.00'
    numberOfPeopleEl.value = '0'
    if(totalEl.value === '0' && tipEl.innerText === '0.00' && totalPerPerson.innerText === '0.00' && numberOfPeopleEl.value === '0' ){
        resetBtnEl.disabled = true;
        resetBtnEl.style.backgroundColor = '#0D686D'
    } else if(totalEl.value > '0' || tipEl.innerText > '0.00' || totalPerPerson.innerText > '0.00' || numberOfPeopleEl.value > '0'  ){
        resetBtnEl.disabled = false;
        resetBtnEl.style.backgroundColor = '#9FE8DF'
    }   
    
})




    totalEl.addEventListener('input', () => {
        if(totalEl.value > '0'){
        resetBtnEl.disabled = false;}
        resetBtnEl.style.backgroundColor = '#9FE8DF'
    });

    numberOfPeopleEl.addEventListener('input', () => {
        if(numberOfPeopleEl.value > '0'){
        resetBtnEl.disabled = false;
        cantBe.style.display = "none"
        numberOfPeopleEl.classList.remove('error')

    }
        resetBtnEl.style.backgroundColor = '#9FE8DF'




        
    });




   