$(document).ready(function(){
	initGeneralLinks('../');
	$('#p-datos').click(function(){
		createShadowBackground(96,50,"Actualizar Datos");
		var html = "";
		html += "<div style='position: inherit; top: 8%; left: 2%; width: 96%; height: 70%;'>";
		html += "<label style='font: 2.5vh 'KievitOT-Regular'; float: left'>Nombre</label><input id='nombre' type='text' name='name' style='width: 100%;  border: 0px solid; border-radius: 5px'>";
		html += "&nbsp;<br/>";
		html += "<label style='font: 2.5vh 'KievitOT-Regular'; float: left'>Apellidos(s)</label><input id='apellido' type='text' name='name' style='width: 100%; border: 0px solid; border-radius: 5px'>";
		html += "&nbsp;<br/>";
		html += "<label style='font: 2.5vh 'KievitOT-Regular'; float: left'>Tel&eacutefono de Contacto</label><input id='telefono' type='text' name='name' style='width: 100%; border: 0px solid; border-radius: 5px'>";
		html += "</div>";
		html += "<div id='enviar' style='background-color: #3276b1;border: 0 solid;border-radius: 5px;bottom: 5%;color: window;font: 2.7vh 'KievitOT-Regular';left: 50%;margin-left: -7%;position: absolute;width: 15%;'>Enviar</div>";
		$('#shadow-content').append(html);
		
		$('#enviar').click(function(){
			var name = $('#nombre').val();
			var last_name = $('#apellido').val();
			var phone = $('#telefono').val();
			if(name.length == 0 ){
				alertMessage('El nombre es necesario');
			}
			
			if(last_name.length == 0 ){
				alertMessage('El Apellido(s) es/son necesario(s)');
			}
			$.get('http://app.segurossomostodos.com/api/update',{first_name : name , last_name : last_name, phone : phone},function(data){
				console.log(data);
			},'jsonp');
		});
		 
	});
	setUserInfo();
});