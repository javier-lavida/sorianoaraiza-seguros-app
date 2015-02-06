function initGeneralLinks(ruta){


	if(ruta){
		$('.texto-azul-1').click(function(){
			window.location.href = ruta + "menuPrincipal.html";
		});
	}else{
		$('.texto-azul-1').click(function(){
			window.location.href = "menuPrincipal.html";
		});
	}

	
		$('.texto-azul-2').click(function(){
			window.location.href = "menuModuloPrincipal.html";
		});
		
		$('.texto-azul-ventas').click(function(){
			window.location.href = "menuModuloVentas.html";
		});
		
		$('.texto-azul-usuario').click(function(){
			window.location.href = "menuModuloUsuario.html";
		});
	
		$('.cv-titulo').click(function(){
			window.location.href = "menuModuloPrincipal.html";
		});
		
		$('.ventas-titulo').click(function(){
			window.location.href = "menuModuloVentas.html";
		});
	
	

}

function carrusel(){
	
	for(var contador = 1 ; contador <= 5 ; contador++){
	
		var cssCurrent = $('#carrusel-inicio-'+contador).css("z-index");
		
		if(cssCurrent == 3){
			var contAux = contador;
			contAux++;
			$("#carrusel-inicio-"+contador).animate({
				"margin-left": "-1000px",
				"z-index" : "2"
			},600,function(){
				$(this).css({"display" : "none"});
				if(contador+1 > 5){
					contAux=1;
				}
				$("#carrusel-inicio-"+contAux).css({
					"display" : "block",
					"margin-left" : "1000px",
					"z-index" : "3"
				});
				$("#carrusel-inicio-"+contAux).animate({
					"margin-left" : "0px"
				},600);
			});
			break;
		}
	}			
}

function shadeBars(element,array){
	var elementToHide = null;
	for(var index = 0 ; index < array.length ; index++){
		if($(array[index]).css('display') === 'block'){
			elementToHide = array[index];
			break;
		}
	}

	if(elementToHide != null){
		$(elementToHide).animate({
			"height" : "0px"
		},600,function(){
			$(elementToHide).css({"display" : "none"});
			$(element).css({"height" : "0px","display" : "block"});
			$(element).animate({
				"height": "auto"
			},600);
		});
	}
	/*
	else{
		$(elementToHide).animate({
			"height" : "0px"
		},600,function(){
			$(elementToHide).css({"display" : "none"});
			$(element).css({"height" : "0px","display" : "block"});
			$(element).animate({
				"height": "auto"
			},600);
		});
	}
	*/
	
}

function shadeBarsJson(element,array){
	
	var elementToHide = null;
	var height = null;
	element = "#"+element;
	
	for(var key in array){
		if(element === key){
			element = array[key];
		}
		if($(array[key]).css('display') === 'block'){
			elementToHide = array[key];
		}
	}
	if(element === elementToHide){
		return ;
	}
	if(elementToHide != null){
		height = $(elementToHide).css('height');
		$(elementToHide).animate({
			"height" : "0px"
		},400,function(){
			$(elementToHide).css({"display" : "none" , "height" : height});
			height = $(element).css('height'); 
			$(element).css({"height" : "0%","display" : "block"});
			$(element).animate({
				"height": height
			},400);
		});
	}else{
		height = $(element).css('height');
		$(element).css({"height" : "0px","display" : "block"});
		$(element).animate({
			"height" : height
		},400);
	}
	/*
	else{
		$(elementToHide).animate({
			"height" : "0px"
		},600,function(){
			$(elementToHide).css({"display" : "none"});
			$(element).css({"height" : "0px","display" : "block"});
			$(element).animate({
				"height": "auto"
			},600);
		});
	}
	*/
	
}


