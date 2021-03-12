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

   /*  const letters = text.querySelectorAll('span');
 for (let x = 0; x < letters.length; x++) {
     span.classList.remove('fade');
 } */
    
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
                    lat: 9.1021, 
                    lng: 18.2812
                }
            });

           var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

            var locations = [
                {lat: 7.1475, lng: 3.3619}, 
                {lat: 6.3716, lng: 2.0763},
                {lat: 52.2789, lng:  5.6658}
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
       


          //sendEmail.js//
          

          let sendMail = function(form) {
    emailjs.send("service_2x6jexf", "Africa-legends", {
                  "get_in_touch": form.getintouch.value,
                  "from_name": form.name.value,
                  "from_email": form.emailaddress.value 
  })
    .then(
        function(response) {
            console.log("SUCCES", response);
            alert("Your message has been sent successfully");
            document.getElementById('form').reset();
        },
        function(error) {
            console.log("FAILED", error);
            alert("Message was not sent");
            document.getElementById('form').reset();
        });
    return false;
};

  