$(document).ready(function(){
	setInterval(function(){carruselModuloPrincipal()},4000);
});

function carruselModuloPrincipal(){
	for(var contador = 1 ; contador <= 3 ; contador++){
		var cssCurrent = $('#carrusel-principal-'+contador).css("z-index");
		if(cssCurrent == 3){
			var contAux = contador;
			contAux++;
			$("#carrusel-principal-"+contador).animate({
				"margin-left": "-1000px",
				"z-index" : "2"
			},600,function(){
				$(this).css({"display" : "none"});
				if(contador+1 > 3){
					contAux=1;
				}
				$("#carrusel-principal-"+contAux).css({
					"display" : "block",
					"margin-left" : "1000px",
					"z-index" : "3"
				});
				$("#carrusel-principal-"+contAux).animate({
					"margin-left" : "0px"
				},600);
			});
			break;
		}
	}			
}

function goToHome(){
	window.location.href= 'menuPrincipal.html';
}

function clickBolita1(){
	var zIndex = $('#principal-body-part-1').css("z-index");
	
	if(zIndex == 1){
		return;
	}else{
		$('#principal-body-part-2').animate({
			"margin-top" : "1000px",
			"z-index" : "4"
			},700,function(){
			$('#principal-body-part-2').css({"display" : "none"});
			$('#principal-body-part-1').css({
				"margin-top" : "-1000px",
				"display" : "block",
				"z-index" : "1"
				});
		    $('#principal-body-part-1').animate({"margin-top" : "0px"},700);
			$('#bolita1').css({
				"left":"50%",
				"background" : "url('img/bolita1.jpg')",
				"background-repeat":"no-repeat",
				"background-size": "5vw 5vw",
				"width":"5vw",
				"height":"5vh",
				"position":"absolute"
				});
			$('#bolita2').css({
				"background" : "url('img/bolita2.jpg')",
				"background-repeat":"no-repeat",
				"background-size": "5vw 5vw",
				"width":"5vw",
				"height":"5vh",
				"position":"absolute",
				"left":"50%",
				"top":"45%"
				});
		});
	}
	
}

function clickBolita2(){
	var zIndex = $('#principal-body-part-2').css("z-index");
	
	if(zIndex == 1){
		return;
	}else{
		$('#principal-body-part-1').animate({
			"margin-top" : "-1000px",
			"z-index" : "4"
			},700,function(){
			$('#principal-body-part-1').css({"display" : "none"});
			$('#principal-body-part-2').css({
				"margin-top" : "1000px",
				"display" : "block",
				"z-index" : "1"
				});
		    $('#principal-body-part-2').animate({"margin-top" : "0px"},700);
			$('#bolita1').css({
				"left":"50%",
				"background" : "url('img/bolita2.jpg')",
				"background-repeat":"no-repeat",
				"background-size": "5vw 5vw",
				"width":"5vw",
				"height":"5vh",
				"position":"absolute"
				});
			$('#bolita2').css({
				"background" : "url('img/bolita1.jpg')",
				"background-repeat":"no-repeat",
				"background-size": "5vw 5vw",
				"width":"5vw",
				"height":"5vh",
				"position":"absolute",
				"left":"50%",
				"top":"45%"
				});
		});
	}
	
}

function onClickVideo(element){
	var id = $(element).attr('id');
	
	switch(id){
		case "venta-seguros-open":
		$('body').append("<div id='video-element'><div id='video-element-back'><div id='cerrar-video' onclick='cerrarVideo()'></div><video width='100%' height='100%' autobuffer controls><source src='http://app.segurossomostodos.com/videos/como_vender_seguros/abc_ventas.m4v' ></source></video></div></div>");
		break;
		case "seguros-automotriz-open":
		$('body').append("<div id='video-element'><div id='video-element-back'><div id='cerrar-video' onclick='cerrarVideo()'></div><video width='100%' height='100%' autobuffer controls><source src='http://app.segurossomostodos.com/videos/autocompara/autocompara_cambios2.m4v' ></source></video></div></div>");
		break;
		case "casa-segura-open":
		$('body').append("<div id='video-element'><div id='video-element-back'><div id='cerrar-video' onclick='cerrarVideo()'></div><video width='100%' height='100%' autobuffer controls><source src='http://app.segurossomostodos.com/videos/casa_segura/mejores_practicas_casa_segura.mp4' ></source></video></div></div>");
		break;
		case "empresa-protegida-open":
		$('body').append("<div id='video-element'><div id='video-element-back'><div id='cerrar-video' onclick='cerrarVideo()'></div><video width='100%' height='100%' autobuffer controls><source src='http://app.segurossomostodos.com/videos/empresa_protegida/empresa_protegida.m4v' ></source></video></div></div>");
		break;
		case "segura-vida-open":
		$('body').append("<div id='video-element'><div id='video-element-back'><div id='cerrar-video' onclick='cerrarVideo()'></div><video width='100%' height='100%' autobuffer controls><source src='http://app.segurossomostodos.com/videos/seguros_de_vida/ingreso_familiar.mov' ></source></video></div></div>");
		break;
		case "pyme-open":
		$('body').append("<div id='video-element'><div id='video-element-back'><div id='cerrar-video' onclick='cerrarVideo()'></div><video width='100%' height='100%' autobuffer controls><source src='http://app.segurossomostodos.com/videos/pyme/sbs_plus.mp4' ></source></video></div></div>");
		break;
	}
}

function cerrarVideo(){
	$('#video-element').remove();
}
