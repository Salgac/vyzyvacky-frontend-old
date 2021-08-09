function main_init(request, response) {
	var gameCode = response.game_code
	var authToken = response.auth_token

	document.getElementById("title").innerHTML = gameCode

	//generate QR code 
	var qr = new QRCode("qrcode", {
		width: 220,
		height: 220,
		colorDark: '#000000',
		colorLight: '#ffffff',
		correctionLevel: QRCode.CorrectLevel.H,
	});
	var loginObject = {
		"code": gameCode,
		"password": request.password
	}
	qr.makeCode(JSON.stringify(loginObject))

}