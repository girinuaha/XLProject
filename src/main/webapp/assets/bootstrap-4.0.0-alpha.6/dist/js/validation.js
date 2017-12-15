$('#serviceid').mask('000000000000');

$(document).ready(function(){
	$('html').animate({scrollTop:0}, 1);
		
	$('#check').on('click', function() {
    		
		if ($("#serviceid").val() == "") {
			document.getElementById('serviceid').focus();
			$('#invalidServiceid').show();
			
			$('#serviceid').keyup(function() {
				if($(this).val() == ''){
					$('#invalidServiceid').show();
				}else{
					$('#invalidServiceid').hide();
				}
			});
		} else {
				
			var object = {
					serviceid : $("#serviceid").val(),
					contactsource : $("#contactsource").val(),
					contacttype : $("#contacttype").val()
			}
			
			$.ajax({
				type : 'POST',
				url : '/notification/validation',
				data : object,
				dataType : 'json',
				success : function(data) {
					if(data.Response.ResponseCode == '00'){
						setFieldDetail(data)
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
			
			createHTML += '<table class="table table-bordered" id="notif-response">';
			createHTML += '<thead class="thead-light">';
			createHTML += '<tr>';
			createHTML += '<th>Contact Source</th>';
			createHTML += '<th>Contact Type</th>';
			createHTML += '<th>Value</th>';
			createHTML += '<th>Channel Type</th>';
			createHTML += '<th>Channel Attribute</th>';
			createHTML += '<th>Synch</th>';
			createHTML += '</tr>';
			createHTML += '</thead>';
			createHTML += '<tbody>';
			for (var i = 0; i < data.Response.Data.length; i++) {
				createHTML += '<tr>';
				createHTML += '<td>'+data.Response.Data[i].contactsource+'</td>';
				createHTML += '<td>'+data.Response.Data[i].contacttype+'</td>';
				createHTML += '<td>'+data.Response.Data[i].value+'</td>';
				createHTML += '<td>'+data.Response.Data[i].channeltype+'</td>';
				createHTML += '<td>'+data.Response.Data[i].channelattribute+'</td>';
				if (data.Response.Data[i].synch == 'true'){
					createHTML += '<td class="bg-success">'+data.Response.Data[i].synch+'</td>';
				} else {
					createHTML += '<td class="bg-danger">'+data.Response.Data[i].synch+'</td>';
				}
				createHTML += '</tr>';
			}
			createHTML += '</tbody>';
			createHTML += '</table>';
			createHTML += '<br><br><br>';
			
			$('.response').empty();
			$('.response').append(createHTML);
			$('#notif-response').DataTable( {
			    paging: true
			} );
			$(window).scrollTop($('.response').offset().top-100);
		}
	});
});