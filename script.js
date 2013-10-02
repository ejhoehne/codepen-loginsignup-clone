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

	 	codepen.api.login.user = {
		username : null,
		password : null,
		setLogin : function(uname, upass) {
			this.username = uname;
			this.password = upass;
		},
		is_logged_in : function() {
			if (!response.success) {
				alert("You are not logged in. Please try again.");
			};
		}
	}

	$('.login-form button').on('click',function(){
		var password,
			username, 
			response; 

		username=$('#login-email-field').val(); 
		password=$('#login-password-field').val(); 
 
		var myUser = codepen.api.login.user;
		myUser.setLogin(username, password);

		response= codepen.api.login(myUser); 

		if(!response.success) {
			$(".error-message").html(response.error);
		};
		return false; 
	});

	codepen.api.signup.user = {
		username : null,
		password : null,
		email : null, 
		name : null,
		setSignup : function(uname, upass, uemail, ufullname) {
			this.username = uname;
			this.password = upass;
			this.email = uemail; 
			this.name = ufullname;
		}, 
		is_logged_in : function() {
			if (!response.success) {
				alert("You are not logged in. Please try again.");
			};
		}
	}

	$('.signup-form button').on('click',function(){
		var username, 
			password, 
			email, 
			name, 
			response; 
  
		username=$('#signup-username-field').val();
		password=$('#signup-password-field').val();
		email=$('#signup-email-field').val();
		name=$ ('#signup-name-field').val();


		var myUser = codepen.user;
		myUser.setSignup(username, password, email, name);
		
		response=codepen.api.signup(myUser);

		if(!response.success) {
			$(".error-message").html(response.error);

		};
		return false; 

	});

	console.log("Yes!");

	codepen.objects.NewUser= codepen.user;
	codepen.objects.NewUser.


});







