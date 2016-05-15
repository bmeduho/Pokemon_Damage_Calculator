// HP Stat = floor((2 * B) * L / 100 + L + 10)
// Other Stat = floor((2 * B) * L / 100 + 5)


function HP_STAT (pokemon) {
	return (Math.floor(((2 * Pokemon[pokemon.Species].BaseStats.HP) * parseInt(pokemon.Level) / 100) + parseInt(pokemon.Level) + 10));
}

function OTHER_STAT (pokemon, stat) {
	return (Math.floor(((2 * Pokemon[pokemon.Species].BaseStats[stat]) * parseInt(pokemon.Level) / 100) + 5));
}

function ALL_STATS (pokemon) {
	console.log(HP_STAT(pokemon));
	console.log(OTHER_STAT(pokemon, "Atk"));
	console.log(OTHER_STAT(pokemon, "Def"));
	console.log(OTHER_STAT(pokemon, "SAk"));
	console.log(OTHER_STAT(pokemon, "SDf"));
	console.log(OTHER_STAT(pokemon, "Spd"));
}

function BASE_DAMAGE (user, opponent, moveIndex) {
	var secOne = ((2 * parseInt(user.Level) + 10) / 250)
	if (Moves[user.Moves[moveIndex]].Category === "Physical") {
		var secTwo = (OTHER_STAT(user, "Atk") / OTHER_STAT(opponent, "Def"));
	} else if (Moves[user.Moves[moveIndex]].Category === "Special") {
		var secTwo = (OTHER_STAT(user, "SAk") / OTHER_STAT(opponent, "SDf"));
	}
	var secThree = Moves[user.Moves[moveIndex]].BP[0] * Variables.BPBoost;
	var stepOne = secOne * secTwo * secThree + 2;
	return stepOne;
}
function MODIFIER (user, opponent, moveIndex, trigger) {
	var modifier = STAB_CHECKER(user, moveIndex) * TYPE_EFFECTIVENESS(user, opponent, moveIndex) * CRIT_MISS_CHECKER(trigger);
	return modifier;
}
function STAB_CHECKER (user, moveIndex) {
	if (Pokemon[user.Species].Type[0] === Moves[user.Moves[moveIndex]].Type || Pokemon[user.Species].Type[1] === Moves[user.Moves[moveIndex]].Type) {
		var stab = STAB;
	} else {
		var stab = 1;
	}
	return stab;
}
function TYPE_EFFECTIVENESS (user, opponent, moveIndex) {
	var Effectiveness = 1;
	var moveType = Types[Moves[user.Moves[moveIndex]].Type];
	for (var i; i < Pokemon[opponent.Species].Type; i++) {
		if (moveType.Strong === Pokemon[opponent.Species].Type[i]) {
			Effectiveness *= 2;
		} else if (moveType.Weak === Pokemon[opponent.Species].Type[i]) {
			Effectiveness *= .5;
		} else if (moveType.Immune === Pokemon[opponent.Species].Type[i]) {
			Effectiveness *= 0;
		}
	}
	return Effectiveness
}
function CRIT_MISS_CHECKER (trigger) {
	var Trigger = 1;
	switch (trigger) {
		case "Crit":
		case "Miss":
			Trigger = 0;
			break;
		case "N/A":
		default:
			break;
	}
	return Trigger;
}
function CALCULATE_DAMAGE (user, opponent, moveIndex, trigger) {
	var damageMax = BASE_DAMAGE(user, opponent, moveIndex) * MODIFIER (user, opponent, moveIndex, trigger);
	var damageMin = damageMax * .85;
	damageMax = Math.ceil(damageMax);
	damageMin = Math.floor(damageMin);
	return {Max: damageMin, Min: damageMax}
}