
 

   // map js 

   function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 3,
                center: {
                    lat: 9.1021, 
                    lng: 18.2812
                }
            });
             
            //Add Marker function
    addMarker({
        coords:{lat: 9.0820, lng: 8.6753},
        iconImage:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        content:  "<h1>Fela-Anikulapo Kuti</h1>"
    });
    addMarker({
        coords:{lat: 9.3077, lng: 2.3158},
        iconImage:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        content:  "<h1>Angélique Kidjo</h1>"
    });
    addMarker({
        coords:{lat: 26.2041, lng: 28.0473},
        iconImage:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        content:  "<h1>Lucky Dube</h1>"
    });
    
    
    function addMarker(props) {
            var marker = new google.maps.Marker({
                position:props.coords, 
                map:map,
                icon:props.iconImage
            });
            
    if (props.content) {
        var infoWindow = new google.maps.InfoWindow({
            content: props.content
        });

        marker.addListener("click", function(){
            infoWindow.open(map, marker);
        });
    }
          
    }

} 
       


         