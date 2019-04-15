'use strict';

/**@type {{[k: string]: ModdedTemplateData}} */
let BattlePokedex = {
	gumtei: {
		num: -2000,
		species: "Gumtei",
		types: ["Normal", "Fire"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 102, atk: 113, def: 73, spa: 73, spd: 68, spe: 73},
		abilities: {0: "Adaptability", 1: "Stakeout", H: "Strong Jaw"},
		heightm: 1.4,
		weightkg: 106.1,
		color: "Red",
		eggGroups: ["Field"],
		tier:"OU",
        isNonstandard:"Fusions"
	},
	stakanoirsteel: {
		num: -2001,
		species: "Stakanoir-Steel",
		types: ["Ghost", "Steel"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 53, atk: 116, def: 173, spa: 59, spd: 118, spe: 29},
		abilities: {0: "Beast Boost", 1: "Pressure", H: "Frisk"},
		heightm: 3.85,
		weightkg: 463.3,
		color: "Grey",
		eggGroups: ["Amorphous"],
		tier:"OU",
        isNonstandard:"Fusions"
	},
	stakanoirrock: {
		num: -2001,
		species: "Stakanoir-Rock",
		types: ["Ghost", "Rock"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 53, atk: 116, def: 173, spa: 59, spd: 118, spe: 29},
		abilities: {0: "Beast Boost", 1: "Pressure", H: "Frisk"},
		heightm: 3.85,
		weightkg: 463.3,
		color: "Grey",
		eggGroups: ["Amorphous"],
		tier:"OU",
        isNonstandard:"Fusions"
	},
};

exports.BattlePokedex = BattlePokedex;
