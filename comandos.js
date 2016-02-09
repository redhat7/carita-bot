var fs = require("fs");

var comandos = {};

module.exports = comandos;

/*
 comandos.hernanOFF = function ( apiInstance , message , cb ) {
 var hernanId = "1528669780781079";
 console.log("Entro a hernan off");
 return apiInstance.removeUserFromGroup(hernanId , message.threadID , cb);
 };

 comandos.hernanON = function ( apiInstance , message , cb ) {
 var hernanId = "1528669780781079";
 console.log("Entro a hernan ON");
 return apiInstance.addUserToGroup(hernanId , message.threadID , cb);
 };
 */
comandos.sendCama = function ( apiInstance , message , cb ) {
	return apiInstance.sendMessage("La cama se enfria mayguiz..." , message.threadID , cb);
};

comandos.sendAmor    = function ( apiInstance , message , cb ) {
	var participants = message.participantNames;
	var user_1       = participants[ parseInt(Math.random() * participants.length) ];
	var user_2       = participants[ parseInt(Math.random() * participants.length) ];
	var response     = null;
	if ( user_1 == user_2 ) {
		response = user_1 + " y " + user_2 + " se aman en secreto .. FOREVERALONE";
	} else {
		response = user_1 + " y " + user_2 + " se aman en secreto";
	}

	return apiInstance.sendMessage(response , message.threadID , cb);
}
comandos.sendGarrita = function ( apiInstance , message , cb ) {
	var garritaId = "144884792352454";
	var response  = "Has activado el comando garrita , spameen la garrita perras";
	return apiInstance.sendMessage({ body : response , sticker : garritaId } , message.threadID , cb);
};

comandos.getDado = function ( apiInstance , message , cb ) {
	var randomInt = Math.floor(Math.random() * 6 + 1);
	var response  = message.senderName + " : " + randomInt;

	return apiInstance.sendMessage(response , message.threadID , cb);
};

comandos.sendCalla = function ( apiInstance , message , cb ) {
	return apiInstance.sendMessage("Calla chupapinga" , message.threadID , cb);
};

comandos.sendCachudo = function ( apiInstance , message , cb ) {
	return apiInstance.sendMessage("Calla cachudo" , message.threadID , cb);
};

comandos.sendCarita = function ( apiInstance , message , cb ) {
	return apiInstance.sendMessage("( ͡° ͜ʖ ͡°)" , message.threadID , cb);
};

comandos.dailyLoli = function ( apiInstance , message , cb ) {

	var directory = __dirname + "/lolis/";

	fs.readdir(directory , function ( err , images ) {
		if ( images.length > 0 ) {
			var randomInt = parseInt(Math.random() * (images.length));
			var file      = directory + images[ randomInt ];
			return apiInstance.sendMessage({ attachment : fs.createReadStream(file) } , message.threadID , cb);
		} else {
			return apiInstance.sendMessage({ body : "No hay lolis :'(" } , message.threadID , cb);
		}
	});

};

comandos.sendCojo = function ( apiInstance , message , cb ) {
	return apiInstance.sendMessage("Calla cojo de mierda" , message.threadID , cb)
};

comandos.sendMorfosis = function(apiInstance,message,cb){
	return apiInstance.sendMessage("Proximamente jejeje" , message.threadID , cb)
};