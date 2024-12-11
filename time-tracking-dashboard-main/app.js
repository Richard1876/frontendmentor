const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');




const work = document.getElementById('work');

const hrs = document.getElementById('hrs');
const previous = document.getElementById('previous');
const previousSize = document.querySelector('.previous');



const play = document.getElementById('play');
const hrs2 = document.getElementById('hrs-2');
const previous2 = document.getElementById('previous-2');
const previous2Size = document.querySelector('.previous-2');

const study = document.getElementById('study');
const hrs3 = document.getElementById('hrs3');
const previous3 = document.getElementById('previous-3');
const previous3Size = document.querySelector('.previous-3');


const exercise = document.getElementById('exercise');
const hrs4 = document.getElementById('hrs4');
const previous4 = document.getElementById('previous-4');
const previous4Size = document.querySelector('.previous-4');

const social = document.getElementById('social');
const hrs5 = document.getElementById('hrs5');
const previous5 = document.getElementById('previous-5');

const selfCare = document.getElementById('self-care');
const hrs6 = document.getElementById('hrs6');
const previous6 = document.getElementById('previous-6');





// Declare a global variable for data
let data = [];

fetch("./data.json")
  .then(response => response.json())
  .then(fetchedData => {   
    data = fetchedData;
    console.log(data[1]);
  })







  daily.addEventListener('click', () => {
   daily.style.color = 'white';
   weekly.style.color = '#7078c9';
   monthly.style.color = '#7078c9';
   
    if (data.length > 0) {
      const elements = [
        { title: work, hrs: hrs, previous: previous, index: 0 },
        { title: play, hrs: hrs2, previous: previous2, index: 1 },
        { title: study, hrs: hrs3, previous: previous3, index: 2 },
        { title: exercise, hrs: hrs4, previous: previous4, index: 3 },
        { title: social, hrs: hrs5, previous: previous5, index: 4 },
        { title: selfCare, hrs: hrs6, previous: previous6, index: 5 },
      ];
  
      elements.forEach(item => {
        if (item.title.innerText !== '' )   {
          item.title.innerText = data[item.index].title;
        }
        if (item.hrs.innerText !== '') {
          item.hrs.innerText = data[item.index].timeframes.daily.current;
        }
        if (item.previous.innerText !== '') {
          item.previous.innerText = data[item.index].timeframes.daily.previous;
        }
      });
    
    } 
     
  });




  weekly.addEventListener('click', () => {
   daily.style.color = '#7078c9';
   weekly.style.color = 'white';
   monthly.style.color = '#7078c9';
   
    if (data.length > 0) {
      const elements2 = [
        { title: work, hrs: hrs, previous: previous, index: 0  },
        { title: play, hrs: hrs2, previous: previous2, index: 1 },
        { title: study, hrs: hrs3, previous: previous3, index: 2 },
        { title: exercise, hrs: hrs4, previous: previous4, index: 3 },
        { title: social, hrs: hrs5, previous: previous5, index: 4},
        { title: selfCare, hrs: hrs6, previous: previous6, index: 5 },

      ];
  
      elements2.forEach(item => {
        if (item.title.innerText !== '' ) {
          item.title.innerText = data[item.index].title;
        }
        if (item.hrs.innerText !== '') {
          item.hrs.innerText = data[item.index].timeframes.weekly.current;
        }
        if (item.previous.innerText !== '') {
          item.previous.innerText = data[item.index].timeframes.weekly.previous;
        }
      });
    
    } 
     
  });


  monthly.addEventListener('click', () => {
    previousSize.style.width = '200px'
    previous2Size.style.width = '200px'
    previous3Size.style.width = '200px'
    previous4Size.style.width = '200px'
   daily.style.color = '#7078c9';
   weekly.style.color = '#7078c9';
   monthly.style.color = 'white';
   
   
    if (data.length > 0) {
      const elements2 = [
        { title: work, hrs: hrs, previous: previous, index: 0  },
        { title: play, hrs: hrs2, previous: previous2, index: 1 },
        { title: study, hrs: hrs3, previous: previous3, index: 2 },
        { title: exercise, hrs: hrs4, previous: previous4, index: 3 },
        { title: social, hrs: hrs5, previous: previous5, index: 4},
        { title: selfCare, hrs: hrs6, previous: previous6, index: 5 },

      ];
  
      elements2.forEach(item => {
        if (item.title.innerText !== '' ) {
          item.title.innerText = data[item.index].title;
        }
        if (item.hrs.innerText !== '') {
          item.hrs.innerText = data[item.index].timeframes.monthly.current;
        }
        if (item.previous.innerText !== '') {
          item.previous.innerText = data[item.index].timeframes.monthly.previous;
        }
      });
    
    } 
     
  });

  
  
  





