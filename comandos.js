var fs      = require("fs");
var request = require("request");
var stream  = require('stream');

var comandos = {};

module.exports = comandos;


comandos.sendCama = function (apiInstance , message , cb) {
	return apiInstance.sendMessage("La cama se enfria mayguiz..." , message.threadID , cb);
};

comandos.sendAmor = function (apiInstance , message , cb) {
	apiInstance.getThreadInfo(message.threadID , function (error , threadInfo) {
		var response     = null;
		var participants = [];
		if ( threadInfo.nicknames ) {
			participants = Object.keys(threadInfo.nicknames);
		}

		if ( participants.length > 0 ) {
			var user1_id = participants[ parseInt(Math.random() * participants.length) ];
			var user2_id = participants[ parseInt(Math.random() * participants.length) ];
			user1_id     = threadInfo.nicknames[ user1_id ];
			user2_id     = threadInfo.nicknames[ user2_id ];

			if ( user1_id == user2_id ) {

				response = user1_id + " nadie te ama we .. FOREVERALONE";
			} else {
				response = user1_id + " y " + user2_id + " se aman en secreto";
			}

			return apiInstance.sendMessage(response , message.threadID , cb);
		} else {
			return cb(null , null);
		}
	});
};

comandos.sendGarrita = function (apiInstance , message , cb) {
	var garritaId = "144884792352454";
	var response  = "Has activado el comando garrita , spameen la garrita!!";
	return apiInstance.sendMessage({ body : response , sticker : garritaId } , message.threadID , cb);
};

comandos.getDado = function (apiInstance , message , cb) {
	var randomInt = Math.floor(Math.random() * 6 + 1);
	var senderId  = message.senderID;

	apiInstance.getUserInfo(senderId , function (err , user) {
		if ( !err && user[ senderId ] ) {
			var response = user[ senderId ].firstName + " : " + randomInt;
			return apiInstance.sendMessage(response , message.threadID , cb);
		}
	});
};

comandos.sendCarita = function (apiInstance , message , cb) {
	return apiInstance.sendMessage("( ͡° ͜ʖ ͡°)" , message.threadID , cb);
};

comandos.dailyLoli = function (apiInstance , message , cb) {

	var directory = __dirname + "/lolis/";

	fs.readdir(directory , function (err , images) {
		if ( images.length > 0 ) {
			var randomInt = parseInt(Math.random() * (images.length));
			var file      = directory + images[ randomInt ];
			return apiInstance.sendMessage({ attachment : fs.createReadStream(file) } , message.threadID , cb);
		} else {
			return apiInstance.sendMessage({ body : "No hay lolis :'(" } , message.threadID , cb);
		}
	});

};

comandos.sendMorfosisGo = function (apiInstance , message , cb) {
	var directory = __dirname + "/morfosis/";
	var file      = directory + "start.jpg";
	return apiInstance.sendMessage({ attachment : fs.createReadStream(file) } , message.threadID , cb);

};

comandos.sendMorfosis = function (apiInstance , message , cb) {
	var directory = __dirname + "/morfosis/";
	var idUser    = message.senderID;
	var file      = directory + idUser + ".jpg";
	fs.exists(file , function (exists) {
		if ( !exists ) {
			return apiInstance.sendMessage("Proximamente jejeje" , message.threadID , cb)
		} else {
			return apiInstance.sendMessage({ attachment : fs.createReadStream(file) } , message.threadID , cb);
		}
	});
};

/*comandos.sendTwitchEmote = function (apiInstance , message , cb) {
	var directory = __dirname + "/twitch/";
	var emote     = message.body || null;
	var emotes    = {
		"@Kappa"    : directory + "Kappa.jpg" ,
		"@4Head"    : directory + "4Head.jpg" ,
		"@PogChamp" : directory + "PogChamp.jpg" ,
		"@Kreygasm" : directory + "Kreygasm.jpg"
	};

	if ( emote && emotes[ emote ] ) {
		return apiInstance.sendMessage({ attachment : fs.createReadStream(emotes[ emote ]) } , message.threadID , cb);
	} else {
		return cb(null , null);
	}
};


comandos.sendChipi = function (apiInstance , message , cb) {
	var medida   = parseInt(Math.random() * (50) + 1);
	var senderId = message.senderID;
	apiInstance.getUserInfo(senderId , function (err , user) {
		if ( !err && user[ senderId ] ) {
			var response = user[ senderId ].firstName + " : Tu vaina mide " + medida + " cms";
			return apiInstance.sendMessage(response , message.threadID , cb);
		}
	});
};
*/
comandos.sendDenunciado = function (apiInstance , message , cb) {

	var directory = __dirname + "/denunciado/";

	fs.readdir(directory , function (err , images) {
		if ( images.length > 0 ) {
			var randomInt = parseInt(Math.random() * (images.length));
			var file      = directory + images[ randomInt ];
			return apiInstance.sendMessage({ attachment : fs.createReadStream(file) } , message.threadID , cb);
		} else {
			return apiInstance.sendMessage({ body : "No hay denunciadas :'(" } , message.threadID , cb);
		}
	});
};

