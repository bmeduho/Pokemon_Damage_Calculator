//var nmdItem1 = document.getElementById('PokeForm1').elements;
//var nmdItem2 = document.getElementById('PokeForm2').elements;
var saveLog;
var currentSaveFile = base;
var active = currentSaveFile.Team1.Pokemon1;

	/* START Save/Load */
var SavingLoading = {
	set: function(key, value) {
		if (!key || !value) {return;}

		if (typeof value === "object") {
			value = JSON.stringify(value);
		}
		localStorage.setItem(key, value);
		console.log("You saved something in " + key + "!");
		returnToSaveScreen();
	},
	get: function(key) {
		var value = localStorage.getItem(key);

		if (!value || value === null) {return;}

		// assume it is an object that has been stringified
		if (value[0] === "{") {
			value = JSON.parse(value);
		}
		currentSaveFile = value;
		saveLog = key;
		openBattleScreen();
		console.log("You retrieved " + key + ".");
	},
	close: function(key) {
		//if (!key) {return;}
		localStorage.setItem(key, JSON.stringify(base));
		console.log(key + " deleted!");
		this.get (key);
	}
}
	/* END Save/Load */
	
	/*  */
function openBattleScreen () {
	document.getElementById('SavingScreen').style.display = "none";
	document.getElementById('BattleScreens').style.display = "block";
}
function returnToSaveScreen () {
	document.getElementById('SavingScreen').style.display = "block";
	document.getElementById('BattleScreens').style.display = "none";
}
function teamSelect () {
	var battleMenu = document.getElementById('BattleMenu');
	battleMenu.src = "Images/Team_Select.png";
	battleMenu.useMap = '#TeamSelect';
}
function pokemonSelect () {
	var pokeSelect = document.getElementById('PokemonSelect');
	var battleMenu = document.getElementById('BattleMenu');
	battleMenu.style.display = "none";
	pokeSelect.style.display = "inline-block";
}
	/*  */
	
	/* Update Save/Load Screen Images *
function updateSLImgs () {
	for (var i = 1; i <= 6; i++) {
		for (var j = 1; j <= 2; j++) {
			for (var k = 1; k <= 6; k++) {
				var value = localStorage.getItem("Save_" + i);
				if (!value || value === null) {return;}
				// assume it is an object that has been stringified
				if (value[0] === "{") {
					value = JSON.parse(value);
				}
				if (!value["Team" + j]["Pokemon" + k].Species) {
					document.getElementById("S" + i + "T" + j + "P" + k + "Img").src = "http://pldh.net/media/items/ball/pokeball.png";
					document.getElementById("S" + i + "T" + j + "P" + k + "A").dataset.title = "Species: Not Set";
				} else {
					document.getElementById("S" + i + "T" + j + "P" + k + "Img").src = Pokemon[value["Team" + j]["Pokemon" + k].Species].SpriteImg;
					document.getElementById("S" + i + "T" + j + "P" + k + "A").dataset.title = "Species: " + value["Team" + j]["Pokemon" + k].Species;
				}
				if (!value["Team" + j]["Pokemon" + k].Level) {
					document.getElementById("S" + i + "T" + j + "P" + k + "A").dataset.title += "\nLevel: Not Set ";
				} else {
					document.getElementById("S" + i + "T" + j + "P" + k + "A").dataset.title += " Level: " + value["Team" + j]["Pokemon" + k].Level;
				}
				if (!value["Team" + j]["Pokemon" + k].Gender) {
					document.getElementById("S" + i + "T" + j + "P" + k + "A").dataset.title += " Gender: Not Set ";
				} else {
					document.getElementById("S" + i + "T" + j + "P" + k + "A").dataset.title += " Gender: " + value["Team" + j]["Pokemon" + k].Gender;
				}
				if (!value["Team" + j]["Pokemon" + k].Ability) {
					document.getElementById("S" + i + "T" + j + "P" + k + "A").dataset.title += " Ability: Not Set ";
				} else {
					document.getElementById("S" + i + "T" + j + "P" + k + "A").dataset.title += " Ability: " + value["Team" + j]["Pokemon" + k].Ability;
				}
				if (!value["Team" + j]["Pokemon" + k].Item) {
					document.getElementById("S" + i + "T" + j + "P" + k + "A").dataset.title += " Item: Not Set ";
				} else {
					document.getElementById("S" + i + "T" + j + "P" + k + "A").dataset.title += " Item: " + value["Team" + j]["Pokemon" + k].Item;
				}
				if (!value["Team" + j]["Pokemon" + k].Moves[0]) {
					document.getElementById("S" + i + "T" + j + "P" + k + "A").dataset.title += " Moveset: Not Set ";
				} else {
					document.getElementById("S" + i + "T" + j + "P" + k + "A").dataset.title += " Moveset: ";
					for (var l = 0; l < value["Team" + j]["Pokemon" + k].Moves.length; l++) {
						document.getElementById("S" + i + "T" + j + "P" + k + "A").dataset.title += value["Team" + j]["Pokemon" + k].Moves[l];
						if (l < value["Team" + j]["Pokemon" + k].Moves.length - 1) {
							document.getElementById("S" + i + "T" + j + "P" + k + "A").dataset.title += ", ";
						}
					}
				}
			}
		}
	}
}
	/*  */
	
	/*  *
function updateSelectors(team,poke,id) {
	for (var i = 1; i <= 12; i++) {
		document.getElementById('PokemonSelect' + i).style.backgroundColor = "white";
		document.getElementById('PokemonSelect' + i).style.color = "black";
	}
	document.getElementById(id).style.backgroundColor = "black";
	document.getElementById(id).style.color = "white";
	active = currentSaveFile[team];
	active = active[poke];
	if (!active.Species) {
		nmdItem1.namedItem('PokeSpecies').value = "";
	} else {
		nmdItem1.namedItem('PokeSpecies').value = active.Species;
	}
	if (!active.Level) {
		nmdItem1.namedItem('PokeLevel').value = "";
	} else {
		nmdItem1.namedItem('PokeLevel').value = active.Level;
	}
	if (!active.Item) {
		nmdItem1.namedItem('PokeItem').value = "None";
	} else {
		nmdItem1.namedItem('PokeItem').value = active.Item;
	}
	if (!active.Ability) {
		nmdItem2.namedItem('PokeAbility').value = "";
	} else {
		nmdItem2.namedItem('PokeAbility').value = active.Ability;
	}
	if (!active.Gender) {
		nmdItem2.namedItem('PokeGender').value = "";
	} else {
		nmdItem2.namedItem('PokeGender').value = active.Gender;
	}
	console.log(active);
}
	/*  */
	
	
	/* START Update currentSaveFile *
function updateSpeciesLevelItem() {
	var ele = active;
	if (nmdItem1.namedItem('PokeSpecies').value != "") {
		ele.Species = nmdItem1.namedItem('PokeSpecies').value;
		for (var i = 0; i < nmdItem2.length; i++) {
			document.getElementById('PokeForm2').elements[i].value = "";
		}
		
		for (var i = 0; i < document.getElementById( 'PAbility' ).getElementsByTagName( 'option' ).length;) {
			document.getElementById( 'PAbility' ).getElementsByTagName( 'option' )[i].remove();
		}
		for (var i = 0; i < Pokemon[ele.Species].Ability.length; i++) {
			var abil = document.createElement('option');
			abil.setAttribute("value",Pokemon[ele.Species].Ability[i]);
			document.getElementById('PAbility').appendChild(abil);
		}
		
		for (var i = 0; i < document.getElementById( 'PGender' ).getElementsByTagName( 'option' ).length;) {
			document.getElementById( 'PGender' ).getElementsByTagName( 'option' )[i].remove();
		}
		for (var i = 0; i < Pokemon[ele.Species].Gender.length; i++) {
			var gen = document.createElement('option');
			gen.setAttribute("value",Pokemon[ele.Species].Gender[i]);
			document.getElementById('PGender').appendChild(gen);
		}
		//for (var i = 0; i < document.getElementById( 'PMoves' ).getElementsByTagName( 'option' ).length;) {
		//	document.getElementById( 'PMoves' ).getElementsByTagName( 'option' )[i].remove();
		//}
		for (var move in Moves) {
			var mov = document.createElement('option');
			mov.setAttribute("value",move);
			document.getElementById('PMove').appendChild(mov);
		}
	}
	if (nmdItem1.namedItem('PokeLevel').value != "") {
		ele.Level = nmdItem1.namedItem('PokeLevel').value;
	}
	if (nmdItem1.namedItem('PokeItem').value != "") {
		ele.Item = nmdItem1.namedItem('PokeItem').value;
	}
	console.log(ele);
}
function updateGenderAbilityMoves () {
	var ele = active;
	if (nmdItem2.namedItem('PokeAbility').value != "") {
		ele.Ability = nmdItem2.namedItem('PokeAbility').value;
	}
	if (nmdItem2.namedItem('PokeGender').value != "") {
		ele.Gender = nmdItem2.namedItem('PokeGender').value;
	}
	for (var i = 1; i <= 6; i++) {
		if (nmdItem2.namedItem('PokeMove' + i).value != "") {
			ele.Moves[i - 1] = nmdItem2.namedItem('PokeMove' + i).value;
		}
	}
}
	/* END Update currentSaveFile */
	
	
	/* START onClick Functions */
/*document.getElementById('SaveScreen').style.display = "none";
document.getElementById('PokemonScreen').style.display = "none";
document.getElementById('BattleScreen').style.display = "none";
document.getElementById('SaveTab').addEventListener("click", function() {
	document.getElementById('SaveScreen').style.display = "block";
	document.getElementById('PokemonScreen').style.display = "none";
	document.getElementById('BattleScreen').style.display = "none";
	updateSLImgs ();
});
document.getElementById('PokemonTab').addEventListener("click", function() {
	document.getElementById('SaveScreen').style.display = "none";
	document.getElementById('PokemonScreen').style.display = "block";
	document.getElementById('BattleScreen').style.display = "none";
	updateSelectors("Team1","Pokemon1",'PokemonSelect1');
});
document.getElementById('BattleTab').addEventListener("click", function() {
	document.getElementById('SaveScreen').style.display = "none";
	document.getElementById('PokemonScreen').style.display = "none";
	document.getElementById('BattleScreen').style.display = "block";
});
	/* END onClick Functions */
	
	/*  
for (var species in Pokemon) {
	var mon = document.createElement('option');
	mon.setAttribute("value",species);
	document.getElementById('PSpecies').appendChild(mon);
}
	/*  */