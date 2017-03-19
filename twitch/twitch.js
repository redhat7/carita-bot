var request = require("request");
var path    = require("path");
var util    = require("util");
var noop    = function () {
};

var TWITCH_GLOBAL    = require("./global_generated.json");
var TWITCH_SUSCRIBER = require("./suscriber_generated.json");

var templateURL = "https://static-cdn.jtvnw.net/emoticons/v1/%s/2.0";

exports.sendEmote = function (apiInstance , message , cb) {
	cb = cb || noop;

	var body     = message.body || "";
	var splited  = body.split(" ");
	var emote_id = null;

	splited.forEach(function (m) {
		if ( m.length < 2 || m.length > 30 ) {
			return cb();
		}

		if ( TWITCH_GLOBAL[ m ] ) {
			emote_id = TWITCH_GLOBAL[ m ];
		}

		if ( TWITCH_SUSCRIBER[ m ] ) {
			emote_id = TWITCH_SUSCRIBER[ m ];
		}
	});

	if ( !emote_id ) {
		return cb();
	}

	var URL_EMOTE = util.format(templateURL , emote_id);

	apiInstance.sendMessage({ url : URL_EMOTE } , message.threadID , function (err) {
		if ( err ) {
			console.error(err);
		}
		return cb();
	});
};