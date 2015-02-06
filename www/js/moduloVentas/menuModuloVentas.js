$(document).ready(function(){
	$('.texto-azul-1').click(function(){
		window.location.href = "../menuPrincipal.html";
	});
	$('#como-voy-principal').click(function(){
		window.location.href = "solicitud.html";
	});
	
	$('#citas-principal').click(function(){
		window.location.href = "cotizadores.html";
	});
	
	$('#perfilar-principal').click(function(){
		window.location.href = "informacionCliente.html"
	});
	
	$('#oferta-principal').click(function(){
		window.location.href = "adjuntarSolicitud.html"
	});
	
	$('#filtrado-principal').click(function(){
		window.location.href = "documentosPersonales.html"
	});
	setUserInfo();
});