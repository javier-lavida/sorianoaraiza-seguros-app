/**
 * jQuery ajaxData v0.1
 *
 * Copyright (c) 2011 Pedro Laris (http://peyi.in/)
 * Licensed under the FreeBSD License (See terms below)
 *
 * @author Pedro Laris
 *
 * @projectDescription    jQuery plugin to easily make ajax requests.
 * 
 * @version 0.1.0
 * 
 * @requires jquery.js
 *
 *
 * TERMS OF USE - jQuery ajaxData
 * Open source under the FreeBSD License.
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
 *
 *    1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 *    2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY PEDRO LARIS ``AS IS'' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL PEDRO LARIS OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * The views and conclusions contained in the software and documentation are those of the authors and should not be interpreted as representing official policies, either expressed or implied, of Pedro Laris, who is the man.
 * 
 *
 * 
 *
 */

( function() {

  var basepath = ""; 
  var _jsonFilter = /[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/;
  
  
    String.prototype.isJSON = function() {
        return ( _jsonFilter.test( this.replace( /"(\\.|[^"\\])*"/g, '' ) ) );
    }


    String.prototype.parseJSON = function( securityExpression ) {

        securityExpression = securityExpression || 'for(;;);';
        var _jsonObject = null;
        var _jsonExpression = this.replace( securityExpression.toString(), '' );

        if( !_jsonExpression.isJSON() ) {
            //throw new Error( "Invalid JSON format" );
        }

        try {
            _jsonObject = eval( '(' + _jsonExpression + ')' );
        } catch ( err ) {
            //throw new SyntaxError( "Error Parsing JSON format: " + err.message );
        }

        return _jsonObject;

    };
	
/**
 * ajaxData 
 * 
 * Ayuda a restringir acceso a nuestros servicios ya que requiere por default que las respuestas sean JSON con una expresión de 
 * seguridad que se haya definido.
 *
 * La expresión que utiliza por defecto es:
 *
 *	for(;;);
 *
 * Así que una respuesta válida sería la siguiente
 *
 *	for(;;);({ "llave" : "valor" })
 *
 * Uso
 *
 * Requerimos importar nuestra librería jQuery y ajaxData.
 *
 * Una vez hecho esto, la utilización es la siguiente:
 *
 *	ajaxData( servicio, tipo, params,asyncflag, callback);
 *	ajaxData("servicio.php",'GET | POST'[, { "param" :  "valor 1" } [ , "true | false" [ , function(result){}]]]);
 *
 * e.g.
 *
 * var params = {
 *	user : "usuario",
 *	password : "p4ssw0rd"
 * };
 *
 * ajaxData( "login.php", 'POST', params, 'true', function(result){
 *
 *	
 *	//respuesta de login.php:
 *	//	for(;;);({ "logged" : "false"})
 *	
 *
 *	if( result.logged == "true" ){
 *		alert("Logged");
 *	}else{
 *		alert("Wrong password");
 *	}
 *
 * });
*/	 
	 
	 ajaxData = function( servicio, tipo, params,asyncflag,crossDomain, callback) {
		
		var _json = null;
		var _params = {};
	
		if(servicio != "/home/doLogin.action" && servicio != "/reuters/retrieveItem_1.action"){
	
			$('#loadingAjax').show();
			
		}
			
		var dataType = 'text';
		
		if(crossDomain && crossDomain === "true"){
			dataType = 'jsonp'
		}
		
		var random = Math.round(Math.random()*10000);
		
		if(typeof(asyncflag) === "undefined"){
			asyncflag = false;
		}else{
			if(asyncflag == "true"){
				asyncflag = true;
			}else{
				asyncflag = false;
			}
		}
		
		try{
			if(params != ''){
				params.rand = random;
				_params = params;
			}else{
				params = {};
				params.rand = random;
				_params = params;
			}
		}catch(err){
				_params.rand = random;
		}
		
		
		
		if(dataType === 'jsonp'){
			$.ajax({

			url         : basepath + servicio,
			type        : tipo,
			dataType    : dataType,
			crossDomain: true,
			jsonp		: 'callback',	
			async       : asyncflag,
			data		: _params,
			timeout 	: 150000,
			error		: function(xhr, status, error){
				
				//$('#loadingAjax').hide();
				return {"mensajeError" : "Intenta m&aacute;s tarde"};
		
			},
			success     : function( response ) {
			
			try {
					$('#loadingAjax').hide();
					_json = response.toString().parseJSON();
					
					if (callback && typeof(callback) === "function") {
						callback.apply( this, [ _json ] );
					}
					
				} catch ( err ) {
					$('#loadingAjax').hide();
					//throw new SyntaxError( 'No se ha podido parsear');
				}

			},
			complete	: function(jqXHR, textStatus){
				
			}
			});
		}else{
			$.ajax({

			url         : basepath + servicio,
			type        : tipo,
			dataType    : dataType,
			async       : asyncflag,
			data		: _params,
			timeout 	: 150000,
			error		: function(xhr, status, error){
				
				//$('#loadingAjax').hide();
				return {"mensajeError" : "Intenta m&aacute;s tarde"};
		
			},
			success     : function( response ) {
			
			try {
					$('#loadingAjax').hide();
					_json = response.toString().parseJSON();
					
					if (callback && typeof(callback) === "function") {
						callback.apply( this, [ _json ] );
					}
					
				} catch ( err ) {
					$('#loadingAjax').hide();
					//throw new SyntaxError( 'No se ha podido parsear');
				}

			},
			complete	: function(jqXHR, textStatus){
				
			}
			});
		}
		
		
		return _json;
	}

	errorMensaje = function(error,generar){
				
				
				error = parseInt(error);
				var mensaje;
				var mensaje_sub;
				
				switch(error){
	
					case 2:
						mensaje = "Error al enviar el correo electr&oacute;nico, intenta m&aacute;s tarde";
						mensaje_sub = "<p>Despu&eacute;s de tres intentos se bloquear&aacute; tu cuenta</p><p class='bloqueo'>Dale <span>click</span> a <a href='#' class='olvidaste-psw'>&iquest;Olvidaste tu contrase&ntilde;a?</a> para recuperarla</p>";
					break;
					
					case 3:
						mensaje = "Tu cuenta ha sido bloqueada";
						mensaje_sub = "<p> Para poder ingresar nuevamente sigue las instrucciones que se han enviado a tu correo electr&oacute;nico.</p>";
					break;
					
					case 4:
						mensaje = "Necesitas validar tu cuenta por correo electr&oacute;nico";
						mensaje_sub = "<p>Revisa tu correo y dale click a la liga de activaci&oacute;n</p>";
					break;
					
					case 5:
						mensaje = "La contrase&ntilde;a es incorrecta";
						mensaje_sub = "<p>Despu&eacute;s de tres intentos se bloquear&aacute; tu cuenta</p><p class='bloqueo'>Dale <span>click</span> a <a href='#' class='olvidaste-psw'>&iquest;Olvidaste tu contrase&ntilde;a?</a> para recuperarla</p>";
					break;
					
					case 6:
						mensaje = "La contrase&ntilde;a es incorrecta";
						mensaje_sub = "<p>Despu&eacute;s de tres intentos se bloquear&aacute; tu cuenta</p><p class='bloqueo'>Dale <span>click</span> a <a href='#' class='olvidaste-psw'>&iquest;Olvidaste tu contrase&ntilde;a?</a> para recuperarla</p>";
					break;
					
					case 77:
						mensaje = "Actualmente te encuentras firmado en otro equipo";
						mensaje_sub = "<p>Intenta de nuevo en 10 minutos</p>";
					break;

					case 0:
						mensaje = "Intenta de nuevo en unos minutos";
						mensaje_sub = "<p>Nos encontramos en mantenimiento para darte un mejor servicio.</p>";
					break;
					
					default:
						mensaje = "Intenta de nuevo en unos minutos";
						mensaje_sub = "<p>Nos encontramos en mantenimiento para darte un mejor servicio.</p>";
					break;
				}
				
				try{
					if(generar == true){
						
						var respuesta = {
							mensaje : mensaje,
							sub : mensaje_sub
						}
						return respuesta;
					}
				}catch(err){
					//console.log(err);
					
				}
				
				return mensaje;
	}
	
} )(jQuery);