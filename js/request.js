
function getJSON(url, fun) {
	fetch(url)
		.then(res => res.json())
		.then((out) => fun(out))
		.catch(err => { throw err });
}