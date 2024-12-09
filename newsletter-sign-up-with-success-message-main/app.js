const containerEl = document.getElementById("container");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("email");
const btnEl = document.getElementById("btn");
const btnEl2 = document.getElementById("btn2");
const errorContainerEl = document.getElementById("error-container");
const errorTextEl = document.getElementById("error-text");
const thksContainerEl = document.getElementById("thks-container");
const emailInputEl = document.getElementById("email-input");





formEl.addEventListener('submit', (e)=>{    
        e.preventDefault()    
});

btnEl.addEventListener('click', ()=>{
    if(inputEl.value === '' || inputEl.value == null){       
        
    errorContainerEl.style.display = "flex"
    inputEl.style.backgroundColor = "#ff605526"
    inputEl.classList.add('error-co') 
    setTimeout(() =>{
        errorContainerEl.style.display = "none"
        inputEl.style.backgroundColor = "#ffffff"
    inputEl.classList.remove('error-co')
    },5000)  
    
}else if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(inputEl.value))
    
    {
    errorContainerEl.style.display = "none"
    inputEl.style.backgroundColor = "#ffffff"
    inputEl.classList.remove('error-co')
    emailInputEl.innerText = inputEl.value
    containerEl.style.display = "none"
    thksContainerEl.style.display = "flex"
}        
        
     });

btnEl2.addEventListener('click', ()=>{
        if(inputEl.value != '' || inputEl.value != null){
            containerEl.style.display = "flex"
         thksContainerEl.style.display = "none"
            inputEl.value = ''
        }
        
    
});





