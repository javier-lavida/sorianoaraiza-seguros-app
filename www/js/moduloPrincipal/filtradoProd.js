$(document).ready(function(){
	
	initGeneralLinks("../");
	
	var array = {
	"#fp-fraude" : "#ul-fraude",
	"#fp-hogar" : "#ul-hogar", 
	"#fp-pyme" : "#ul-pyme", 
	"#fp-vida" : "#ul-vida"};
	
	for(var key in array){
		$(key).click(function(){
			shadeBarsJson($(this).attr('id'),array);
		});
	}
	
	$("#asistencia-sbs").click(function(){
		createShadowBackground(90,70);
		var contenido = "<div class='asistencia-sbs'><img src='../img/filtradoProducto/asistenciaSbs.png' style='max-width: 100%'></div>";
		$('#shadow-content').append(contenido);
		
	});
	
	$("#asistencia-sbs-pyme").click(function(){
		createShadowBackground(90,70);
		var contenido = "<div class='asistencia-sbs-pyme'><img src='../img/filtradoProducto/AsistenciasSBSPyME.png' style='max-width: 100%'></div>";
		$('#shadow-content').append(contenido);
		
	});
	
	$("#sbs").click(function(){
		createShadowBackground(90,70);
		var contenido = "<div class='asistencia-sbs-pyme'><img src='../img/filtradoProducto/sbs.png' style='max-width: 100%'></div>";
		$('#shadow-content').append(contenido);
		
	});
	
	$("#sbs-pyme").click(function(){
		createShadowBackground(90,70);
		var contenido = "<div class='asistencia-sbs-pyme'><img src='../img/filtradoProducto/sbspyme.png' style='max-width: 100%'></div>";
		$('#shadow-content').append(contenido);
		
	});
	
	$("#seguro-fraude").click(function(){
		createShadowBackground(96,96,"Seguro Fraude");
		var contenidoPDF = "<div class='pdf'><iframe id='pdf-content' src='http://docs.google.com/viewer?url=http://app.segurossomostodos.com/pdfs/flyer_fraude.pdf'>No se puede mostrar el PDF</iframe></div>";
		$("#shadow-content").append(contenidoPDF);
		//window.open('../multimedia/seguroFraude.pdf','_system');
		
	});
	
	$("#super-blindaje").click(function(){
		
		createShadowBackground(96,96,"Super Blindaje Plus");
		var contenidoPDF = "<div class='pdf'><iframe id='pdf-content' src='http://docs.google.com/viewer?url=http://app.segurossomostodos.com/pdfs/portada_superblindajeplus.pdf'>No se puede mostrar el PDF</iframe></div>";
		$("#shadow-content").append(contenidoPDF);
		
		//window.open('../multimedia/superBlindajePlus.pdf','_system');

		
	});
	
	$("#triptico-casa-segura").click(function(){
	
		createShadowBackground(96,96,"Casa Segura");
		var contenidoPDF = "<div class='pdf'><iframe id='pdf-content' src='http://docs.google.com/viewer?url=http://app.segurossomostodos.com/pdfs/folder_casa_segura_ok.pdf'>No se puede mostrar el PDF</iframe></div>";
		$("#shadow-content").append(contenidoPDF);
		
		//window.open('../multimedia/casaSegura.pdf','_system');
		
	});
	
	$("#casa-segura").click(function(){
		createShadowBackground(90,70);
		var contenido = "<div class='casa-segura'><img src='../img/filtradoProducto/CasaSegura.png' style='max-width: 100%'></div>";
		$('#shadow-content').append(contenido);
		
	});
	
	$("#coberturas-casa-segura").click(function(){
		createShadowBackground(90,70);
		var contenido = "<div class='casa-segura'><img src='../img/filtradoProducto/coberturasCasaSegura.png' style='max-width: 100%'></div>";
		$('#shadow-content').append(contenido);
		
	});
	
	$("#hogar-facil").click(function(){
		createShadowBackground(90,70);
		var contenido = "<div class='casa-segura'><img src='../img/filtradoProducto/hogarFacil.png' style='max-width: 100%'></div>";
		$('#shadow-content').append(contenido);
		
	});
	
	$("#flayer-empresa-protegida").click(function(){
	
		createShadowBackground(96,96,"Empresa Protegida");
		var contenidoPDF = "<div class='pdf'><iframe id='pdf-content' src='http://docs.google.com/viewer?url=http://app.segurossomostodos.com/pdfs/folder_empresa_protegida_ok.pdf'>No se puede mostrar el PDF</iframe></div>";
		$("#shadow-content").append(contenidoPDF);
		
		//window.open('../multimedia/fliyerEmpresaProtegida.pdf','_system');
		
	});
	
	$("#empresa-protegida").click(function(){
		createShadowBackground(90,70);
		var contenido = "<div class='empresa-protegida'><img src='../img/filtradoProducto/empresaProtegida.png' style='max-width: 100%'></div>";
		$('#shadow-content').append(contenido);
		
	});
	
	$("#triptico-ingreso-familiar").click(function(){
		createShadowBackground(96,96,"Ingreso Familiar");
		var contenidoPDF = "<div class='pdf'><iframe id='pdf-content' src='http://docs.google.com/viewer?url=http://app.segurossomostodos.com/pdfs/folder_ingreso_fam_ok.pdf'>No se puede mostrar el PDF</iframe></div>";
		$("#shadow-content").append(contenidoPDF);
		//window.open('../multimedia/tripticoIngresoFamiliar.pdf','_system');
	});
	
	$("#ingreso-familiar").click(function(){
		createShadowBackground(90,70);
		var contenido = "<div class='ingreso-familiar'><img src='../img/filtradoProducto/ingresoFamiliar.png' style='max-width: 100%'></div>";
		$('#shadow-content').append(contenido);
		
	});
	
	$("#asistencia-ingreso-familiar").click(function(){
		createShadowBackground(90,70);
		var contenido = "<div class='ingreso-familiar'><img src='../img/filtradoProducto/asistenciaIngresoFamiliar.png' style='max-width: 100%;max-height: 100%'></div>";
		$('#shadow-content').append(contenido);
		
	});
	
	$("#seguro-vida-recuperacion").click(function(){
		createShadowBackground(90,70);
		var contenido = "<div class='seguro-vida-recuperacion'><img src='../img/filtradoProducto/seguroVidaRecuperacion.png' style='max-width: 100%'></div>";
		$('#shadow-content').append(contenido);
		
	});
	setUserInfo();
});