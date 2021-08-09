let url = 'http://139.162.130.177:3000/v1/'
let url_local = 'http://localhost:3000/v1/'

function getJSON(url, fun) {
	fetch(url, {
		method: "GET",
		headers: { "Authorization": "eyJhbGciOiJIUzI1NiJ9.eyJnYW1lX2lkIjo1LCJleHAiOjE2Mjg1MDgxNjZ9.fOy79VjBOGDKhKECXnTBRA2Y8qdW3jcukm97Zgb9hLU" }
	})
		.then(res => res.json())
		.then((out) => fun(out))
		.catch(err => { throw err });
}

function postJSON(url, data, fun) {
	fetch(url, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data)
	})
		.then(res => res.json())
		.then((out) => fun(data, out))
		.catch(err => { throw err });
}