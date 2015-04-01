$(function(){
	validateUser();
});

function validateUser(){
$('#validateUser').on('click', function () {
	var userName = $('#userName').val(),
		password = md5($('#password').val()),
		message = document.getElementById('loginMsg');	
		var $btn = $(this).button('loading');
		
	// business logic...
	$.post("validateUser", { 
			userName: userName,
			password: password,
			_csrf:$('#_csrf').val()
		}, function(response) {
			if(response.success){
				message.innerHTML='Success!';
				window.location.replace(response.redirect);
			}
			else{
				message.innerHTML=response.error;
				$btn.button('reset')
			}
		},"json");
  })
}