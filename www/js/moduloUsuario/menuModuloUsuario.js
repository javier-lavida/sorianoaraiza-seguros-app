$(document).ready(function(){
	$('.texto-azul-1').click(function(){
		window.location.href = "../menuPrincipal.html";
	});
	$('#como-voy-principal').click(function(){
		window.location.href = "opcionesPerfil.html";
	});
	
	$('#citas-principal').click(function(){
		window.location.href = "opcionesSeguridad.html";
	});
	
	$('#perfilar-principal').click(function(){
		window.location.href = "tutoriales.html"
	});
	
	$('#oferta-principal').click(function(){
		window.location.href = "aviso.html"
	});
	
	$('#filtrado-principal').click(function(){
		window.location.href = "contacto.html"
	});
	
	$('#capacitacion-principal').click(function(){
		window.location.href = "legales.html"
	});
	setUserInfo();
});