$(document).ready(function(){
	
	initGeneralLinks("../");
	
	//makeComoVoyChart();
	
	$('#calculadora').click(function(){
		createShadowBackground(96,96,"Calculadora");
		
		$('#shadow-content').append("<div id='calc' style='position: inherit; top: 5%; width: 100%; height: 85%; overflow-y: auto; overflow-x: hidden;'></div>");
		$('#calc').load('calculadora.html');
	});
	setUserInfo();
});

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

				if(res1 <= 10 || res1 %10 == 0 || res2 <= 10 || res2 %10 == 0) return;

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

function makeComoVoyChart(){
		var data = {
			labels: ["January", "February", "March"],
			datasets: [
				{
					label: "My First dataset",
					fillColor: "rgba(220,220,220,0.2)",
					strokeColor: "rgba(220,220,220,1)",
					pointColor: "rgba(220,220,220,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(220,220,220,1)",
					data: [10, 5, 17]
				},
				{
					label: "My Second dataset",
					fillColor: "rgba(151,187,205,0.2)",
					strokeColor: "rgba(151,187,205,1)",
					pointColor: "rgba(151,187,205,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(151,187,205,1)",
					data: [3, 11, 20]
				}
			]
		};


			var ctx = document.getElementById("canvas-chart").getContext("2d");
					window.myPolarArea = new Chart(ctx).Line(data, {
						responsive:true
					});
					
					$('#canvas-chart').css({'height' : '100%'});
}