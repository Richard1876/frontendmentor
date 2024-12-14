const formEl = document.getElementById('form');
const fnameEl = document.getElementById('fname');
const lnameEl = document.getElementById('lname');
const emailEl = document.getElementById('email');
const passwordEl = document.getElementById('password');
const errorIconEl = document.getElementById('error-icon');
const errorTextEl = document.getElementById('error-text');

const errorText2El = document.getElementById('error-text2');
const errorIcon2El = document.getElementById('error-icon2');

const errorText3El = document.getElementById('error-text3');
const errorIcon3El = document.getElementById('error-icon3');

const errorText4El = document.getElementById('error-text4');
const errorIcon4El = document.getElementById('error-icon4');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const numberRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,12}$/



const btnEl = document.getElementById('btn');


formEl.addEventListener('submit',(e) => {
 Event.preventDefault()
});

btnEl.addEventListener('click', () =>{
   if(fnameEl.value === '' || fnameEl.value === null ){
    errorIconEl.style.display = "block";
    errorTextEl.style.display = "block"
    fnameEl.classList.add('error-state')
   }

   if(lnameEl.value === '' || lnameEl.value === null ){
    errorIcon2El.style.display = "block";
    errorText2El.style.display = "block"
    lnameEl.classList.add('error-state')
   }
   if(emailEl.value === '' || emailEl.value === null  ){
    errorIcon3El.style.display = "block";
    errorText3El.style.display = "block"
    emailEl.classList.add('error-state')
   }



   if(!emailRegex.test(emailEl.value.trim())){
    errorIcon3El.style.display = "block";
    errorText3El.style.display = "block";
    emailEl.classList.add('error-state')
   }

   if(passwordEl.value === '' || passwordEl.value === null  ){
    errorIcon4El.style.display = "block";
    errorText4El.style.display = "block";
    passwordEl.classList.add('error-state')
   }



   setTimeout(function() {
    errorIconEl.style.display = "none";
    errorTextEl.style.display = "none";
     errorIcon2El.style.display = "none";
    errorText2El.style.display = "none";
     errorIcon3El.style.display = "none";
    errorText3El.style.display = "none";
    errorIcon4El.style.display = "none";
    errorText4El.style.display = "none";
    fnameEl.classList.remove('error-state')
    lnameEl.classList.remove('error-state')
    emailEl.classList.remove('error-state')
    passwordEl.classList.remove('error-state')
  }, 3000);
    
    
})