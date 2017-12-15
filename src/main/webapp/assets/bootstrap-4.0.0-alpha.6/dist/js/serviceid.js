$('#count').mask('000');
$('#serviceid').mask('000000000000');
$('#description').mask('00000000000000');

$(document).ready(function(){
	$('html').animate({scrollTop:0}, 1);
	  	    
	$('#baseSid').on('click', function() {
		$('.sid').show();
		$('.config').hide().find('input:text').val('');
		document.getElementById('baseSid').setAttribute("class", "btn btn-success");
		document.getElementById('baseConfig').setAttribute("class", "btn btn-primary");
	});
	  	  	
	$('#baseConfig').on('click', function() {
		$('.config').show();
		$('.sid').hide().find('input:text').val('');
		document.getElementById('baseSid').setAttribute("class", "btn btn-primary");
		document.getElementById('baseConfig').setAttribute("class", "btn btn-success");
	});
	  	  	
	$('#count').change(function(){
		var max = parseInt($(this).attr('max'));
		var min = parseInt($(this).attr('min'));
		
		if ($(this).val() > max) {
			$(this).val(max);
		} else if ($(this).val() < min) {
			$(this).val(min);
		}
	});
    	
	$('#check').on('click', function() {
    	if ($('.sid').is(":visible") && $("#serviceid").val() == "") {
    		document.getElementById('serviceid').focus();
    		$('#invalidServiceid').show();
    		
    		$('#serviceid').keyup(function() {
    			if($(this).val() == ''){
    				$('#invalidServiceid').show();
    			}else{
    				$('#invalidServiceid').hide();
    			}
    		});
    	} else if ($("#count").val() == "") {
			document.getElementById('count').focus();
			$('#invalidCount').show();
			
			$('#count').keyup(function() {
				if($(this).val() == ''){
					$('#invalidCount').show();
				}else{
					$('#invalidCount').hide();
				}
			});
		} else if ($('.config').is(":visible") && $("#productname").val() == "") {
			document.getElementById('productname').focus();
			$('#invalidProductname').show();
			
			$('#productname').keyup(function() {
				if($(this).val() == ''){
					$('#invalidProductname').show();
				}else{
					$('#invalidProductname').hide();
				}
			});
		} else if ($('.config').is(":visible") && $("#productdomain").val() == "") {
			document.getElementById('productdomain').focus();
			$('#invalidProductdomain').show();
			
			$('#productdomain').keyup(function() {
				if($(this).val() == ''){
					$('#invalidProductdomain').show();
				}else{
					$('#invalidProductdomain').hide();
				}
			});
		} else if ($('.config').is(":visible") && $("#productvariant").val() == "") {
			document.getElementById('productvariant').focus();
			$('#invalidProductvariant').show();
			
			$('#productvariant').keyup(function() {
				if($(this).val() == ''){
					$('#invalidProductvariant').show();
				}else{
					$('#invalidProductvariant').hide();
				}
			});
		} else if ($('.config').is(":visible") && $("#promotype").val() == "") {
			document.getElementById('promotype').focus();
			$('#invalidPromotype').show();
			
			$('#promotype').keyup(function() {
				if($(this).val() == ''){
					$('#invalidPromotype').show();
				}else{
					$('#invalidPromotype').hide();
				}
			});
		} else if ($('.config').is(":visible") && $("#benefittype").val() == "") {
			document.getElementById('benefittype').focus();
			$('#invalidBenefittype').show();
			
			$('#benefittype').keyup(function() {
				if($(this).val() == ''){
					$('#invalidBenefittype').show();
				}else{
					$('#invalidBenefittype').hide();
				}
			});
		} else if ($("#createdby").val() == "") {
			document.getElementById('createdby').focus();
			$('#invalidCreatedby').show();
			
			$('#createdby').keyup(function() {
				if($(this).val() == ''){
					$('#invalidCreatedby').show();
				}else{
					$('#invalidCreatedby').hide();
				}
			});
		} else if ($("#description").val() == "") {
			document.getElementById('description').focus();
			$('#invalidDescription').show();
			
			$('#description').keyup(function() {
				if($(this).val() == ''){
					$('#invalidDescription').show();
				}else{
					$('#invalidDescription').hide();
				}
			});
		} else {
				
			var object = {
					serviceid : $("#serviceid").val(),
					count : $("#count").val(),
					productname : $("#productname").val(),
					productdomain : $("#productdomain").val(),
					productvariant : $("#productvariant").val(),
					subscriptiontype : $("#subscriptiontype").val(),
					promotype : $("#promotype").val(),
					benefittype : $("#benefittype").val(),
					benefitconsumption : $("#benefitconsumption").val(),
					createdby : $("#createdby").val(),
					description : $("#description").val()
			}
			
			$.ajax({
				type : 'POST',
				url : '/product/serviceid',
				data : object,
				dataType : 'json',
				success : function(data) {
					if(data.Response.ResponseCode == '00'){
						setFieldDetail(data);	
					} else {
						var createHTML = '';
						createHTML += '<div class="alert alert-danger" role="alert">';
						createHTML += data.Response.ResponseMessage;
						createHTML += '</div>';
						 
						$('.response').empty();
						$('.response').append(createHTML);
						$(window).scrollTop($('.response').offset().top-100);
					}
				}
			});
		}
    		
		function setFieldDetail(data){
			var createHTML = '';
			createHTML += '<div class="row">';
			createHTML += '<div class="form-group col-sm-12"><br>';
			createHTML += '<label><h5>Service ID</h5></label>';
			createHTML += '</div>';
			
			for (var i = 0; i < data.Response.Data.serviceid.length; i++) {
				createHTML += '<div class="form-group col-sm-4">';
				createHTML += '<input class="form-control" value="'+data.Response.Data.serviceid[i]+'" disabled>';
				createHTML += '</div>';
			}
			
			createHTML += '</div>';
			
			$('.response').empty();
			$('.response').append(createHTML);
			$(window).scrollTop($('.response').offset().top-100);
		}
	});
});