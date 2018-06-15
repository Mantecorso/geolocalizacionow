
if("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position){
        //console.log(position);
        //console.log("Localizacion" + position.coords.latitude, position.coords.longitude);
        //geolocalizacion en bonito
    }, function (err) {
        console.log(err);
    },{
        maximunAge: Infinity, //milisegundos tambien se puede poner tiempo infinito desde la ultima vez que tiene en cache
        timeout: 10000, //milisegundos tiempo de espera para encontrar la geolocalizacion
        enableHighAccuracy: true // alta precision
    });
    } else {
        alert('La geolocalizacion no existe en su ordenador');
    }

var watchID = navigator.geolocation.watchPosition(function(position) {
    console.log(position)

    var element = document.createElement('img');
    element.setAttribute('src', "google.es/img.png");
    //crea una imagen
}, function (err) {
    console.log(err);
},{
    maximunAge: Infinity, //milisegundos tambien se puede poner tiempo infinito desde la ultima vez que tiene en cache
    timeout: 10000, //milisegundos tiempo de espera para encontrar la geolocalizacion
    enableHighAccuracy: true // alta precision
});

// https://geekshubs.slack.com/archives/G9W9WC0AH/p1529051606000539
    
// http://maps.googleapis.com/maps/api/staticmap?markers=icon:%7C{LATITUD},{LONGITUD}&zoom=13&size=400x400&sensor=false

