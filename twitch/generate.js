var fs   = require("fs");
var util = require('util');


var GLOBAL_EMOTES    = require("./global.json")[ "emotes" ];
var global_generated = {};

var MAX_EMOTE_LENGTH = 0;
var MIN_EMOTE_LENGHT = 10000000;

var MAX_EMOTE = null;
var MIN_EMOTE = null;

for ( var i in GLOBAL_EMOTES ) {
	if ( GLOBAL_EMOTES.hasOwnProperty(i) ) {
		global_generated[ i ] = GLOBAL_EMOTES[ i ][ "image_id" ];

		if ( global_generated[ i ].length > MAX_EMOTE_LENGTH ) {
			MAX_EMOTE_LENGTH = global_generated[ i ].length;
			MAX_EMOTE        = global_generated[ i ]

		}

		if ( global_generated[ i ].length < MIN_EMOTE_LENGHT ) {
			MIN_EMOTE_LENGHT = global_generated[ i ].length;
			MIN_EMOTE        = global_generated[ i ]

		}
	}
}


fs.writeFile("global_generated.json" , JSON.stringify(global_generated , null , 2) , "utf-8" , function (err) {
	if ( err ) {
		console.error(err);
	}
});

var SUSCRIBER_EMOTES    = require("./subscriber.json")[ "channels" ];
var suscriber_generated = {};

for ( var j in SUSCRIBER_EMOTES ) {
	if ( SUSCRIBER_EMOTES.hasOwnProperty(j) ) {
		var channel = SUSCRIBER_EMOTES[ j ];
		var emotes  = channel[ "emotes" ];
		for ( var k in emotes ) {
			if ( emotes.hasOwnProperty(k) ) {
				suscriber_generated[ emotes[ k ][ "code" ] ] = emotes[ k ][ "image_id" ];

				if ( emotes[ k ][ "code" ].length > MAX_EMOTE_LENGTH ) {
					MAX_EMOTE_LENGTH = emotes[ k ][ "code" ].length;
					MAX_EMOTE        = emotes[ k ][ "code" ];
				}

				if ( emotes[ k ][ "code" ].length < MIN_EMOTE_LENGHT ) {
					MIN_EMOTE_LENGHT = emotes[ k ][ "code" ].length;
					MIN_EMOTE        = emotes[ k ][ "code" ];

				}
			}
		}
	}
}

fs.writeFile("suscriber_generated.json" , JSON.stringify(suscriber_generated , null , 2) , "utf-8" , function (err) {
	if ( err ) {
		console.error(err);
	}
});


console.log("Tamaño maximo de emote : " , MAX_EMOTE_LENGTH , MAX_EMOTE);
console.log("Tamaño Minimo de emote : " , MIN_EMOTE_LENGHT , MIN_EMOTE);