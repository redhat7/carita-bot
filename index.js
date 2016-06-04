var chatApi      = require("facebook-chat-api");
var listComandos = require("./list");

var credentials = {
	email : process.env.EMAIL ,
	password : process.env.PASS
};


chatApi(credentials , { forceLogin : true } , function (err , api) {
	if ( err ) {
		throw err;
	} else {

		api.listen(function (err , message) {
				if ( err ) {
					throw err;
				} else {
					var messageString = message.body || null;
					if ( messageString && listComandos[ messageString ] ) {
						listComandos[ messageString ].handler(api , message , function (err , response) {
							if ( err ) {
								throw err;
							} else {

							}
						});
					}
				}
			}
		);
	}
});
