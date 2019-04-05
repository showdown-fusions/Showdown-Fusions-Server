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
};

exports.BattlePokedex = BattlePokedex;
