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
	stakanoirstl: {
		num: -2001,
		species: "Stakanoir-Stl",
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
		otherFormes: ["stakanoirrck"],
		tier:"OU",
        isNonstandard:"Fusions"
	},
	stakanoirrck: {
		num: -2001,
		species: "Stakanoir-Rck",
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
		otherFormes: ["stakanoirstl"],
		tier:"OU",
        isNonstandard:"Fusions"
	},
	eeveowth: {
		num: -2002,
		species: "Eeveowth",
		baseSpecies: "Eeveowth",
		types: ["Normal"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 48, atk: 50, def: 43, spa: 43, spd: 53, spe: 73},
		abilities: {0: "Adaptability", 1: "Technician", H: "Unnerve"},
		heightm: 0.35,
		weightkg: 5.35,
		color: "White",
		evos: ["espersian"],
		eggGroups: ["Field"],
		tier:"LC",
        isNonstandard:"Fusions"
	},
	eeveowthalola: {
		num: -2002,
		species: "Eeveowth-Alola",
		baseSpecies: "Eeveowth",
		forme: "Alola",
		types: ["Normal", "Dark"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 48, atk: 45, def: 43, spa: 48, spd: 53, spe: 73},
		abilities: {0: "Adaptability", 1: "Technician", H: "Rattled"},
		heightm: 0.35,
		weightkg: 5.35,
		color: "Grey",
		evos: ["espersianalola"],
		eggGroups: ["Field"],
		tier:"LC",
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
		prevo: "eeveowth",
		evoType: "levelFriendship",
		evoCondition: "during the day",
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
		prevo: "eeveowthalola",
		evoType: "levelFriendship",
		evoCondition: "during the day",
		eggGroups: ["Field"],
		tier:"OU",
        isNonstandard:"Fusions"
	},
	dianlordrckdrk: {
		num: -2004,
		species: "Dianlord-RckDrk",
		baseSpecies: "Dianlord",
		forme: "RockDark",
		types: ["Rock", "Dark"],
		gender: "N",
		baseStats: {hp: 137, atk: 101, def: 102, spa: 99, spd: 102, spe: 47},
		abilities: {0: "Beast Boost", 1: "Clear Body"},
		heightm: 3.1,
		weightkg: 448.4,
		color: "Pink",
		eggGroups: ["Undiscovered"],
		otherFormes: ["dianlordfrydrg", "dianlordfrydrk", "dianlordrckdrg"],
		tier:"OU",
        isNonstandard:"Fusions"
	},
	dianlordrckdrg: {
		num: -2004,
		species: "Dianlord-RckDrg",
		baseSpecies: "Dianlord",
		forme: "RockDragon",
		types: ["Rock", "Dragon"],
		gender: "N",
		baseStats: {hp: 137, atk: 101, def: 102, spa: 99, spd: 102, spe: 47},
		abilities: {0: "Beast Boost", 1: "Clear Body"},
		heightm: 3.1,
		weightkg: 448.4,
		color: "Pink",
		eggGroups: ["Undiscovered"],
		otherFormes: ["dianlordfrydrg", "dianlordfrydrk", "dianlordrckdrk"],
		tier:"OU",
        isNonstandard:"Fusions"
	},
	dianlordfrydrk: {
		num: -2004,
		species: "Dianlord-FryDrk",
		baseSpecies: "Dianlord",
		forme: "FairyDark",
		types: ["Fairy", "Dark"],
		gender: "N",
		baseStats: {hp: 137, atk: 101, def: 102, spa: 99, spd: 102, spe: 47},
		abilities: {0: "Beast Boost", 1: "Clear Body"},
		heightm: 3.1,
		weightkg: 448.4,
		color: "Pink",
		eggGroups: ["Undiscovered"],
		otherFormes: ["dianlordfrydrg", "dianlordrckdrg", "dianlordrckdrk"],
		tier:"OU",
        isNonstandard:"Fusions"
	},
	dianlordfrydrg: {
		num: -2004,
		species: "Dianlord-FryDrg",
		baseSpecies: "Dianlord",
		forme: "FairyDragon",
		types: ["Fairy", "Dragon"],
		gender: "N",
		baseStats: {hp: 137, atk: 101, def: 102, spa: 99, spd: 102, spe: 47},
		abilities: {0: "Beast Boost", 1: "Clear Body"},
		heightm: 3.1,
		weightkg: 448.4,
		color: "Pink",
		eggGroups: ["Undiscovered"],
		otherFormes: ["dianlordrckdrg", "dianlordfrydrk", "dianlordrckdrk"],
		tier:"OU",
        isNonstandard:"Fusions"
	},
};

exports.BattlePokedex = BattlePokedex;
