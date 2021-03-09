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

 let char = 0;
 let timer = setInterval(onTick, 100);

 function onTick() {
     const span = text.querySelectorAll('span')[char];
     span.classList.add('fade');
     char++
     if (char == splitText.length) {
         complete();
         return;
     }

     const letters = text.querySelectorAll('span');
 for (let x = 0; x < letters.length; x++) {
     span.classList.remove('fade');
 } 
    
 } 

 function complete() {
    clearInterval(timer);
    timer = null;
   }  


   // map js 

   function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 3,
                center: {
                    lat: 46.619261,
                    lng: -33.134766
                }
            });

           var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

            var locations = [
                {lat: 40.785091, lng: -73.968285},
                {lat: 41.084045, lng: -73.874245},
                {lat: 40.754932, lng: -73.984016}
            ];

            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });


            var markerCluster =  new MarkerClusterer(map, markers,
                 {imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",}); 
          }
       