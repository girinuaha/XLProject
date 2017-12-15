$('#partition').datepicker({
	uiLibrary: 'bootstrap4',
	format: 'yyyy-mm-dd'
});

$('#partition').change(function() {
	$('#partition').val(formatDate($('#partition').val()));
});

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('');
}

$('#msisdn').mask('0000000000000');

$(document).ready(function(){
	$('html').animate({scrollTop:0}, 1);
		
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
		} else if ($("#partition").val() == "") {
			document.getElementById('partition').focus();
			$('#invalidPartition').show();
			
			$('#partition').keyup(function() {
				if($(this).val() == ''){
					$('#invalidPartition').show();
				}else{
					$('#invalidPartition').hide();
				}
			});
		} else {
				
			var object = {
					msisdn : $("#msisdn").val(),
					partition : $("#partition").val()
			}
			
			$.ajax({
				type : 'POST',
				url : '/notification/history',
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