
 

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
       


         