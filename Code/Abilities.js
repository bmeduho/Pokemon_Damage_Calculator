var Abilities = {
	/*
		Ability: function (holder,hMoves,opponent,oMoves,currentRound) {
			
		},
	*/
	Activate: {
		"Adaptability": function (holder,hMoves,opponent,oMoves,currentRound) {
			Variables.STAB = 2;
		},
		"Aerilate": function (holder,hMoves,opponent,oMoves,currentRound) {
			for (var i = 0; i < hMoves.length; i++) {
				if (Moves[hMoves[i]].Type === "Normal") {
					Moves[hMoves[i]].Type = "Flying";
					Moves[hMoves[i]].BP[0] *= 1.3;
				}
			}
		},
		"Aftermath": function (holder,hMoves,opponent,oMoves,currentRound) {
			if (holder.status === "Fainted") {
				for (var i = 0; i < oMoves.length; i++) {
					if (oMoves[i].onContact === true) {
						opponent.Stats.HP -= 25;
					}
				}
			}
		},
		"AirLock": function (holder,hMoves,opponent,oMoves,currentRound) {
			currentRound.weather[1] = false;
		},
		"Analytic": function (holder,hMoves,opponent,oMoves,currentRound) {
			hMoves[1].BP *= 1.3;
		},
		"AngerPoint": function (holder,hMoves,opponent,oMoves,currentRound) {
			
		},
		"Anticipation": function (holder,hMoves,opponent,oMoves,currentRound) {
			
		},
		"Arena Trap": function (holder,hMoves,opponent,oMoves,currentRound) {
			
		},
		"Aroma Veil": function (holder,hMoves,opponent,oMoves,currentRound) {
			
		},
		"Aura Break": function (holder,hMoves,opponent,oMoves,currentRound) {
			
		}/*,
		Bad Dreams: {},
		Battle Armour: {},
		Big Pecks: {},
		Blaze: {},
		Bulletproof: {},
		Cheek Pouch: {},
		Chlorophyll: {},
		Clear Body: {},
		Cloud Nine: {},
		Colour Change: {},
		Competitive: {},
		Compound Eyes: {},
		Contrary: {},
		Cursed Body: {},
		Cute Charm: {},
		Damp: {},
		Dark Aura: {},
		Defeatist: {},
		Defiant: {},
		Delta Stream: {},
		Desolate Land: {},
		Download: {},
		Drizzle: {},
		Drought: {},
		Dry Skin: {},
		Early Bird: {},
		Effect Spore: {},
		Fairy Aura: {},
		Filter: {},
		Flame Body: {},
		Flare Boost: {},
		Flash Fire: {},
		Flower Gift: {},
		Flower Veil: {},
		Forecast: {},
		Forewarn: {},
		Friend Guard: {},
		Frisk: {},
		Fur Coat: {},
		Gale Wings: {},
		Gluttony: {},
		Gooey: {},
		Grass Pelt: {},
		Guts: {},
		Harvest: {},
		Healer: {},
		Heatproof: {},
		Heavy Metal: {},
		Honey Gather: {},
		Huge Power: {},
		Hustle: {},
		Hydration: {},
		Hyper Cutter: {},
		Ice Body: {},
		Illuminate: {},
		Illusion: {},
		Immunity: {},
		Imposter: {},
		Infiltrate: {},
		Inner Focus: {},
		Insomnia: {},
		Intimidate: {},
		Iron Barbs: {},
		Iron Fist: {},
		Justified: {},
		Keen Eye: {},
		Klutz: {},
		Leaf Guard: {},
		Levitate: {},
		Light Metal: {},
		Lightning Rod: {},
		Limber: {},
		Liquid Ooze: {},
		Magic Bounce: {},
		Magic Guard: {},
		Magician: {},
		Magma Armour: {},
		Magnet Pull: {},
		Marvel Scale: {},
		Mega Launcher: {},
		Minus: {},
		Mold Breaker: {},
		Moody: {},
		Motor Drive: {},
		Moxie: {},
		Multiscale: {},
		Multitype: {},
		Mummy: {},
		Natural Cure: {},
		No Guard: {},
		Normalize: {},
		Oblivious: {},
		Overcoat: {},
		Overgrow: {},
		Own Tempo: {},
		Parental Bond: {},
		Pickpocket: {},
		Pickup: {},
		Pixilate: {},
		Plus: {},
		Poison Heal: {},
		Poison Point: {},
		Poison Touch: {},
		Prankster: {},
		Pressure: {},
		Primordial Sea: {},
		Protean: {},
		Pure Power: {},
		Quick Feet: {},
		Rain Dish: {},
		Rattled: {},
		Reckless: {},
		Refrigerate: {},
		Regenerator: {},
		Rivalry: {},
		Rock Head: {},
		Rough Skin: {},
		Run Away: {},
		Sand Force: {},
		Sand Rush: {},
		Sand Stream: {},
		Sand Veil: {},
		Sap Sipper: {},
		Scrappy: {},
		Serene Grace: {},
		Shadow Tag: {},
		Shed Skin: {},
		Sheer Force: {},
		Shell Armour: {},
		Shield Dust: {},
		Simple: {},
		Skill Link: {},
		Slow Start: {},
		Sniper: {},
		Snow Cloak: {},
		Snow Warning: {},
		Solar Power: {},
		Solid Rock: {},
		Soundproof: {},
		Speed Boost: {},
		Stall: {},
		Stance Change: {},
		Static: {},
		Steadfast: {},
		Stench: {},
		Sticky Hold: {},
		Storm Drain: {},
		Strong Jaw: {},
		Sturdy: {},
		Suction Cups: {},
		Super Luck: {},
		Swarm: {},
		Sweet Veil: {},
		Swift Swim: {},
		Symbiosis: {},
		Synchronize: {},
		Tangled Feet: {},
		Technician: {},
		Telepathy: {},
		Teravolt: {},
		Thick Fat: {},
		Tinted Lens: {},
		Torrent: {},
		Tough Claws: {},
		Toxic Boost: {},
		Trace: {},
		Truant: {},
		Turboblaze: {},
		Unaware: {},
		Unburden: {},
		Unnerve: {},
		Victory Star: {},
		Vital Spirit: {},
		Volt Absorb: {},
		Water Absorb: {},
		Water Veil: {},
		Weak Armour: {},
		White Smoke: {},
		Wonder Guard: {},
		Wonder Skin: {},
		Zen Mode: {},*/
	},
	Deactivate: {
		Adaptability: function (holder,hMoves,opponent,oMoves) {
			Variables.STAB = 1.5;
		},
	}
};
