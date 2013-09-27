/*

############## API ##############

codepen.api.signup(user_object)
	description: to sign up a new user
	parameters: user object, which contains properties: name, email, username, password
	returns: response object

codepen.login(user_object)
	description: to login an existing user
	parameters: user object, which contains properties: username, password
	returns: response object


Reponse Objects:

{
	success: true/false,
	error: (string)
}


##users already signed up (can log in)
	('suzy', 'I@msoawesome')
	('conan', 'gingertastic')
	('jerry', '@#!$%@')

*/


$('document').ready(function() {

	$('nav a:nth-child(1)').click(function(){
		if(!$(this).hasClass('active')) {
			$('.signup-form').css('display', 'none'); 
			$('nav a:nth-child(2)').removeClass('active'); 
			$('.login-form').css('display', 'block');
			$(this).addClass('active'); 
		}
	});
	
	$('nav a:nth-child(2)').click(function() {
		if(!$(this).hasClass('active')) {
			$('.signup-form').css('display', 'block');
			$('nav a:nth-child(1)').removeClass('active');  
			$('.login-form').css('display', 'none'); 
			$(this).addClass('active');
		}
	});

	$('.login-form button').on('click', function(){
		var loginUser= {
			username: '',
			password: ''
		}, 
			password,
			username, 
			response; 

		username=$('#login-email-field').val(); 
		password=$('#login-password-field').val(); 

		loginUser['username']= username;
		loginUser['password']= password; 

		response= codepen.api.login(loginUser); 

		if(!response.success) {
			$(".error-message").html(response.error);
		};
	});

	$('.signup-form button').on('click', function(){
		var signupUser= {
			name: '', 
			email:'', 
			username:'', 
			password:''
		},
			password, 
			username, 
			email, 
			name, 
			response; 

		username=$('#signup-username-field').val();
		password=$('#signup-password-field').val();
		email=$('#signup-email-field').val();
		name=$ ('#signup-name-field').val();

		signupUser['username']=username;
		signupUser['password']=password;
		signupUser['email']=email; 
		signupUser['name']=name;
		
		response=codepen.api.signup(signupUser);

		if(!response.success) {
			$(".error-message").html(response.error);
		};


	});




});







