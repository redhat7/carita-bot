var Comandos = require("./comandos");

var list = {
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
	"@morfosis:go" : {
		handler : Comandos.sendMorfosisGo ,
		descripcion : "Activa tu morfosis"
	} ,
	"@Kappa" : {
		handler : Comandos.sendTwitchEmote ,
		descripcion : "Kappa"
	} ,
	"@4Head" : {
		handler : Comandos.sendTwitchEmote ,
		descripcion : "4Head"
	} ,
	"@Kreygasm" : {
		handler : Comandos.sendTwitchEmote ,
		descripcion : "Kreygasm"
	} ,
	"@PogChamp" : {
		handler : Comandos.sendTwitchEmote ,
		descripcion : "PogChamp"
	} ,
	"@chipi" : {
		handler : Comandos.sendChipi ,
		descripcion : "Te mide la vaina"
	} ,
	"@denunciado" : {
		handler : Comandos.sendDenunciado ,
		descripcion : "Denunciado lince"
	} ,
	"@pokemon" : {
		handler : Comandos.sendPokemon ,
		descripcion : "Lanza una fusion random de pokemones"
	} ,
	/*
	 "@hernanOn" : {
	 handler : Comandos.switchHernan(true) ,
	 descripcion : "Enciende subnormales"
	 } ,
	 "@hernanOff" : {
	 handler : Comandos.switchHernan(false) ,
	 descripcion : "Apaga subnormales"
	 } ,
	 */
	"@sacrificio" : {
		handler : Comandos.sacrificar ,
		descripcion : "Sacrifica un marico para invocar otra vaina"
	} ,
	"@salvalo" : {
		handler : Comandos.salvalo ,
		descripcion : "Salva al we"
	} ,
	"@resucitar" : {
		handler : Comandos.resucitar ,
		descripcion : "Regresa al we"
	} ,
	"@help" : {
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