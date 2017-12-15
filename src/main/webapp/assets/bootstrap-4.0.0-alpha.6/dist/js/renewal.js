$('#registrationdate').datepicker({
	uiLibrary: 'bootstrap4',
	format: 'yyyy-mm-dd'
});

$('#expdate').datepicker({
	uiLibrary: 'bootstrap4',
	format: 'yyyy-mm-dd'
});

$('#msisdn').mask('0000000000000');
$('#serviceid').mask('000000000000');
$('#balance').mask('000000000000');
$('#price').mask('000000000000');
$('#subscriberdiscountcount').mask('099');
$('#recurringcount').mask('0');
$('#registrationdate').mask('0000-00-00');
$('#expdate').mask('0000-00-00');
        
$(document).ready(function(){
	$('html').animate({scrollTop:0}, 1);
	
	document.getElementById('checksubscribercount').onchange = function() {
		if (!document.getElementById('checksubscribercount').checked) {
			$("#subscriberdiscountcount").val("");		
		}
		document.getElementById('subscriberdiscountcount').disabled = !this.checked;
	};
	
	$('#check').on('click', function() {
    		
		if ($("#msisdn").val() == "") {
			document.getElementById('msisdn').focus();
			$('#invalidMsisdn').show();
			
			$('#msisdn').keyup(function() {
				if($(this).val() == ''){
					$('#invalidMsisdn').show();
				}else{
					$('#invalidMsisdn').hide();
				}
			});
		} else if ($("#serviceid").val() == "") {
			document.getElementById('serviceid').focus();
			$('#invalidService').show();
			
			$('#serviceid').keyup(function() {
				if($(this).val() == ''){
					$('#invalidService').show();
				}else{
					$('#invalidService').hide();
				}
			});
		} else if ($("#balance").val() == "") {
			document.getElementById('balance').focus();
			$('#invalidBalance').show();
				
			$('#balance').keyup(function() {
				if($(this).val() == ''){
					$('#invalidBalance').show();
				}else{
					$('#invalidBalance').hide();
				}
			});
		} else if ($("#price").val() == "") {
			document.getElementById('price').focus();
			$('#invalidPrice').show();
			
			$('#price').keyup(function() {
				if($(this).val() == ''){
					$('#invalidPrice').show();
				}else{
					$('#invalidPrice').hide();
				}
			});
		} else if ($("#registrationdate").val() == "") {
			document.getElementById('registrationdate').focus();
			$('#invalidDate').show();
			
			$('#registrationdate').keyup(function() {
				if($(this).val() == ''){
					$('#invalidDate').show();
				}else{
					$('#invalidDate').hide();
				}
			});	
		} else if ($("#recurringcount").val() == "") {
			document.getElementById('recurringcount').focus();
			$('#invalidRecurring').show();
			
			$('#recurringcount').keyup(function() {
				if($(this).val() == ''){
					$('#invalidRecurring').show();
				}else{
					$('#invalidRecurring').hide();
				}
			});	
		} else {
			if (!document.getElementById('checksubscribercount').checked) {
				$("#checksubscribercount").val("");		
			} else {
				$("#checksubscribercount").val("YES");
			}
				
			var object = {
					framework : $("#framework").val(),
					msisdn : $("#msisdn").val(),
					serviceid : $("#serviceid").val(),
					touchpoint : $("#touchpoint").val(),
					homepoc : $("#homepoc").val(),
					balance : $("#balance").val(),
					price : $("#price").val(),
					checksubscribercount : $("#checksubscribercount").val(),
					subscriberdiscountcount : $("#subscriberdiscountcount").val(),
					paymentcategory : $("#paymentcategory").val(),
					registrationdate : $("#registrationdate").val()+"T11:11:11",
					recurringcount : $("#recurringcount").val(),
					expdate : $("#expdate").val()
			}

			$.ajax({
				type : 'POST',
				url : '/dinamika/renewal',
				data : object,
				dataType : 'json',
				success : function(data) {
					if(data.Response.DynamicBenefit == 'true'){
						setFieldDetail(data);	
					} else {
						var createHTML = '';
						createHTML += '<div class="alert alert-danger" role="alert">';
						createHTML += 'This number doesn\'t have an additional benefit!';
						createHTML += '</div>';
						
						$('.validationPurchase').empty();
						$('.validationPurchase').append(createHTML);
						$(window).scrollTop($('.validationPurchase').offset().top-100);
					}
				}
			}); 
		}
    		
		function setFieldDetail(data){
			var createHTML = '';
			createHTML += '<div class="row">';
			createHTML += '<div class="form-group col-sm-6">';
			createHTML += '<label>Program ID</label>';
			createHTML += '<input class="form-control" value="'+data.Response.ProgramID+'"disabled>';
			createHTML += '</div>';
			createHTML += '<div class="form-group col-sm-6">';
			createHTML += '<label>Benefit</label>';
			createHTML += '<input class="form-control" value="'+data.Response.Benefit+'" style="font-weight: bolder;" disabled>';
			createHTML += '</div>';
			createHTML += '</div>';
			
			createHTML += '<div class="row">';
			createHTML += '<div class="form-group col-sm-12"><br>';
			createHTML += '<label><h5>Parameters</h5></label>';
			createHTML += '</div>';
			
			for (var i = 0; i < data.Response.Params.param.length; i++) {
				createHTML += '<div class="form-group col-sm-6">';
				createHTML += '<label>"'+data.Response.Params.param[i].name+'"</label>';
				createHTML += '<input class="form-control" value="'+data.Response.Params.param[i].value+'" disabled>';
				createHTML += '</div>';
			}
			
			createHTML += '</div>';
			
			$('.validationPurchase').empty();
			$('.validationPurchase').append(createHTML);
			$(window).scrollTop($('.validationPurchase').offset().top-100);
		}
	});
});