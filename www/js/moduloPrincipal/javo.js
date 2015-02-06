

  function calculate(){
  
    var val = $('#calc-poliza').val();
    if(!val || val== '') return;
    var var1 = {
      11 : .10,
      12 : .08,
      13 : .06,
      14 : .04,
      21 : .10,
      22 : .08,
      23 : .06,
      24 : .02,
      };
    var var2 = {
      11 : 0.9,
      12 : 0.9,
      13 : 0.9,
      14 : 0.9,
      15 : 0.9,
      16 : 1,
      17 : 1,
      18 : 1,
      19 : 1,
      21 : 2,
      22 : 2,
      23 : 2,
      24 : 2,
      25 : 2,
      26 : 1.5,
      27 : 1,
      28 : 1,
      39 : 1,
      31 : 1,
      32 : 1,
      33 : 1,
      34 : 1,
      35 : 1,
      36 : 1,
      37 : 0.8,
      38 : 0.8,
      39 : 0.8,
      41 : 1.4,
      42 : 1.4,
      43 : 1.4,
      44 : 1,
      45 : 1,
      46 : 1,
      47 : 0.5,
      48 : 0.5,
      49 : 0.5,
      51 : 1.4,
      52 : 1.4,
      53 : 1.4,
      54 : 1,
      55 : 1,
      56 : 1,
      57 : 0.5,
      58 : 0.5,
      59 : 0.5,
      };

    var res1 = parseInt($('#calc-ejec').val())*10 + parseInt($('#calc-pago').val());
    var resa = parseInt($('#calc-ejec').val())*10 + 1;
    var res2 = parseInt($('#calc-seg').val())*10 + parseInt($('#calc-prod').val());

    if(res1 &lt; 10 || res1 %10 == 0 || res2 &lt; 10 || res2 %10 == 0) return;

    res1 = var1[res1];
    resa = var1[resa];
    res2 = var2[res2];

    console.log(res1);
    console.log(res2);

    var res3 = val * res2;
    var res4 = res3*res1;
    var res5 = val * res2 * resa
    var res6 = res5 - res4;

    
    res3 = res3.toFixed(2);
    res4 = res4.toFixed(2);
    res5 = res5.toFixed(2);
    res6 = res6.toFixed(2);

    $('#result-pond').html('$ ' + res3);
    $('#result-comision').html('$ ' + res4);
    $('#result-anual').html('$ ' + res5);
    $('#result-lost').html('$ ' + res6);
    $('.check-amount').html(res4);
    
  }

  $(function(){
    $('#videos-list #accordion .list-group a').click(function(e){
      e.preventDefault();
      var video = $('&lt;video controls autoplay&gt;').attr({width: '100%'});
      var source = $('&lt;source&gt;').attr({'src' :  $(this).attr('href')});
      video.append(source);
      $('#videoLabel').html($(this).html());
      $('#videoModal .modal-body').empty();
      $('#videoModal .modal-body').append(video);

      $('#videoModal').modal('show');

    });

    $('#pdfs-list #filterAccordion .list-group a').click(function(e){
      e.preventDefault();

      var href = $(this).attr('href');

      var inner = undefined;
      if(href.endsWith('.pdf')){
        var object = $('&lt;object&gt;').attr({
          width: '100%',
          height: '500px',
          type:'application/pdf',
          data : $(this).attr('href')
        });
        
        inner = object;
        
      }else{
        var img = $('&lt;img&gt;').attr({
          width : '100%',
          src : $(this).attr('href')
        });
        inner = img;
      }
      $('#pdfLabel').html($(this).html());
      $('#pdfModal .modal-body').empty();
      $('#pdfModal .modal-body').append(inner);
      $('#pdfModal').modal('show');

      $('#pdf-to-send').html($(this).html());
      $('#pdf-hidden-field').val(href);

    });

    $('#send-pdf-button').click(function(){
      var form = $('#send-pdf-form');
      $.get('/api/send-mail', form.serialize(), function(data){
        console.log(data);
        if(data.status == 200){
          alertMessage('Se envio el correo electronico satisfactoriamente');
          $('#pdfSendModal').modal('hide');
        }else{

        }

      });
    });

    $('#videoModal').on('hide.bs.modal', function (e) {
      $('#videoModal .modal-body').empty();
    });

    $('#sendDialogForm').click(function(e){
      e.preventDefault();
      $.get(
        '/api/vademecum-dialog',
        $('#vademecum-form').serialize(),
        function(data){
          $('#dialogFormModal').modal('hide');
          if(data.length == 0){
            alertMessage('No se encontró dialogo de valor para las especificaciones dadas');
          }else{
            var result = data[0];
            $('#dialogModal .modal-body').html(result.dialog);
            $('#dialogLabel').html(result.catalog_product.name);
            $('#dialogModal').modal('show');
          }
        });
    });

    $('#sendDateForm').click(function(){
      $.post(
        '/api/store-appointment',
        $('#date-form').serialize(),
        function(data){
          if(data.status &amp;&amp; data.status == 200){
            alertMessage('Se guardo el registro correctamente');
            $('#dateFormModal').modal('hide');
          }else{
            alertMessage('No se pudo guardar la cita. Verifique que todos los campos hayan sido llenados. Si el problema persiste, contacte al administrador');
          }
        }
      );
    });

    $('#date-form input[name="datetime"]').datetimepicker({
      format : 'Y-m-d H:i',
      step : 15,
      lang: 'es',
      mask: true,
    });

    $('#chartModal').on('shown.bs.modal', function(){
      drawChart();
    });

    $('#add-visit-div').click(function(){
      $('#dateFormModal').modal('show');
    });

    $('#calc-form').on('submit', function(e){e.preventDefault();});

    $('#calc-form select').change(function(){
      calculate();
      if($(this).val() == "0"){
        $(this).attr("style", 'color: #aaa');
      }else{
        $(this).attr("style", 'color: #555');
      }
    });

    $('#calc-form input').on('keyup', function(){
      calculate();
    });


    var day = new Date();
    var weekday = day.getDay();

    weekdays = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    $('.date-weekday').html(weekdays[weekday]);

    $('.check-day').html(day.getDate());
    $('.check-month').html(day.getMonth() + 1);
    $('.check-year').html(day.getFullYear());
  });