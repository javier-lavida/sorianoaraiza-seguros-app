$(document).ready(function(){
	setInterval(function(){carrusel()},4000);
});

function login(){
	//window.location.href='menuPrincipal.html';
	/*
	ajaxData('http://app.segurossomostodos.com/api/login','POST',{email : "javis@javis.com" , password : "password"},'true','true',function(response){
		console.log(response);
	});
	*/
	
	var usuario = $('#usuario').val();
	var password = $('#pass').val();
	
	if(usuario == null || usuario.length == 0){
		alertMessage('Favor de ingresar el usuario');
		return;
	}
	
	if(password == null || password.length==0 ){
		alertMessage('Favor de ingresar el password');
		return;
	}
	
	$.get('http://app.segurossomostodos.com/api/login',{email : usuario , password : password},function(data){
		if(data.status != 200){
			alertMessage('Usuario y password invalido');
		}else{
			window.location.href='menuPrincipal.html';
		}
	},'jsonp');
	
	
}