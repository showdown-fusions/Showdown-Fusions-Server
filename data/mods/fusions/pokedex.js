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
		baseSpecies: "Stakanoir",
		forme: "Steel",
		types: ["Ghost", "Steel"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 53, atk: 116, def: 173, spa: 59, spd: 118, spe: 29},
		abilities: {0: "Beast Boost", 1: "Pressure", H: "Frisk"},
		heightm: 3.85,
		weightkg: 463.3,
		color: "Grey",
		eggGroups: ["Amorphous"],
		otherFormes: ["stakanoirrock"],
		tier:"OU",
        isNonstandard:"Fusions"
	},
	stakanoirrock: {
		num: -2001,
		species: "Stakanoir-Rock",
		baseSpecies: "Stakanoir",
		forme: "Rock",
		types: ["Ghost", "Rock"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 53, atk: 116, def: 173, spa: 59, spd: 118, spe: 29},
		abilities: {0: "Beast Boost", 1: "Pressure", H: "Frisk"},
		heightm: 3.85,
		weightkg: 463.3,
		color: "Grey",
		eggGroups: ["Amorphous"],
		otherFormes: ["stakanoirsteel"],
		tier:"OU",
        isNonstandard:"Fusions"
	},
	espersian: {
		num: -2003,
		species: "Espersian",
		baseSpecies: "Espersian",
		types: ["Psychic", "Normal"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 65, atk: 68, def: 60, spa: 98, spd: 80, spe: 113},
		abilities: {0: "Limber", 1: "Technician", H: "Magic Bounce"},
		heightm: 0.95,
		weightkg: 29.25,
		color: "Purple",
		eggGroups: ["Field"],
		tier:"OU",
        isNonstandard:"Fusions"
	},
	espersianalola: {
		num: -2003,
		species: "Espersian-Alola",
		baseSpecies: "Espersian",
		forme: "Alola",
		types: ["Psychic", "Dark"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 65, atk: 63, def: 60, spa: 103, spd: 80, spe: 113},
		abilities: {0: "Fur Coat", 1: "Technician", H: "Magic Bounce"},
		heightm: 1,
		weightkg: 29.75,
		color: "Purple",
		eggGroups: ["Field"],
		tier:"OU",
        isNonstandard:"Fusions"
	},
};

exports.BattlePokedex = BattlePokedex;
