var chatApi  = require( "facebook-chat-api" );
var Comandos = require( "./comandos" );

var credentials = {
	email :    "aaron_esteban6@hotmail.com" ,
	password : "11200033"
};

var options = {
	pageID : "1742238002658513"
};

var comandos = {
	"@dailyloli" :   {
		handler :     Comandos.dailyLoli ,
		descripcion : "Envia una loli ;)"
	} ,
	"@cojo" :        {
		handler :     Comandos.sendCojo ,
		descripcion : "Manda a la mierda a lucho"
	} ,
	"@carita" :      {
		handler :     Comandos.sendCarita ,
		descripcion : "( ͡° ͜ʖ ͡°)"
	} ,
	"@dado" :        {
		handler :     Comandos.getDado ,
		descripcion : "Tira un dado"
	} ,
	"@cachudo" :     {
		handler :     Comandos.sendCachudo ,
		descripcion : "Caga a antonchi"
	} ,
	"@calla" :       {
		handler :     Comandos.sendCalla ,
		descripcion : "Calla al chupapinga"
	} ,
	"@garrita" :     {
		handler :     Comandos.sendGarrita ,
		descripcion : "Spamea la garrita"
	} ,
	"@amor" :        {
		handler :     Comandos.sendAmor ,
		descripcion : "Empareja maricos"
	} ,
	"@cama" :        {
		handler :     Comandos.sendCama ,
		descripcion : "Invoca al doti"
	} ,
	"@morfosis" :    {
		handler :     Comandos.sendMorfosis ,
		descripcion : "Activa tu morfosis"
	} ,
	"@morfosis:go" : {
		handler :     Comandos.sendMorfosisGo ,
		descripcion : "Activa tu morfosis"
	} ,
	"@Kappa" :       {
		handler :     Comandos.sendTwitchEmote ,
		descripcion : "Kappa"
	} ,
	"@4Head" :       {
		handler :     Comandos.sendTwitchEmote ,
		descripcion : "4Head"
	} ,
	"@Kreygasm" :    {
		handler :     Comandos.sendTwitchEmote ,
		descripcion : "Kreygasm"
	} ,
	"@PogChamp" :    {
		handler :     Comandos.sendTwitchEmote ,
		descripcion : "PogChamp"
	} ,
	"@chipi" :       {
		handler :     Comandos.sendChipi ,
		descripcion : "Te mide la vaina"
	} ,
	"@denunciado" :  {
		handler :     Comandos.sendDenunciado ,
		descripcion : "Denunciado lince"
	} ,
	"@pokemon" :     {
		handler :     Comandos.sendPokemon ,
		descripcion : "Lanza una fusion random de pokemones"
	} ,
	"@help" :        {
		handler : function( apiInstance , message , cb ) {
			var self     = comandos;
			var response = "";
			console.log( self );
			for( var property in self ) {
				if( self.hasOwnProperty( property ) ) {

					if( self[ property ][ "descripcion" ] ) {
						response += property + " : " + self[ property ][ "descripcion" ];
						response += "\n";
					}
				}
			}
			return apiInstance.sendMessage( response , message.threadID , cb );
		}
	}
};

chatApi( credentials , options , function( err , api ) {
	if( err ) {
		console.error( err );
	} else {

		api.listen( function( err , message ) {
			if( err ) {
				console.log( err );
			} else {

				var messageString = message.body || null;

				if( messageString && comandos[ messageString ] ) {
					comandos[ messageString ].handler( api , message , function( err , response ) {
						if( err ) {
							console.log( err );
						} else {

						}
					} );
				}

			}
		} );
	}
} );