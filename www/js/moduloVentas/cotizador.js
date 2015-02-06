$(document).ready(function(){
	
	initGeneralLinks("../");
	
	$('#s-auto-facil').click(function(){
		createShadowBackground(96,96,"Autocompara");
		$('#shadow-content').append("<div id='vademecum' style='position: inherit; top: 3%; width: 100%; height: 85%; overflow: auto'><iframe src='https://www.autocompara.com/ExpressoAutoCompara/index.htm' style='width:100%; height:100%;'></iframe></div>");
	});
	setUserInfo();
});