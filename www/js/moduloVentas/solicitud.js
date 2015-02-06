$(document).ready(function(){
	
	initGeneralLinks("../");
	
	$('#s-auto-facil').click(function(){
		createShadowBackground(96,96,"Auto F&aacute;cil");
		$('#shadow-content').css({"overflow-y" : "auto"});
		$('#shadow-content').append("<div id='embed' style='width: 96%;left: 2%;position: absolute; height: 90%; top: 5%;'></div>");
		
		$('#embed').load('solicitudAutoFacil.html');
		
	});
	
	$('#s-ingreso-familiar').click(function(){
		createShadowBackground(96,96,"Ingreso Familiar");
		$('#shadow-content').css({"overflow-y" : "auto"});
		$('#shadow-content').append("<div id='embed' style='width: 96%;left: 2%;position: absolute; height: 90%; top: 5%;'></div>");
		
		$('#embed').load('solicitudIngresoFamiliar.html');
	});
	
	$('#s-vida-facil').click(function(){
		createShadowBackground(96,96,"Vida F&aacute;cil");
		$('#shadow-content').css({"overflow-y" : "auto"});
		$('#shadow-content').append("<div id='embed' style='width: 96%;left: 2%;position: absolute; height: 90%; top: 5%;'></div>");
		
		$('#embed').load('solicitudVidaFacil.html');
	});
	
	$('#s-super-blindaje').click(function(){
		createShadowBackground(96,96,"Super Blindaje");
		$('#shadow-content').css({"overflow-y" : "auto"});
		$('#shadow-content').append("<div id='embed' style='width: 96%;left: 2%;position: absolute; height: 90%; top: 5%;'></div>");
		
		$('#embed').load('solicitudSuperBlindaje.html');
	});
	
	$('body').on('click','#autofacil',function(event){
		event.preventDefault();
		var fromValues = $("#form-autofacil").serialize();
				$.get('http://app.segurossomostodos.com/api/store-pdf',fromValues,function(data){
					if(data.status == 200){
						//$("#embed").html("<object id='pdf-content' data='data:application/pdf;base64,"+data.pdf+"' type='application/pdf'>No se puede Mostrar el PDF</object>");
						alertMessage("La solicitud se ha enviado al correo que has proporcionado",10,16);
					}else{
						alertMessage('Hubo un error al momento de cargar la solicitud',10,16);
					}
					
				},'jsonp');
			
			//window.open('http://app.segurossomostodos.com/api/store-pdf?'+fromValues, '_blank', 'location=no,toolbar=yes,EnableViewPortScale=yes');
	});
	
	$('body').on('click','#ingresofamiliar',function(event){
		event.preventDefault();
		var fromValues = $("#form-familiar").serialize();
		$.get('http://app.segurossomostodos.com/api/store-pdf',fromValues,function(data){
					
					if(data.status == 200){
						//$("#embed").html("<object id='pdf-content' data='data:application/pdf;base64,"+data.pdf+"' type='application/pdf'>No se puede Mostrar el PDF</object>");
						alertMessage("La solicitud se ha enviado al correo que has proporcionado",10,16);
					}else{
						alertMessage('Hubo un error al momento de cargar la solicitud',10,16);
					}
					
				},'jsonp');
			//window.open('http://app.segurossomostodos.com/api/store-pdf?'+fromValues, '_blank', 'location=no,toolbar=yes,EnableViewPortScale=yes');
	});
	
	$('body').on('click','#superblindaje',function(event){
		event.preventDefault();
		var fromValues = $("#form-blindaje").serialize();
				
			$.get('http://app.segurossomostodos.com/api/store-pdf',fromValues,function(data){
					if(data.status == 200){
						//$("#embed").html("<object id='pdf-content' data='data:application/pdf;base64,"+data.pdf+"' type='application/pdf'>No se puede Mostrar el PDF</object>");
						alertMessage("La solicitud se ha enviado al correo que has proporcionado",10,16);
					}else{
						alertMessage('Hubo un error al momento de cargar la solicitud',10,16);
					}
					
				},'jsonp');
			//window.open('http://app.segurossomostodos.com/api/store-pdf?'+fromValues, '_blank', 'location=no,toolbar=yes,EnableViewPortScale=yes');
	});
	
	$('body').on('click','#vidafacil',function(event){
		event.preventDefault();
		var fromValues = $("#form-vidafacil").serialize();
				
			$.get('http://app.segurossomostodos.com/api/store-pdf',fromValues,function(data){
					
					if(data.status == 200){
						//$("#embed").html("<object id='pdf-content' data='data:application/pdf;base64,"+data.pdf+"' type='application/pdf'>No se puede Mostrar el PDF</object>");
						alertMessage("La solicitud se ha enviado al correo que has proporcionado",10,16);
					}else{
						alertMessage('Hubo un error al momento de cargar la solicitud',10,16);
					}
					
				},'jsonp');
			//window.open('http://app.segurossomostodos.com/api/store-pdf?'+fromValues, '_blank', 'location=no,toolbar=yes,EnableViewPortScale=yes');
	});
	
	$("body").on('click','#cancelar',function(event){
		event.preventDefault();
		$('#shadow-background').remove();
	});
	setUserInfo();

});

function cancelar(){
	$('#')
}