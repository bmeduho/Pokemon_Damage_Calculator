function Round (weather) {
	this.Weather = weather;
}

var base = {
	Team1: {
		Pokemon1: {
			Species: false,
			Level: false,
			Gender: false,
			Ability: false,
			Item: false,
			Moves: [false],
			Condition: "Healthy",
			Stats: {
				HP: 100,
				Atk: 0,
				Def: 0,
				SAk: 0,
				SDf: 0,
				Spd: 0,
				Acc: 0,
				Eva: 0
			}
		},
		Pokemon2: {
			Species: false,
			Level: false,
			Gender: false,
			Ability: false,
			Item: false,
			Moves: [false],
			Condition: "Healthy",
			Stats: {
				HP: 100,
				Atk: 0,
				Def: 0,
				SAk: 0,
				SDf: 0,
				Spd: 0,
				Acc: 0,
				Eva: 0
			}
		},
		Pokemon3: {
			Species: false,
			Level: false,
			Gender: false,
			Ability: false,
			Item: false,
			Moves: [false],
			Condition: "Healthy",
			Stats: {
				HP: 100,
				Atk: 0,
				Def: 0,
				SAk: 0,
				SDf: 0,
				Spd: 0,
				Acc: 0,
				Eva: 0
			}
		},
		Pokemon4: {
			Species: false,
			Level: false,
			Gender: false,
			Ability: false,
			Item: false,
			Moves: [false],
			Condition: "Healthy",
			Stats: {
				HP: 100,
				Atk: 0,
				Def: 0,
				SAk: 0,
				SDf: 0,
				Spd: 0,
				Acc: 0,
				Eva: 0
			}
		},
		Pokemon5: {
			Species: false,
			Level: false,
			Gender: false,
			Ability: false,
			Item: false,
			Moves: [false],
			Condition: "Healthy",
			Stats: {
				HP: 100,
				Atk: 0,
				Def: 0,
				SAk: 0,
				SDf: 0,
				Spd: 0,
				Acc: 0,
				Eva: 0
			}
		},
		Pokemon6: {
			Species: false,
			Level: false,
			Gender: false,
			Ability: false,
			Item: false,
			Moves: [false],
			Condition: "Healthy",
			Stats: {
				HP: 100,
				Atk: 0,
				Def: 0,
				SAk: 0,
				SDf: 0,
				Spd: 0,
				Acc: 0,
				Eva: 0
			}
		}
	},
	Team2: {
		Pokemon1: {
			Species: false,
			Level: false,
			Gender: false,
			Ability: false,
			Item: false,
			Moves: [false],
			Condition: "Healthy",
			Stats: {
				HP: 100,
				Atk: 0,
				Def: 0,
				SAk: 0,
				SDf: 0,
				Spd: 0,
				Acc: 0,
				Eva: 0
			}
		},
		Pokemon2: {
			Species: false,
			Level: false,
			Gender: false,
			Ability: false,
			Item: false,
			Moves: [false],
			Condition: "Healthy",
			Stats: {
				HP: 100,
				Atk: 0,
				Def: 0,
				SAk: 0,
				SDf: 0,
				Spd: 0,
				Acc: 0,
				Eva: 0
			}
		},
		Pokemon3: {
			Species: false,
			Level: false,
			Gender: false,
			Ability: false,
			Item: false,
			Moves: [false],
			Condition: "Healthy",
			Stats: {
				HP: 100,
				Atk: 0,
				Def: 0,
				SAk: 0,
				SDf: 0,
				Spd: 0,
				Acc: 0,
				Eva: 0
			}
		},
		Pokemon4: {
			Species: false,
			Level: false,
			Gender: false,
			Ability: false,
			Item: false,
			Moves: [false],
			Condition: "Healthy",
			Stats: {
				HP: 100,
				Atk: 0,
				Def: 0,
				SAk: 0,
				SDf: 0,
				Spd: 0,
				Acc: 0,
				Eva: 0
			}
		},
		Pokemon5: {
			Species: false,
			Level: false,
			Gender: false,
			Ability: false,
			Item: false,
			Moves: [false],
			Condition: "Healthy",
			Stats: {
				HP: 100,
				Atk: 0,
				Def: 0,
				SAk: 0,
				SDf: 0,
				Spd: 0,
				Acc: 0,
				Eva: 0
			}
		},
		Pokemon6: {
			Species: false,
			Level: false,
			Gender: false,
			Ability: false,
			Item: false,
			Moves: [false],
			Condition: "Healthy",
			Stats: {
				HP: 100,
				Atk: 0,
				Def: 0,
				SAk: 0,
				SDf: 0,
				Spd: 0,
				Acc: 0,
				Eva: 0
			}
		}
	},
	Battle: {}
};
/*var base = {
	TeamOne: {
		PokemonOne: {
			Species: "Bulbasaur",
			Level: 10,
			Gender: "Male",
			Ability: "Overgrow",
			Item: false,
			Moves: ["Tackle","Growl","Leech Seed", "Vine Whip"],
			Stats: {
				HP: 100,
				Atk: 0,
				Def: 0,
				SpDef: 0,
				SpAtk: 0,
				Speed: 0,
				Acc: 0,
				Eva: 0
			},
			Form: false
		},
		PokemonTwo: {
			Species: false,
			Level: false,
			Gender: false,
			Ability: false,
			Item: false,
			Moves: [false],
			Stats: {
				HP: 100,
				Atk: 0,
				Def: 0,
				SpDef: 0,
				SpAtk: 0,
				Speed: 0,
				Acc: 0,
				Eva: 0
			},
			Form: false
		},
		PokemonThree: {
			Species: false,
			Level: false,
			Gender: false,
			Ability: false,
			Item: false,
			Moves: [false],
			Stats: {
				HP: 100,
				Atk: 0,
				Def: 0,
				SpDef: 0,
				SpAtk: 0,
				Speed: 0,
				Acc: 0,
				Eva: 0
			},
			Form: false
		},
		PokemonFour: {
			Species: false,
			Level: false,
			Gender: false,
			Ability: false,
			Item: false,
			Moves: [false],
			Stats: {
				HP: 100,
				Atk: 0,
				Def: 0,
				SpDef: 0,
				SpAtk: 0,
				Speed: 0,
				Acc: 0,
				Eva: 0
			},
			Form: false
		},
		PokemonFive: {
			Species: false,
			Level: false,
			Gender: false,
			Ability: false,
			Item: false,
			Moves: [false],
			Stats: {
				HP: 100,
				Atk: 0,
				Def: 0,
				SpDef: 0,
				SpAtk: 0,
				Speed: 0,
				Acc: 0,
				Eva: 0
			},
			Form: false
		},
		PokemonSix: {
			Species: false,
			Level: false,
			Gender: false,
			Ability: false,
			Item: false,
			Moves: [false],
			Stats: {
				HP: 100,
				Atk: 0,
				Def: 0,
				SpDef: 0,
				SpAtk: 0,
				Speed: 0,
				Acc: 0,
				Eva: 0
			},
			Form: false
		}
	},
	TeamTwo: {
		PokemonOne: {
			Species: "Charmander",
			Level: 10,
			Gender: "Female",
			Ability: "Solar Power",
			Item: false,
			Moves: ["Growl","Scratch","Ember","Smokescreen"],
			Stats: {
				HP: 100,
				Atk: 0,
				Def: 0,
				SpDef: 0,
				SpAtk: 0,
				Speed: 0,
				Acc: 0,
				Eva: 0
			},
			Form: false
		},
		PokemonTwo: {
			Species: false,
			Level: false,
			Gender: false,
			Ability: false,
			Item: false,
			Moves: [false],
			Stats: {
				HP: 100,
				Atk: 0,
				Def: 0,
				SpDef: 0,
				SpAtk: 0,
				Speed: 0,
				Acc: 0,
				Eva: 0
			},
			Form: false
		},
		PokemonThree: {
			Species: false,
			Level: false,
			Gender: false,
			Ability: false,
			Item: false,
			Moves: [false],
			Stats: {
				HP: 100,
				Atk: 0,
				Def: 0,
				SpDef: 0,
				SpAtk: 0,
				Speed: 0,
				Acc: 0,
				Eva: 0
			},
			Form: false
		},
		PokemonFour: {
			Species: false,
			Level: false,
			Gender: false,
			Ability: false,
			Item: false,
			Moves: [false],
			Stats: {
				HP: 100,
				Atk: 0,
				Def: 0,
				SpDef: 0,
				SpAtk: 0,
				Speed: 0,
				Acc: 0,
				Eva: 0
			},
			Form: false
		},
		PokemonFive: {
			Species: false,
			Level: false,
			Gender: false,
			Ability: false,
			Item: false,
			Moves: [false],
			Stats: {
				HP: 100,
				Atk: 0,
				Def: 0,
				SpDef: 0,
				SpAtk: 0,
				Speed: 0,
				Acc: 0,
				Eva: 0
			},
			Form: false
		},
		PokemonSix: {
			Species: false,
			Level: false,
			Gender: false,
			Ability: false,
			Item: false,
			Moves: [false],
			Stats: {
				HP: 100,
				Atk: 0,
				Def: 0,
				SpDef: 0,
				SpAtk: 0,
				Speed: 0,
				Acc: 0,
				Eva: 0
			},
			Form: false
		}
	},
	Battle: {
		Weather: false
	}
};*/