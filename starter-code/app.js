const form = document.getElementById('form');
const input = document.getElementById('email');
const btn = document.getElementById('btn');
const errMsg = document.getElementById('errMsg');
const reg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener('submit', (e)=>{
    e.preventDefault() 
    setTimeout(() =>{
        input.value = ''
        
    },900) 
    
    
})


btn.addEventListener('click', ()=>{
    if(input.value === '' || input.value == null){
        errMsg.style.display = 'block'
        errMsg.innerText = 'Oops! Please add your email'
        input.classList.add('error')
    } else if (!reg.test(input.value)) {
        errMsg.style.display = 'block'
        errMsg.innerText = 'Oops! Please check your email'
        input.classList.add('error')
    } else {
        errMsg.style.display = 'none'
    }






    
    //  else{
    //     errMsg.style.display = 'none'
        
    // }
    // if(!reg.test(input.value)){
    //     errMsg.style.display = 'block'
    //     errMsg.innerText = 'Oops! Please check your email'
    //     input.classList.add('error')
    // }

    

    

    setTimeout(() =>{
        input.innerText = ''
        errMsg.style.display = 'none'
        input.classList.remove('error')
        
    },5000) 
    
})