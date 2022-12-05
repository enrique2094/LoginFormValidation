function validate() {
	let username = document.getElementById('username').value;
	let password = document.getElementById('password').value;

	if (username === 'enrique2094' && password === 'development') {
		alert('Login successfuly!');
	} else {
		alert('Login failed');
	}
}
