const shareIcon = document.getElementById("share-icon");
const socialContainer = document.getElementById("social-container");
const toggle = document.querySelector(".toggle")


shareIcon.addEventListener("click",()=>{
       
    socialContainer.classList.toggle("toggle")
})