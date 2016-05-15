var Types = {
	/* "Normal","Fire","Water","Electric","Grass","Ice","Fighting","Poison","Ground","Flying","Psychic","Bug","Rock","Ghost","Dragon","Dark","Steel","Fairy"
	Name: {
		Strong: [],
		Weak: [],
		Immune: []
	},
	*/
	Normal: {
		Strong: [false],
		Weak: ["Rock","Steel"],
		Immune: ["Ghost"]
	},
	Fire: {
		Strong: ["Grass","Ice","Bug","Steel"],
		Weak: ["Fire","Water","Rock","Dragon"],
		Immune: [false]
	},
	Water: {
		Strong: ["Fire","Ground","Rock"],
		Weak: ["Water","Grass","Dragon"],
		Immune: [false]
	},
	Electric: {
		Strong: ["Water","Flying"],
		Weak: ["Electric","Grass","Dragon"],
		Immune: ["Ground"]
	},
	Grass: {
		Strong: ["Water","Ground","Rock"],
		Weak: ["Fire","Grass","Poison","Fire","Bug","Dragon","Steel"],
		Immune: [false]
	},
	Ice: {
		Strong: ["Grass","Ground","FLying","Dragon"],
		Weak: ["Fire","Water","Ice","Steel"],
		Immune: [false]
	},
	Fighting: {
		Strong: ["Normal","Ice","Rock","Dark","Steel"],
		Weak: ["Poison","Flying","Psychic","Bug","Fairy"],
		Immune: ["Ghost"]
	},
	Poison: {
		Strong: ["Grass","Fairy"],
		Weak: ["Poison","Ground","Rock","Ghost"],
		Immune: ["Steel"]
	},
	Ground: {
		Strong: ["Fire","Electric","Poison","Rock","Steel"],
		Weak: ["Grass","Bug"],
		Immune: ["Flying"]
	},
	Flying: {
		Strong: ["Grass","Fighting","Bug"],
		Weak: ["Electric","Rock","Steel"],
		Immune: [false]
	},
	Psychic: {
		Strong: ["Fighting","Poison"],
		Weak: ["Psychic","Steel"],
		Immune: ["Dark"]
	},
	Bug: {
		Strong: ["Grass","Psychic","Dark"],
		Weak: ["Fire","Fighting","Poison","Flying","Ghost","Steel","Fairy"],
		Immune: [false]
	},
	Rock: {
		Strong: ["Fire","Ice","Flying","Bug"],
		Weak: ["Fighting","Ground","Steel"],
		Immune: [false]
	},
	Ghost: {
		Strong: ["Psychic","Ghost"],
		Weak: ["Dark"],
		Immune: ["Normal"]
	},
	Dragon: {
		Strong: ["Dragon"],
		Weak: ["Steel"],
		Immune: ["Fairy"]
	},
	Dark: {
		Strong: ["Psychic","Ghost"],
		Weak: ["Fighting","Dark","Fairy"],
		Immune: [false]
	},
	Steel: {
		Strong: ["Ice","Rock","Fairy"],
		Weak: ["Fire","Water","Electric","Steel"],
		Immune: [false]
	},
	Fairy: {
		Strong: ["Fighting","Dragon","Dark"],
		Weak: ["Fire","Poison","Steel"],
		Immune: [false]
	}
}
