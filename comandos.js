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
comandos.sendCama = function(apiInstance,message,cb){
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
	var loliImages = [
		"https://s-media-cache-ak0.pinimg.com/564x/0c/50/d3/0c50d3623d151391d6b68292f6c64896.jpg" ,
		"http://i.imgur.com/5jVpkxp.jpg" ,
		"https://s-media-cache-ak0.pinimg.com/564x/4a/72/31/4a72312853495a942a85e2667c3d4226.jpg" ,
		"http://k18.kn3.net/taringa/6/3/3/8/6/9/6/sspawn/114.jpg" ,
		"http://st-listas.20minutos.es/images/2013-11/371837/4231711_640px.jpg" ,
		"http://k30.kn3.net/taringa/6/8/1/6/6/5/1/josephgranja/F64.jpg" ,
		"http://k39.kn3.net/45DDB65DC.jpg" ,
		"https://elrecavorfabron.files.wordpress.com/2011/12/caderas-asiaticas.jpg" ,
		"https://s-media-cache-ak0.pinimg.com/564x/fa/28/2e/fa282e9fd98a1ec7e6bdd949e40656fb.jpg" ,
		"http://k32.kn3.net/9/9/1/F/E/8/583.jpg" ,
		"http://img.ifcdn.com/images/b163b3a2c9b05f8f822414efb8ca3b131688617c46601436f3695e8850983a30_3.jpg" ,
		"https://k30.kn3.net/taringa/E/F/D/C/6/2/kungfupanda2013/E2F.jpg" ,
		"http://www.fudas.com.br/arquivos/upload/aggFudas-b7fa2e4b968beb219c6c49386c4c637a.jpg" ,
		"https://k60.kn3.net/taringa/1/9/9/7/9/7/62/a1_on/5D5.jpg" ,
		"http://k33.kn3.net/taringa/D/6/7/E/2/D/0Toni0/C28.jpg" ,
		"http://upload.inven.co.kr/upload/2013/03/25/bbs/i0612022973.jpg" ,
		"http://k30.kn3.net/taringa/C/1/7/C/0/B/Don-PitoCorto/8A3.jpg" ,
		"http://c4.likes-media.com/img/9fb8712c976ba1ae1053eed52483db83.600x.jpg"
	];

	var randomInt = parseInt(Math.random() * (loliImages.length ));
	return apiInstance.sendMessage({ url : loliImages[ randomInt ] } , message.threadID , cb);
};

comandos.sendCojo = function ( apiInstance , message , cb ) {
	return apiInstance.sendMessage("Calla cojo de mierda" , message.threadID , cb)
};