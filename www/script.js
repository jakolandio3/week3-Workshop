$(document).ready(function () {
	console.log('Page Loaded');
	$('#loginform').submit(function (event) {
		event.preventDefault();
		ajaxPost();
	});

	function ajaxPost() {
		const formdata = {
			email: $('#email').val(),
			upwd: $('#upwd').val(),
		};
		$.ajax({
			type: 'POST',
			contentType: 'application/json',
			url: 'login',
			data: JSON.stringify(formdata),
			dataType: 'json',
			success: function (results) {
				console.log(results);
				if (results.valid == 'true') {
					$('#loginform').removeClass('fail');
					$('#loginform').addClass('success');
					$('#errormsg').removeClass('showmessage');
					$('#errormsg').addClass('hidemessage');
					$('#links').removeClass('hidemessage');
					$('#links').addClass('showmessage');
				} else {
					$('#loginform').removeClass('success');
					$('#loginform').addClass('fail');
					$('#errormsg').removeClass('hidemessage');
					$('#errormsg').addClass('showmessage');
					$('#links').removeClass('showmessage');
					$('#links').addClass('hidemessage');
				}
			},
			error: function (e) {
				alert('error!');
				console.log('object,', e);
			},
		});
		resetData();
	}
	function resetData() {
		$('#email').val('');
		$('#upwd').val('');
	}
});