function createShadowBackground(leWidth, leHeight,encabezado,zindex){
	
	var defaultWidth = 80;
	var defaultHeight = 90;
	var left = 10;
	var top = 5; 
	
	if(leWidth && leHeight){
		defaultWidth = leWidth;
		defaultHeight = leHeight;
		left = (100 - defaultWidth)/ 2;
		top = (100 - defaultHeight) / 2;
	}
	
	$('body').append("<div id='shadow-background'><div id='shadow-content'>&nbsp;</div></div>");
	if(zindex){
		$('#shadow-background').css({'z-index' : zindex});
		zindex++;
		$('#shadow-content').css({'z-index' : zindex});
		zindex++;
	}
	
	$('#shadow-content').css({
	"width"	: defaultWidth+"%",
	"height"	: defaultHeight+"%",
	"top"	: top+"%",
	"left"	: left+"%"
	});
	
	$('#shadow-content').html("<div id='shadow-close'>&nbsp;</div>");
	if(zindex){
		$('#shadow-close').css({'z-index' :  zindex});
	}
	
	if(encabezado){
		var encabezadoHtml = "<div style='top:2%; width: 94%; font: 3vh 'KievitOT-Regular'; color: gray; text-align: center; border-bottom: 1px solid #e5e5e5;position: inherit;'><span>"+encabezado+"</span></div>";
		$("#shadow-content").append(encabezadoHtml);
	}
	
	
	$('#shadow-close').click(function(){
		$('#shadow-background').remove();
	});
	
}

function createCustomShadowBackground(leWidth, leHeight,encabezado,zindex){
	
	var defaultWidth = 80;
	var defaultHeight = 90;
	var left = 10;
	var top = 5; 
	
	if(leWidth && leHeight){
		defaultWidth = leWidth;
		defaultHeight = leHeight;
		left = (100 - defaultWidth)/ 2;
		top = (100 - defaultHeight) / 2;
	}
	
	$('body').append("<div id='shadow-background-custom'><div id='shadow-content-custom'>&nbsp;</div></div>");
	if(zindex){
		$('#shadow-background-custom').css({'z-index' : zindex});
		zindex++;
		$('#shadow-content-custom').css({'z-index' : zindex});
		zindex++;
	}
	
	$('#shadow-content-custom').css({
	"width"	: defaultWidth+"%",
	"height"	: defaultHeight+"%",
	"top"	: top+"%",
	"left"	: left+"%"
	});
	
	$('#shadow-content-custom').html("<div id='shadow-close-custom'>&nbsp;</div>");
	if(zindex){
		$('#shadow-close-custom').css({'z-index' :  zindex});
	}
	
	if(encabezado){
		var encabezadoHtml = "<div style='top:2%; width: 94%; font: 3vh 'KievitOT-Regular'; color: gray; text-align: center; border-bottom: 1px solid #e5e5e5;position: inherit;'><span>"+encabezado+"</span></div>";
		$("#shadow-content-custom").append(encabezadoHtml);
	}
	
	
	$('#shadow-close-custom').click(function(){
		$('#shadow-background-custom').remove();
	});
	
}

function setUserInfo(){
	console.log('Voy');
	$.get('http://app.segurossomostodos.com/api/user-info',null,function(data){
		if(data){
			$('#nombre-login').html('Bienvenido:<br/>'+data.first_name+' '+data.last_name);
			$('#imagen-login').attr('src',data.avatar_thumb);
		}
		
	},'jsonp');
	
}

function cerrarSession(ruta){
	$.get('http://app.segurossomostodos.com/logout',null,function(data){
	},'jsonp');
	
	window.location.href= ruta;
	
}

function alertMessage(mensaje,zindex,height){
	if(height){
		createCustomShadowBackground(50,height,"Informaci&oacute;n",zindex);
	}else{
		createCustomShadowBackground(50,10,"Informaci&oacute;n",zindex);
	}
	$('#shadow-content-custom').append("<div id='alert' style='position: inherit; top: 5%;left: 3%; width: 94%; height: 85%; overflow-y: auto; overflow-x: hidden;text-align: justify;text-align:center;font: 2.6vh 'KievitOT-Regular';'>"+mensaje+"</div>");
}
