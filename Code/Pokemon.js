function BASESTATS (hp, attack, defense, spattack, spdefense, speed) {
	this.HP = hp;
	this.Atk = attack;
	this.Def = defense;
	this.SAk = spattack;
	this.SDf = spdefense;
	this.Spd = speed;
}
function FORMECHANGE (possible, formes) {
	this.Possible = possible;
	if (Array.isArray(formes) && possible === true) {
		for (var q = 0; q < formes.length; q += 2) {
			this[formes[q]] = formes[q + 1];
		}
	}
}
function FORME (types, abilities, weight, sprite, bstats) {
	this.Type = types;
	this.Ability = abilities;
	this.BaseWeight = weight;
	this.SpriteImg = sprite;
	this.BaseStats = bstats;
}
function SPECIES (types, abilities, genders, weight, sprite, bstats, forme) {
	this.Type = types;
	this.Ability = abilities;
	this.Gender = genders;
	this.BaseWeight = weight;
	this.SpriteImg = sprite;
	this.BaseStats = bstats;
	this.FormeChange = forme;
}

	/* Species: new SPECIES(
		["Type1","Type2"],
		["Ability1","Ability2","Ability3"],
		["Male","Female","Genderless"],
		weight in kg,
		"http://media.pldh.net/pokexycons/000.png",
		new BASESTATS (0,0,0,0,0,0),
		new FORMECHANGE (true,["Mega-Name",new FORME(
			["Type1","Type2"],
			"Ability",
			weight in kg,
			"sprite.png",
			new BASESTATS (0,0,0,0,0,0))])),*/

