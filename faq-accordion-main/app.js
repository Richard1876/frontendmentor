
// const btnEl = document.querySelectorAll('.btn');
// const questEl = document.querySelectorAll('.quest');
// const minusEl = document.querySelectorAll('.minus');
// const plusEl = document.querySelectorAll('.plus');
// const answerEl = document.querySelectorAll('.answer');


const questEl = document.querySelectorAll('.quest');

questEl.forEach(guest => {
    let answer = guest.querySelector('.answer');
    let  btn = guest.querySelector('.btn');

    btn.addEventListener('click', () => {
        answer.classList.toggle('show-answer');
        btn.classList.toggle('change-btn')
    });

});










// answerEl.forEach(answer =>{
//     answer.addEventListener('click', () => {
        
//         answer.classList.toggle('active')
        
//     })
// })


// questEl.forEach(quest =>{
    
    

//     quest.addEventListener('click', () => {
//         console.log(quest.nth-child(1));
        
//         answerEl.forEach(answer =>{
//         answer.addEventListener('click', () => {
        
//         answer.classList.toggle('active')
        
//     })
// })
        
//     })
//  })


// questEl.forEach(quest => {
//     quest.addEventListener('click', () => {
//         // Access the first child of the 'quest' element
//         const firstChild = quest.querySelector(':nth-child(2n + 4)'); 

//         if (firstChild) {
//             // Do something with the firstChild, e.g., log it
//             console.log(firstChild);
//         }

//         // Your answer toggling code
//         answerEl.forEach(answer => {
//             answer.addEventListener('click', () => {
//                 answer.classList.toggle('active');
//             });
//         });
//     });
// });








