var chatApi  = require("facebook-chat-api");
var Comandos = require("./comandos");

var credentials = {
	email : "aaron_esteban6@hotmail.com" ,
	password : "11200033"
};


var comandos = {
	"@dailyloli" : Comandos.dailyLoli ,
	"@cojo" : Comandos.sendCojo ,
	"@carita" : Comandos.sendCarita ,
	"@dado" : Comandos.getDado ,
	"@cachudo" : Comandos.sendCachudo ,
	"@calla" : Comandos.sendCalla,
	"@garrita" : Comandos.sendGarrita
	//"@hernanON" : Comandos.hernanON ,
	//"@hernanOFF" : Comandos.hernanOFF
};


chatApi(credentials , function ( err , api ) {
	if ( err ) {
		console.error(err);
	} else {

		api.listen(function ( err , message ) {
			if ( err ) {
				console.log(err);
			} else {

				var messageString = message.body || null;

				if ( messageString && comandos[ messageString ] ) {
					comandos[ messageString ](api , message , function ( err , response ) {
						if ( err ) {
							console.log(err);
						} else {
						}
					});
				}

			}
		});
	}
});