var Pokemon = {
	Bulbasaur: new SPECIES(
		["Grass","Poison"],
		["Overgrow","Chlorophyll"],
		["Male","Female"],
		6.9,
		"http://media.pldh.net/pokexycons/001.png",
		new BASESTATS(45,49,49,65,65,45),
		new FORMECHANGE(false)),
	Ivysaur: new SPECIES(
		["Grass","Poison"],
		["Overgrow","Chlorophyll"],
		["Male","Female"],
		13.0,
		"http://media.pldh.net/pokexycons/002.png",
		new BASESTATS(60,62,63,80,80,60),
		new FORMECHANGE(false)),
	Venusaur: new SPECIES(
		["Grass","Poison"],
		["Overgrow","Chlorophyll"],
		["Male","Female"],
		100.0,
		"http://media.pldh.net/pokexycons/003.png",
		new BASESTATS(80,82,83,100,100,80),
		new FORMECHANGE(true,["Mega",new FORME(
			["Grass","Poison"],
			["Thick Fat"],
			155.5,
			"http://media.pldh.net/pokexycons/003-mega.png",
			new BASESTATS(80,100,123,122,120,80))])),
	Charmander: new SPECIES(
		["Fire"],
		["Blaze","Solar Power"],
		["Male","Female"],
		8.5,
		"http://media.pldh.net/pokexycons/004.png",
		new BASESTATS(39,52,43,60,50,65),
		new FORMECHANGE (false)),
	Charmeleon: new SPECIES(
		["Fire"],
		["Blaze","Solar Power"],
		["Male","Female"],
		19.0,
		"http://media.pldh.net/pokexycons/005.png",
		new BASESTATS(58,64,58,80,65,80),
		new FORMECHANGE (false)),
	Charizard: new SPECIES(
		["Fire","Flying"],
		["Blaze","Solar Power"],
		["Male","Female"],
		90.5,
		"http://media.pldh.net/pokexycons/006.png",
		new BASESTATS(78,84,78,109,85,100),
		new FORMECHANGE (true,["Mega-X",new FORME(
			["Fire","Dragon"],
			["Tough Claws"],
			110.5,
			"http://media.pldh.net/pokexycons/006-mega-x.png",
			new BASESTATS(78,130,111,130,85,100)),
		"Mega-Y",new FORME(
			["Fire","Flying"],
			["Drought"],
			100.5,
			"http://media.pldh.net/pokexycons/006-mega-y.png",
			new BASESTATS (0,0,0,0,0,0))])),
	Squirtle: new SPECIES(
		["Water"],
		["Torrent","Rain Dish"],
		["Male","Female"],
		19.8,
		"http://media.pldh.net/pokexycons/007.png",
		new BASESTATS(44,48,65,50,64,43),
		new FORMECHANGE(false)),
	Wartortle: new SPECIES(
		["Water"],
		["Torrent","Rain Dish"],
		["Male","Female"],
		22.5,
		"http://media.pldh.net/pokexycons/008.png",
		new BASESTATS(59,63,80,65,80,58),
		new FORMECHANGE(false)),
	Blastoise: new SPECIES(
		["Water"],
		["Torrent","Rain Dish"],
		["Male","Female"],
		85.5,
		"http://media.pldh.net/pokexycons/009.png",
		new BASESTATS (79,83,100,85,105,78),
		new FORMECHANGE (true,["Mega",new FORME(
			["Water"],
			["Mega Launcher"],
			"http://media.pldh.net/pokexycons/009-mega.png",
			new BASESTATS (79,103,120,135,115,78))])),
	Caterpie: new SPECIES(
		["Bug"],
		["Shield Dust","Run Away"],
		["Male","Female"],
		2.9,
		"http://media.pldh.net/pokexycons/010.png",
		new BASESTATS (45,30,35,20,20,45),
		new FORMECHANGE (false)),
	Metapod: new SPECIES(
		["Bug"],
		["Shed Skin"],
		["Male","Female"],
		9.9,
		"http://media.pldh.net/pokexycons/011.png",
		new BASESTATS (50,20,55,25,25,30),
		new FORMECHANGE (false)),
	Butterfree: new SPECIES(
		["Bug","Flying"],
		["Compound Eyes","Tinted Lens"],
		["Male","Female"],
		32.0,
		"http://media.pldh.net/pokexycons/012.png",
		new BASESTATS (60,45,50,90,80,70),
		new FORMECHANGE (false)),
	Weedle: new SPECIES(
		["Bug","Poison"],
		["Shield Dust","Run Away"],
		["Male","Female"],
		3.2,
		"http://media.pldh.net/pokexycons/013.png",
		new BASESTATS (40,35,30,20,20,50),
		new FORMECHANGE (false)),
	Kakuna: new SPECIES(
		["Bug","Poison"],
		["Shed Skin"],
		["Male","Female"],
		10.0,
		"http://media.pldh.net/pokexycons/014.png",
		new BASESTATS (45,25,50,25,25,35),
		new FORMECHANGE (false)),
	Beedrill: new SPECIES(
		["Bug","Poison"],
		["Swarm","Sniper"],
		["Male","Female"],
		29.5,
		"http://media.pldh.net/pokexycons/015.png",
		new BASESTATS (65,90,40,45,80,75),
		new FORMECHANGE (true,["Mega",new FORME(
			["Bug","Poison"],
			["Adaptability"],
			40.5,
			"http://media.pldh.net/pokexycons/015-mega.png",
			new BASESTATS (65,150,40,15,80,145))])),
	Pidgey: new SPECIES(
		["Normal","Flying"],
		["Keen Eye","Tangled Feet","Big Pecks"],
		["Male","Female"],
		1.8,
		"http://media.pldh.net/pokexycons/016.png",
		new BASESTATS (40,45,40,35,35,56),
		new FORMECHANGE (false)),
	Pidgeotto: new SPECIES(
		["Normal","Flying"],
		["Keen Eye","Tangled Feet","Big Pecks"],
		["Male","Female"],
		30.0,
		"http://media.pldh.net/pokexycons/017.png",
		new BASESTATS (63,60,55,50,50,71),
		new FORMECHANGE (false)),
	Pidgeot: new SPECIES(
		["Normal","Flying"],
		["Keen Eye","Tangled Feet","Big Pecks"],
		["Male","Female"],
		39.5,
		"http://media.pldh.net/pokexycons/018.png",
		new BASESTATS (83,80,75,70,70,101),
		new FORMECHANGE (true,["Mega",new FORME(
			["Normal","Flying"],
			["No Guard"],
			50.5,
			"http://media.pldh.net/pokexycons/018-mega.png",
			new BASESTATS (83,80,80,135,80,121))])),
	Rattata: new SPECIES(
		["Normal"],
		["Guts","Run Away","Hustle"],
		["Male","Female"],
		3.5,
		"http://media.pldh.net/pokexycons/019.png",
		new BASESTATS (30,56,35,25,35,72),
		new FORMECHANGE (false)),
	Raticate: new SPECIES(
		["Normal"],
		["Guts","Run Away","Hustle"],
		["Male","Female"],
		18.5,
		"http://media.pldh.net/pokexycons/020.png",
		new BASESTATS (55,81,60,50,70,97),
		new FORMECHANGE (false)),
	Spearow: new SPECIES(
		["Normal","Flying"],
		["Keen Eye","Sniper"],
		["Male","Female"],
		2.0,
		"http://media.pldh.net/pokexycons/021.png",
		new BASESTATS (40,60,30,31,31,70),
		new FORMECHANGE (false)),
	Fearow: new SPECIES(
		["Normal","Flying"],
		["Keen Eye","Sniper"],
		["Male","Female"],
		38.0,
		"http://media.pldh.net/pokexycons/022.png",
		new BASESTATS (65,90,65,61,61,100),
		new FORMECHANGE (false)),
	Ekans: new SPECIES(
		["Poison"],
		["Intimidate","Shed Skin","Unnerve"],
		["Male","Female"],
		6.9,
		"http://media.pldh.net/pokexycons/023.png",
		new BASESTATS (35,60,44,40,54,55),
		new FORMECHANGE (false)),
	Arbok: new SPECIES(
		["Poison"],
		["Intimidate","Shed Skin","Unnerve"],
		["Male","Female"],
		65.0,
		"http://media.pldh.net/pokexycons/024.png",
		new BASESTATS (60,85,69,65,79,80),
		new FORMECHANGE (false)),
	Pikachu: new SPECIES(
		["Electric"],
		["Static","Lightning Rod"],
		["Male","Female"],
		6.0,
		"http://media.pldh.net/pokexycons/025.png",
		new BASESTATS (35,55,40,50,50,90),
		new FORMECHANGE (false)),
	Raichu: new SPECIES(
		["Electric"],
		["Static","Lightning Rod"],
		["Male","Female"],
		30.0,
		"http://media.pldh.net/pokexycons/026.png",
		new BASESTATS (60,90,55,90,80,110),
		new FORMECHANGE (false)),
	/*Sandshrew: new SPECIES(
		["Ground"],
		["Ability1","Ability2","Ability3"],
		["Male","Female","Genderless"],
		weight in kg,
		"http://media.pldh.net/pokexycons/027.png",
		new BASESTATS (0,0,0,0,0,0),
		new FORMECHANGE (false)),
	Sandslash: new SPECIES(
		["Ground"],
		["Ability1","Ability2","Ability3"],
		["Male","Female","Genderless"],
		weight in kg,
		"http://media.pldh.net/pokexycons/028.png",
		new BASESTATS (0,0,0,0,0,0),
		new FORMECHANGE (false)),
	NidoranF: new SPECIES(
		["Poison"],
		["Ability1","Ability2","Ability3"],
		["Male","Female","Genderless"],
		weight in kg,
		"http://media.pldh.net/pokexycons/029.png",
		new BASESTATS (0,0,0,0,0,0),
		new FORMECHANGE (false)),
	Nidorina: new SPECIES(
		["Poison"],
		["Ability1","Ability2","Ability3"],
		["Male","Female","Genderless"],
		weight in kg,
		"http://media.pldh.net/pokexycons/030.png",
		new BASESTATS (0,0,0,0,0,0),
		new FORMECHANGE (false)),
	Nidoqueen: new SPECIES(
		["Poison","Ground"],
		["Ability1","Ability2","Ability3"],
		["Male","Female","Genderless"],
		weight in kg,
		"http://media.pldh.net/pokexycons/031.png",
		new BASESTATS (0,0,0,0,0,0),
		new FORMECHANGE (false)),
	NidoranM: new SPECIES(
		["Poison"],
		["Ability1","Ability2","Ability3"],
		["Male","Female","Genderless"],
		weight in kg,
		"http://media.pldh.net/pokexycons/032.png",
		new BASESTATS (0,0,0,0,0,0),
		new FORMECHANGE (false)),
	Nidorino: new SPECIES(
		["Poison"],
		["Ability1","Ability2","Ability3"],
		["Male","Female","Genderless"],
		weight in kg,
		"http://media.pldh.net/pokexycons/033.png",
		new BASESTATS (0,0,0,0,0,0),
		new FORMECHANGE (false)),
	Nidoking: new SPECIES(
		["Poison","Ground"],
		["Ability1","Ability2","Ability3"],
		["Male","Female","Genderless"],
		weight in kg,
		"http://media.pldh.net/pokexycons/034.png",
		new BASESTATS (0,0,0,0,0,0),
		new FORMECHANGE (false)),
	Clefairy: new SPECIES(
		["Fairy"],
		["Ability1","Ability2","Ability3"],
		["Male","Female","Genderless"],
		weight in kg,
		"http://media.pldh.net/pokexycons/035.png",
		new BASESTATS (0,0,0,0,0,0),
		new FORMECHANGE (false)),
	Clefable: new SPECIES(
		["Fairy"],
		["Ability1","Ability2","Ability3"],
		["Male","Female","Genderless"],
		weight in kg,
		"http://media.pldh.net/pokexycons/036.png",
		new BASESTATS (0,0,0,0,0,0),
		new FORMECHANGE (false)),
	Vulpix: new SPECIES(
		["Fire"],
		["Ability1","Ability2","Ability3"],
		["Male","Female","Genderless"],
		weight in kg,
		"http://media.pldh.net/pokexycons/037.png",
		new BASESTATS (0,0,0,0,0,0),
		new FORMECHANGE (false)),
	Ninetales: new SPECIES(
		["Fire"],
		["Ability1","Ability2","Ability3"],
		["Male","Female","Genderless"],
		weight in kg,
		"http://media.pldh.net/pokexycons/038.png",
		new BASESTATS (0,0,0,0,0,0),
		new FORMECHANGE (false)),
	Jigglypuff: new SPECIES(
		["Normal","Fairy"],
		["Ability1","Ability2","Ability3"],
		["Male","Female","Genderless"],
		weight in kg,
		"http://media.pldh.net/pokexycons/039.png",
		new BASESTATS (0,0,0,0,0,0),
		new FORMECHANGE (false)),
	Wigglytuff: new SPECIES(
		["Normal","Fairy"],
		["Ability1","Ability2","Ability3"],
		["Male","Female","Genderless"],
		weight in kg,
		"http://media.pldh.net/pokexycons/040.png",
		new BASESTATS (0,0,0,0,0,0),
		new FORMECHANGE (false)),
	Zubat: new SPECIES(
		["Poison","Flying"],
		["Ability1","Ability2","Ability3"],
		["Male","Female","Genderless"],
		weight in kg,
		"http://media.pldh.net/pokexycons/041.png",
		new BASESTATS (0,0,0,0,0,0),
		new FORMECHANGE (false)),
	Golbat: new SPECIES(
		["Poison","Flying"],
		["Ability1","Ability2","Ability3"],
		["Male","Female","Genderless"],
		weight in kg,
		"http://media.pldh.net/pokexycons/042.png",
		new BASESTATS (0,0,0,0,0,0),
		new FORMECHANGE (false)),
	Oddish: new SPECIES(
		["Grass","Poison"],
		["Ability1","Ability2","Ability3"],
		["Male","Female","Genderless"],
		weight in kg,
		"http://media.pldh.net/pokexycons/043.png",
		new BASESTATS (0,0,0,0,0,0),
		new FORMECHANGE (false)),
	Gloom: new SPECIES(
		["Grass","Poison"],
		["Ability1","Ability2","Ability3"],
		["Male","Female","Genderless"],
		weight in kg,
		"http://media.pldh.net/pokexycons/044.png",
		new BASESTATS (0,0,0,0,0,0),
		new FORMECHANGE (false)),
	Vileplume:new SPECIES(
		["Grass","Poison"],
		["Ability1","Ability2","Ability3"],
		["Male","Female","Genderless"],
		weight in kg,
		"http://media.pldh.net/pokexycons/045.png",
		new BASESTATS (0,0,0,0,0,0),
		new FORMECHANGE (false)),
	Paras: new SPECIES(
		["Bug","Grass"],
		["Ability1","Ability2","Ability3"],
		["Male","Female","Genderless"],
		weight in kg,
		"http://media.pldh.net/pokexycons/046.png",
		new BASESTATS (0,0,0,0,0,0),
		new FORMECHANGE (false)),
	Parasect: new SPECIES(
		["Bug","Grass"],
		["Ability1","Ability2","Ability3"],
		["Male","Female","Genderless"],
		weight in kg,
		"http://media.pldh.net/pokexycons/047.png",
		new BASESTATS (0,0,0,0,0,0),
		new FORMECHANGE (false)),
	Venonat: new SPECIES(
		["Bug","Poison"],
		["Ability1","Ability2","Ability3"],
		["Male","Female","Genderless"],
		weight in kg,
		"http://media.pldh.net/pokexycons/048.png",
		new BASESTATS (0,0,0,0,0,0),
		new FORMECHANGE (false)),
	Venomoth: new SPECIES(
		["Bug","Poison"],
		["Ability1","Ability2","Ability3"],
		["Male","Female","Genderless"],
		weight in kg,
		"http://media.pldh.net/pokexycons/049.png",
		new BASESTATS (0,0,0,0,0,0),
		new FORMECHANGE (false)),
	Diglett: new SPECIES(
		["Ground"],
		["Ability1","Ability2","Ability3"],
		["Male","Female","Genderless"],
		weight in kg,
		"http://media.pldh.net/pokexycons/050.png",
		new BASESTATS (0,0,0,0,0,0),
		new FORMECHANGE (false)),
	Dugtrio: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Meowth: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Persian: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Psyduck: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Golduck: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Mankey: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Primeape: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Growlithe: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Arcanine: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Poliwag: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Poliwhirl: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Poliwrath: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Abra: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Kadabra: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Alakazam: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Machop: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Machoke: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Machamp: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Bellsprout: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Weepinbell: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Victreebel: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Tentacool: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Tentacruel: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Geodude: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Graveler: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Golem: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Ponyta: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Rapidash: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Slowpoke: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Slowbro: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Magnemite: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Magneton: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	"Farfetch'd": new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Doduo: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Dodrio: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Seel: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Dewgong: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Grimer: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Muk: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Shellder: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Cloyster: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Gastly: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Haunter: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Gengar: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Onix: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Drowzee: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Hypno: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Krabby: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Kingler: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Voltorb: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Electrode: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Exeggcute: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Exeggutor: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Cubone: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Marowak: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Hitmonlee: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Hitmonchan: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Lickitung: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Koffing: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Weezing: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Rhyhorn: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Rhydon: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Chansey: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Tangela: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Kangaskhan: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Horsea: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Seadra: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Goldeen: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Seaking: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Staryu: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Starmie: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	"Mr. Mime": new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Scyther: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Jynx: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Electabuzz: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Magmar: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Pinsir: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Tauros: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Magikarp: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Gyarados: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Lapras: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Ditto: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Eevee: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Vaporeon: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Jolteon: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Flareon: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Porygon: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Omanyte: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Omastar: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Kabuto: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Kabutops: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Aerodactyl: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Snorlax: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Articuno: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Zapdos: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Moltres: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Dratini: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Dragonair: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Dragonite: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Mewtwo: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Mew: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),*/
	Chikorita: new SPECIES(
		["Grass"],
		["Overgrow","Leaf Guard"],
		["Male","Female"],
		6.4,
		"http://media.pldh.net/pokexycons/152.png",
		new BASESTATS (45,49,65,49,65,45),
		new FORMECHANGE (false)),

	Bayleef: new SPECIES(
		["Grass"],
		["Overgrow","Leaf Guard"],
		["Male","Female"],
		15.8,
		"http://media.pldh.net/pokexycons/153.png",
		new BASESTATS (60,62,80,63,80,60),
		new FORMECHANGE (false)),

	Meganium: new SPECIES(
		["Grass"],
		["Overgrow","Leaf Guard"],
		["Male","Female"],
		100.5,
		"http://media.pldh.net/pokexycons/154.png",
		new BASESTATS (80,82,100,83,100,80),
		new FORMECHANGE (false)),

	Cyndaquil: new SPECIES(
		["Fire"],
		["Blaze","Flash Fire"],
		["Male","Female"],
		7.9,
		"http://media.pldh.net/pokexycons/155.png",
		new BASESTATS (39,52,43,60,50,65),
		new FORMECHANGE (false)),

	Quilava: new SPECIES(
		["Fire"],
		["Blaze","Flash Fire"],
		["Male","Female"],
		19.0,
		"http://media.pldh.net/pokexycons/156.png",
		new BASESTATS (58,64,58,80,65,80),
		new FORMECHANGE (false)),

	Typhlosion: new SPECIES(
		["Fire"],
		["Blaze","Flash"],
		["Male","Female"],
		79.5,
		"http://media.pldh.net/pokexycons/157.png",
		new BASESTATS (78,84,78,109,85,100),
		new FORMECHANGE (false)),

	Totodile: new SPECIES(
		["Water"],
		["Torrent","Sheer Force"],
		["Male","Female"],
		9.5,
		"http://media.pldh.net/pokexycons/158.png",
		new BASESTATS (50,65,64,44,48,43),
		new FORMECHANGE (false)),

	Croconaw: new SPECIES(
		["Water"],
		["Torrent","Sheer Force"],
		["Male","Female"],
		25.0,
		"http://media.pldh.net/pokexycons/159.png",
		new BASESTATS (65,80,80,59,63,58),
		new FORMECHANGE (false)),

	Feraligatr: new SPECIES(
		["Water"],
		["Torrent","Sheer Force"],
		["Male","Female"],
		88.8,
		"http://media.pldh.net/pokexycons/160.png",
		new BASESTATS (85,105,100,79,83,78),
		new FORMECHANGE (false)),

	Sentret: new SPECIES(
		["Normal"],
		["Run Away","Keen Eye","Frisk"],
		["Male","Female"],
		6.0,
		"http://media.pldh.net/pokexycons/161.png",
		new BASESTATS (35,46,34,35,45,20),
		new FORMECHANGE (false)),

	Furret: new SPECIES(
		["Normal"],
		["Run Away","Keen Eye","Frisk"],
		["Male","Female"],
		32.5,
		"http://media.pldh.net/pokexycons/162.png",
		new BASESTATS (85,76,64,45,55,90),
		new FORMECHANGE (false)),

	Hoothoot: new SPECIES(
		["Normal", "Flying"],
		["Insomnia","Keen Eye","Tinted Lens"],
		["Male","Female"],
		21.2,
		"http://media.pldh.net/pokexycons/163.png",
		new BASESTATS (30,30,30,36,56,50),
		new FORMECHANGE (false)),

	Noctowl: new SPECIES(
		["Normal", "Flying"],
		["Insomnia","Keen Eye","Tinted Lens"],
		["Male","Female"],
		40.8,
		"http://media.pldh.net/pokexycons/164.png",
		new BASESTATS (100,50,50,76,96,70),
		new FORMECHANGE (false)),

	Ledyba: new SPECIES(
		["Bug", "Flying"],
		["Swarm","Early Bird","Rattled"],
		["Male","Female"],
		10.8,
		"http://media.pldh.net/pokexycons/165.png",
		new BASESTATS (40,20,30,40,80,55),
		new FORMECHANGE (false)),

	Ledian: new SPECIES(
		["Bug", "Flying"],
		["Swarm","Early Bird","Iron Fist"],
		["Male","Female"],
		35.6,
		"http://media.pldh.net/pokexycons/166.png",
		new BASESTATS (55,35,50,55,110,85),
		new FORMECHANGE (false)),

	Spinarak: new SPECIES(
		["Bug", "Poison"],
		["Swarm","Insomnia","Sniper"],
		["Male","Female"],
		8.5,
		"http://media.pldh.net/pokexycons/167.png",
		new BASESTATS (40,60,40,40,40,30),
		new FORMECHANGE (false)),

	Ariados: new SPECIES(
		["Bug", "Poison"],
		["Swarm","Insomnia","Sniper"],
		["Male","Female"],
		33.5,
		"http://media.pldh.net/pokexycons/168.png",
		new BASESTATS (70,90,70,60,60,40),
		new FORMECHANGE (false)),

	Crobat: new SPECIES(
		["Poison", "Flying"],
		["Inner Focus","Infiltrator"],
		["Male","Female"],
		75.0,
		"http://media.pldh.net/pokexycons/169.png",
		new BASESTATS (85,90,80,70,80,130),
		new FORMECHANGE (false)),

	Chinchou: new SPECIES(
		["Water", "Electric"],
		["Volt Absorb","Illuminate","Water Absorb"],
		["Male","Female"],
		12.0,
		"http://media.pldh.net/pokexycons/170.png",
		new BASESTATS (75,38,38,56,56,67),
		new FORMECHANGE (false)),

	Lanturn: new SPECIES(
		["Water", "Electric"],
		["Volt Absorb","Illuminate","Water Absorb"],
		["Male","Female"],
		22.5,
		"http://media.pldh.net/pokexycons/171.png",
		new BASESTATS (125,58,58,76,76,67),
		new FORMECHANGE (false)),

	Pichu: new SPECIES(
		["Electric"],
		["Static","Lightningrod"],
		["Male","Female"],
		2.0,
		"http://media.pldh.net/pokexycons/172.png",
		new BASESTATS (20,40,15,35,35,60),
		new FORMECHANGE (false)),

	Cleffa: new SPECIES(
		["Fairy"],
		["Cute Charm","Magic Guard","Friend Guard"],
		["Male","Female"],
		3.0,
		"http://media.pldh.net/pokexycons/173.png",
		new BASESTATS (50,25,28,45,55,15),
		new FORMECHANGE (false)),

	Igglybuff: new SPECIES(
		["Normal","Fairy"],
		["Cute Charm","Competitive","Friend Guard"],
		["Male","Female"],
		1.0,
		"http://media.pldh.net/pokexycons/174.png",
		new BASESTATS (90,30,15,40,20,15),
		new FORMECHANGE (false)),

	Togepi: new SPECIES(
		["Fairy"],
		["Hustle","Serene Grace","Super Luck"],
		["Male","Female"],
		1.5,
		"http://media.pldh.net/pokexycons/175.png",
		new BASESTATS (35,20,65,40,65,20),
		new FORMECHANGE (false)),

	Togetic: new SPECIES(
		["Fairy","Flying"],
		["Hustle","Serene Grace","Super Luck"],
		["Male","Female"],
		3.2,
		"http://media.pldh.net/pokexycons/176.png",
		new BASESTATS (55,40,85,80,105,40),
		new FORMECHANGE (false)),

	Natu: new SPECIES(
		["Psychic","Flying"],
		["Synchronize","Early Bird","Magic Bounce"],
		["Male","Female"],
		2.0,
		"http://media.pldh.net/pokexycons/177.png",
		new BASESTATS (40,50,45,70,45,70),
		new FORMECHANGE (false)),

	Xatu: new SPECIES(
		["Psychic","Flying"],
		["Synchronize","Early Bird","Magic Bounce"],
		["Male","Female"],
		15.0,
		"http://media.pldh.net/pokexycons/178.png",
		new BASESTATS (65,75,70,95,70,95),
		new FORMECHANGE (false)),

	Mareep: new SPECIES(
		["Electric"],
		["Static","Plus"],
		["Male","Female"],
		7.8,
		"http://media.pldh.net/pokexycons/179.png",
		new BASESTATS (55,40,40,65,45,35),
		new FORMECHANGE (false)),

	Flaaffy: new SPECIES(
		["Electric"],
		["Static","Plus"],
		["Male","Female"],
		13.3,
		"http://media.pldh.net/pokexycons/180.png",
		new BASESTATS (70,55,55,80,60,45),
		new FORMECHANGE (false)),

	Ampharos: new SPECIES(
		["Electric"],
		["Static","Plus"],
		["Male","Female"],
		61.5,
		"http://media.pldh.net/pokexycons/181.png",
		new BASESTATS (90,75,85,115,90,55),
		new FORMECHANGE (true,["Mega",new FORME(
			["Electric","Dragon"],
			"Mold Breaker",
			"http://media.pldh.net/pokexycons/181-mega.png",
			new BASESTATS (90,95,105,165,110,45))])),

	Bellossom: new SPECIES(
		["Grass"],
		["Chlorophyll","Healer"],
		["Male","Female"],
		5.8,
		"http://media.pldh.net/pokexycons/182.png",
		new BASESTATS (75,80,95,90,100,50),
		new FORMECHANGE (false)),

	Marill: new SPECIES(
		["Water","Fairy"],
		["Thick Fat","Huge Power","Sap Sipper"],
		["Male","Female"],
		8.5,
		"http://media.pldh.net/pokexycons/183.png",
		new BASESTATS (70,20,50,20,50,40),
		new FORMECHANGE (false)),

	Sudowoodo: new SPECIES(
		["Rock"],
		["Sturdy","Rock Head","Rattled"],
		["Male","Female"],
		38.0,
		"http://media.pldh.net/pokexycons/185.png",
		new BASESTATS (70,100,115,30,65,30),
		new FORMECHANGE (false)),

	Politoed: new SPECIES(
		["Water"],
		["Water Absorb","Damp","Drizzle"],
		["Male","Female"],
		33.9,
		"http://media.pldh.net/pokexycons/186.png",
		new BASESTATS (90,75,75,90,100,70),
		new FORMECHANGE (false)),

	Hoppip: new SPECIES(
		["Grass","Flying"],
		["Chlorophyll","Leaf Guard","Infiltrator"],
		["Male","Female"],
		0.5,
		"http://media.pldh.net/pokexycons/187.png",
		new BASESTATS (35,35,40,35,55,50),
		new FORMECHANGE (false)),

	Skiploom: new SPECIES(
		["Grass","Flying"],
		["Chlorophyll","Leaf Guard","Infiltrator"],
		["Male","Female"],
		1.0,
		"http://media.pldh.net/pokexycons/188.png",
		new BASESTATS (55,45,50,45,65,80),
		new FORMECHANGE (false)),

	Jumpluff: new SPECIES(
		["Grass","Flying"],
		["Chlorophyll","Leaf Guard","Infiltrator"],
		["Male","Female"],
		3.0,
		"http://media.pldh.net/pokexycons/189.png",
		new BASESTATS (75,55,70,55,95,110),
		new FORMECHANGE (false)),

	Aipom: new SPECIES(
		["Normal"],
		["Run Away","Pickup","Skill Link"],
		["Male","Female"],
		11.5,
		"http://media.pldh.net/pokexycons/190.png",
		new BASESTATS (55,70,55,40,55,85),
		new FORMECHANGE (false)),

	Sunkern: new SPECIES(
		["Grass"],
		["Chlorophyll","Solar Power","Early Bird"],
		["Male","Female"],
		1.8,
		"http://media.pldh.net/pokexycons/191.png",
		new BASESTATS (30,30,30,30,30,30),
		new FORMECHANGE (false)),

	Sunflora: new SPECIES(
		["Grass"],
		["Chlorophyll","Solar Power","Early Bird"],
		["Male","Female"],
		8.5,
		"http://media.pldh.net/pokexycons/192.png",
		new BASESTATS (75,75,55,105,85,30),
		new FORMECHANGE (false)),

	Yanma: new SPECIES(
		["Bug","Flying"],
		["Speed Boost","Compoundeyes","Frisk"],
		["Male","Female"],
		38.0,
		"http://media.pldh.net/pokexycons/193.png",
		new BASESTATS (65,65,45,75,45,95),
		new FORMECHANGE (false)),

	Wooper: new SPECIES(
		["Water","Ground"],
		["Damp","Water Absorb","Unaware"],
		["Male","Female"],
		8.5,
		"http://media.pldh.net/pokexycons/194.png",
		new BASESTATS (55,45,45,25,25,15),
		new FORMECHANGE (false)),

	Quagsire: new SPECIES(
		["Water","Ground"],
		["Damp","Water Absorb","Unaware"],
		["Male","Female"],
		75.0,
		"http://media.pldh.net/pokexycons/195.png",
		new BASESTATS (95,85,85,65,65,35),
		new FORMECHANGE (false)),


	Espeon: new SPECIES(
		["Psychic"],
		["Synchronize","Magic Bounce"],
		["Male","Female"],
		26.5,
		"http://media.pldh.net/pokexycons/196.png",
		new BASESTATS (65,65,60,130,95,110),
		new FORMECHANGE (false)),

	Umbreon: new SPECIES(
		["Dark"],
		["Synchronize","Inner Focus"],
		["Male","Female"],
		27.0,
		"http://media.pldh.net/pokexycons/197.png",
		new BASESTATS (95,65,110,60,130,65),
		new FORMECHANGE (false)),

	Murkrow: new SPECIES(
		["Dark","Flying"],
		["Insomnia","Super Luck","Prankster"],
		["Male","Female"],
		2.1,
		"http://media.pldh.net/pokexycons/198.png",
		new BASESTATS (60,85,42,85,42,91),
		new FORMECHANGE (false)),

	Slowking: new SPECIES(
		["Water","Psychic"],
		["Oblivious","Own Tempo","Regenerator"],
		["Male","Female"],
		79.5,
		"http://media.pldh.net/pokexycons/199.png",
		new BASESTATS (95,75,80,100,110,30),
		new FORMECHANGE (false)),

	Misdreavus: new SPECIES(
		["Ghost"],
		["Levitate"],
		["Male","Female"],
		1.0,
		"http://media.pldh.net/pokexycons/200.png",
		new BASESTATS (60,60,60,85,85,85),
		new FORMECHANGE (false)),

	Unknown: new SPECIES(
		["Psychic"],
		["Levitate"],
		["Genderless"],
		5.0,
		"http://media.pldh.net/pokexycons/201.png",
		new BASESTATS (48,72,48,72,48,48),
		new FORMECHANGE (false)),

	Wobbuffet: new SPECIES(
		["Psychic"],
		["Shadow Tag","Telepathy"],
		["Male","Female"],
		28.5,
		"http://media.pldh.net/pokexycons/202.png",
		new BASESTATS (190,33,58,33,58,33),
		new FORMECHANGE (false)),

	Girafarig: new SPECIES(
		["Normal","Psychic"],
		["Inner Focus","Early Bird","Sap Sipper"],
		["Male","Female"],
		41.5,
		"http://media.pldh.net/pokexycons/203.png",
		new BASESTATS (70,80,65,90,65,85),
		new FORMECHANGE (false)),

	Pineco: new SPECIES(
		["Bug"],
		["Sturdy","Overcoat"],
		["Male","Female"],
		7.2,
		"http://media.pldh.net/pokexycons/204.png",
		new BASESTATS (50,65,90,35,35,15),
		new FORMECHANGE (false)),

	Forretress: new SPECIES(
		["Bug","Steel"],
		["Sturdy","Overcoat"],
		["Male","Female"],
		125.8,
		"http://media.pldh.net/pokexycons/205.png",
		new BASESTATS (75,90,140,60,60,40),
		new FORMECHANGE (false)),

	Dunsparce: new SPECIES(
		["Normal"],
		["Serene Grace","Run Away","Rattled"],
		["Male","Female"],
		14.0,
		"http://media.pldh.net/pokexycons/206.png",
		new BASESTATS (100,70,70,65,65,45),
		new FORMECHANGE (false)),

	Gligar: new SPECIES(
		["Ground","Flying"],
		["Hyper Cutter","Sand Veil","Immunity"],
		["Male","Female"],
		64.8,
		"http://media.pldh.net/pokexycons/207.png",
		new BASESTATS (65,75,105,35,65,85),
		new FORMECHANGE (false)),

	Steelix: new SPECIES(
		["Steel","Ground"],
		["Rock Head","Sturdy","Sheer Force"],
		["Male","Female"],
		400.0,
		"http://media.pldh.net/pokexycons/208.png",
		new BASESTATS (75,85,200,55,65,30),
		new FORMECHANGE (true,["Mega",new FORME(
			["Steel","Ground"],
			"Sand Force",
			"http://media.pldh.net/pokexycons/208-mega.png",
			new BASESTATS (75,125,230,55,95,30))])),

	Snubbull: new SPECIES(
		["Fairy"],
		["Intimidate","Run Away","Rattled"],
		["Male","Female"],
		7.8,
		"http://media.pldh.net/pokexycons/209.png",
		new BASESTATS (60,80,50,40,40,30),
		new FORMECHANGE (false)),

	Snubbull: new SPECIES(
		["Fairy"],
		["Intimidate","Quick Feet","Rattled"],
		["Male","Female"],
		48.7,
		"http://media.pldh.net/pokexycons/210.png",
		new BASESTATS (90,120,75,60,60,45),
		new FORMECHANGE (false)),

	Qwilfish: new SPECIES(
		["Water","Poison"],
		["Poison Point","Swift Swim","Intimidate"],
		["Male","Female"],
		3.9,
		"http://media.pldh.net/pokexycons/211.png",
		new BASESTATS (65,95,75,55,55,85),
		new FORMECHANGE (false)),

	Scizor: new SPECIES(
		["Bug","Steel"],
		["Swarm","Technician","Light Metal"],
		["Male","Female"],
		118.0,
		"http://media.pldh.net/pokexycons/212.png",
		new BASESTATS (70,130,100,55,80,65),
		new FORMECHANGE (true,["Mega",new FORME(
			["Bug","Steel"],
			"Technician",
			"http://media.pldh.net/pokexycons/212-mega.png",
			new BASESTATS (70,150,140,65,100,75))])),

	Shuckle: new SPECIES(
		["Bug","Rock"],
		["Sturdy","Gluttony","Contrary"],
		["Male","Female"],
		20.5,
		"http://media.pldh.net/pokexycons/213.png",
		new BASESTATS (20,10,230,10,230,5),
		new FORMECHANGE (false)),

	Heracross: new SPECIES(
		["Bug","Fight"],
		["Swarm","Guts","Moxie"],
		["Male","Female"],
		54.0,
		"http://media.pldh.net/pokexycons/214.png",
		new BASESTATS (80,125,75,40,95,85),
		new FORMECHANGE (true,["Mega",new FORME(
			["Bug","Fight"],
			"Skill Link",
			"http://media.pldh.net/pokexycons/214-mega.png",
			new BASESTATS (80,185,115,40,105,75))])),

	Sneasel: new SPECIES(
		["Dark","Ice"],
		["Inner Focus","Keen Eye","Pickpocket"],
		["Male","Female"],
		28.0,
		"http://media.pldh.net/pokexycons/215.png",
		new BASESTATS (55,95,55,35,75,115),
		new FORMECHANGE (false)),

	Teddiursa: new SPECIES(
		["Normal"],
		["Pickup","Quick Feet","Honey Gather"],
		["Male","Female"],
		8.8,
		"http://media.pldh.net/pokexycons/216.png",
		new BASESTATS (60,80,50,50,50,40),
		new FORMECHANGE (false)),

	Ursaring: new SPECIES(
		["Normal"],
		["Guts","Quick Feet","Unnerve"],
		["Male","Female"],
		125.8,
		"http://media.pldh.net/pokexycons/217.png",
		new BASESTATS (90,130,75,75,75,55),
		new FORMECHANGE (false)),

	Slugma: new SPECIES(
		["Fire"],
		["Magma Armor","Flame Body","Weak Armor"],
		["Male","Female"],
		35.0,
		"http://media.pldh.net/pokexycons/218.png",
		new BASESTATS (40,40,40,70,40,20),
		new FORMECHANGE (false)),

	Magcargo: new SPECIES(
		["Fire","Rock"],
		["Magma Armor","Flame Body","Weak Armor"],
		["Male","Female"],
		55.0,
		"http://media.pldh.net/pokexycons/219.png",
		new BASESTATS (50,50,120,80,80,30),
		new FORMECHANGE (false)),

	Swinub: new SPECIES(
		["Ice","Ground"],
		["Oblivious","Snow Cloak","Thick Fat"],
		["Male","Female"],
		6.5,
		"http://media.pldh.net/pokexycons/220.png",
		new BASESTATS (50,50,40,30,30,50),
		new FORMECHANGE (false)),

	Piloswine: new SPECIES(
		["Ice","Ground"],
		["Oblivious","Snow Cloak","Thick Fat"],
		["Male","Female"],
		55.8,
		"http://media.pldh.net/pokexycons/221.png",
		new BASESTATS (100,100,80,60,60,50),
		new FORMECHANGE (false)),

	Corsola: new SPECIES(
		["Water","Rock"],
		["Hustle","Natural Cure","Regenerator"],
		["Male","Female"],
		5.0,
		"http://media.pldh.net/pokexycons/222.png",
		new BASESTATS (55,55,85,65,85,35),
		new FORMECHANGE (false)),

	Remoraid: new SPECIES(
		["Water"],
		["Hustle","Sniper","Moody"],
		["Male","Female"],
		12.0,
		"http://media.pldh.net/pokexycons/223.png",
		new BASESTATS (35,65,35,65,35,65),
		new FORMECHANGE (false)),

	Octillery: new SPECIES(
		["Water"],
		["Suction Cups","Sniper","Moody"],
		["Male","Female"],
		28.5,
		"http://media.pldh.net/pokexycons/224.png",
		new BASESTATS (75,105,75,105,75,45),
		new FORMECHANGE (false)),

	Delibird: new SPECIES(
		["Ice","Flying"],
		["Vital Spirit","Hustle","Insomnia"],
		["Male","Female"],
		16.0,
		"http://media.pldh.net/pokexycons/225.png",
		new BASESTATS (45,55,45,65,45,75),
		new FORMECHANGE (false)),

	Mantine: new SPECIES(
		["Water","Flying"],
		["Swift Swim","Water Absorb","Water Veil"],
		["Male","Female"],
		220.0,
		"http://media.pldh.net/pokexycons/226.png",
		new BASESTATS (65,40,70,80,140,70),
		new FORMECHANGE (false)),

	Skarmory: new SPECIES(
		["Steel","Flying"],
		["Keen Eye","Sturdy","Weak Armor"],
		["Male","Female"],
		50.5,
		"http://media.pldh.net/pokexycons/227.png",
		new BASESTATS (65,80,140,40,70,70),
		new FORMECHANGE (false)),

	Houndour: new SPECIES(
		["Fire"],
		["Early Bird","Flash Fire","Unnerve"],
		["Male","Female"],
		10.8,
		"http://media.pldh.net/pokexycons/228.png",
		new BASESTATS (45,60,30,80,50,65),
		new FORMECHANGE (false)),

	Houndoom: new SPECIES(
		["Fire"],
		["Early Bird","Flash Fire","Unnerve"],
		["Male","Female"],
		35.0,
		"http://media.pldh.net/pokexycons/229.png",
		new BASESTATS (75,90,50,110,80,95),
		new FORMECHANGE (true,["Mega",new FORME(
			["Bug","Fight"],
			"Skill Link",
			"http://media.pldh.net/pokexycons/229-mega.png",
			new BASESTATS (75,90,90,140,90,115))])),

	Kingdra: new SPECIES(
		["Water","Dragon"],
		["Swift Swim","Sniper","Damp"],
		["Male","Female"],
		152.0,
		"http://media.pldh.net/pokexycons/230.png",
		new BASESTATS (75,95,95,95,95,85),
		new FORMECHANGE (false)),

	Phanpy: new SPECIES(
		["Ground"],
		["Pickup","Sand Veil"],
		["Male","Female"],
		33.5,
		"http://media.pldh.net/pokexycons/231.png",
		new BASESTATS (90,60,60,40,40,40),
		new FORMECHANGE (false)),

	Donphan: new SPECIES(
		["Ground"],
		["Sturdy","Sand Veil"],
		["Male","Female"],
		120.0,
		"http://media.pldh.net/pokexycons/232.png",
		new BASESTATS (90,120,120,60,60,50),
		new FORMECHANGE (false)),

	Porygon2: new SPECIES(
		["Normal"],
		["Trace","Download","Analytic"],
		["Male","Female"],
		32.5,
		"http://media.pldh.net/pokexycons/233.png",
		new BASESTATS (85,80,90,105,95,60),
		new FORMECHANGE (false)),

	Stantler: new SPECIES(
		["Normal"],
		["Intimidate","Frisk","Sap Sipper"],
		["Male","Female"],
		71.2,
		"http://media.pldh.net/pokexycons/234.png",
		new BASESTATS (73,95,62,85,65,85),
		new FORMECHANGE (false)),

	Smeargle: new SPECIES(
		["Normal"],
		["Own Tempo","Technician","Moody"],
		["Male","Female"],
		58.0,
		"http://media.pldh.net/pokexycons/235.png",
		new BASESTATS (55,20,35,20,45,75),
		new FORMECHANGE (false)),

	Tyrogue: new SPECIES(
		["Fighting"],
		["Guts","Steadfast","Vital Spirit"],
		["Male","Female"],
		21.0,
		"http://media.pldh.net/pokexycons/236.png",
		new BASESTATS (35,35,35,35,35,35),
		new FORMECHANGE (false)),

	Hitmontop: new SPECIES(
		["Fighting"],
		["Intimidate","Technician","Steadfast"],
		["Male","Female"],
		48.0,
		"http://media.pldh.net/pokexycons/237.png",
		new BASESTATS (50,95,95,35,110,75),
		new FORMECHANGE (false)),

	Smoochum: new SPECIES(
		["Ice","Psychic"],
		["Oblivious","Forewarn","Hydration"],
		["Male","Female"],
		6.0,
		"http://media.pldh.net/pokexycons/238.png",
		new BASESTATS (45,30,15,85,65,65),
		new FORMECHANGE (false)),

	Elekid: new SPECIES(
		["Electric"],
		["Static","Vital Spirit"],
		["Male","Female"],
		23.5,
		"http://media.pldh.net/pokexycons/239.png",
		new BASESTATS (45,63,37,65,55,95),
		new FORMECHANGE (false)),

	Magby: new SPECIES(
		["Fire"],
		["Flame Body","Vital Spirit"],
		["Male","Female"],
		21.4,
		"http://media.pldh.net/pokexycons/240.png",
		new BASESTATS (45,75,37,70,55,83),
		new FORMECHANGE (false)),

	Miltank: new SPECIES(
		["Normal"],
		["Thick Fat","Scrappy","Sap Sipper"],
		["Male","Female"],
		75.5,
		"http://media.pldh.net/pokexycons/241.png",
		new BASESTATS (95,80,105,40,70,100),
		new FORMECHANGE (false)),

	Blissey: new SPECIES(
		["Normal"],
		["Natural Cure","Serene Grace","Healer"],
		["Male","Female"],
		46.8,
		"http://media.pldh.net/pokexycons/242.png",
		new BASESTATS (255,10,10,75,135,55),
		new FORMECHANGE (false)),

	Raikou: new SPECIES(
		["Electric"],
		["Pressure","Volt Absorb"],
		["Genderless"],
		178.0,
		"http://media.pldh.net/pokexycons/243.png",
		new BASESTATS (90,85,75,115,100,115),
		new FORMECHANGE (false)),

	Entei: new SPECIES(
		["Fire"],
		["Pressure","Flash Fire"],
		["Genderless"],
		198.0,
		"http://media.pldh.net/pokexycons/244.png",
		new BASESTATS (115,115,85,90,75,100),
		new FORMECHANGE (false)),

	Suicune: new SPECIES(
		["Water"],
		["Pressure","Water Absorb"],
		["Genderless"],
		187.0,
		"http://media.pldh.net/pokexycons/245.png",
		new BASESTATS (100,75,115,90,115,85),
		new FORMECHANGE (false)),

	Larvitar: new SPECIES(
		["Rock","Ground"],
		["Guts","Sand Veil"],
		["Male","Female"],
		72.0,
		"http://media.pldh.net/pokexycons/246.png",
		new BASESTATS (50,64,50,45,50,41),
		new FORMECHANGE (false)),

	Pupitar: new SPECIES(
		["Rock","Ground"],
		["Shed Skin"],
		["Male","Female"],
		152.0,
		"http://media.pldh.net/pokexycons/247.png",
		new BASESTATS (70,84,70,65,70,51),
		new FORMECHANGE (false)),

	Tyranitar: new SPECIES(
		["Rock","Ground"],
		["Sand Stream","Unnerve"],
		["Male","Female"],
		202.0,
		"http://media.pldh.net/pokexycons/248.png",
		new BASESTATS (100,134,110,95,100,61),
		new FORMECHANGE (true,["Mega",new FORME(
			["Rock","Dark"],
			"Sand Stream",
			"http://media.pldh.net/pokexycons/248-mega.png",
			new BASESTATS (100,164,150,95,120,71))])),

	Lugia: new SPECIES(
		["Psychic","Flying"],
		["Pressure","Multiscale"],
		["Genderless"],
		216.0,
		"http://media.pldh.net/pokexycons/249.png",
		new BASESTATS (106,90,130,90,154,110),
		new FORMECHANGE (false)),

	"Ho-Oh": new SPECIES(
		["Fire","Flying"],
		["Pressure","Regenerator"],
		["Genderless"],
		199.0,
		"http://media.pldh.net/pokexycons/250.png",
		new BASESTATS (106,130,90,110,154,90),
		new FORMECHANGE (false)),

	Celebi: new SPECIES(
		["Psychic","Grass"],
		["Natural Cure"],
		["Genderless"],
		5.0,
		"http://media.pldh.net/pokexycons/251.png",
		new BASESTATS (100,100,100,100,100,100),
		new FORMECHANGE (false)),/*
	Treecko: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Grovyle: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Sceptile: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Sceptile: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Torchic: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Combusken: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Blaziken: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Blaziken: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Mudkip: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Marshtomp: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Swampert: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Swampert: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Poochyena: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Mightyena: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Zigzagoon: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Linoone: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Wurmple: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Silcoon: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Beautifly: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Cascoon: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))])),
	Dustox: new SPECIES (["Type1","Type2"] , ["Ability1","Ability2","Ability3"] , ["Male","Female","Genderless"] , "sprite.png", new BASESTATS (0,0,0,0,0,0) , new FORMECHANGE (true , ["Mega-Name", new FORME (["Type1","Type2"] , "Ability" , "sprite.png", new BASESTATS (0,0,0,0,0,0))]))/*,
	Lotad
	Lombre
	Ludicolo
	Seedot
	Nuzleaf
	Shiftry
	Taillow
	Swellow
	Wingull
	Pelipper
	Ralts
	Kirlia
	Gardevoir
	Gardevoir
	Surskit
	Masquerain
	Shroomish
	Breloom
	Slakoth
	Vigoroth
	Slaking
	Nincada
	Ninjask
	Shedinja
	Whismur
	Loudred
	Exploud
	Makuhita
	Hariyama
	Azurill
	Nosepass
	Skitty
	Delcatty
	Sableye
	Sableye
	Mawile
	Mawile
	Aron
	Lairon
	Aggron
	Aggron
	Meditite
	Medicham
	Medicham
	Electrike
	Manectric
	Manectric
	Plusle
	Minun
	Volbeat
	Illumise
	Roselia
	Gulpin
	Swalot
	Carvanha
	Sharpedo
	Sharpedo
	Wailmer
	Wailord
	Numel
	Camerupt
	Camerupt
	Torkoal
	Spoink
	Grumpig
	Spinda
	Trapinch
	Vibrava
	Flygon
	Cacnea
	Cacturne
	Swablu
	Altaria
	Altaria
	Zangoose
	Seviper
	Lunatone
	Solrock
	Barboach
	Whiscash
	Corphish
	Crawdaunt
	Baltoy
	Claydol
	Lileep
	Cradily
	Anorith
	Armaldo
	Feebas
	Milotic
	Castform
	Castform
	Castform
	Castform
	Kecleon
	Shuppet
	Banette
	Banette
	Duskull
	Dusclops
	Tropius
	Chimecho
	Absol
	Absol
	Wynaut
	Snorunt
	Glalie
	Glalie
	Spheal
	Sealeo
	Walrein
	Clamperl
	Huntail
	Gorebyss
	Relicanth
	Luvdisc
	Bagon
	Shelgon
	Salamence
	Salamence
	Beldum
	Metang
	Metagross
	Metagross
	Regirock
	Regice
	Registeel
	Latias
	Latias
	Latios
	Latios
	Kyogre
	Kyogre
	Groudon
	Groudon
	Rayquaza
	Rayquaza
	Jirachi
	Deoxys
	Deoxys
	Deoxys
	Deoxys
	Turtwig
	Grotle
	Torterra
	Chimchar
	Monferno
	Infernape
	Piplup
	Prinplup
	Empoleon
	Starly
	Staravia
	Staraptor
	Bidoof
	Bibarel
	Kricketot
	Kricketune
	Shinx
	Luxio
	Luxray
	Budew
	Roserade
	Cranidos
	Rampardos
	Shieldon
	Bastiodon
	Burmy
	Wormadam
	Wormadam
	Wormadam
	Mothim
	Combee
	Vespiquen
	Pachirisu
	Buizel
	Floatzel
	Cherubi
	Cherrim
	Shellos
	Gastrodon
	Ambipom
	Drifloon
	Drifblim
	Buneary
	Lopunny
	Lopunny
	Mismagius
	Honchkrow
	Glameow
	Purugly
	Chingling
	Stunky
	Skuntank
	Bronzor
	Bronzong
	Bonsly
	Mime Jr.
	Happiny
	Chatot
	Spiritomb
	Gible
	Gabite
	Garchomp
	Garchomp
	Munchlax
	Riolu
	Lucario
	Lucario
	Hippopotas
	Hippowdon
	Skorupi
	Drapion
	Croagunk
	Toxicroak
	Carnivine
	Finneon
	Lumineon
	Mantyke
	Snover
	Abomasnow
	Abomasnow
	Weavile
	Magnezone
	Lickilicky
	Rhyperior
	Tangrowth
	Electivire
	Magmortar
	Togekiss
	Yanmega
	Leafeon
	Glaceon
	Gliscor
	Mamoswine
	Porygon-Z
	Gallade
	Gallade
	Probopass
	Dusknoir
	Froslass
	Rotom
	Rotom
	Rotom
	Rotom
	Rotom
	Rotom
	Uxie
	Mesprit
	Azelf
	Dialga
	Palkia
	Heatran
	Regigigas
	Giratina
	Giratina
	Cresselia
	Phione
	Manaphy
	Darkrai
	Shaymin
	Shaymin
	Arceus
	Victini*/
	
	Victini: new SPECIES(
		["Psychic","Fire"],
		["Victory Star"],
		["Genderless"],
		4.0,
		"http://media.pldh.net/pokexycons/494.png",
		new BASESTATS (100,100,100,100,100,100),
		new FORMECHANGE (false)),
	Snivy: new SPECIES(
		["Grass"],
		["Overgrow","Contrary"],
		["Male","Female"],
		8.1,
		"http://media.pldh.net/pokexycons/495.png",
		new BASESTATS (45,45,55,45,55,63),
		new FORMECHANGE (false)),
	Servine: new SPECIES(
		["Grass"],
		["Overgrow","Contrary"],
		["Male","Female"],
		16.0,
		"http://media.pldh.net/pokexycons/496.png",
		new BASESTATS (60,60,75,60,75,83),
		new FORMECHANGE (false)),
	Serperior: new SPECIES(
		["Grass"],
		["Overgrow","Contrary"],
		["Male","Female"],
		63.0,
		"http://media.pldh.net/pokexycons/497.png",
		new BASESTATS (75,75,95,75,95,113),
		new FORMECHANGE (false)),
	Tepig: new SPECIES(
		["Fire"],
		["Blaze","Thick Fat"],
		["Male","Female"],
		9.9,
		"http://media.pldh.net/pokexycons/498.png",
		new BASESTATS (65,63,45,45,45,45),
		new FORMECHANGE (false)),
	Pignite: new SPECIES(
		["Fire","Fighting"],
		["Blaze","Thick Fat"],
		["Male","Female"],
		55.5,
		"http://media.pldh.net/pokexycons/499.png",
		new BASESTATS (90,93,55,70,55,55),
		new FORMECHANGE (false)),
	Emboar: new SPECIES(
		["Fire","Fighting"],
		["Blaze","Reckless"],
		["Male","Female"],
		150.0,
		"http://media.pldh.net/pokexycons/500.png",
		new BASESTATS (110,123,65,100,65,65),
		new FORMECHANGE (false)),
	Oshawott: new SPECIES(
		["Water"],
		["Torrent","Shell Armor"],
		["Male","Female"],
		5.9,
		"http://media.pldh.net/pokexycons/501.png",
		new BASESTATS (55,55,45,63,45,45),
		new FORMECHANGE (false)),
	Dewott: new SPECIES(
		["Water"],
		["Torrent","Shell Armor"],
		["Male","Female"],
		24.5,
		"http://media.pldh.net/pokexycons/502.png",
		new BASESTATS (75,75,60,83,60,60),
		new FORMECHANGE (false)),
	Samurott: new SPECIES(
		["Water"],
		["Torrent","Shell Armor"],
		["Male","Female"],
		94.6,
		"http://media.pldh.net/pokexycons/503.png",
		new BASESTATS (95,100,85,108,70,70),
		new FORMECHANGE (false)),
	Patrat: new SPECIES(
		["Normal"],
		["Run Away","Keen Eye","Analytic"],
		["Male","Female"],
		11.6,
		"http://media.pldh.net/pokexycons/504.png",
		new BASESTATS (45,55,39,35,39,42),
		new FORMECHANGE (false)),
	Watchog: new SPECIES(
		["Normal"],
		["Illuminate","Keen Eye","Analytic"],
		["Male","Female"],
		27.0,
		"http://media.pldh.net/pokexycons/505.png",
		new BASESTATS (60,85,69,60,69,77),
		new FORMECHANGE (false)),
	Lillipup: new SPECIES(
		["Normal"],
		["Vital Spirit","Pickup","Run Away"],
		["Male","Female"],
		4.1,
		"http://media.pldh.net/pokexycons/506.png",
		new BASESTATS (45,60,45,25,45,55),
		new FORMECHANGE (false)),
	Herdier: new SPECIES(
		["Type1","Type2"],
		["Intimidate","Sand Rush","Scrappy"],
		["Male","Female"],
		14.7,
		"http://media.pldh.net/pokexycons/507.png",
		new BASESTATS (65,80,65,35,65,60),
		new FORMECHANGE (false)),
	Stoutland: new SPECIES(
		["Normal"],
		["Intimidate","Sand Rush","Scrappy"],
		["Male","Female"],
		61.0,
		"http://media.pldh.net/pokexycons/508.png",
		new BASESTATS (85,110,90,45,90,80),
		new FORMECHANGE (false)),
	Purrloin: new SPECIES(
		["Dark"],
		["Limber","Unburden","Prankster"],
		["Male","Female"],
		10.1,
		"http://media.pldh.net/pokexycons/509.png",
		new BASESTATS (41,50,37,50,37,66),
		new FORMECHANGE (false)),
	Liepard: new SPECIES(
		["Dark"],
		["Limber","Unburden","Prankster"],
		["Male","Female"],
		37.7,
		"http://media.pldh.net/pokexycons/510.png",
		new BASESTATS (64,88,50,88,50,106),
		new FORMECHANGE (false)),
	Pansage: new SPECIES(
		["Grass"],
		["Gluttony","Overgrow"],
		["Male","Female"],
		10.5,
		"http://media.pldh.net/pokexycons/511.png",
		new BASESTATS (50,53,48,53,48,64),
		new FORMECHANGE (false)),
	Simisage: new SPECIES(
		["Grass"],
		["Gluttony","Overgrow"],
		["Male","Female"],
		30.5,
		"http://media.pldh.net/pokexycons/512.png",
		new BASESTATS (75,98,63,98,63,101),
		new FORMECHANGE (false)),
	Pansear: new SPECIES(
		["Fire"],
		["Gluttony","Blaze"],
		["Male","Female"],
		11.0,
		"http://media.pldh.net/pokexycons/513.png",
		new BASESTATS (50,53,48,53,48,64),
		new FORMECHANGE (false)),
	Simisear: new SPECIES(
		["Fire"],
		["Gluttony","Blaze"],
		["Male","Female"],
		28.0,
		"http://media.pldh.net/pokexycons/514.png",
		new BASESTATS (75,98,63,98,63,101),
		new FORMECHANGE (false)),
	Panpour: new SPECIES(
		["Water"],
		["Gluttony","Torrent"],
		["Male","Female"],
		13.5,
		"http://media.pldh.net/pokexycons/515.png",
		new BASESTATS (50,53,48,53,48,64),
		new FORMECHANGE (false)),
	Simipour: new SPECIES(
		["Water"],
		["Gluttony","Torrent"],
		["Male","Female"],
		29.0,
		"http://media.pldh.net/pokexycons/516.png",
		new BASESTATS (75,98,63,98,63,101),
		new FORMECHANGE (false)),
	Munna: new SPECIES(
		["Psychic"],
		["Forewarn","Synchronize","Telepathy"],
		["Male","Female"],
		23.3,
		"http://media.pldh.net/pokexycons/517.png",
		new BASESTATS (76,25,45,67,55,24),
		new FORMECHANGE (false)),
	Musharna: new SPECIES(
		["Psychic"],
		["Forewarn","Synchronize","Telepathy"],
		["Male","Female"],
		60.5,
		"http://media.pldh.net/pokexycons/518.png",
		new BASESTATS (116,55,85,107,95,29),
		new FORMECHANGE (false)),
	Pidove: new SPECIES(
		["Normal","Flying"],
		["Big Pecks","Super Luck","Rivalry"],
		["Male","Female"],
		2.1,
		"http://media.pldh.net/pokexycons/519.png",
		new BASESTATS (50,55,50,36,30,43),
		new FORMECHANGE (false)),
	Tranquill: new SPECIES(
		["Normal","Flying"],
		["Big Pecks","Super Luck","Rivalry"],
		["Male","Female"],
		15.0,
		"http://media.pldh.net/pokexycons/520.png",
		new BASESTATS (62,77,62,50,42,65),
		new FORMECHANGE (false)),
	Unfezant: new SPECIES(
		["Normal","Flying"],
		["Big Pecks","Super Luck","Rivalry"],
		["Male","Female"],
		29.0,
		"http://media.pldh.net/pokexycons/521.png",
		new BASESTATS (80,115,80,65,55,93),
		new FORMECHANGE (false)),
	Blitzle: new SPECIES(
		["Electric"],
		["Lightningrod","Motor Drive","Sap Sipper"],
		["Male","Female"],
		29.8,
		"http://media.pldh.net/pokexycons/522.png",
		new BASESTATS (45,60,32,50,32,76),
		new FORMECHANGE (false)),
	Zebstrika: new SPECIES(
		["Electric"],
		["Lightningrod","Motor Drive","Sap Sipper"],
		["Male","Female"],
		79.5,
		"http://media.pldh.net/pokexycons/523.png",
		new BASESTATS (75,100,63,80,63,116),
		new FORMECHANGE (false)),
	Roggenrola: new SPECIES(
		["Rock"],
		["Sturdy","Sand Force"],
		["Male","Female"],
		18.0,
		"http://media.pldh.net/pokexycons/524.png",
		new BASESTATS (55,75,85,25,25,15),
		new FORMECHANGE (false)),
	Boldore: new SPECIES(
		["Rock"],
		["Sturdy","Sand Force"],
		["Male","Female"],
		102.0,
		"http://media.pldh.net/pokexycons/525.png",
		new BASESTATS (70,105,105,50,40,20),
		new FORMECHANGE (false)),
	Gigalith: new SPECIES(
		["Rock"],
		["Sturdy","Sand Force"],
		["Male","Female"],
		260.0,
		"http://media.pldh.net/pokexycons/526.png",
		new BASESTATS (85,135,130,60,80,25),
		new FORMECHANGE (false)),
	Woobat: new SPECIES(
		["Psychic","Flying"],
		["Unaware","Klutz","Simple"],
		["Male","Female"],
		2.1,
		"http://media.pldh.net/pokexycons/527.png",
		new BASESTATS (55,45,43,55,43,72),
		new FORMECHANGE (false)),
	Swoobat: new SPECIES(
		["Psychic","Flying"],
		["Unaware","Klutz","Simple"],
		["Male","Female"],
		10.5,
		"http://media.pldh.net/pokexycons/528.png",
		new BASESTATS (67,57,55,77,55,114),
		new FORMECHANGE (false)),
	Drilbur: new SPECIES(
		["Ground"],
		["Sand Rush","Sand Force","Mold Breaker"],
		["Male","Female"],
		8.5,
		"http://media.pldh.net/pokexycons/529.png",
		new BASESTATS (60,85,40,30,45,68),
		new FORMECHANGE (false)),
	Excadrill: new SPECIES(
		["Ground","Steel"],
		["Sand Rush","Sand Force","Mold Breaker"],
		["Male","Female"],
		40.4,
		"http://media.pldh.net/pokexycons/530.png",
		new BASESTATS (110,135,60,50,65,88),
		new FORMECHANGE (false)),
	Audino: new SPECIES(
		["Normal"],
		["Healer","Regenerator","Klutz"],
		["Male","Female"],
		68.3,
		"http://media.pldh.net/pokexycons/531.png",
		new BASESTATS (103,60,86,60,86,50),
		new FORMECHANGE (true,["Mega",new FORME(
			["Normal","Fairy"],
			"Healer",
			"http://pldh.net/media/pokexycons/531-mega.png",
			new BASESTATS(103,60,126,80,126,50))])),
	Timburr: new SPECIES(
		["Fighting"],
		["Guts","Sheer Force","Iron Fist"],
		["Male","Female"],
		12.5,
		"http://media.pldh.net/pokexycons/532.png",
		new BASESTATS (75,80,55,25,35,35),
		new FORMECHANGE (false)),
	Gurdurr: new SPECIES(
		["Fighting"],
		["Guts","Sheer Force","Iron Fist"],
		["Male","Female"],
		40.0,
		"http://media.pldh.net/pokexycons/533.png",
		new BASESTATS (85,105,85,40,50,40),
		new FORMECHANGE (false)),
	Conkeldurr: new SPECIES(
		["Fighting"],
		["Guts","Sheer Force","Iron Fist"],
		["Male","Female"],
		87.0,
		"http://media.pldh.net/pokexycons/534.png",
		new BASESTATS (105,140,95,55,65,45),
		new FORMECHANGE (false)),
	Tympole: new SPECIES(
		["Water"],
		["Swift Swim","Hydration","Water Absorb"],
		["Male","Female"],
		4.5,
		"http://media.pldh.net/pokexycons/535.png",
		new BASESTATS (50,50,40,50,40,64),
		new FORMECHANGE (false)),
	Palpitoad: new SPECIES(
		["Water","Ground"],
		["Swift Swim","Hydration","Water Absorb"],
		["Male","Female"],
		17.0,
		"http://media.pldh.net/pokexycons/536.png",
		new BASESTATS (75,65,55,65,55,59),
		new FORMECHANGE (false)),
	Seismitoad: new SPECIES(
		["Water","Ground"],
		["Swift Swim","Poison Touch","Water Absorb"],
		["Male","Female"],
		62.0,
		"http://media.pldh.net/pokexycons/537.png",
		new BASESTATS (105,95,75,85,75,74),
		new FORMECHANGE (false)),
	Throh: new SPECIES(
		["Fighting"],
		["Guts","Inner Focus","Mold Breaker"],
		["Male"],
		55.5,
		"http://media.pldh.net/pokexycons/538.png",
		new BASESTATS (120,100,85,30,85,45),
		new FORMECHANGE (false)),
	Sawk: new SPECIES(
		["Fighting"],
		["Sturdy","Inner Focus","Mold Breaker"],
		["Male"],
		51.0,
		"http://media.pldh.net/pokexycons/539.png",
		new BASESTATS (75,125,75,30,75,85),
		new FORMECHANGE (false)),
	Sewaddle: new SPECIES(
		["Bug","Grass"],
		["Swarm","Chlorophyll","Overcoat"],
		["Male","Female"],
		2.5,
		"http://media.pldh.net/pokexycons/540.png",
		new BASESTATS (45,53,70,40,60,42),
		new FORMECHANGE (false)),
	Swadloon: new SPECIES(
		["Bug","Grass"],
		["Leaf Guard","Chlorophyll","Overcoat"],
		["Male","Female"],
		7.3,
		"http://media.pldh.net/pokexycons/541.png",
		new BASESTATS (55,63,90,50,80,42),
		new FORMECHANGE (false)),
	Leavanny: new SPECIES(
		["Bug","Grass"],
		["Leaf Guard","Chlorophyll","Overcoat"],
		["Male","Female"],
		20.5,
		"http://media.pldh.net/pokexycons/542.png",
		new BASESTATS (75,103,80,70,80,92),
		new FORMECHANGE (false)),
	Venipede: new SPECIES(
		["Bug","Poison"],
		["Poison Point","Swarm","Speed Boost"],
		["Male","Female"],
		5.3,
		"http://media.pldh.net/pokexycons/543.png",
		new BASESTATS (30,45,59,30,39,57),
		new FORMECHANGE (false)),
	Whirlipede: new SPECIES(
		["Bug","Poison"],
		["Poison Point","Swarm","Speed Boost"],
		["Male","Female"],
		58.5,
		"http://media.pldh.net/pokexycons/544.png",
		new BASESTATS (40,55,99,40,79,47),
		new FORMECHANGE (false)),
	Scolipede: new SPECIES(
		["Bug","Poison"],
		["Poison Point","Swarm","Speed Boost"],
		["Male","Female"],
		200.5,
		"http://media.pldh.net/pokexycons/545.png",
		new BASESTATS (60,100,89,55,69,122),
		new FORMECHANGE (false)),
	Cottonee: new SPECIES(
		["Grass","Fairy"],
		["Prankster"," Infiltrator","Chlorophyll"],
		["Male","Female"],
		0.6,
		"http://media.pldh.net/pokexycons/546.png",
		new BASESTATS (40,27,60,37,50,66),
		new FORMECHANGE (false)),
	Whimsicott: new SPECIES(
		["Grass","Fairy"],
		["Prankster"," Infiltrator","Chlorophyll"],
		["Male","Female"],
		6.6,
		"http://media.pldh.net/pokexycons/547.png",
		new BASESTATS (60,67,85,77,75,116),
		new FORMECHANGE (false)),
	Petlil: new SPECIES(
		["Grass"],
		["Chlorophyll","Own Tempo","Own Tempo"],
		["Female"],
		6.6,
		"http://media.pldh.net/pokexycons/548.png",
		new BASESTATS (45,35,50,70,50,30),
		new FORMECHANGE (false)),
	Lilligant: new SPECIES(
		["Grass"],
		["Chlorophyll","Own Tempo","Own Tempo"],
		["Female"],
		16.3,
		"http://media.pldh.net/pokexycons/549.png",
		new BASESTATS (70,60,75,110,75,90),
		new FORMECHANGE (false)),
	BasculinRed: new SPECIES(
		["Water"],
		["Reckless","Adaptability","Mold Breaker"],
		["Male","Female"],
		18.0,
		"http://media.pldh.net/pokexycons/550.png",
		new BASESTATS (70,92,65,80,55,98),
		new FORMECHANGE (false)),
	BasculinBlue: new SPECIES(
		["Water"],
		["Rock Head","Adaptability","Mold Breaker"],
		["Male","Female"],
		18.0,
		"http://media.pldh.net/pokexycons/550-blue.png",
		new BASESTATS (70,92,65,80,55,98),
		new FORMECHANGE (false)),
	Sandile: new SPECIES(
		["Ground","Dark"],
		["Intimidate","Moxie","Anger Point"],
		["Male","Female"],
		15.2,
		"http://media.pldh.net/pokexycons/551.png",
		new BASESTATS (50,72,35,35,35,65),
		new FORMECHANGE (false)),

	Krokorok: new SPECIES(
		["Ground","Dark"],
		["Intimidate","Moxie","Anger Point"],
		["Male","Female"],
		33.4,
		"http://media.pldh.net/pokexycons/552.png",
		new BASESTATS (60,82,45,45,45,74),
		new FORMECHANGE (false)),

	Krookodile: new SPECIES(
		["Ground","Dark"],
		["Intimidate","Moxie","Anger Point"],
		["Male","Female"],
		96.3,
		"http://media.pldh.net/pokexycons/553.png",
		new BASESTATS (95,117,80,65,70,92),
		new FORMECHANGE (false)),

	Darumaka: new SPECIES(
		["Fire"],
		["Hustle","Inner Focus"],
		["Male","Female"],
		37.5,
		"http://media.pldh.net/pokexycons/554.png",
		new BASESTATS (70,90,45,15,45,50),
		new FORMECHANGE (false)),

	Darmanitan: new SPECIES(
		["Fire"],
		["Sheer Force","Zen Mode"],
		["Male","Female","Genderless"],
		92.9,
		"http://media.pldh.net/pokexycons/555.png",
		new BASESTATS (105,140,55,30,55,95),
		new FORMECHANGE (true,["Zen-Mode",new FORME(
			["Fire","Psychic"],
			["Zen Mode"],
			92.9,
			"http://media.pldh.net/pokexycons/555-mode.png",
			new BASESTATS (105,30,105,140,105,55))])),
	Maractus: new SPECIES(
		["Grass"],
		["Water Absorb","Chlorophyll","Storm Drain"],
		["Male","Female"],
		28.0,
		"http://media.pldh.net/pokexycons/556.png",
		new BASESTATS (75,86,67,106,67,60),
		new FORMECHANGE (false)),
	Dwebble: new SPECIES(
		["Bug","Rock"],
		["Sturdy","Shell Armor","Weak Armor"],
		["Male","Female"],
		14.5,
		"http://media.pldh.net/pokexycons/557.png",
		new BASESTATS (50,65,85,35,35,55),
		new FORMECHANGE (false)),
	Crustle: new SPECIES(
		["Bug","Rock"],
		["Sturdy","Shell Armor","Weak Armor"],
		["Male","Female"],
		200.0,
		"http://media.pldh.net/pokexycons/558.png",
		new BASESTATS (70,95,125,65,75,45),
		new FORMECHANGE (false)),
	Scraggy: new SPECIES(
		["Dark","Fight"],
		["Shed Skin","Moxie","Intimidate"],
		["Male","Female"],
		11.8,
		"http://media.pldh.net/pokexycons/559.png",
		new BASESTATS (50,75,70,35,70,48),
		new FORMECHANGE (false)),
	Scrafty: new SPECIES(
		["Dark","Fight"],
		["Shed Skin","Moxie","Intimidate"],
		["Male","Female"],
		30.0,
		"http://media.pldh.net/pokexycons/560.png",
		new BASESTATS (65,90,115,45,115,58),
		new FORMECHANGE (false)),
	Sigilyph: new SPECIES(
		["Psychic","Flying"],
		["Wonder Skin","Magic Guard","Tinted Lens"],
		["Male","Female"],
		14.0,
		"http://media.pldh.net/pokexycons/561.png",
		new BASESTATS (72,58,80,103,80,97),
		new FORMECHANGE (false)),
	Yamask: new SPECIES(
		["Ghost"],
		["Mummy"],
		["Male","Female"],
		1.5,
		"http://media.pldh.net/pokexycons/562.png",
		new BASESTATS (38,30,85,55,65,30),
		new FORMECHANGE (false)),
	Cofagrigus: new SPECIES(
		["Ghost"],
		["Mummy"],
		["Male","Female"],
		76.5,
		"http://media.pldh.net/pokexycons/563.png",
		new BASESTATS (58,50,145,95,105,30),
		new FORMECHANGE (false)),
	Tirtouga: new SPECIES(
		["Water","Rock"],
		["Solid Rock","Sturdy","Swift Swim"],
		["Male","Female"],
		16.5,
		"http://media.pldh.net/pokexycons/564.png",
		new BASESTATS (54,78,103,53,45,22),
		new FORMECHANGE (false)),
	Carracosta: new SPECIES(
		["Water","Rock"],
		["Solid Rock","Sturdy","Swift Swim"],
		["Male","Female"],
		81.0,
		"http://media.pldh.net/pokexycons/565.png",
		new BASESTATS (74,108,133,83,65,32),
		new FORMECHANGE (false)),
	Archen: new SPECIES(
		["Rock","Flying"],
		["Defeatist"],
		["Male","Female"],
		9.5,
		"http://media.pldh.net/pokexycons/566.png",
		new BASESTATS (55,112,45,74,45,70),
		new FORMECHANGE (false)),
	Archeops: new SPECIES(
		["Rock","Flying"],
		["Defeatist"],
		["Male","Female"],
		32.0,
		"http://media.pldh.net/pokexycons/567.png",
		new BASESTATS (75,140,65,112,65,110),
		new FORMECHANGE (false)),
	Trubbish: new SPECIES(
		["Poison"],
		["Stench","Sticky Hold","Aftermath"],
		["Male","Female"],
		31.0,
		"http://media.pldh.net/pokexycons/568.png",
		new BASESTATS (50,50,62,40,62,65),
		new FORMECHANGE (false)),
	Garbodor: new SPECIES(
		["Poison"],
		["Stench","Weak Armor","Aftermath"],
		["Male","Female"],
		107.3,
		"http://media.pldh.net/pokexycons/569.png",
		new BASESTATS (80,95,82,60,82,75),
		new FORMECHANGE (false)),
	Zorua: new SPECIES(
		["Dark"],
		["Illusion"],
		["Male","Female"],
		12.5,
		"http://media.pldh.net/pokexycons/570.png",
		new BASESTATS (40,65,40,80,40,65),
		new FORMECHANGE (false)),
	Zoroark: new SPECIES(
		["Dark"],
		["Illusion"],
		["Male","Female"],
		81.1,
		"http://media.pldh.net/pokexycons/571.png",
		new BASESTATS (60,105,60,120,60,105),
		new FORMECHANGE (false)),
	Minccino: new SPECIES(
		["Normal"],
		["Cute Charm","Technician","Skill Link"],
		["Male","Female"],
		5.8,
		"http://media.pldh.net/pokexycons/572.png",
		new BASESTATS (55,50,40,40,40,75),
		new FORMECHANGE (false)),
	Cinccino: new SPECIES(
		["Normal"],
		["Cute Charm","Technician","Skill Link"],
		["Male","Female"],
		7.5,
		"http://media.pldh.net/pokexycons/573.png",
		new BASESTATS (75,95,60,65,60,115),
		new FORMECHANGE (false)),
	Gothita: new SPECIES(
		["Psychic"],
		["Frisk","Competitive","Shadow Tag"],
		["Male","Female"],
		5.8,
		"http://media.pldh.net/pokexycons/574.png",
		new BASESTATS (45,30,50,55,65,45),
		new FORMECHANGE (false)),
	Gothorita: new SPECIES(
		["Psychic"],
		["Frisk","Competitive","Shadow Tag"],
		["Male","Female"],
		18.0,
		"http://media.pldh.net/pokexycons/575.png",
		new BASESTATS (60,45,70,75,85,55),
		new FORMECHANGE (false)),
	Gothitelle: new SPECIES(
		["Psychic"],
		["Frisk","Competitive","Shadow Tag"],
		["Male","Female"],
		44.0,
		"http://media.pldh.net/pokexycons/576.png",
		new BASESTATS (70,55,95,95,110,65),
		new FORMECHANGE (false)),
	Solosis: new SPECIES(
		["Psychic"],
		["Overcoat","Magic Guard","Regenerator"],
		["Male","Female"],
		1.0,
		"http://media.pldh.net/pokexycons/577.png",
		new BASESTATS (45,30,40,105,50,20),
		new FORMECHANGE (false)),
	Duosion: new SPECIES(
		["Psychic"],
		["Overcoat","Magic Guard","Regenerator"],
		["Male","Female"],
		8.0,
		"http://media.pldh.net/pokexycons/578.png",
		new BASESTATS (65,40,50,125,60,30),
		new FORMECHANGE (false)),
	Reuniclus: new SPECIES(
		["Psychic"],
		["Overcoat","Magic Guard","Regenerator"],
		["Male","Female"],
		20.1,
		"http://media.pldh.net/pokexycons/579.png",
		new BASESTATS (110,65,75,125,85,30),
		new FORMECHANGE (false)),
	Ducklett: new SPECIES(
		["Water","Flying"],
		["Keen Eye","Big Pecks","Hydration"],
		["Male","Female"],
		5.5,
		"http://media.pldh.net/pokexycons/580.png",
		new BASESTATS (62,44,50,44,50,55),
		new FORMECHANGE (false)),
	Swanna: new SPECIES(
		["Water","Flying"],
		["Keen Eye","Big Pecks","Hydration"],
		["Male","Female"],
		24.2,
		"http://media.pldh.net/pokexycons/581.png",
		new BASESTATS (75,87,63,87,63,98),
		new FORMECHANGE (false)),
	Vanillite: new SPECIES(
		["Ice"],
		["Ice Body","Weak Armor"],
		["Male","Female"],
		5.7,
		"http://media.pldh.net/pokexycons/582.png",
		new BASESTATS (36,50,50,65,60,44),
		new FORMECHANGE (false)),
	Vanillish: new SPECIES(
		["Ice"],
		["Ice Body","Weak Armor"],
		["Male","Female"],
		41.0,
		"http://media.pldh.net/pokexycons/583.png",
		new BASESTATS (51,65,65,80,75,59),
		new FORMECHANGE (false)),
	Vanilluxe: new SPECIES(
		["Ice"],
		["Ice Body","Weak Armor"],
		["Male","Female"],
		57.5,
		"http://media.pldh.net/pokexycons/584.png",
		new BASESTATS (71,95,85,110,95,79),
		new FORMECHANGE (false)),
	Deerling: new SPECIES(
		["Normal","Grass"],
		["Chlorophyll","Sap Sipper","Serene Grace"],
		["Male","Female"],
		19.5,
		"http://media.pldh.net/pokexycons/585.png",
		new BASESTATS (60,60,50,40,50,75),
		new FORMECHANGE (false)),
	Sawsbuck: new SPECIES(
		["Normal","Grass"],
		["Chlorophyll","Sap Sipper","Serene Grace"],
		["Male","Female"],
		92.5,
		"http://media.pldh.net/pokexycons/586.png",
		new BASESTATS (80,100,70,60,70,95),
		new FORMECHANGE (false)),
	Emolga: new SPECIES(
		["Electric","Flying"],
		["Static","Motor Drive"],
		["Male","Female"],
		5.0,
		"http://media.pldh.net/pokexycons/587.png",
		new BASESTATS (55,75,60,75,60,103),
		new FORMECHANGE (false)),
	Karrablast: new SPECIES(
		["Bug"],
		["Swarm","Shed Skin","No Guard"],
		["Male","Female"],
		5.9,
		"http://media.pldh.net/pokexycons/588.png",
		new BASESTATS (50,75,45,40,45,60),
		new FORMECHANGE (false)),
	Escavalier: new SPECIES(
		["Bug","Steel"],
		["Swarm","Shell Armor","Overcoat"],
		["Male","Female"],
		33.0,
		"http://media.pldh.net/pokexycons/589.png",
		new BASESTATS (70,135,105,60,105,20),
		new FORMECHANGE (false)),
	Foongus: new SPECIES(
		["Grass","Poison"],
		["Effect Spore","Regenerator"],
		["Male","Female"],
		1.0,
		"http://media.pldh.net/pokexycons/590.png",
		new BASESTATS (69,55,45,55,55,15),
		new FORMECHANGE (false)),
	Amoonguss: new SPECIES(
		["Grass","Poison"],
		["Effect Spore","Regenerator"],
		["Male","Female"],
		10.5,
		"http://media.pldh.net/pokexycons/591.png",
		new BASESTATS (114,85,70,85,80,30),
		new FORMECHANGE (false)),
	Frillish: new SPECIES(
		["Water","Ghost"],
		["Water Absorb","Cursed Body","Damp"],
		["Male","Female"],
		33.0,
		"http://media.pldh.net/pokexycons/692.png",
		new BASESTATS (55,40,50,65,85,40),
		new FORMECHANGE (false)),
	Jellicent: new SPECIES(
		["Water","Ghost"],
		["Water Absorb","Cursed Body","Damp"],
		["Male","Female"],
		135.0,
		"http://media.pldh.net/pokexycons/693.png",
		new BASESTATS (100,60,70,85,105,60),
		new FORMECHANGE (false)),
	Alomomola: new SPECIES(
		["Water"],
		["Healer","Hydration","Regenerator"],
		["Male","Female"],
		31.6,
		"http://media.pldh.net/pokexycons/594.png",
		new BASESTATS (165,75,80,40,45,65),
		new FORMECHANGE (false)),
	Joltik: new SPECIES(
		["Bug","Electric"],
		["Compoundeyes","Unnerve","Swarm"],
		["Male","Female"],
		0.6,
		"http://media.pldh.net/pokexycons/595.png",
		new BASESTATS (50,47,50,57,50,65),
		new FORMECHANGE (false)),
	Galvantula: new SPECIES(
		["Bug","Electric"],
		["Compoundeyes","Unnerve","Swarm"],
		["Male","Female"],
		14.3,
		"http://media.pldh.net/pokexycons/596.png",
		new BASESTATS (70,77,60,97,60,108),
		new FORMECHANGE (false)),
	Ferroseed: new SPECIES(
		["Grass","Steel"],
		["Iron Barbs"],
		["Male","Female"],
		18.8,
		"http://media.pldh.net/pokexycons/597.png",
		new BASESTATS (44,50,91,24,86,10),
		new FORMECHANGE (false)),
	Ferrothorn: new SPECIES(
		["Grass","Steel"],
		["Iron Barbs"],
		["Male","Female"],
		110.0,
		"http://media.pldh.net/pokexycons/598.png",
		new BASESTATS (74,94,131,54,116,20),
		new FORMECHANGE (false)),
	Klink: new SPECIES(
		["Steel"],
		["Plus","Minus","Clear Body"],
		["Genderless"],
		21.0,
		"http://media.pldh.net/pokexycons/599.png",
		new BASESTATS (40,55,70,45,60,30),
		new FORMECHANGE (false)),
	Klang: new SPECIES(
		["Steel"],
		["Plus","Minus","Clear Body"],
		["Genderless"],
		51.0,
		"http://media.pldh.net/pokexycons/600.png",
		new BASESTATS (60,80,95,70,85,50),
		new FORMECHANGE (false)),
	Klinklang: new SPECIES(
		["Steel"],
		["Plus","Minus","Clear Body"],
		["Genderless"],
		81.0,
		"http://media.pldh.net/pokexycons/601.png",
		new BASESTATS (60,100,115,70,85,90),
		new FORMECHANGE (false)),
	Tynamo: new SPECIES(
		["Electric"],
		["Levitate"],
		["Male","Female"],
		0.3,
		"http://media.pldh.net/pokexycons/602.png",
		new BASESTATS (35,55,40,45,40,60),
		new FORMECHANGE (false)),
	Eelektrik: new SPECIES(
		["Electric"],
		["Levitate"],
		["Male","Female"],
		22.0,
		"http://media.pldh.net/pokexycons/603.png",
		new BASESTATS (65,85,70,75,70,40),
		new FORMECHANGE (false)),
	Eelektross: new SPECIES(
		["Electric"],
		["Levitate"],
		["Male","Female"],
		80.5,
		"http://media.pldh.net/pokexycons/604.png",
		new BASESTATS (85,115,80,105,80,50),
		new FORMECHANGE (false)),
	Elgyem: new SPECIES(
		["Psychic"],
		["Telepathy","Synchronize","Analytic"],
		["Male","Female"],
		9.0,
		"http://media.pldh.net/pokexycons/605.png",
		new BASESTATS (55,55,55,85,55,30),
		new FORMECHANGE (false)),
	Beheeyem: new SPECIES(
		["Psychic"],
		["Telepathy","Synchronize","Analytic"],
		["Male","Female"],
		34.5,
		"http://media.pldh.net/pokexycons/606.png",
		new BASESTATS (75,75,75,125,95,40),
		new FORMECHANGE (false)),
	Litwick: new SPECIES(
		["Ghost","Fire"],
		["Flash Fire","Flame Body","Infiltrator"],
		["Male","Female"],
		3.1,
		"http://media.pldh.net/pokexycons/607.png",
		new BASESTATS (50,30,55,65,55,20),
		new FORMECHANGE (false)),
	Lampent: new SPECIES(
		["Ghost","Fire"],
		["Flash Fire","Flame Body","Infiltrator"],
		["Male","Female"],
		13.0,
		"http://media.pldh.net/pokexycons/608.png",
		new BASESTATS (60,40,60,95,60,55),
		new FORMECHANGE (false)),
	Chandelure: new SPECIES(
		["Ghost","Fire"],
		["Flash Fire","Flame Body","Infiltrator"],
		["Male","Female"],
		34.3,
		"http://media.pldh.net/pokexycons/609.png",
		new BASESTATS (60,55,90,145,90,80),
		new FORMECHANGE (false)),
	Axew: new SPECIES(
		["Dragon"],
		["Rivalry","Mold Breaker","Unnerve"],
		["Male","Female"],
		18.0,
		"http://media.pldh.net/pokexycons/610.png",
		new BASESTATS (46,87,60,30,40,57),
		new FORMECHANGE (false)),
	Fraxure: new SPECIES(
		["Dragon"],
		["Rivalry","Mold Breaker","Unnerve"],
		["Male","Female"],
		36.0,
		"http://media.pldh.net/pokexycons/611.png",
		new BASESTATS (66,117,70,40,50,67),
		new FORMECHANGE (false)),
	Haxorus: new SPECIES(
		["Dragon"],
		["Rivalry","Mold Breaker","Unnerve"],
		["Male","Female"],
		105.5,
		"http://media.pldh.net/pokexycons/612.png",
		new BASESTATS (76,147,90,60,70,97),
		new FORMECHANGE (false)),
	Cubchoo: new SPECIES(
		["Ice"],
		["Snow Cloak","Rattled"],
		["Male","Female"],
		8.5,
		"http://media.pldh.net/pokexycons/613.png",
		new BASESTATS (55,70,40,60,40,40),
		new FORMECHANGE (false)),
	Beartic: new SPECIES(
		["Ice"],
		["Snow Cloak","Swift Swim"],
		["Male","Female"],
		260.0,
		"http://media.pldh.net/pokexycons/614.png",
		new BASESTATS (95,110,80,70,80,50),
		new FORMECHANGE (false)),
	Cryogonal: new SPECIES(
		["Ice"],
		["Levitate"],
		["Genderless"],
		148.0,
		"http://media.pldh.net/pokexycons/615.png",
		new BASESTATS (70,50,30,95,135,105),
		new FORMECHANGE (false)),
	Shelmet: new SPECIES(
		["Bug"],
		["Hydration","Shell Armor","Overcoat"],
		["Male","Female"],
		7.7,
		"http://media.pldh.net/pokexycons/616.png",
		new BASESTATS (50,40,85,40,65,25),
		new FORMECHANGE (false)),
	Accelgor: new SPECIES(
		["Bug"],
		["Hydration","Sticky Hold","Unburden"],
		["Male","Female"],
		25.3,
		"http://media.pldh.net/pokexycons/617.png",
		new BASESTATS (80,70,40,100,60,145),
		new FORMECHANGE (false)),
	Stunfisk: new SPECIES(
		["Ground","Electric"],
		["Static","Limber","Sand Veil"],
		["Male","Female"],
		11.0,
		"http://media.pldh.net/pokexycons/618.png",
		new BASESTATS (109,66,84,81,99,32),
		new FORMECHANGE (false)),
	Meinfoo: new SPECIES(
		["Fighting"],
		["Innfer Focus","Regenerator","Reckless"],
		["Male","Female"],
		20.0,
		"http://media.pldh.net/pokexycons/619.png",
		new BASESTATS (45,85,50,55,50,65),
		new FORMECHANGE (false)),
	Mienshao: new SPECIES(
		["Fighting"],
		["Innfer Focus","Regenerator","Reckless"],
		["Male","Female"],
		35.5,
		"http://media.pldh.net/pokexycons/620.png",
		new BASESTATS (65,125,60,95,60,105),
		new FORMECHANGE (false)),
	Druddigon: new SPECIES(
		["Dragon"],
		["Rough Skin","Sheer Force","Mold Breaker"],
		["Male","Female"],
		139.0,
		"http://media.pldh.net/pokexycons/621.png",
		new BASESTATS (77,120,90,60,90,48),
		new FORMECHANGE (false)),
	Golett: new SPECIES(
		["Ground","Ghost"],
		["Iron Fist","Klutz","No Guard"],
		["Genderless"],
		92.0,
		"http://media.pldh.net/pokexycons/622.png",
		new BASESTATS (59,74,50,35,50,35),
		new FORMECHANGE (false)),
	Golurk: new SPECIES(
		["Ground","Ghost"],
		["Iron Fist","Klutz","No Guard"],
		["Genderless"],
		330.0,
		"http://media.pldh.net/pokexycons/623.png",
		new BASESTATS (89,124,80,55,80,55),
		new FORMECHANGE (false)),
	Pawniard: new SPECIES(
		["Dark","Steel"],
		["Defiant","Inner Focus","Pressure"],
		["Male","Female"],
		10.2,
		"http://media.pldh.net/pokexycons/624.png",
		new BASESTATS (45,85,70,40,40,60),
		new FORMECHANGE (false)),
	Bisharp: new SPECIES(
		["Dark","Steel"],
		["Defiant","Inner Focus","Pressure"],
		["Male","Female"],
		70.0,
		"http://media.pldh.net/pokexycons/000.png",
		new BASESTATS (65,125,100,60,70,70),
		new FORMECHANGE (false)),
	Bouffalant: new SPECIES(
		["Normal"],
		["Reckless","Sap Sipper","Soundproof"],
		["Male","Female"],
		94.6,
		"http://media.pldh.net/pokexycons/626.png",
		new BASESTATS (95,110,95,40,95,55),
		new FORMECHANGE (false)),
	Rufflet: new SPECIES(
		["Normal","Flying"],
		["Keen Eye","Sheer Force","Hustle"],
		["Male"],
		10.5,
		"http://media.pldh.net/pokexycons/627.png",
		new BASESTATS (70,83,50,37,50,60),
		new FORMECHANGE (false)),
	Braviary: new SPECIES(
		["Normal","Flying"],
		["Keen Eye","Sheer Force","Defiant"],
		["Male"],
		41.0,
		"http://media.pldh.net/pokexycons/628.png",
		new BASESTATS (100,123,75,57,75,80),
		new FORMECHANGE (false)),
	Vullaby: new SPECIES(
		["Dark","Flying"],
		["Big Pecks","Overcoat","Weak Armor"],
		["Female"],
		9.0,
		"http://media.pldh.net/pokexycons/629.png",
		new BASESTATS (70,55,75,45,65,50),
		new FORMECHANGE (false)),
	Mandibuzz: new SPECIES(
		["Dark","Flying"],
		["Big Pecks","Overcoat","Weak Armor"],
		["Female"],
		39.5,
		"http://media.pldh.net/pokexycons/630.png",
		new BASESTATS (110,65,105,55,95,80),
		new FORMECHANGE (false)),
	Heatmor: new SPECIES(
		["Fire"],
		["Gluttony","Flash Fire","White Smoke"],
		["Male","Female"],
		58.0,
		"http://media.pldh.net/pokexycons/631.png",
		new BASESTATS (85,97,66,105,66,65),
		new FORMECHANGE (false)),
	Durant: new SPECIES(
		["Bug","Steel"],
		["Swarm","Hustle","Truant"],
		["Male","Female"],
		33.0,
		"http://media.pldh.net/pokexycons/632.png",
		new BASESTATS (58,109,112,48,48,109),
		new FORMECHANGE (false)),
	Deino: new SPECIES(
		["Dark","Dragon"],
		["Hustle"],
		["Male","Female"],
		17.3,
		"http://media.pldh.net/pokexycons/633.png",
		new BASESTATS (52,65,50,45,50,38),
		new FORMECHANGE (false)),
	Zweilous: new SPECIES(
		["Dark","Dragon"],
		["Hustle"],
		["Male","Female"],
		50.0,
		"http://media.pldh.net/pokexycons/634.png",
		new BASESTATS (72,85,70,65,70,58),
		new FORMECHANGE (false)),
	Hydreigon: new SPECIES(
		["Dark","Dragon"],
		["Levitate"],
		["Male","Female"],
		160.0,
		"http://media.pldh.net/pokexycons/635.png",
		new BASESTATS (92,105,90,125,90,98),
		new FORMECHANGE (false)),
	Larvesta: new SPECIES(
		["Bug","Fire"],
		["Flame Body","Swarm"],
		["Male","Female"],
		28.8,
		"http://media.pldh.net/pokexycons/636.png",
		new BASESTATS (55,85,55,50,55,60),
		new FORMECHANGE (false)),
	Volcarona: new SPECIES(
		["Bug","Fire"],
		["Flame Body","Swarm"],
		["Male","Female"],
		46.0,
		"http://media.pldh.net/pokexycons/637.png",
		new BASESTATS (85,60,65,135,105,100),
		new FORMECHANGE (false)),
	Cobalion: new SPECIES(
		["Steel","Fighting"],
		["Justified"],
		["Genderless"],
		250.0,
		"http://media.pldh.net/pokexycons/638.png",
		new BASESTATS (91,90,129,90,72,108),
		new FORMECHANGE (false)),
	Terrakion: new SPECIES(
		["Rock","Fighting"],
		["Justified"],
		["Genderless"],
		260.0,
		"http://media.pldh.net/pokexycons/639.png",
		new BASESTATS (91,129,90,72,90,108),
		new FORMECHANGE (false)),
	Virizion: new SPECIES(
		["Grass","Fighting"],
		["Justified"],
		["Genderless"],
		200.0,
		"http://media.pldh.net/pokexycons/640.png",
		new BASESTATS (91,90,72,90,129,108),
		new FORMECHANGE (false)),
	Tornadus: new SPECIES(
		["Flying"],
		["Prankster","Defiant"],
		["Male"],
		63.0,
		"http://media.pldh.net/pokexycons/641.png",
		new BASESTATS (79,115,70,125,80,111),
		new FORMECHANGE (true,["Therian",new FORME(
			["Flying"],
			["Regenerator","Defiant"],
			63.0,
			"http://pldh.net/media/pokexycons/641-therian.png",
			new BASESTATS (79,100,80,110,90,121))])),
	Thundurus: new SPECIES(
		["Electric","Flying"],
		["Prankster","Defiant"],
		["Male"],
		61.0,
		"http://media.pldh.net/pokexycons/642.png",
		new BASESTATS (79,115,70,125,80,111),
		new FORMECHANGE (true,["Therian",new FORME(
			["Electric","Flying"],
			["Volt Absorb","Defiant"],
			61.0,
			"http://pldh.net/media/pokexycons/642-therian.png",
			new BASESTATS (79,105,70,145,80,101))])),
	Reshiram: new SPECIES(
		["Dragon","Fire"],
		["Turboblaze"],
		["Genderless"],
		330.0,
		"http://media.pldh.net/pokexycons/643.png",
		new BASESTATS (100,120,100,150,120,90),
		new FORMECHANGE (false)),
	Zekrom: new SPECIES(
		["Dragon","Electric"],
		["Terravolt"],
		["Genderless"],
		345.0,
		"http://media.pldh.net/pokexycons/644.png",
		new BASESTATS (100,150,120,120,100,90),
		new FORMECHANGE (false)),
	Landorus: new SPECIES(
		["Ground","Flying"],
		["Sand Force","Sheer Force"],
		["Male"],
		68.0,
		"http://media.pldh.net/pokexycons/645.png",
		new BASESTATS (89,125,90,115,80,101),
		new FORMECHANGE (true,["Therian",new FORME(
			["Ground","Flying"],
			["Intimidate","Sheer Force"],
			68.0,
			"sprite.png",
			new BASESTATS (89,145,90,105,80,91))])),
	Kyurem: new SPECIES(
		["Dragon","Ice"],
		["Pressure"],
		["Genderless"],
		325.0,
		"http://media.pldh.net/pokexycons/646.png",
		new BASESTATS (125,130,90,130,90,95),
		new FORMECHANGE (true,["Black",new FORME(
			["Dragon","Ice"],
			["Teravolt"],
			325.0,
			"http://pldh.net/media/pokexycons/646-black.png",
			new BASESTATS (125,170,100,120,90,95)),
		"White",new FORME(
			["Dragon","Ice"],
			["Turboblaze"],
			325.0,
			"http://pldh.net/media/pokexycons/646-white.png",
			new BASESTATS (125,120,90,170,100,95))])),
	Keldeo: new SPECIES(
		["Water","Fight"],
		["Justified"],
		["Genderless"],
		48.5,
		"http://media.pldh.net/pokexycons/647.png",
		new BASESTATS (91,72,90,129,90,108),
		new FORMECHANGE (false)),

	Meloetta: new SPECIES(
		["Normal","Psychic"],
		["Serene Grace"],
		["Genderless"],
		6.5,
		"http://media.pldh.net/pokexycons/648.png",
		new BASESTATS (100,77,77,128,128,90),
		new FORMECHANGE (true,["Pirouette",new FORME(
			["Normal","Fighting"],
			["Serene Grace"],
			6.5,
			"http://media.pldh.net/pokexycons/648-pirouette.png",
			new BASESTATS (100,128,90,77,77,128))])),
	Genesect: new SPECIES(
		["Bug","Steel"],
		["Download"],
		["Genderless"],
		82.5,
		"http://media.pldh.net/pokexycons/649.png",
		new BASESTATS (71,120,95,120,95,99),
		new FORMECHANGE (false)),
	Chespin: new SPECIES(
		["Grass"],
		["Overgrow","Bulletproof"],
		["Male","Female"],
		9.0,
		"http://media.pldh.net/pokexycons/650.png",
		new BASESTATS (56,61,65,48,45,38),
		new FORMECHANGE (false)),
	Quilladin: new SPECIES(
		["Grass"],
		["Overgrow","Bulletproof"],
		["Male","Female"],
		29.0,
		"http://media.pldh.net/pokexycons/651.png",
		new BASESTATS (61,78,95,56,58,57),
		new FORMECHANGE (false)),
	Chesnaught: new SPECIES(
		["Grass","Fighting"],
		["Overgrow","Bulletproof"],
		["Male","Female"],
		90.0,
		"http://media.pldh.net/pokexycons/652.png",
		new BASESTATS (88,107,122,74,75,64),
		new FORMECHANGE (false)),
	Fennekin: new SPECIES(
		["Fire"],
		["Blaze","Magician"],
		["Male","Female"],
		9.4,
		"http://media.pldh.net/pokexycons/653.png",
		new BASESTATS (40,45,40,62,60,60),
		new FORMECHANGE (false)),
	Braixen: new SPECIES(
		["Fire"],
		["Blaze","Magician"],
		["Male","Female"],
		14.5,
		"http://media.pldh.net/pokexycons/654.png",
		new BASESTATS (59,59,58,90,70,73),
		new FORMECHANGE (false)),
	Delphox: new SPECIES(
		["Fire","Psychic"],
		["Blaze","Magician"],
		["Male","Female"],
		39.0,
		"http://media.pldh.net/pokexycons/655.png",
		new BASESTATS (75,69,72,114,100,104),
		new FORMECHANGE (false)),
	Froakie: new SPECIES(
		["Water"],
		["Torrent","Protean"],
		["Male","Female"],
		7.0,
		"http://media.pldh.net/pokexycons/656.png",
		new BASESTATS (41,56,40,62,44,71),
		new FORMECHANGE (false)),
	Frogadier: new SPECIES(
		["Water"],
		["Torrent","Protean"],
		["Male","Female"],
		10.9,
		"http://media.pldh.net/pokexycons/657.png",
		new BASESTATS (54,63,52,83,56,97),
		new FORMECHANGE (false)),
	Greninja: new SPECIES(
		["Water","Dark"],
		["Torrent","Protean"],
		["Male","Female"],
		40.0,
		"http://media.pldh.net/pokexycons/658.png",
		new BASESTATS (72,95,67,103,71,122),
		new FORMECHANGE (false)),
	Bunnelby: new SPECIES(
		["Normal"],
		["Pickup","Cheek Pouch","Huge Power"],
		["Male","Female"],
		5.0,
		"http://media.pldh.net/pokexycons/659.png",
		new BASESTATS (38,36,38,32,36,57),
		new FORMECHANGE (false)),
	Diggersby: new SPECIES(
		["Normal","Ground"],
		["Pickup","Cheek Pouch","Huge Power"],
		["Male","Female"],
		42.4,
		"http://media.pldh.net/pokexycons/660.png",
		new BASESTATS (85,56,77,50,77,78),
		new FORMECHANGE (false)),
	Fletchling: new SPECIES(
		["Normal","Flying"],
		["Big Pecks","Gale Wings"],
		["Male","Female"],
		1.7,
		"http://media.pldh.net/pokexycons/661.png",
		new BASESTATS (45,50,43,40,38,62),
		new FORMECHANGE (false)),
	Fletchinder: new SPECIES(
		["Fire","Flying"],
		["Flame Body","Gale Wings"],
		["Male","Female"],
		16.0,
		"http://media.pldh.net/pokexycons/662.png",
		new BASESTATS (62,73,55,56,52,84),
		new FORMECHANGE (false)),
	Talonflame: new SPECIES(
		["Fire","Flying"],
		["Flame Body","Gale Wings"],
		["Male","Female"],
		24.5,
		"http://media.pldh.net/pokexycons/663.png",
		new BASESTATS (78,81,71,74,69,126),
		new FORMECHANGE (false)),
	Scatterbug: new SPECIES(
		["Bug"],
		["Shield Dust","Compoudeyes","Friend Guard"],
		["Male","Female"],
		2.5,
		"http://media.pldh.net/pokexycons/664.png",
		new BASESTATS (38,35,40,27,25,35),
		new FORMECHANGE (false)),
	Spewpa: new SPECIES(
		["Bug"],
		["Shed Skin","Friend Guard"],
		["Male","Female"],
		8.4,
		"http://media.pldh.net/pokexycons/665.png",
		new BASESTATS (45,22,60,27,30,29),
		new FORMECHANGE (false)),
	Vivillon: new SPECIES(
		["Bug","Flying"],
		["Shield Dust","Compoundeyes","Friend Guard"],
		["Male","Female"],
		17.0,
		"http://media.pldh.net/pokexycons/666.png",
		new BASESTATS (80,52,50,90,50,89),
		new FORMECHANGE (false)),
	Litleo: new SPECIES(
		["Fire","Normal"],
		["Rivalry","Unnerve","Moxie"],
		["Male","Female"],
		13.5,
		"http://media.pldh.net/pokexycons/667.png",
		new BASESTATS (62,50,58,73,54,72),
		new FORMECHANGE (false)),
	Pyroar: new SPECIES(
		["Fire","Normal"],
		["Rivalry","Unnerve","Moxie"],
		["Male","Female"],
		81.5,
		"http://media.pldh.net/pokexycons/668.png",
		new BASESTATS (86,68,72,109,66,106),
		new FORMECHANGE (false)),
	Flabebe: new SPECIES(
		["Fairy"],
		["Flower Veil","Symbiosis"],
		["Female"],
		0.1,
		"http://media.pldh.net/pokexycons/669.png",
		new BASESTATS (44,38,39,61,79,42),
		new FORMECHANGE (false)),
	Floette: new SPECIES(
		["Fairy"],
		["Flower Veil","Symbiosis"],
		["Female"],
		0.9,
		"http://media.pldh.net/pokexycons/670.png",
		new BASESTATS (54,45,47,75,98,52),
		new FORMECHANGE (false)),
	Florges: new SPECIES(
		["Fairy"],
		["Flower Veil","Symbiosis"],
		["Female"],
		10.0,
		"http://media.pldh.net/pokexycons/671.png",
		new BASESTATS (78,65,68,112,154,75),
		new FORMECHANGE (false)),
	Skiddo: new SPECIES(
		["Grass"],
		["Sap Sipper","Grass Pelt"],
		["Male","Female"],
		31.0,
		"http://media.pldh.net/pokexycons/672.png",
		new BASESTATS (66,65,48,62,57,52),
		new FORMECHANGE (false)),
	Gogoat: new SPECIES(
		["Grass"],
		["Sap Sipper","Grass Pelt"],
		["Male","Female"],
		91.0,
		"http://media.pldh.net/pokexycons/673.png",
		new BASESTATS (123,100,62,97,81,68),
		new FORMECHANGE (false)),
	Pancham: new SPECIES(
		["Fighting"],
		["Iron Fist","Mold Breaker","Scrappy"],
		["Male","Female"],
		8.0,
		"http://media.pldh.net/pokexycons/674.png",
		new BASESTATS (67,82,62,46,48,43),
		new FORMECHANGE (false)),
	Pangoro: new SPECIES(
		["Fighting","Dark"],
		["Iron Fist","Mold Breaker","Scrappy"],
		["Male","Female"],
		136.0,
		"http://media.pldh.net/pokexycons/675.png",
		new BASESTATS (95,124,78,69,71,58),
		new FORMECHANGE (false)),
	Furfrou: new SPECIES(
		["Normal"],
		["Fur Coat"],
		["Male","Female"],
		28.0,
		"http://media.pldh.net/pokexycons/676.png",
		new BASESTATS (75,80,60,65,90,102),
		new FORMECHANGE (false)),
	Espurr: new SPECIES(
		["Psychic"],
		["Keen Eye","Infiltrator","Own Tempo"],
		["Male","Female"],
		3.5,
		"http://media.pldh.net/pokexycons/677.png",
		new BASESTATS (62,48,54,63,60,68),
		new FORMECHANGE (false)),
	MeowsticM: new SPECIES(
		["Psychic"],
		["Keen Eye","Infiltrator","Prankster"],
		["Male"],
		8.5,
		"http://pldh.net/media/pokexycons/678-m.png",
		new BASESTATS (74,48,76,83,81,104),
		new FORMECHANGE (false)),
	MeowsticF: new SPECIES(
		["Psychic"],
		["Keen Eye","Infiltrator","Competitive"],
		["Female"],
		8.5,
		"http://pldh.net/media/pokexycons/678-f.png",
		new BASESTATS (74,48,76,83,81,104),
		new FORMECHANGE (false)),
	Honedge: new SPECIES(
		["Steel","Ghost"],
		["No Guard"],
		["Male","Female"],
		2.0,
		"http://media.pldh.net/pokexycons/679.png",
		new BASESTATS (45,80,100,35,37,28),
		new FORMECHANGE (false)),
	Doublade: new SPECIES(
		["Steel","Ghost"],
		["No Guard"],
		["Male","Female"],
		4.5,
		"http://media.pldh.net/pokexycons/680.png",
		new BASESTATS (59,110,150,45,49,35),
		new FORMECHANGE (false)),
	Aegislash: new SPECIES(
		["Steel","Ghost"],
		["Stance Change"],
		["Male","Female"],
		53.0,
		"http://media.pldh.net/pokexycons/681.png",
		new BASESTATS (60,50,150,50,150,60),
		new FORMECHANGE (false)),
	Spritzee: new SPECIES(
		["Fairy"],
		["Healer","Aroma Veil"],
		["Male","Female"],
		0.5,
		"http://media.pldh.net/pokexycons/682.png",
		new BASESTATS (78,52,60,63,65,23),
		new FORMECHANGE (false)),
	Aromatisse: new SPECIES(
		["Fairy"],
		["Healer","Aroma Veil"],
		["Male","Female"],
		15.5,
		"http://media.pldh.net/pokexycons/683.png",
		new BASESTATS (101,72,72,99,89,29),
		new FORMECHANGE (false)),
	Swirlix: new SPECIES(
		["Fairy"],
		["Sweet Veil","Unburden"],
		["Male","Female"],
		3.5,
		"http://media.pldh.net/pokexycons/684.png",
		new BASESTATS (62,48,66,59,57,49),
		new FORMECHANGE (false)),
	Slurpluff: new SPECIES(
		["Fairy"],
		["Sweet Veil","Unburden"],
		["Male","Female"],
		5.0,
		"http://media.pldh.net/pokexycons/685.png",
		new BASESTATS (82,80,86,85,75,72),
		new FORMECHANGE (false)),
	Inkay: new SPECIES(
		["Dark","Psychic"],
		["Contrary","Suction Cups","Infiltrator"],
		["Male","Female"],
		3.5,
		"http://media.pldh.net/pokexycons/686.png",
		new BASESTATS (53,54,53,37,46,45),
		new FORMECHANGE (false)),
	Malamar: new SPECIES(
		["Dark","Psychic"],
		["Contrary","Suction Cups","Infiltrator"],
		["Male","Female"],
		47.0,
		"http://media.pldh.net/pokexycons/687.png",
		new BASESTATS (86,92,88,68,75,73),
		new FORMECHANGE (false)),
	Binacle: new SPECIES(
		["Rock","Water"],
		["Tough Claws","Sniper","Pickpocket"],
		["Male","Female"],
		31.0,
		"http://media.pldh.net/pokexycons/688.png",
		new BASESTATS (42,52,67,39,56,50),
		new FORMECHANGE (false)),
	Barbaracle: new SPECIES(
		["Rock","Water"],
		["Tough Claws","Sniper","Pickpocket"],
		["Male","Female"],
		96.0,
		"http://media.pldh.net/pokexycons/689.png",
		new BASESTATS (72,105,115,54,86,68),
		new FORMECHANGE (false)),
	Skrelp: new SPECIES(
		["Poison","Water"],
		["Poison Point","Poison Touch","Adaptability"],
		["Male","Female"],
		7.3,
		"http://media.pldh.net/pokexycons/690.png",
		new BASESTATS (50,60,60,60,60,30),
		new FORMECHANGE (false)),
	Dragalge: new SPECIES(
		["Poison","Dragon"],
		["Poison Point","Poison Touch","Adaptability"],
		["Male","Female"],
		81.5,
		"http://media.pldh.net/pokexycons/691.png",
		new BASESTATS (65,75,90,97,123,44),
		new FORMECHANGE (false)),
	Clauncher: new SPECIES(
		["Water"],
		["Mega Launcher"],
		["Male","Female"],
		8.3,
		"http://media.pldh.net/pokexycons/692.png",
		new BASESTATS (50,53,62,58,63,44),
		new FORMECHANGE (false)),
	Clawitzer: new SPECIES(
		["Water"],
		["Mega Launcher"],
		["Male","Female"],
		35.3,
		"http://media.pldh.net/pokexycons/693.png",
		new BASESTATS (71,73,88,120,89,59),
		new FORMECHANGE (false)),
	Helioptile: new SPECIES(
		["Electric","Normal"],
		["Dry Skin","Sand Veil","Solar power"],
		["Male","Female"],
		6.0,
		"http://media.pldh.net/pokexycons/694.png",
		new BASESTATS (44,38,33,61,43,70),
		new FORMECHANGE (false)),
	Heliolisk: new SPECIES(
		["Electric","Normal"],
		["Dry Skin","Sand Veil","Solar power"],
		["Male","Female"],
		21.0,
		"http://media.pldh.net/pokexycons/695.png",
		new BASESTATS (62,55,52,109,94,109),
		new FORMECHANGE (false)),
	Tyrunt: new SPECIES(
		["Rock","Dragon"],
		["Strong Jaw","Sturdy"],
		["Male","Female"],
		26.0,
		"http://media.pldh.net/pokexycons/696.png",
		new BASESTATS (58,89,77,45,45,48),
		new FORMECHANGE (false)),
	Tyrantrum: new SPECIES(
		["Rock","Dragon"],
		["Strong Jaw","Rock Head"],
		["Male","Female"],
		270.0,
		"http://media.pldh.net/pokexycons/697.png",
		new BASESTATS (82,121,119,69,59,71),
		new FORMECHANGE (false)),
	Amaura: new SPECIES(
		["Rock","Ice"],
		["Refrigerate","Snow Warning"],
		["Male","Female"],
		25.2,
		"http://media.pldh.net/pokexycons/698.png",
		new BASESTATS (77,59,50,67,63,46),
		new FORMECHANGE (false)),
	Aurorus: new SPECIES(
		["Rock","Ice"],
		["Refrigerate","Snow Warning"],
		["Male","Female"],
		225.0,
		"http://media.pldh.net/pokexycons/699.png",
		new BASESTATS (123,77,72,99,92,58),
		new FORMECHANGE (false)),
	Sylveon: new SPECIES(
		["Fairy"],
		["Cute Charm","Pixilate"],
		["Male","Female"],
		23.5,
		"http://media.pldh.net/pokexycons/700.png",
		new BASESTATS (95,65,65,110,130,60),
		new FORMECHANGE (false)),
	Hawlucha: new SPECIES(
		["Fighting","Flying"],
		["Limber","Unburden","Mold Breaker"],
		["Male","Female"],
		21.5,
		"http://media.pldh.net/pokexycons/701.png",
		new BASESTATS (78,92,75,74,63,118),
		new FORMECHANGE (false)),
	Dedenne: new SPECIES(
		["Electric","Fairy"],
		["Cheek Pouch","Pickup","Plus"],
		["Male","Female"],
		2.2,
		"http://media.pldh.net/pokexycons/702.png",
		new BASESTATS (67,58,57,81,67,101),
		new FORMECHANGE (false)),

	Carbink: new SPECIES(
		["Rock","Fairy"],
		["Clear Body","Sturdy"],
		["Male","Female","Genderless"],
		5.7,
		"http://media.pldh.net/pokexycons/703.png",
		new BASESTATS (50,50,150,50,150,50),
		new FORMECHANGE (false)),

	Goomy: new SPECIES(
		["Dragon"],
		["Sap Sipper","Hydration","Gooey"],
		["Male","Female"],
		2.8,
		"http://media.pldh.net/pokexycons/704.png",
		new BASESTATS (45,50,35,55,75,40),
		new FORMECHANGE (false)),

	Sliggoo: new SPECIES(
		["Dragon"],
		["Sap Sipper","Hydration","Gooey"],
		["Male","Female"],
		17.5,
		"http://media.pldh.net/pokexycons/705.png",
		new BASESTATS (68,75,53,83,113,60),
		new FORMECHANGE (false)),

	Goodra: new SPECIES(
		["Dragon"],
		["Sap Sipper","Hydration","Gooey"],
		["Male","Female"],
		150.5,
		"http://media.pldh.net/pokexycons/706.png",
		new BASESTATS (90,100,70,110,150,80),
		new FORMECHANGE (false)),

	Klefki: new SPECIES(
		["Steel","Fairy"],
		["Prankster","Magician"],
		["Male","Female"],
		3.0,
		"http://media.pldh.net/pokexycons/707.png",
		new BASESTATS (57,80,91,80,87,75),
		new FORMECHANGE (false)),

	Phantump: new SPECIES(
		["Ghost","Grass"],
		["Natural Cure","Frisk","Harvest"],
		["Male","Female"],
		7.0,
		"http://media.pldh.net/pokexycons/708.png",
		new BASESTATS (43,70,48,50,60,38),
		new FORMECHANGE (false)),

	Trevenant: new SPECIES(
		["Ghost","Grass"],
		["Natural Cure","Frisk","Harvest"],
		["Male","Female"],
		71.0,
		"http://media.pldh.net/pokexycons/709.png",
		new BASESTATS (85,110,76,65,82,56),
		new FORMECHANGE (false)),

	Pumpkaboo: new SPECIES(
		["Ghost","Grass"],
		["Pickup","Frisk","Insomnia"],
		["Male","Female"],
		5.0,
		"http://media.pldh.net/pokexycons/710.png",
		new BASESTATS (49,66,70,44,55,51),
		new FORMECHANGE (true,["Small",new FORME(
			["Ghost","Grass"],
			["Pickup","Frisk","Insomnia"],
			3.5,
			"http://media.pldh.net/pokexycons/710.png",
			new BASESTATS (44,66,70,44,55,56)),
		"Large",new FORME(
			["Ghost","Grass"],
			["Pickup","Frisk","Insomnia"],
			7.5,
			"http://media.pldh.net/pokexycons/710.png",
			new BASESTATS (54,66,70,44,55,46)),
		"Super",new FORME(
			["Ghost","Grass"],
			["Pickup","Frisk","Insomnia"],
			15.0,
			"http://media.pldh.net/pokexycons/710.png",
			new BASESTATS (49,66,70,44,55,41))])),
	GourgeistAverage: new SPECIES(
		["Ghost","Grass"],
		["Pickup","Frisk","Insomnia"],
		["Male","Female"],
		12.5,
		"http://media.pldh.net/pokexycons/711.png",
		new BASESTATS (65,90,122,58,75,84),
		new FORMECHANGE (true,["Small",new FORME(
			["Ghost","Grass"],
			["Pickup","Frisk","Insomnia"],
			9.5,
			"http://media.pldh.net/pokexycons/711.png",
			new BASESTATS (55,85,122,58,75,99)),
		"Large",new FORME(
			["Ghost","Grass"],
			["Pickup","Frisk","Insomnia"],
			14.0,
			"http://media.pldh.net/pokexycons/711.png",
			new BASESTATS (75,95,70,44,55,69)),
		"Super",new FORME(
			["Ghost","Grass"],
			["Pickup","Frisk","Insomnia"],
			39.0,
			"http://media.pldh.net/pokexycons/711.png",
			new BASESTATS (85,100,122,58,75,54))])),
	Bergmite: new SPECIES(
		["Ice"],
		["Own Tempo","Ice Body","Sturdy"],
		["Male","Female"],
		99.5,
		"http://media.pldh.net/pokexycons/712.png",
		new BASESTATS (55,69,85,32,35,28),
		new FORMECHANGE (false)),
	Avalugg: new SPECIES(
		["Ice"],
		["Own Tempo","Ice Body","Sturdy"],
		["Male","Female"],
		505.0,
		"http://media.pldh.net/pokexycons/713.png",
		new BASESTATS (95,117,184,44,46,28),
		new FORMECHANGE (false)),
	Noibat: new SPECIES(
		["Dragon"],
		["Frisk","Infiltrator","Telepathy"],
		["Male","Female"],
		8.0,
		"http://media.pldh.net/pokexycons/714.png",
		new BASESTATS (40,30,35,45,40,55),
		new FORMECHANGE (false)),
	Noivern: new SPECIES(
		["Flying","Dragon"],
		["Frisk","Infiltrator","Telepathy"],
		["Male","Female"],
		85.0,
		"http://media.pldh.net/pokexycons/715.png",
		new BASESTATS (85,70,80,97,80,123),
		new FORMECHANGE (false)),
	Xerneas: new SPECIES(
		["Fairy"],
		["Fairy Aura"],
		["Genderless"],
		215.0,
		"http://media.pldh.net/pokexycons/716.png",
		new BASESTATS (126,131,95,131,98,99),
		new FORMECHANGE (false)),
	Yveltal: new SPECIES(
		["Dark","Flying"],
		["Dark Aura"],
		["Genderless"],
		203.0,
		"http://media.pldh.net/pokexycons/717.png",
		new BASESTATS (126,131,95,131,98,99),
		new FORMECHANGE (false)),
	Zygarde: new SPECIES(
		["Dragon","Ground"],
		["Aura Break"],
		["Genderless"],
		284.6,
		"http://media.pldh.net/pokexycons/718.png",
		new BASESTATS (108,100,121,81,95,95),
		new FORMECHANGE (false)),
	Diance: new SPECIES(
		["Rock","Fairy"],
		["Clear Body"],
		["Genderless"],
		8.8,
		"http://media.pldh.net/pokexycons/719.png",
		new BASESTATS (50,100,150,100,150,50),
		new FORMECHANGE (true,["Mega",new FORME(
			["Rock","Fairy"],
			["Magic Bounce"],
			"http://pldh.net/media/pokexycons/719-mega.png",
			new BASESTATS (50,160,110,160,110,110))])),
	Hoopa: new SPECIES(
		["Psychic","Ghost"],
		["Magician"],
		["Genderless"],
		9.0,
		"http://www.serebii.net/pokedex-xy/icon/720.png",
		new BASESTATS (80,110,60,150,130,70),
		new FORMECHANGE (true,["Unbound",new FORME(
			["Psychic","Dark"],
			["Magician"],
			490.0,
			"http://www.serebii.net/pokedex-xy/icon/720-u.png",
			new BASESTATS (80,160,60,170,130,80))])),
	Volcanion: new SPECIES(
		["Fire","Water"],
		["Water Absorb"],
		["Genderless"],
		195.0,
		"http://media.pldh.net/pokexycons/000.png",
		new BASESTATS (80,110,120,130,90,70),
		new FORMECHANGE (false))
};