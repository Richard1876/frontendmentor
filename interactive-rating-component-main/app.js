const containerEl = document.querySelector(".container");
const rates = document.querySelectorAll(".btn");
const btn_submitEl = document.getElementById("btn-submit");
const thk_containerEl = document.querySelector(".thk-container");
const rateEl = document.querySelector(".rate");
const rate_locationEl = document.getElementById("rate-location");





btn_submitEl.addEventListener("click", () => {
    
containerEl.style.display = "none"
thk_containerEl.style.display = "flex"
});


rates.forEach((rate) => {
   rate.addEventListener("click", () =>{
    rate_locationEl.innerText = rate.innerText
    
    
    
   }) 
})
