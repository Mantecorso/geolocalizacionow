
if("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position){
        //console.log(position);
        //console.log("Localizacion" + position.coords.latitude, position.coords.longitude);
        //geolocalizacion en bonito
        var element = document.createElement('img');
    element.setAttribute('src', "http://maps.googleapis.com/maps/api/staticmap?markers=icon:%7C" + position.coords.latitude + ","+ position.coords.longitude + "&zoom=13&size=400x400&sensor=false");
    //crea una imagen
    var doce = document.getElementById("#imagen");
    //identifica el div con id = imagen
    document.body.insertBefore(element, doce);
    //pone la imagen en el div
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

