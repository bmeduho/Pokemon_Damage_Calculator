var Moves = {
	/*
	Move: {},
	*/
	"Absorb": {
		Type: "Grass",
		Category: "Special",
		BP: 20
	},
	"Acid": {},
	"Acid Armor": {},
	"Acid Spray": {},
	"Acrobatics": {},
	"Acupressure": {},
	"Aerial Ace": {},
	"Aeroblast": {},
	"After You": {},
	"Agility": {},
	"Air Cutter": {},
	"Air Slash": {},
	"Ally Switch": {},
	"Amnesia": {},
	"Ancient Power": {},
	"Aqua Jet": {},
	"Aqua Ring": {},
	"Aqua Tail": {},
	"Arm Thrust": {},
	"Aromatherapy": {},
	"Aromatic Mist": {},
	"Assist": {},
	"Assurance": {},
	"Astonish": {},
	"Attack Order": {},
	"Attract": {},
	"Aura Sphere": {},
	"Aurora Beam": {},
	"Autotomize": {},
	"Avalanche": {},
	"Baby-Doll Eyes": {},
	"Barrage": {},
	"Barrier": {},
	"Baton Pass": {},
	"Beat Up": {},
	"Belch": {},
	"Belly Drum": {},
	"Bestow": {},
	"Bide": {},
	"Bind": {},
	"Bite": {},
	"Blast Burn": {},/*,
	Blaze Kick	Fire	Physical	Cool	10	85	90%	III
	59	Blizzard	Ice	Special	Beautiful	5	110*	70%*	I
	335	Block	Normal	Status	Cute	5	—	100%	III
	551	Blue Flare	Fire	Special	Beautiful	5	130	85%	V
	34	Body Slam	Normal	Physical	Tough	15	85	100%	I
	550	Bolt Strike	Electric	Physical	Beautiful	5	130	85%	V
	125	Bone Club	Ground	Physical	Tough	20	65	85%	I
	198	Bone Rush	Ground	Physical	Tough	10	25	90%*	II
	155	Bonemerang	Ground	Physical	Tough	10	50	90%	I
	586	Boomburst	Normal	Special	Tough	10	140	100%	VI
	340	Bounce	Flying	Physical	Cute	5	85	85%	III
	413	Brave Bird	Flying	Physical	Cool	15	120	100%	IV
	280	Brick Break	Fighting	Physical	Cool	15	75	100%	III
	362	Brine	Water	Special	Tough	10	65	100%	IV
	145	Bubble	Water	Special	Cute	30	40*	100%	I
	61	Bubble Beam	Water	Special	Beautiful	20	65	100%	I
	450	Bug Bite	Bug	Physical	Cute	20	60	100%	IV
	405	Bug Buzz	Bug	Special	Beautiful	10	90	100%	IV
	339	Bulk Up	Fighting	Status	Cool	20	—	—	III
	523	Bulldoze	Ground	Physical	Tough	20	60	100%	V
	418	Bullet Punch	Steel	Physical	Tough	30	40	100%	IV
	331	Bullet Seed	Grass	Physical	Cool	30	25*	100%	III
	347	Calm Mind	Psychic	Status	Clever	20	—	—	III
	293	Camouflage	Normal	Status	Clever	20	—	100%	III
	445	Captivate	Normal	Status	Cute	20	—	100%	IV
	606	Celebrate	Normal	Status	Cute	40	—	—	VI
	268	Charge	Electric	Status	Clever	20	—	—	III
	451	Charge Beam	Electric	Special	Beautiful	10	50	90%	IV
	204	Charm*	Fairy	Status	Cute	20	—	100%	II
	448	Chatter	Flying	Special	Cute	20	65*	100%	IV
	498	Chip Away	Normal	Physical	Tough	20	70	100%	V
	509	Circle Throw	Fighting	Physical	Cool	10	60	90%	V
	128	Clamp	Water	Physical	Tough	10	35	85%*	I
	499	Clear Smog	Poison	Special	Beautiful	15	50	—	V
	370	Close Combat	Fighting	Physical	Tough	5	120	100%	IV
	489	Coil	Poison	Status	Tough	20	—	—	V
	4	Comet Punch	Normal	Physical	Tough	15	18	85%	I
	590	Confide	Normal	Status	Cute	20	—	—	VI
	109	Confuse Ray	Ghost	Status	Clever	10	—	100%	I
	93	Confusion	Psychic	Special	Clever	25	50	100%	I
	132	Constrict	Normal	Physical	Tough	35	10	100%	I
	160	Conversion	Normal	Status	Beautiful	30	—	—	I
	176	Conversion 2	Normal	Status	Beautiful	30	—	100%	II
	383	Copycat	Normal	Status	Cute	20	—	—	IV
	322	Cosmic Power	Psychic	Status	Beautiful	20	—	—	III
	538	Cotton Guard	Grass	Status	Cute	10	—	—	V
	178	Cotton Spore	Grass	Status	Beautiful	40	—	100%*	II
	68	Counter	Fighting	Physical	Tough	20	—	100%	I
	343	Covet	Normal	Physical	Cute	25*	60*	100%	III
	152	Crabhammer	Water	Physical	Tough	10	100*	90%*	I
	578	Crafty Shield	Fairy	Status	Clever	10	—	—	VI
	238	Cross Chop	Fighting	Physical	Cool	5	100	80%	II
	440	Cross Poison	Poison	Physical	Cool	20	70	100%	IV
	242	Crunch	Dark	Physical	Tough	15	80	100%	II
	306	Crush Claw	Normal	Physical	Cool	10	75	95%	III
	462	Crush Grip	Normal	Physical	Tough	5	—	100%	IV
	174	Curse*	Ghost	Status	Tough	10	—	—	II
	15	Cut	Normal	Physical	Cool	30	50	95%	I
	399	Dark Pulse	Dark	Special	Cool	15	80	100%	IV
	464	Dark Void	Dark	Status	Clever	10	—	80%	IV
	605	Dazzling Gleam	Fairy	Special	Beautiful	10	80	100%	VI
	455	Defend Order	Bug	Status	Clever	10	—	—	IV
	111	Defense Curl	Normal	Status	Cute	40	—	—	I
	432	Defog	Flying	Status	Cool	15	—	—	IV
	194	Destiny Bond	Ghost	Status	Clever	5	—	—	II
	197	Detect	Fighting	Status	Cool	5	—	—	II
	591	Diamond Storm	Rock	Physical	Beautiful	5	100	95%	VI
	91	Dig	Ground	Physical	Tough	10	80*	100%	I
	50	Disable	Normal	Status	Clever	20	—	100%*	I
	574	Disarming Voice	Fairy	Special	Cute	15	40	—	VI
	435	Discharge	Electric	Special	Beautiful	15	80	100%	IV
	291	Dive	Water	Physical	Beautiful	10	80	100%	III
	146	Dizzy Punch	Normal	Physical	Cute	10	70	100%	I
	353	Doom Desire	Steel	Special	Beautiful	5	140*	100%*	III
	458	Double Hit	Normal	Physical	Cool	10	35	90%	IV
	24	Double Kick	Fighting	Physical	Cool	30	30	100%	I
	3	Double Slap	Normal	Physical	Cute	10	15	85%	I
	104	Double Team	Normal	Status	Cool	15	—	—	I
	38	Double-Edge	Normal	Physical	Tough	15	120*	100%	I
	434	Draco Meteor	Dragon	Special	Beautiful	5	130*	90%	IV
	620	Dragon Ascent	Flying	Physical	Beautiful	5	120	100%	VI*
	225	Dragon Breath	Dragon	Special	Cool	20	60	100%	II
	337	Dragon Claw	Dragon	Physical	Cool	15	80	100%	III
	349	Dragon Dance	Dragon	Status	Cool	20	—	—	III
	406	Dragon Pulse	Dragon	Special	Beautiful	10	85*	100%	IV
	82	Dragon Rage	Dragon	Special	Cool	10	*	100%	I
	407	Dragon Rush	Dragon	Physical	Tough	10	100	75%	IV
	525	Dragon Tail	Dragon	Physical	Tough	10	60	90%	V
	409	Drain Punch	Fighting	Physical	Tough	10*	75*	100%	IV
	577	Draining Kiss	Fairy	Special	Cute	10	50	100%	VI
	138	Dream Eater	Psychic	Special	Clever	15	100	100%	I
	65	Drill Peck	Flying	Physical	Cool	20	80	100%	I
	529	Drill Run	Ground	Physical	Tough	10	80	95%	V
	530	Dual Chop	Dragon	Physical	Tough	15	40	90%	V
	223	Dynamic Punch	Fighting	Physical	Cool	5	100	50%	II
	414	Earth Power	Ground	Special	Beautiful	10	90	100%	IV
	89	Earthquake	Ground	Physical	Tough	10	100	100%	I
	497	Echoed Voice	Normal	Special	Beautiful	15	40	100%	V
	598	Eerie Impulse	Electric	Status	Clever	15	—	100%	VI
	121	Egg Bomb	Normal	Physical	Cute	10	100	75%	I
	604	Electric Terrain	Electric	Status	Clever	10	—	—	VI
	582	Electrify	Electric	Status	Clever	20	—	—	VI
	486	Electro Ball	Electric	Special	Cool	10	—	100%	V
	527	Electroweb	Electric	Special	Beautiful	15	55	95%	V
	373	Embargo	Dark	Status	Clever	15	—	100%	IV
	52	Ember	Fire	Special	Cute	25	40	100%	I
	227	Encore	Normal	Status	Cute	5	—	100%	II
	283	Endeavor	Normal	Physical	Tough	5	—	100%	III
	203	Endure	Normal	Status	Tough	10	—	—	II
	412	Energy Ball	Grass	Special	Beautiful	10	90*	100%	IV
	494	Entrainment	Normal	Status	Cute	15	—	100%	V
	284	Eruption	Fire	Special	Beautiful	5	—	100%	III
	153	Explosion	Normal	Physical	Beautiful	5	250*	100%	I
	326	Extrasensory	Psychic	Special	Cool	20*	80	100%	III
	245	Extreme Speed	Normal	Physical	Cool	5	80	100%	II
	263	Facade	Normal	Physical	Cute	20	70	100%	III
	587	Fairy Lock	Fairy	Status	Clever	10	—	—	VI
	584	Fairy Wind	Fairy	Special	Beautiful	30	40	—	VI
	252	Fake Out	Normal	Physical	Cute	10	40	100%	III
	313	Fake Tears	Dark	Status	Cute	20	—	100%	III
	206	False Swipe	Normal	Physical	Cool	40	40	100%	II
	297	Feather Dance	Flying	Status	Beautiful	15	—	100%	III
	364	Feint	Normal	Physical	Clever	10	30*	100%	IV
	185	Feint Attack	Dark	Physical	Clever	20	60	—	II
	565	Fell Stinger	Bug	Physical	Cool	25	30	100%	VI
	552	Fiery Dance	Fire	Special	Beautiful	10	80	100%	V
	515	Final Gambit	Fighting	Special	Tough	5	—	100%	V
	126	Fire Blast	Fire	Special	Beautiful	5	110*	85%	I
	424	Fire Fang	Fire	Physical	Cool	15	65	95%	IV
	519	Fire Pledge	Fire	Special	Beautiful	10	80*	100%	V
	7	Fire Punch	Fire	Physical	Tough	15	75	100%	I
	83	Fire Spin	Fire	Special	Beautiful	15	35*	85%*	I
	90	Fissure	Ground	Physical	Tough	5	—	—* *	I
	175	Flail	Normal	Physical	Cute	15	—	100%	II
	481	Flame Burst	Fire	Special	Beautiful	15	70	100%	V
	488	Flame Charge	Fire	Physical	Cool	20	50	100%	V
	172	Flame Wheel	Fire	Physical	Beautiful	25	60	100%	II
	53	Flamethrower	Fire	Special	Beautiful	15	90*	100%	I
	394	Flare Blitz	Fire	Physical	Cool	15	120	100%	IV
	148	Flash	Normal	Status	Beautiful	20	—	100%*	I
	430	Flash Cannon	Steel	Special	Beautiful	10	80	100%	IV
	260	Flatter	Dark	Status	Clever	15	—	100%	III
	374	Fling	Dark	Physical	Cute	10	—	100%	IV
	579	Flower Shield	Fairy	Status	Beautiful	10	—	—	VI
	19	Fly	Flying	Physical	Clever	15	90*	95%	I
	560	Flying Press	Fighting	Physical	Tough	10	80	95%	VI
	411	Focus Blast	Fighting	Special	Cool	5	120	70%	IV
	116	Focus Energy	Normal	Status	Cool	30	—	—	I
	264	Focus Punch	Fighting	Physical	Tough	20	150	100%	III
	266	Follow Me	Normal	Status	Cute	20	—	100%	III
	395	Force Palm	Fighting	Physical	Cool	10	60	100%	IV
	193	Foresight	Normal	Status	Clever	40	—	100%	II
	571	Forest's Curse	Grass	Status	Clever	20	—	100%	VI
	492	Foul Play	Dark	Physical	Clever	15	95	100%	V
	553	Freeze Shock	Ice	Physical	Beautiful	5	140	90%	V
	573	Freeze-Dry	Ice	Special	Beautiful	20	70	100%	VI
	338	Frenzy Plant	Grass	Special	Cool	5	150	90%	III
	524	Frost Breath	Ice	Special	Beautiful	10	60*	90%	V
	218	Frustration	Normal	Physical	Cute	20	—	100%	II
	31	Fury Attack	Normal	Physical	Cool	20	15	85%	I
	210	Fury Cutter	Bug	Physical	Cool	20	40*	95%	II
	154	Fury Swipes	Normal	Physical	Tough	15	18	80%	I
	559	Fusion Bolt	Electric	Physical	Cool	5	100	100%	V
	558	Fusion Flare	Fire	Special	Beautiful	5	100	100%	V
	248	Future Sight	Psychic	Special	Clever	10*	120*	100%*	II
	380	Gastro Acid	Poison	Status	Tough	10	—	100%	IV
	544	Gear Grind	Steel	Physical	Clever	15	50	85%	V
	601	Geomancy	Fairy	Status	Beautiful	10	—	—	VI
	202	Giga Drain	Grass	Special	Clever	10*	75*	100%	II
	416	Giga Impact	Normal	Physical	Tough	5	150	90%	IV
	549	Glaciate	Ice	Special	Beautiful	10	65	95%	V
	137	Glare	Normal	Status	Tough	30	—	100%*	I
	447	Grass Knot	Grass	Special	Cute	20	—	100%	IV
	520	Grass Pledge	Grass	Special	Beautiful	10	80*	100%	V
	320	Grass Whistle	Grass	Status	Clever	15	—	55%	III
	580	Grassy Terrain	Grass	Status	Beautiful	10	—	—	VI
	356	Gravity	Psychic	Status	Clever	5	—	—	IV*/
	Growl: {
		Type: "Normal",
		Category: "Status",
		BP: ""
	},
	/*74	Growth	Normal	Status	Beautiful	20*	—	—	I
	288	Grudge	Ghost	Status	Tough	5	—	100%	III
	470	Guard Split	Psychic	Status	Clever	10	—	—	V
	385	Guard Swap	Psychic	Status	Clever	10	—	—	IV
	12	Guillotine	Normal	Physical	Cool	5	—	—* *	I
	441	Gunk Shot	Poison	Physical	Tough	5	120	80%*	IV
	16	Gust*	Flying	Special	Clever	35	40	100%	I
	360	Gyro Ball	Steel	Physical	Cool	5	—	100%	IV
	258	Hail	Ice	Status	Beautiful	10	—	—	III
	359	Hammer Arm	Fighting	Physical	Tough	10	100	90%	IV
	603	Happy Hour	Normal	Status	Cute	30	—	—	VI
	106	Harden	Normal	Status	Tough	30	—	—	I
	114	Haze	Ice	Status	Beautiful	30	—	—	I
	543	Head Charge	Normal	Physical	Tough	15	120	100%	V
	457	Head Smash	Rock	Physical	Tough	5	150	80%	IV
	29	Headbutt	Normal	Physical	Tough	15	70	100%	I
	215	Heal Bell	Normal	Status	Beautiful	5	—	—	II
	377	Heal Block	Psychic	Status	Clever	15	—	100%	IV
	456	Heal Order	Bug	Status	Clever	10	—	—	IV
	505	Heal Pulse	Psychic	Status	Beautiful	10	—	—	V
	361	Healing Wish	Psychic	Status	Beautiful	10	—	—	IV
	531	Heart Stamp	Psychic	Physical	Cute	25	60	100%	V
	391	Heart Swap	Psychic	Status	Clever	10	—	—	IV
	535	Heat Crash	Fire	Physical	Tough	10	—	100%	V
	257	Heat Wave	Fire	Special	Beautiful	10	95*	90%	III
	484	Heavy Slam	Steel	Physical	Tough	10	—	100%	V
	270	Helping Hand	Normal	Status	Clever	20	—	—	III
	506	Hex	Ghost	Special	Clever	10	65*	100%	V
	237	Hidden Power	Normal	Special	Clever	15	60*	100%	II
	136	High Jump Kick	Fighting	Physical	Cool	10*	130*	90%	I
	610	Hold Back	Normal	Physical	Cool	40	40	100%	VI
	607	Hold Hands	Normal	Status	Cute	40	—	—	VI
	468	Hone Claws	Dark	Status	Cute	15	—	—	V
	30	Horn Attack	Normal	Physical	Cool	25	65	100%	I
	32	Horn Drill	Normal	Physical	Cool	5	—	—* *	I
	532	Horn Leech	Grass	Physical	Tough	10	75	100%	V
	336	Howl	Normal	Status	Cool	40	—	—	III
	542	Hurricane	Flying	Special	Tough	10	110*	70%	V
	308	Hydro Cannon	Water	Special	Beautiful	5	150	90%	III
	56	Hydro Pump	Water	Special	Beautiful	5	110*	80%	I
	63	Hyper Beam	Normal	Special	Cool	5	150	90%	I
	158	Hyper Fang	Normal	Physical	Cool	15	80	90%	I
	304	Hyper Voice	Normal	Special	Cool	10	90	100%	III
	621	Hyperspace Fury	Dark	Physical	Tough	5	100	—	VI*
	593	Hyperspace Hole	Psychic	Special	Clever	5	80	—	VI
	95	Hypnosis	Psychic	Status	Clever	20	—	60%*	I
	301	Ice Ball	Ice	Physical	Beautiful	20	30	90%	III
	58	Ice Beam	Ice	Special	Beautiful	10	90*	100%	I
	554	Ice Burn	Ice	Special	Beautiful	5	140	90%	V
	423	Ice Fang	Ice	Physical	Cool	15	65	95%	IV
	8	Ice Punch	Ice	Physical	Beautiful	15	75	100%	I
	420	Ice Shard	Ice	Physical	Beautiful	30	40	100%	IV
	556	Icicle Crash	Ice	Physical	Beautiful	10	85	90%	V
	333	Icicle Spear	Ice	Physical	Beautiful	30	25*	100%	III
	196	Icy Wind	Ice	Special	Beautiful	15	55	95%	II
	286	Imprison	Psychic	Status	Clever	10	—	100%	III
	510	Incinerate	Fire	Special	Tough	15	60*	100%	V
	517	Inferno	Fire	Special	Beautiful	5	100	50%	V
	611	Infestation	Bug	Special	Cute	20	20	100%	VI
	275	Ingrain	Grass	Status	Clever	20	—	—	III
	569	Ion Deluge	Electric	Status	Beautiful	25	—	—	VI
	334	Iron Defense	Steel	Status	Tough	15	—	—	III
	442	Iron Head	Steel	Physical	Tough	15	80	100%	IV
	231	Iron Tail	Steel	Physical	Cool	15	100	75%	II
	449	Judgment	Normal	Special	Beautiful	10	100	100%	IV
	26	Jump Kick	Fighting	Physical	Cool	10*	100*	95%	I
	2	Karate Chop*	Fighting	Physical	Tough	25	50	100%	I
	134	Kinesis	Psychic	Status	Clever	15	—	80%	I
	588	King's Shield	Steel	Status	Cool	10	—	—	VI
	282	Knock Off	Dark	Physical	Clever	20	65*	100%	III
	616	Land's Wrath	Ground	Physical	Beautiful	10	90	100%	VI
	387	Last Resort	Normal	Physical	Cute	5	140*	100%	IV
	436	Lava Plume	Fire	Special	Tough	15	80	100%	IV
	348	Leaf Blade	Grass	Physical	Cool	15	90	100%	III
	437	Leaf Storm	Grass	Special	Beautiful	5	130*	90%	IV
	536	Leaf Tornado	Grass	Special	Cool	10	65	90%	V
	141	Leech Life	Bug	Physical	Clever	15	20	100%	I*/
	"Leech Seed": {
		Type: "Grass",
		Category: "Status",
		BP: ""
	},
	/*43	Leer	Normal	Status	Cool	30	—	100%	I
	122	Lick	Ghost	Physical	Cute	30	30*	100%	I
	617	Light of Ruin	Fairy	Special	Beautiful	5	140	90%	VI
	113	Light Screen	Psychic	Status	Beautiful	30	—	—	I
	199	Lock-On	Normal	Status	Clever	5	—	100%	II
	142	Lovely Kiss	Normal	Status	Beautiful	10	—	75%	I
	67	Low Kick	Fighting	Physical	Tough	20	—*	100%*	I
	490	Low Sweep	Fighting	Physical	Clever	20	65*	100%	V
	381	Lucky Chant	Normal	Status	Cute	30	—	—	IV
	461	Lunar Dance	Psychic	Status	Beautiful	10	—	—	IV
	295	Luster Purge	Psychic	Special	Clever	5	70	100%	III
	183	Mach Punch	Fighting	Physical	Cool	30	40	100%	II
	277	Magic Coat	Psychic	Status	Beautiful	15	—	—	III
	478	Magic Room	Psychic	Status	Clever	10	—	—	V
	345	Magical Leaf	Grass	Special	Beautiful	20	60	—	III
	463	Magma Storm	Fire	Special	Tough	5	100*	75%*	IV
	443	Magnet Bomb	Steel	Physical	Cool	20	60	—	IV
	393	Magnet Rise	Electric	Status	Clever	10	—	—	IV
	602	Magnetic Flux	Electric	Status	Clever	20	—	—	VI
	222	Magnitude	Ground	Physical	Tough	30	—	100%	II
	561	Mat Block	Fighting	Status	Cool	10	—	—	VI
	382	Me First	Normal	Status	Clever	20	—	—	IV
	212	Mean Look	Normal	Status	Beautiful	5	—	100%	II
	96	Meditate	Psychic	Status	Beautiful	40	—	—	I
	72	Mega Drain	Grass	Special	Clever	15*	40	100%	I
	25	Mega Kick	Normal	Physical	Cool	5	120	75%	I
	5	Mega Punch	Normal	Physical	Tough	20	80	85%	I
	224	Megahorn	Bug	Physical	Cool	10	120	85%	II
	262	Memento	Dark	Status	Tough	10	—	100%	III
	368	Metal Burst	Steel	Physical	Cool	10	—	100%	IV
	232	Metal Claw	Steel	Physical	Cool	35	50	95%	II
	319	Metal Sound	Steel	Status	Clever	40	—	85%	III
	309	Meteor Mash	Steel	Physical	Cool	10	90*	90%*	III
	118	Metronome	Normal	Status	Cute	10	—	—	I
	208	Milk Drink	Normal	Status	Cute	10	—	—	II
	102	Mimic	Normal	Status	Cute	10	—	100%	I
	170	Mind Reader	Normal	Status	Clever	5	—	100%	II
	107	Minimize	Normal	Status	Cute	10*	—	—	I
	357	Miracle Eye	Psychic	Status	Clever	40	—	—	IV
	243	Mirror Coat	Psychic	Special	Beautiful	20	—	100%	II
	119	Mirror Move	Flying	Status	Clever	20	—	—	I
	429	Mirror Shot	Steel	Special	Beautiful	10	65	85%	IV
	54	Mist	Ice	Status	Beautiful	30	—	—	I
	296	Mist Ball	Psychic	Special	Clever	5	70	100%	III
	581	Misty Terrain	Fairy	Status	Beautiful	10	—	—	VI
	585	Moonblast	Fairy	Special	Beautiful	15	95	100%	VI
	236	Moonlight*	Fairy	Status	Beautiful	5	—	—	II
	234	Morning Sun	Normal	Status	Beautiful	5	—	—	II
	426	Mud Bomb	Ground	Special	Cute	10	65	85%	IV
	341	Mud Shot	Ground	Special	Tough	15	55	95%	III
	300	Mud Sport	Ground	Status	Cute	15	—	100%	III
	189	Mud-Slap	Ground	Special	Cute	10	20	100%	II
	330	Muddy Water	Water	Special	Tough	10	90*	85%	III
	595	Mystical Fire	Fire	Special	Beautiful	10	65	100%	VI
	417	Nasty Plot	Dark	Status	Clever	20	—	—	IV
	363	Natural Gift	Normal	Physical	Clever	15	—	100%	IV
	267	Nature Power	Normal	Status	Beautiful	20	—	—	III
	302	Needle Arm	Grass	Physical	Clever	15	60	100%	III
	539	Night Daze	Dark	Special	Cool	10	85	95%	V
	101	Night Shade	Ghost	Special	Clever	15	—	100%	I
	400	Night Slash	Dark	Physical	Cool	15	70	100%	IV
	171	Nightmare	Ghost	Status	Clever	15	—	100%	II
	568	Noble Roar	Normal	Status	Tough	30	—	100%	VI
	609	Nuzzle	Electric	Physical	Cute	20	20	100%	VI
	613	Oblivion Wing	Flying	Special	Cool	10	80	100%	VI
	190	Octazooka	Water	Special	Tough	10	65	85%	II
	316	Odor Sleuth	Normal	Status	Clever	40	—	100%	III
	466	Ominous Wind	Ghost	Special	Beautiful	5	60	100%	IV
	618	Origin Pulse	Water	Special	Beautiful	10	110	85%	VI*
	200	Outrage	Dragon	Physical	Cool	10*	120*	100%	II
	315	Overheat	Fire	Special	Beautiful	5	130*	90%	III
	220	Pain Split	Normal	Status	Clever	20	—	100%	II
	570	Parabolic Charge	Electric	Special	Clever	20	50	100%	VI
	575	Parting Shot	Dark	Status	Cool	20	—	100%	VI
	6	Pay Day	Normal	Physical	Clever	20	40	100%	I
	371	Payback	Dark	Physical	Tough	10	50	100%	IV
	64	Peck	Flying	Physical	Cool	35	35	100%	I
	195	Perish Song	Normal	Status	Beautiful	5	—	—	II
	572	Petal Blizzard	Grass	Physical	Beautiful	15	90	100%	VI
	80	Petal Dance	Grass	Special	Beautiful	10*	120*	100%	I
	566	Phantom Force	Ghost	Physical	Cool	10	90	100%	VI
	42	Pin Missile	Bug	Physical	Cool	20	25*	95%*	I
	589	Play Nice	Normal	Status	Cute	20	—	—	VI
	583	Play Rough	Fairy	Physical	Cute	10	90	90%	VI
	365	Pluck	Flying	Physical	Cute	20	60	100%	IV
	305	Poison Fang	Poison	Physical	Clever	15	50	100%	III
	139	Poison Gas	Poison	Status	Clever	40	—	90%*	I
	398	Poison Jab	Poison	Physical	Tough	20	80	100%	IV
	77	Poison Powder	Poison	Status	Clever	35	—	75%	I
	40	Poison Sting	Poison	Physical	Clever	35	15	100%	I
	342	Poison Tail	Poison	Physical	Clever	25	50	100%	III
	1	Pound	Normal	Physical	Tough	35	40	100%	I
	600	Powder	Bug	Status	Clever	20	—	100%	VI
	181	Powder Snow	Ice	Special	Beautiful	25	40	100%	II
	408	Power Gem	Rock	Special	Beautiful	20	80*	100%	IV
	471	Power Split	Psychic	Status	Clever	10	—	—	V
	384	Power Swap	Psychic	Status	Clever	10	—	—	IV
	379	Power Trick	Psychic	Status	Clever	10	—	—	IV
	438	Power Whip	Grass	Physical	Tough	10	120	85%	IV
	612	Power-Up Punch	Fighting	Physical	Tough	20	40	100%	VI
	619	Precipice Blades	Ground	Physical	Cool	10	120	85%	VI*
	217	Present	Normal	Physical	Cute	15	—	90%	II
	182	Protect	Normal	Status	Cute	10	—	—	II
	60	Psybeam	Psychic	Special	Beautiful	20	65	100%	I
	244	Psych Up	Normal	Status	Clever	10	—	—	II
	94	Psychic	Psychic	Special	Clever	10	90	100%	I
	354	Psycho Boost	Psychic	Special	Clever	5	140	90%	III
	427	Psycho Cut	Psychic	Physical	Cool	20	70	100%	IV
	375	Psycho Shift	Psychic	Status	Clever	10	—	100%*	IV
	473	Psyshock	Psychic	Special	Beautiful	10	80	100%	V
	540	Psystrike	Psychic	Special	Cool	10	100	100%	V
	149	Psywave	Psychic	Special	Clever	15	—	100%*	I
	386	Punishment	Dark	Physical	Cool	5	—	100%	IV
	228	Pursuit	Dark	Physical	Clever	20	40	100%	II
	511	Quash	Dark	Status	Clever	15	—	100%	V
	98	Quick Attack	Normal	Physical	Cool	30	40	100%	I
	501	Quick Guard	Fighting	Status	Cool	15	—	—	V
	483	Quiver Dance	Bug	Status	Beautiful	20	—	—	V
	99	Rage	Normal	Physical	Tough	20	20	100%	I
	476	Rage Powder	Bug	Status	Clever	20	—	—	V
	240	Rain Dance	Water	Status	Beautiful	5	—	—	II
	229	Rapid Spin	Normal	Physical	Cool	40	20	100%	II
	75	Razor Leaf	Grass	Physical	Cool	25	55	95%	I
	534	Razor Shell	Water	Physical	Cool	10	75	95%	V
	13	Razor Wind	Normal	Special	Cool	10	80	100%*	I
	105	Recover	Normal	Status	Clever	10*	—	—	I
	278	Recycle	Normal	Status	Clever	10	—	100%	III
	115	Reflect	Psychic	Status	Clever	20	—	—	I
	513	Reflect Type	Normal	Status	Clever	15	—	—	V
	287	Refresh	Normal	Status	Cute	20	—	100%	III
	547	Relic Song	Normal	Special	Beautiful	10	75	100%	V
	156	Rest	Psychic	Status	Cute	10	—	—	I
	514	Retaliate	Normal	Physical	Cool	5	70	100%	V
	216	Return	Normal	Physical	Cute	20	—	100%	II
	279	Revenge	Fighting	Physical	Tough	10	60	100%	III
	179	Reversal	Fighting	Physical	Cool	15	—	100%	II
	46	Roar	Normal	Status	Cool	20	—	—*	I
	459	Roar of Time	Dragon	Special	Beautiful	5	150	90%	IV
	350	Rock Blast	Rock	Physical	Tough	10	25	90%*	III
	431	Rock Climb	Normal	Physical	Tough	20	90	85%	IV
	397	Rock Polish	Rock	Status	Tough	20	—	—	IV
	157	Rock Slide	Rock	Physical	Tough	10	75	90%	I
	249	Rock Smash	Fighting	Physical	Tough	15	40*	100%	II
	88	Rock Throw	Rock	Physical	Tough	15	50	90%*	I
	317	Rock Tomb	Rock	Physical	Clever	15*	60*	95%*	III
	439	Rock Wrecker	Rock	Physical	Tough	5	150	90%	IV
	272	Role Play	Psychic	Status	Cute	10	—	—	III
	27	Rolling Kick	Fighting	Physical	Cool	15	60	85%	I
	205	Rollout	Rock	Physical	Cute	20	30	90%	II
	355	Roost	Flying	Status	Clever	10	—	—	IV
	563	Rototiller	Ground	Status	Tough	10	—	—	VI
	496	Round	Normal	Special	Beautiful	15	60	100%	V
	221	Sacred Fire	Fire	Physical	Beautiful	5	100	95%	II
	533	Sacred Sword	Fighting	Physical	Cool	15*	90	100%	V
	219	Safeguard	Normal	Status	Beautiful	25	—	—	II
	28	Sand Attack*	Ground	Status	Cute	15	—	100%	I
	328	Sand Tomb	Ground	Physical	Clever	15	35*	85%*	III
	201	Sandstorm	Rock	Status	Tough	10	—	—	II
	503	Scald	Water	Special	Tough	15	80	100%	V
	184	Scary Face	Normal	Status	Tough	10	—	100%*	II
	10	Scratch	Normal	Physical	Tough	35	40	100%	I
	103	Screech	Normal	Status	Clever	40	—	85%	I
	545	Searing Shot	Fire	Special	Cool	5	100	100%	V
	290	Secret Power	Normal	Physical	Clever	20	70	100%	III
	548	Secret Sword	Fighting	Special	Beautiful	10	85	100%	V
	402	Seed Bomb	Grass	Physical	Tough	15	80	100%	IV
	465	Seed Flare	Grass	Special	Beautiful	5	120	85%	IV
	69	Seismic Toss	Fighting	Physical	Tough	20	—	100%	I
	120	Self-Destruct	Normal	Physical	Beautiful	5	200*	100%	I
	247	Shadow Ball	Ghost	Special	Clever	15	80	100%	II
	421	Shadow Claw	Ghost	Physical	Cool	15	70	100%	IV
	467	Shadow Force	Ghost	Physical	Cool	5	120	100%	IV
	325	Shadow Punch	Ghost	Physical	Clever	20	60	—	III
	425	Shadow Sneak	Ghost	Physical	Clever	30	40	100%	IV
	159	Sharpen	Normal	Status	Cute	30	—	—	I
	329	Sheer Cold	Ice	Special	Beautiful	5	—	—*	III
	504	Shell Smash	Normal	Status	Tough	15	—	—	V
	508	Shift Gear	Steel	Status	Clever	10	—	—	V
	351	Shock Wave	Electric	Special	Cool	20	60	—	III
	324	Signal Beam	Bug	Special	Beautiful	15	75	100%	III
	318	Silver Wind	Bug	Special	Beautiful	5	60	100%	III
	493	Simple Beam	Normal	Status	Cute	15	—	100%	V
	47	Sing	Normal	Status	Cute	15	—	55%	I
	166	Sketch	Normal	Status	Clever	1	—	—	II
	285	Skill Swap	Psychic	Status	Clever	10	—	100%	III
	130	Skull Bash	Normal	Physical	Tough	10*	130*	100%	I
	143	Sky Attack	Flying	Physical	Cool	5	140	90%	I
	507	Sky Drop	Flying	Physical	Tough	10	60	100%	V
	327	Sky Uppercut	Fighting	Physical	Cool	15	85	90%	III
	303	Slack Off	Normal	Status	Cute	10	—	100%	III
	21	Slam	Normal	Physical	Tough	20	80	75%	I
	163	Slash	Normal	Physical	Cool	20	70	100%	I
	79	Sleep Powder	Grass	Status	Clever	15	—	75%	I
	214	Sleep Talk	Normal	Status	Cute	10	—	—	II
	124	Sludge	Poison	Special	Tough	20	65	100%	I
	188	Sludge Bomb	Poison	Special	Tough	10	90	100%	II
	482	Sludge Wave	Poison	Special	Tough	10	95	100%	V
	479	Smack Down	Rock	Physical	Tough	15	50	100%	V
	265	Smelling Salts	Normal	Physical	Tough	10	70*	100%	III
	123	Smog	Poison	Special	Tough	20	30*	70%	I
	108	Smokescreen	Normal	Status	Clever	20	—	100%	I
	555	Snarl	Dark	Special	Tough	15	55	95%	V
	289	Snatch	Dark	Status	Clever	10	—	100%	III
	173	Snore	Normal	Special	Cute	15	50*	100%	II
	487	Soak	Water	Status	Cute	20	—	100%	V
	135	Soft-Boiled	Normal	Status	Cute	10	—	—	I
	76	Solar Beam	Grass	Special	Cool	10	120	100%	I
	49	Sonic Boom	Normal	Special	Cool	20	*	90%	I
	460	Spacial Rend	Dragon	Special	Beautiful	5	100	95%	IV
	209	Spark	Electric	Physical	Cool	20	65	100%	II
	169	Spider Web	Bug	Status	Clever	10	—	100%	II
	131	Spike Cannon	Normal	Physical	Cool	15	20	100%	I
	191	Spikes	Ground	Status	Clever	20	—	—	II
	596	Spiky Shield	Grass	Status	Tough	10	—	—	VI
	255	Spit Up	Normal	Special	Tough	10	—	100%	III
	180	Spite	Ghost	Status	Tough	10	—	100%	II
	150	Splash	Normal	Status	Cute	40	—	—	I
	147	Spore	Grass	Status	Beautiful	15	—	100%	I
	446	Stealth Rock	Rock	Status	Cool	20	—	—	IV
	592	Steam Eruption	Water	Special	Beautiful	5	110	95%	VI
	537	Steamroller	Bug	Physical	Tough	20	65	100%	V
	211	Steel Wing	Steel	Physical	Cool	25	70	90%	II
	564	Sticky Web	Bug	Status	Tough	20	—	—	VI
	254	Stockpile	Normal	Status	Tough	20*	—	—	III
	23	Stomp	Normal	Physical	Tough	20	65	100%	I
	444	Stone Edge	Rock	Physical	Tough	5	100	80%	IV
	500	Stored Power	Psychic	Special	Clever	10	20	100%	V
	480	Storm Throw	Fighting	Physical	Cool	10	60*	100%	V
	70	Strength	Normal	Physical	Tough	15	80	100%	I
	81	String Shot	Bug	Status	Clever	40	—	95%	I
	165	Struggle	Normal	Physical	Tough	1*	50	—*	I
	522	Struggle Bug	Bug	Special	Cute	20	50*	100%	V
	78	Stun Spore	Grass	Status	Clever	30	—	75%	I
	66	Submission	Fighting	Physical	Cool	25	80	80%	I
	164	Substitute	Normal	Status	Cute	10	—	—	I
	389	Sucker Punch	Dark	Physical	Clever	5	80	100%	IV
	241	Sunny Day	Fire	Status	Beautiful	5	—	—	II
	162	Super Fang	Normal	Physical	Tough	10	—	90%	I
	276	Superpower	Fighting	Physical	Tough	5	120	100%	III
	48	Supersonic	Normal	Status	Clever	20	—	55%	I
	57	Surf	Water	Special	Beautiful	15	90*	100%	I
	207	Swagger	Normal	Status	Cute	15	—	90%	II
	256	Swallow	Normal	Status	Tough	10	—	—	III
	186	Sweet Kiss*	Fairy	Status	Cute	10	—	75%	II
	230	Sweet Scent	Normal	Status	Cute	20	—	100%	II
	129	Swift	Normal	Special	Cool	20	60	—	I
	415	Switcheroo	Dark	Status	Clever	10	—	100%	IV
	14	Swords Dance	Normal	Status	Beautiful	20*	—	—	I
	485	Synchronoise	Psychic	Special	Clever	15	120*	100%	V
	235	Synthesis	Grass	Status	Clever	5	—	—	II*/
	Tackle: {
		Type: "Normal",
		Category: "Physical",
		BP: [50]
	}
	/*294	Tail Glow	Bug	Status	Beautiful	20	—	100%	III
	541	Tail Slap	Normal	Physical	Cute	10	25	85%	V
	39	Tail Whip	Normal	Status	Cute	30	—	100%	I
	366	Tailwind	Flying	Status	Cool	15*	—	—	IV
	36	Take Down	Normal	Physical	Tough	20	90	85%	I
	269	Taunt	Dark	Status	Clever	20	—	100%	III
	546	Techno Blast	Normal	Special	Cool	5	120*	100%	V
	298	Teeter Dance	Normal	Status	Cute	20	—	100%	III
	477	Telekinesis	Psychic	Status	Clever	15	—	—	V
	100	Teleport	Psychic	Status	Cool	20	—	—	I
	168	Thief	Dark	Physical	Tough	25*	60*	100%	II
	614	Thousand Arrows	Ground	Physical	Beautiful	10	90	100%	VI
	615	Thousand Waves	Ground	Physical	Tough	10	90	100%	VI
	37	Thrash	Normal	Physical	Tough	10*	120*	100%	I
	87	Thunder	Electric	Special	Cool	10	110*	70%	I
	422	Thunder Fang	Electric	Physical	Cool	15	65	95%	IV
	9	Thunder Punch	Electric	Physical	Cool	15	75	100%	I
	84	Thunder Shock	Electric	Special	Cool	30	40	100%	I
	86	Thunder Wave	Electric	Status	Cool	20	—	100%	I
	85	Thunderbolt	Electric	Special	Cool	15	90*	100%	I
	321	Tickle	Normal	Status	Cute	20	—	100%	III
	576	Topsy-Turvy	Dark	Status	Clever	20	—	100%	VI
	259	Torment	Dark	Status	Tough	15	—	100%	III
	92	Toxic	Poison	Status	Clever	10	—	90%*	I
	390	Toxic Spikes	Poison	Status	Clever	20	—	—	IV
	144	Transform	Normal	Status	Clever	10	—	—	I
	161	Tri Attack	Normal	Special	Beautiful	10	80	100%	I
	271	Trick	Psychic	Status	Clever	10	—	100%	III
	433	Trick Room	Psychic	Status	Clever	5	—	—	IV
	567	Trick-or-Treat	Ghost	Status	Cute	20	—	100%	VI
	167	Triple Kick	Fighting	Physical	Cool	10	10	90%	II
	376	Trump Card	Normal	Special	Cool	5	—	—	IV
	41	Twineedle	Bug	Physical	Cool	20	25	100%	I
	239	Twister	Dragon	Special	Cool	20	40	100%	II
	369	U-turn	Bug	Physical	Cute	20	70	100%	IV
	253	Uproar	Normal	Special	Cute	10	90*	100%	III
	557	V-create	Fire	Physical	Cool	5	180	95%	V
	410	Vacuum Wave	Fighting	Special	Cool	30	40	100%	IV
	599	Venom Drench	Poison	Status	Clever	20	—	100%	VI
	474	Venoshock	Poison	Special	Beautiful	10	65	100%	V
	11	Vice Grip	Normal	Physical	Tough	30	55	100%	I
	22	Vine Whip	Grass	Physical	Cool	25*	45*	100%	I
	233	Vital Throw	Fighting	Physical	Cool	10	70	—	II
	521	Volt Switch	Electric	Special	Cool	20	70	100%	V
	344	Volt Tackle	Electric	Physical	Cool	15	120	100%	III
	358	Wake-Up Slap	Fighting	Physical	Tough	10	70*	100%	IV
	55	Water Gun	Water	Special	Cute	25	40	100%	I
	518	Water Pledge	Water	Special	Beautiful	10	80*	100%	V
	352	Water Pulse	Water	Special	Beautiful	20	60	100%	III
	594	Water Shuriken	Water	Physical	Cool	20	15	100%	VI
	346	Water Sport	Water	Status	Cute	15	—	100%	III
	323	Water Spout	Water	Special	Beautiful	5	—	100%	III
	127	Waterfall	Water	Physical	Tough	15	80	100%	I
	311	Weather Ball	Normal	Special	Beautiful	10	50	100%	III
	250	Whirlpool	Water	Special	Beautiful	15	35*	85%*	II
	18	Whirlwind	Normal	Status	Clever	20	—	—*	I
	469	Wide Guard	Rock	Status	Tough	10	—	—	V
	528	Wild Charge	Electric	Physical	Tough	15	90	100%	V
	261	Will-O-Wisp	Fire	Status	Beautiful	15	—	85%*	III
	17	Wing Attack	Flying	Physical	Cool	35	60*	100%	I
	273	Wish	Normal	Status	Cute	10	—	—	III
	110	Withdraw	Water	Status	Cute	40	—	—	I
	472	Wonder Room	Psychic	Status	Clever	10	—	—	V
	452	Wood Hammer	Grass	Physical	Tough	15	120	100%	IV
	526	Work Up	Normal	Status	Tough	30	—	—	V
	388	Worry Seed	Grass	Status	Clever	10	—	100%	IV
	35	Wrap	Normal	Physical	Tough	20	15	90%*	I
	378	Wring Out	Normal	Special	Tough	5	—	100%	IV
	404	X-Scissor	Bug	Physical	Cool	15	80	100%	IV
	281	Yawn	Normal	Status	Cute	10	—	100%	III
	192	Zap Cannon	Electric	Special	Cool	5	120	50%	II
	428	Zen Headbutt	Psychic	Physical	Clever	15	80	90%	IV*/
};