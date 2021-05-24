//panel cards expand animation inspired by 50 projects in 50 days by Brad Traversy, Florin Pop https://www.udemy.com/course/50-projects-50-days/#instructor-1 

const panels = document.querySelectorAll('.panel');

 panels.forEach(panel => {
      // () => is the same as function()
    panel.addEventListener('click', function(){
        removeActiveClass();
        panel.classList.add('active')
    });
 });

 function removeActiveClass() {
     panels.forEach(panel => {
         panel.classList.remove('active')
     });
 }
