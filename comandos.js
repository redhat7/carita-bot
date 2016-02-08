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
		"http://k30.kn3.net/taringa/6/8/1/6/6/5/1/josephgranja/F64.jpg" ,
		"http://k39.kn3.net/45DDB65DC.jpg" ,
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

	var randomInt = Math.floor(Math.random() * (loliImages.length ));
	return apiInstance.sendMessage({ url : loliImages[ randomInt ] } , message.threadID , cb);
};

comandos.sendCojo = function ( apiInstance , message , cb ) {
	return apiInstance.sendMessage("Calla cojo de mierda" , message.threadID , cb)
};