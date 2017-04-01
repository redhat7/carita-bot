var Comandos = require("./comandos");

var list = {
	"lolis"	     :{
		handler     : Comandos.dailyLoli ,
		descripcion : "envia la loli papu"
	} ,	
	
	"carita"    : {
		handler     : Comandos.sendCarita ,
		descripcion : "( ͡° ͜ʖ ͡°)"
	} ,
	"@dado"      : {
		handler     : Comandos.getDado ,
		descripcion : "Tira un dado"
	} ,
	"lunita"   : {
		handler     : Comandos.lunita ,
		descripcion : "Lunita is back!!!"
	} ,
	"@garrita"   : {
		handler     : Comandos.sendGarrita ,
		descripcion : "Spamea la garrita"
	} ,
	"@amor"        : {
		handler     : Comandos.sendAmor ,
		descripcion : "The love is in the air"
	} ,
	"cama"        : {
		handler     : Comandos.sendCama ,
		descripcion : "Invoca al doti"
	} ,
	"morfosis"    : {
		handler     : Comandos.sendMorfosis ,
		descripcion : "Activa tu morfosis"
	} ,
	"@morfosis:go" : {
		handler     : Comandos.sendMorfosisGo ,
		descripcion : "Activa tu morfosis"
	} ,
	"hernanOff"   :{
		handler	    : Comandos.switchHernan(false),
		descripcion : "Kickea al gil ese"
	},
	"denunciado"  : {
		handler     : Comandos.sendDenunciado ,
		descripcion : "Denunciado lince"
	} ,
	"pokemon"     : {
		handler     : Comandos.sendPokemon ,
		descripcion : "Lanza una fusion random de pokemones"
	} ,
	"@salvalo"     : {
		handler     : Comandos.salvalo ,
		descripcion : "Salva al we"
	} ,
	"@resucitar"   : {
		handler     : Comandos.resucitar ,
		descripcion : "Regresa al we"
	} ,
	"@@help"        : {
		handler : function (apiInstance , message , cb) {
			var self     = list;
			var response = "";
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
};

module.exports = list;
