//panel cards expand animation inspired by 50 projects in 50 days by Brad Traversy, Florin Pop https://www.udemy.com/course/50-projects-50-days/#instructor-1 

const panels = document.querySelectorAll('.panel');

 panels.forEach(panel => {
      // () => is the same as function()
    panel.addEventListener('click', function(){
        removeActiveClass()
        panel.classList.add('active')
    });
 });

 function removeActiveClass() {
     panels.forEach(panel => {
         panel.classList.remove('active')
     });
 }

 const text = document.querySelector('.fill');
 const strText = text.textContent;
 const splitText = strText.split('');
text.textContent = '';
 for (let i = 0; i < splitText.length; i++) {
     text.innerHTML += '<span>' + splitText[i] + '</span>';
 }
  
/* let char = 0;
 let timer = setInterval(onTick, 100);

 function onTick() {
     const span = text.querySelectorAll('span')[char];
     span.classList.add('fade');
     char++
     if(char === splitText.length) {
         complete();
         return;
     }
 }

 function complete() {
    clearInterval(timer);
    timer = null;
 } */