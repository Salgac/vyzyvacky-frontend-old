//register funtion
function register(form) {
	data = {
		"code": form.code.value,
		"password": form.password.value,
		"password_confirmation": form.password_confirmation.value
	};
	postJSON(url + "sign_up", data, showPage);
	form.reset();
	return false;
}

//login function
function login(form) {
	data = {
		"code": form.code.value,
		"password": form.password.value
	};
	postJSON(url + "sign_in", data, showPage);
	form.reset();
	return false;
}

//"redirect" to main page
function showPage(request, response) {
	//hide login page and show main page
	var loginPage = document.getElementById('login-page');
	var mainPage = document.getElementById('main-page');

	loginPage.style.display = "none";
	mainPage.style.display = "block";

	main_init(request, response);
}

//helper function for game code format
function gameCodeHelper(a) {
	setTimeout(function () {
		if (a.value[0] != '#')
			a.value = '#' + a.value;
		a.value = a.value.toUpperCase();
	}, 1);
}