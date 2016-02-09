var chatApi  = require("facebook-chat-api");
var Comandos = require("./comandos");

var credentials = {
	email : "aaron_esteban6@hotmail.com" ,
	password : "11200033"
};


var comandos = {
	"@dailyloli" : {
		handler : Comandos.dailyLoli ,
		descripcion : "Envia una loli ;)"
	} ,
	"@cojo" : {
		handler : Comandos.sendCojo ,
		descripcion : "Manda a la mierda a lucho"
	} ,
	"@carita" : {
		handler : Comandos.sendCarita ,
		descripcion : "( ͡° ͜ʖ ͡°)"
	} ,
	"@dado" : {
		handler : Comandos.getDado ,
		descripcion : "Tira un dado"
	} ,
	"@cachudo" : {
		handler : Comandos.sendCachudo ,
		descripcion : "Caga a antonchi"
	} ,
	"@calla" : {
		handler : Comandos.sendCalla ,
		descripcion : "Calla al chupapinga"
	} ,
	"@garrita" : {
		handler : Comandos.sendGarrita ,
		descripcion : "Spamea la garrita"
	} ,
	"@amor" : {
		handler : Comandos.sendAmor ,
		descripcion : "Empareja maricos"
	} ,
	"@cama" : {
		handler : Comandos.sendCama ,
		descripcion : "Invoca al doti"
	} ,
	"@morfosis" : {
		handler : Comandos.sendMorfosis ,
		descripcion : "Activa tu morfosis"
	} ,
	"@help" : {
		handler : function ( apiInstance , message , cb ) {
			var self     = comandos;
			var response = "";
			console.log(self);
			for ( var property in self ) {
				if ( self.hasOwnProperty(property) ) {

					if ( self[ property ][ "descripcion" ] ) {
						response += property + " : " + self[ property ][ "descripcion" ];
						response += "\n";
					}
				}
			}
			return apiInstance.sendMessage(response , message.threadID , cb);
		}
	}
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
					comandos[ messageString ].handler(api , message , function ( err , response ) {
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