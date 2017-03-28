function initMap() {
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: {lat: 41.85, lng: -87.65}
  });
  directionsDisplay.setMap(map);

  var onChangeHandler = function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  };
  document.getElementById('start').addEventListener('change', onChangeHandler);
  document.getElementById('end').addEventListener('change', onChangeHandler);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  directionsService.route({
    origin: document.getElementById('start').value,
    destination: document.getElementById('end').value,
    travelMode: google.maps.TravelMode.DRIVING
  }, function(response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}
function validateForm(){
       function validateNumPerson();
       function validateRadio();
}

/*VALIDACION DE NUMEROS CANTIDAD DE PASAJEROS*/

function validateNumPerson(){
    var max=$("#max");
    console.log(max);
    if(max.val() !=""){
      if(max.val()<0 || max.val()>10)
        /*swal({   title: "Error!",text: "Cantidad Incorrecta!",   type: "error",confirmButtonText: "Aceptar"});*/
          alert("Cantidad incorrecta");
    }
   

    /* VALIDAD que sea solo num 
    if(max !=""){
         if (event.keyCode > 48 || event.keyCode < 57) {
            event.returnValue = false;
             alert("Solo numeros");
          }
           
    }*/
}

/*VALIDACION DE RADIOBUTTON*/

$('#male').click(fuction){
    if!($('input[name="genderRadios"]').is(':checked')){
        alert("Ud debe seleccionar alguna opción");
    }
}
/*VALIDACION DE  SOLO UN RADIO BUTTON*/
function recorrerradio(){
    var listaCompras = '';
    $("input[name=genderRadios]").each(function (index) {  
       if($(this).is(':checked')){
          genderRadios += '*'+$(this).val()+'\n';
           if(genderRadios<2){
               alert("Mas de un radioButton seleccionado");
           }
       }
    });
    return listaCompras;
  }


