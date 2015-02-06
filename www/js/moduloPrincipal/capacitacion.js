$(document).ready(function(){	
	initGeneralLinks("../");
	
	var array = {
	"#c-fraude" : "#ul-c-fraude",
	"#c-hogar" : "#ul-c-hogar", 
	"#c-pyme" : "#ul-c-pyme", 
	"#c-ventas" : "#ul-c-ventas", 
	"#c-otros" : "#ul-c-otros", 
	"#c-auto" : "#ul-c-auto", 
	"#c-vida" : "#ul-c-vida"};
	
	for(var key in array){
		$(key).click(function(){
			shadeBarsJson($(this).attr('id'),array);
		});
	}
	
	$('#auto-compara').click(function(){
		createShadowBackground(96,96);
		$('#shadow-content').append("<div class='videos'><video src='http://app.segurossomostodos.com/videos/light/autoCompara.mp4' controls width='100%' height='100%'></video></div>");
	});
	
	$('#auto-compara-select').click(function(){
		createShadowBackground(96,96);
		$('#shadow-content').append("<div class='videos'><video src='http://app.segurossomostodos.com/videos/light/autoComparaSelect.mp4' controls width='100%' height='100%'></video></div>");
	});
	
	$('#sbs-plus').click(function(){
		createShadowBackground(96,96);
		$('#shadow-content').append("<div class='videos'><video src='http://app.segurossomostodos.com/videos/light/sbsPlus.mp4' controls width='100%' height='100%'></video></div>");
	});
	
	$('#sbs-pyme').click(function(){
		createShadowBackground(96,96);
		$('#shadow-content').append("<div class='videos'><video src='http://app.segurossomostodos.com/videos/light/sbsPyme.mp4' controls width='100%' height='100%'></video></div>");
	});
	
	$('#casa-segura').click(function(){
		createShadowBackground(96,96);
		$('#shadow-content').append("<div class='videos'><video src='http://app.segurossomostodos.com/videos/light/casaSegura.mp4' controls width='100%' height='100%'></video></div>");
	});
	
	$('#empresa-protegida').click(function(){
		createShadowBackground(96,96);
		$('#shadow-content').append("<div class='videos'><video src='http://app.segurossomostodos.com/videos/light/empresaProtegida.mp4' controls width='100%' height='100%'></video></div>");
	});
	
	$('#abc-seguros').click(function(){
		createShadowBackground(96,96);
		$('#shadow-content').append("<div class='videos'><video src='http://app.segurossomostodos.com/videos/light/abcSeguros.mp4' controls width='100%' height='100%'></video></div>");
	});
	
	$('#abc-seguros-rollplay').click(function(){
		createShadowBackground(96,96);
		$('#shadow-content').append("<div class='videos'><video src='http://app.segurossomostodos.com/videos/light/abcSegurosRollplay.mp4' controls width='100%' height='100%'></video></div>");
	});
	
	$('#abc-seguros-soriano').click(function(){
		createShadowBackground(96,96);
		$('#shadow-content').append("<div class='videos'><video src='http://app.segurossomostodos.com/videos/light/abcSegurosSoriano.mp4' controls width='100%' height='100%'></video></div>");
	});
	
	$('#mejores-practicas').click(function(){
		createShadowBackground(96,96);
		$('#shadow-content').append("<div class='videos'><video src='http://app.segurossomostodos.com/videos/light/mejoresPracticas.mp4' controls width='100%' height='100%'></video></div>");
	});
	
	$('#ingreso-familiar-santander').click(function(){
		createShadowBackground(96,96);
		$('#shadow-content').append("<div class='videos'><video src='http://app.segurossomostodos.com/videos/light/ingresoFamiliarSantander.mp4' controls width='100%' height='100%'></video></div>");
	});
	
	
	
	$('#seguros-somos-todos').click(function(){
		createShadowBackground(96,96);
		$('#shadow-content').append("<div class='videos'><video src='http://app.segurossomostodos.com/videos/light/segurosSomosTodos.mp4' controls width='100%' height='100%'></video></div>");
	});
	
	
	$('#sbs-plus-banco').click(function(){
		createShadowBackground(96,96);
		$('#shadow-content').append("<div class='videos'><video src='http://app.segurossomostodos.com/videos/light/sbsPlusBanco.mp4' controls width='100%' height='100%'></video></div>");
	});
	
	$('#sbs-zurich').click(function(){
		createShadowBackground(96,96);
		$('#shadow-content').append("<div class='videos'><video src='http://app.segurossomostodos.com/videos/light/sbsZurich.mp4' controls width='100%' height='100%'></video></div>");
	});
	setUserInfo();
});