comandos.sendPokemon = function (apiInstance , message , cb) {

	var URL_BASE = "http://images.alexonsager.net/pokemon/fused/";
	var pokemon1 = Math.floor(Math.random() * 151 + 1);
	var pokemon2 = Math.floor(Math.random() * 151 + 1);

	var randomURL = URL_BASE + pokemon1 + "/" + pokemon1 + "." + pokemon2 + ".png";
	var tempPath  = __dirname + "/temp/tempPokemon.png";

	//Nota : solucion chancha , necesita 1 archivo temporal , quizas se pueda mejorar usando stream , pero falta mas investigacion.
	request({ uri : randomURL , encoding : null } , function (err , response , body) {
		fs.writeFile(tempPath , body.toString("binary") , "binary" , function (err) {
			if ( err ) {
				apiInstance.sendMessage({ body : "Error , kek" } , message.threadID , cb);
			} else {
				apiInstance.sendMessage({ attachment : fs.createReadStream(tempPath) } , message.threadID , cb);
			}
		})
	});
};

comandos.switchHernan = function (on) {
	var id = '100002355213148';
	return function (apiInstance , message , cb) {
		if ( on ) {
			apiInstance.addUserToGroup(id , message.threadID , function (err) {
				if ( err ) {
					console.error(err);
				}
				return cb(null , null);
			});
		} else {
			apiInstance.removeUserFromGroup(id , message.threadID , function (err) {
				if ( err ) {
					console.error(err);
				}
				return cb(null , null);
			});
		}
	}
};


var sacrificioInProcess = false;
var idSacrificado       = null;

comandos.sacrificar = function (apiInstance , message , cb) {
	if ( message.threadID ) {
		apiInstance.getThreadInfo(message.threadID , function (error , threadInfo) {
			var participants = threadInfo.participantIDs || [];
			if ( !error ) {
				if ( participants && participants.length > 1 ) {
					var id               = participants[ parseInt(Math.random() * participants.length) ];
					var participant_name = "";
					idSacrificado        = id;
					if ( threadInfo.nicknames ) {
						participant_name = threadInfo.nicknames[ id ] || null;
					}

					if ( sacrificioInProcess ) {
						apiInstance.sendMessage("Ya hay un sacrifico en proceso..." , message.threadID , cb);
					} else {
						apiInstance.sendMessage("Que empiece el juego.." + participant_name , message.threadID , function () {
						});

						sacrificioInProcess = true;
						var countdown       = 10;
						var interval        = setInterval(function () {
							countdown--;
							if ( sacrificioInProcess ) {
								if ( countdown == 0 ) {
									sacrificioInProcess = false;
									clearInterval(interval);

									apiInstance.removeUserFromGroup(id , message.threadID , function (err) {
										if ( err ) {
											console.error(err);
										}
									});

								} else {
									apiInstance.sendMessage(countdown + "..." , message.threadID , cb);
								}
							} else {

								clearInterval(interval);
							}
						} , 2500);

					}
				}
			}
		});
	}
};

comandos.salvalo = function (apiInstance , message , cb) {
	if ( sacrificioInProcess ) {
		if ( idSacrificado != message.senderID ) {
			sacrificioInProcess = false;
			apiInstance.sendMessage("Salvado" , message.threadID , cb);
		}
	} else {
		cb(null , null);
	}
};

comandos.resucitar = function (apiInstance , message , cb) {
	if ( idSacrificado ) {
		apiInstance.addUserToGroup(idSacrificado , message.threadID , function (err) {
			if ( err ) {
				console.error(err);
			}
		});
	}
};

comandos.lunita = function (apiInstance , message , cb) {

	var directory = __dirname + "/lunita/";

	fs.readdir(directory , function (err , images) {
		if ( images.length > 0 ) {
			var randomInt = parseInt(Math.random() * (images.length));
			var file      = directory + images[ randomInt ];
			return apiInstance.sendMessage({ attachment : fs.createReadStream(file) } , message.threadID , cb);
		} else {
			return apiInstance.sendMessage({ body : "Antonchi  :'(" } , message.threadID , cb);
		}
	});

};
