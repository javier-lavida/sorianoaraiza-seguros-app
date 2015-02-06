$(document).ready(function(){
	
	initGeneralLinks("../");
	
	//makeComoVoyChart();
	
	$('#perfilar').click(function(){
		createShadowBackground(96,96,"Vademecum");
		$('#shadow-content').append("<div id='vademecum' style='position: inherit; top: 2%; width: 100%; height: 85%; overflow-y: auto; overflow-x: hidden;'></div>");
		var vademecumHtml = $("#vademecum-htm").html();
		$('#vademecum').html(vademecumHtml);
		setElements();
		
	});
	setUserInfo();
});


function resetVademecum() {
                    $('.steper div[class|="step"]').hide();
                    $('.steper .active').show();
                    $('#actual-step').val(1);
}

function setElements(){

$('#vademecum-form input[name="age_gender"]').change(function() {
                    var val = $(this).val();
                    if (val == undefined || val == null || val == "") {
                        $('.steper .younger-45, .steper .older-45').show();
                    } else if (val.indexOf("<=45") == 0) {
                        $('.steper .younger-45').show();
                        $('.steper .older-45').hide();
                    } else if (val.indexOf(">=45") == 0) {
                        $('.steper .younger-45').hide();
                        $('.steper .older-45').show();
                    } else {
                        $('.steper .younger-45, .steper .older-45').show();
                    }
                });
                $('div[class|="step"] a').click(function() {
                    var name = $(this).attr('data-name');
                    var val = $(this).attr('data-value');
                    $('#vademecum-form input[name="' + name + '"]').val(val).trigger('change');
                    var idx = $('#actual-step').val();
                    if (idx == $('.steper').attr('data-maxsteps')) {
                        var data = $('#vademecum-form').serialize();
                        $.get('http://app.segurossomostodos.com/api/vademecum-dialog', data, function(data) {
							$("#shadow-background").remove();
							
							createShadowBackground(96,96,"Resultado de tu Perfilamiento");
							$('#shadow-content').append("<div id='vademecum' style='position: inherit; top: 5%;left: 3%; width: 94%; height: 85%; overflow-y: auto; overflow-x: hidden;text-align: justify;'></div>");
							$('#result-product').html(data.catalog_product.name);
                            $('#result-body').html(data.dialog);
                            $('#result-body-additional').empty();
                            if (data.additional_dialogs.length > 0) {
                                $('#result-body-additional').show();
                                $('#result-body-additional-heading').show();
                                for (var i = 0; i < data.additional_dialogs.length; i++) {
                                    var additional = data.additional_dialogs[i];
                                    var div = $('<div>').attr({'class': 'list-group-item'});
                                    var h3 = $('<h5>').attr({'class': 'list-group-heading'});
                                    var p = $('<p>').attr({'class': 'list-group-text'});
                                    p.html(additional.dialog);
                                    h3.html(additional.catalog_product.name);
                                    div.append(h3);
                                    div.append(p);
                                    $('#result-body-additional').append(div);
                                }
                            } else {
                                $('#result-body-additional').hide();
                                $('#result-body-additional-heading').hide();
                            }
							var htmlResultadoVademecum = $("#contenido-modal").html();
							$("#vademecum").html(htmlResultadoVademecum);
							resetVademecum();
                        }, 'jsonp');
                    } else {
                        idx++;
                        $('#actual-step').val(idx);
                        $(this).closest('div[class|="step"]').hide(400);
                        $('.steper .step-' + idx).fadeIn();
                    }
                });

}