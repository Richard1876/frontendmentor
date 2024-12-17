 const formEl = document.getElementById('form');
 const emailEl = document.getElementById('email');
 const btnEl = document.getElementById('btn');
 const errorContainerEl = document.getElementById('error-container');
 const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
 const smallScreenQuery = window.matchMedia('(max-width: 431px)');
 const largeScreenQuery = window.matchMedia('(min-width: 1125px)');
 


 formEl.addEventListener('Submit',() =>{
    Event.preventDefault()
    
    
 })


 btnEl.addEventListener('click', () =>{
    if(emailEl.value === '' || emailEl.value == null || emailEl.value){
        errorContainerEl.style.display = "flex"
        emailEl.classList.add("error")
        
    } else{
        errorContainerEl.style.display = "none"
        emailEl.classList.remove("error")
    }

    if (!emailRegex.test(emailEl.value.trim())){
        errorContainerEl.style.display = "flex"
        emailEl.classList.add("error")
    } 
    // if(smallScreenQuery.matches){
    //     btnEl.style.marginTop = "30px"
    //     errorContainerEl.style.transform = 'translate(0px, -80px)'

    //     setTimeout(function() {
            
    //         btnEl.style.marginTop = "0px"
    //         errorContainerEl.style.transform = 'translate(0px, -55px)'
    //       }, 3000);
    // }
    


    setTimeout(function() {
        errorContainerEl.style.display = "none"
        emailEl.classList.remove("error")
      }, 3000);


      

    
 })


 emailEl.addEventListener('click', ()=>{
    errorContainerEl.style.display = "none"
    emailEl.classList.remove("error")
    
 })