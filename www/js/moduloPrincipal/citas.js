$(document).ready(function(){
	
	initGeneralLinks("../");
	
	setInformacionHoy();
	
	
	getCitasHoy();
	
	$('.cv-titulo').unbind();
	
	setEsDatePicker();
	
	$('#i-citas').click(function(){
		createShadowBackground(96,50,"Nueva Cita");
		var html = "";
		html += "<div id='citas-shadow' style='top: 9%; left: 2%; width: 96%; height: 70%;position: relative; overflow-y: auto;'>"
		html += "<label class='label-cliente'>Nombre del cliente:</label><input id='nombre-cliente' type='text' name='cliente_name' >";
		html += "<label class='label-fec'>Fecha y Hora:</label><input id='fecha-hora' type='text' name='datepicker' >";
		html += "&nbsp;<br />";
		html += "<label class='label-contacto'>Tipo de Contacto:</label>&nbsp;<label class='label-radio-visita'>Visita<input id='visita' type='radio' name='kind' checked='true'></label><label class='label-radio-llamada'>Llamada<input id='llamada' type='radio' name='kind' ></label>";
		html += "</div>";
		html += "<div id='enviar-cita'><span>Enviar</span></div>";
		$('#shadow-content').append(html);
		$('#fecha-hora').datetimepicker({
		autoSize : false,
		controlType: 'select',
		dateFormat: 'yy-mm-dd',
		timeFormat: 'HH:mm'
		});
		
		$('#enviar-cita').click(function(){
			var nombreCliente = $('#nombre-cliente').val();
			var fecha = $('#fecha-hora').val();
			var kind = $('#visita').prop('checked') == true ? 1 : 2;
			
			if(nombreCliente.length == 0 ){
				alertMessage('El Nombre del Cliente es necesario');
				return ;
			}
			
			if(fecha.length == 0 ){
				alertMessage('La fecha es necesaria');
				return ;
			}
				$.get('http://app.segurossomostodos.com/api/store-appointment',{client_name : nombreCliente , datetime : fecha, kind : kind},function(data){
						if(data.status == 200){
							alertMessage("¡Cita Agendada con éxito!");
							$('#shadow-background').remove();
							getCitasHoy();
						}else{
							alertMessage("Hubo un error al agendar la Cita, intentalo más tarde");
							$('#shadow-background').remove();
							getCitasHoy();
						}
				},'jsonp');
				
		});
	});
	setUserInfo();
});

function setEsDatePicker(){
	$.datepicker.regional['es'] = {
	 closeText: 'Cerrar',
	 prevText: '<Ant',
	 nextText: 'Sig>',
	 currentText: 'Hoy',
	 monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
	 monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
	 dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
	 dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
	 dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
	 weekHeader: 'Sm',
	 dateFormat: 'dd/mm/yy',
	 firstDay: 1,
	 isRTL: false,
	 showMonthAfterYear: false,
	 yearSuffix: ''
	 };
	 $.datepicker.setDefaults($.datepicker.regional['es']);
}

function setInformacionHoy(){
	var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
	var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
	var date = new Date();
	
	var texto = "Citas para hoy: "+diasSemana[date.getDay()] + " " + date.getDate() + " de " + meses[date.getMonth()];
	
	$('#detalle-hoy').html(texto);
	
}

function getCitasHoy(){
	console.log("Voy por las citas");
	$.get('http://app.segurossomostodos.com/api/appointments',{},function(data){
		if(data != null && data.status == 200){
			var citas = data.appointments;
			var html = "";
			for(var index = 0 ; index < citas.length ; index++){
				
				html += "<tr><td style='text-align: left'>"+citas[index].client_name+" &nbsp;";
				var time = citas[index].datetime;
				time = time.substring(time.indexOf(" "),time.length);
				html += time +"</td>";
				
				if(citas[index].kind == 1){
					html += "<td><input type='checkbox' checked></td>";
					html += "<td><input type='checkbox' ></td>";
				}else{
					html += "<td><input type='checkbox' ></td>";
					html += "<td><input type='checkbox' checked></td>";
				}
				html += "</tr>";
			}
			$("#body-citas").html(html);
		}
	},'jsonp');
}