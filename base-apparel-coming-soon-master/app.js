const btn = document.getElementById("btn");
const submitEl = document.getElementById("submit");
const inputEl = document.getElementById("input-el");
const errorEl = document.getElementById("error-container");






btn.addEventListener("click", ()=>{
 if(inputEl.value === ""){
    errorEl.style.display = "flex"
 }else{
    errorEl.style.display = "none"
 }


   
 
   
   

})