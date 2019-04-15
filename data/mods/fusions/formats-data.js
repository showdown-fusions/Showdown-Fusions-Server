'use strict';

/**@type {{[k: string]: ModdedTemplateFormatsData}} */
let BattleFormatsData = {
	gumtei: {
		randomBattleMoves: ["extremespeed", "sacredfire", "flareblitz", "uturn", "pursuit", "crunch", "stoneedge"],
		randomDoubleBattleMoves: ["extremespeed", "sacredfire", "flareblitz", "uturn", "pursuit", "crunch", "stoneedge", "protect", "earthquake"],
		eventPokemon: [
			{"generation": 3, "level": 50, "shiny": 1, "moves": ["ember", "roar", "firespin", "stomp"]},
			{"generation": 3, "level": 70, "moves": ["firespin", "stomp", "flamethrower", "swagger"], "pokeball": "pokeball"},
			{"generation": 4, "level": 40, "shiny": 1, "moves": ["roar", "firespin", "stomp", "flamethrower"]},
			{"generation": 4, "level": 30, "shiny": true, "nature": "Adamant", "moves": ["flareblitz", "howl", "extremespeed", "crushclaw"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "shiny": 1, "moves": ["stomp", "flamethrower", "swagger", "firefang"]},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["stomp", "bite", "swagger", "lavaplume"]},
			{"generation": 7, "level": 60, "isHidden": false, "moves": ["stomp", "bite", "swagger", "lavaplume"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "isHidden": false, "moves": ["sacredfire", "stoneedge", "ironhead", "flamecharge"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 2, "level": 40},
			{"generation": 3, "level": 40},
		],
		eventOnly: false,
		tier: "OU",
		doublesTier: "DOU",
	},
	stakanoirsteel: {
		randomBattleMoves: ["willowisp", "shadowsneak", "icepunch", "painsplit", "substitute", "earthquake", "focuspunch", "gyroball", "trickroom", "superpower"],
		randomDoubleBattleMoves: ["willowisp", "shadowsneak", "icepunch", "painsplit", "protect", "earthquake", "helpinghand", "trickroom", "gyroball", "superpower"],
		eventPokemon: [
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["irondefense", "ironhead", "gyroball", "autotomize"]},
		],
		eventOnly: false,
		tier: "(OU)",
		doublesTier: "(DOU)",
	},
	stakanoirrock: {
		randomBattleMoves: ["willowisp", "shadowsneak", "painsplit", "substitute", "earthquake", "focuspunch", "stoneedge", "superpower", "stealthrock"],
		randomDoubleBattleMoves: ["willowisp", "shadowsneak", "painsplit", "protect", "earthquake", "helpinghand", "trickroom", "rockslide", "stoneedge", "superpower", "stealthrock"],
		eventPokemon: [
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["stealthrock", "smackdown", "rockblast", "wideguard"]},
		],
		eventOnly: false,
		tier: "(OU)",
		doublesTier: "(DOU)",
	},
};

exports.BattleFormatsData = BattleFormatsData;
