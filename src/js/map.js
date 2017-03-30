/*-----------tooltip--------------*/
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});
/*--------------solo numeros--------------***/
    function SoloNumeros(evt){
if(window.event){//asignamos el valor de la tecla a keynum
 keynum = evt.keyCode; //IE
}
else{
 keynum = evt.which; //FF
} 
//comprobamos si se encuentra en el rango numérico y que teclas no recibirá.
if((keynum > 47 && keynum < 58) || keynum == 8 || keynum == 13 || keynum == 6 ){
 return true;
}
else{
 return false;
}
}
/*------------*/
$(document).ready(function(){ 
	//var vehiculo = $('#vehiculo');
	var number = $('#numberAlone');
	
	number.keyup(function(){
		this.value = (this.value + '').replace(/[^0-9]/g, '');
	});
})
	
	$('#buscar').click(function(){
		if($('#vehiculo').is(":hidden")){
			$('#vehiculo').slideDown("fast");
		}else{
			$('#vehiculo').hide();
		}
	});	
	
$('#person').click(function(){
	
})
/*--------------------------evento click----------------------*/
function asignaEventoClick(){
    var lista=$('#carro');
    $.each(lista,function(){
        $(this).on('click',onClickList)
    }); 
}

/*--------------------------alidacion de personasv--------------------*/

function validarNum(){
    var per= $("#per");
    
    if((per.val() =="")||(per.val() ==10)||(per.val() ==0))
        {
            swal("numero no valido")
        }
}
//--------validar raio button------------
$('#validate').click(function() {

    //Se verifica si alguno de los checks esta seleccionado
    if ($('input[name="gender"]').is(':checked')) {
        swal("campo correcto")
    } else {
        swal("debe escoger al menos una opcion")
    }
});



/*--------------------------validacion bottom finalv--------------------*/

$(document).ready(function(){
	$("#carro").on("click",function(){
		swal({
            imageUrl: "src/img/logo-peach.jpeg",
              title: "",
              text: "Costo por persona : $3650",
              imageUrl: "../src/img/logo-peach.jpeg",
            });
	});
});



/*------------------------------------------mapa------------*/
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
  document.getElementById('selectorigen').addEventListener('change', onChangeHandler);
  document.getElementById('selectdestino').addEventListener('change', onChangeHandler);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  directionsService.route({
    origin: document.getElementById('selectorigen').value,
    destination: document.getElementById('selectdestino').value,
    travelMode: google.maps.TravelMode.DRIVING
  }, function(response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    } else {
      //window.alert('Directions request failed due to ' + status);
    }
  });
}
