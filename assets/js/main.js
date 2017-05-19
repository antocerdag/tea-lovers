function subscribirse(){
	var nombre = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var direccion = document.getElementById("direccion").value;
	//var te = document.getElementById("tevariedades").value;

	if((nombre.length == 0) || (email.length == 0) || (direccion.length == 0) ){
		alert("Debe completar todos los campos");
	} else {
		alert("Muchas gracias por subscribirte");
	}
}