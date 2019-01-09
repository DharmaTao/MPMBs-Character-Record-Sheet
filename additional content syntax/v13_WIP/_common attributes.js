/*	-WHAT IS THIS?-
	The script featured here is an explanation of how to make your own custom addition to MPMB's D&D 5e Character Tools.
	To add your own content to the Character Sheet, use the syntax below and save it in a file.
	You can then import this file directly to the sheet using the "Import" button and "Import/Export" bookmark.
	There you can either import the file as a whole or just copy the text into a dialog.

	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, either by importing consecutive files or pasting the scripts into the dialog.
	It is recommended to enter the code in a freshly downloaded sheet or to first reset sheet.
	Thus you don't run the risk of things being filled out causing conflicts.

	-HOW TO READ-
	Every line comes with a comment immediately after it to show whether it is // Optional // or // Required //,
	followed by a more explanatory comment

	-THIS IS JAVASCRIPT-
	The imports scripts work by creating a new entry inside an existing object or by calling functions.
	You can create new or overwrite existing global variables by omitting 'var'.
	You will need to understand the basics of JavaScript variables: strings, arrays, and JSON objects.
	Note that every opening symbol must have its closing counterpart: {}, [], "".
	If these are not present, the code will give an error when imported.
	Use proper editing software for code (like Notepad++). Text processors like Microsoft Word will screw up your code.
	To help finding syntax errors, use software 

	-COMMENTS IN THE EXAMPLE-
	Anything on a line after two forward slashes is a comment and will be ignored when running the code.
	Multiline comments are possible. Open them using the forward slash followed by an asterisk and close them with the opposite.
	The below contains a lot of these comments. The comments are not necessary for the script to work, so feel free to remove them.
*/

/*	-INFORMATION-

	Subject:	Common attributes

	Effect:		This is the syntax for common attributes that are shared by multiple things.
				The syntax here does not stand on its own.
				You will need another syntax file to use alongside this file.
				Use one of the syntax files not starting with an underscore and use this file when referred to.

	Works with:	Class features (and subclass features)
				Race main attributes
				Racial features
				Background main attributes
				Feat main attributes
				Magic Item main attributes

	Sheet:		v13.0.0 (2018-??-??)
*/

toolProfs : [
	"Herbalism kit",
	["Thieves' tools", "Dex"],
	["Musical instrument", 3]
],
/*	toolProfs // OPTIONAL //
	TYPE:	array (variable length)
	USE:	add tool proficiencies

	This array can have three type of entries:
	1.	A string, the name of the tool proficiency to add (i.e. no choice).
	2.	An array with 2 strings:
		2.1	The first string is the name of the tool proficiency to add (i.e. no choice).
		2.2 The second string is the abbreviation of the ability score the tool proficiency works with.
			Only add this if you want the tool to appear in the skill section on the 1st page.
	3.	An array with a string and a number:
		3.1 The first entry is a string, a description of the type of tool proficiency that can be chosen.
		3.2	The second entry is a number, representing how many times this type of tool proficiency is to be added.
*/

languageProfs : [
	"Common",
	2,
	["Elvish or Vedalken", 1]
],
/*	languageProfs // OPTIONAL //
	TYPE:	array (variable length)
	USE:	add language proficiencies

	This array can have three type of entries:
	1.	A string, the name of the language proficiency to add (i.e. no choice).
	2.	A number, how many language proficiency are to be added with each a free choice for which language.
	3.	An array with a string and a number:
		3.1 The first entry is a string, a description of the type of language proficiency that can be chosen.
		3.2	The second entry is a number, representing how many this type of language proficiency is to be added.
*/

saves : ["Str", "Dex", "Con", "Int", "Wis", "Cha", "HoS"],
/*	saves // OPTIONAL //
	TYPE:	array (variable length)
	USE:	set saving throw proficiencies on the 1st page

	This is an array of strings.
	Each entry gives proficiency with the saving throw of a certain ability score.
	Only use the strings shown in the example, the 3-letter abbreviation with the first letter capitalized (or "HoS" for Honour/Sanity).
*/

action : [
	["reaction", " (start)"],
	["bonus action", "Shove"]
],
/*	action // OPTIONAL //
	TYPE:	array (variable length)
	USE:	add entry to the "Actions", "Bonus Actions", or "Reactions" section on the 1st page
	
	The entries in this array must always be arrays with 2 strings each:
	1. The first string in each sub-array is the type of action, written in lowercase.
		The options are "action", "bonus action", or "reaction".
	2. The second string can be one of two things:
		2.1	When the first character of the string is non-alphabetic (e.g. a space or a hyphen), it is amended to the name of the feature.
			This amended total is then added as an action.
		2.2 When the first character of the string is an alphabetic character (e.g. everything from a-Z), it is not amended to the name of the feature.
			The string is taken as-is and added as an action.
*/

dmgres : [
	"Fire",
	["Bludgeoning", "Bludgeon. (in rage)"],
	["Slashing", "Slash. (nonmagical)"]
],
/*	dmgres // OPTIONAL //
	TYPE:	array (variable length)
	USE:	add entry to the "Resistances" section on the 1st page
	
	This array can have two type of entries:
	1. A string of the damage type that resistance is gained against.
	2. An array of 2 strings:
		2.1	The first string is the damage type that resistance is gained against.
		2.2	The second string is the condition that the resistance works with.
			If the same resistance is gained from multiple sources,
			but one source has a condition and another doesn't,
			only the version without a condition is shown.
*/

vision : [
	["Darkvision", 60],
	["Sunlight Sensitivity", 0],
	["Darkvision", "+30"],
	["Darkvision", "fixed 60"]
],
/*	vision // OPTIONAL //
	TYPE:	array (variable length)
	USE:	add string to the "Senses" field on the 1st page

	This array can have three type of entries, each of which is its own array with a length of 2
	1.	An array with a string and a number:
		1.1 The first entry is a string, the name of the thing to add to the "Senses" section on the 1st page.
		1.2	The second entry is a number, representing the distance in feet that this vision works on.
			You can also enter a 0 for something that doesn't have a range (e.g. Keen Smell).
	2.	An array with two strings:
		2.1 The first string is the name of the thing to add to the "Senses" section on the 1st page.
		2.2	The second entry is a string consisting of a logical operator ('+', '-', or '*') followed by a number.
			This will add the modifier in feet to the vision if present from another source.
	3.	An array with two strings:
		3.1 The first string is the name of the thing to add to the "Senses" section on the 1st page.
		3.2	The second entry is a string, the word "fixed" followed by a space and then a number.
			This will add the vision with the specified range, but won't let it be modified (e.g. gained from a magic item).
*/

speed : {
/*	speed // OPTIONAL //
	TYPE:	object (optional attributes)
	USE:	add or edit speed mode(s) to the 1st page

	The attributes of this object can be "walk", "burrow", "climb", "fly", "swim", and "allModes"
*/
	walk : { spd : 30, enc : 20 },
	burrow : { spd : 15, enc : 15 },
	/*	walk, burrow, climb, fly, or swim // OPTIONAL //
		TYPE:	object with two attributes, "spd" and "enc".
		USE:	add movement mode of the object's name
		
		"spd" is the speed in feet
		"enc" is the encumbered speed in feet
		
		Note that both "spd" and "enc" have to be present.
		If "spd" or "enc" is set to zero it is ignored (i.e. "enc : 0" means no encumbered speed).

		Both "spd" and "enc" can also be a string to perform special functions:
		1. "walk": If the entry is "walk" the number will be identical to the walking speed.
		2. "_walk": Using an underscore as the first character means
				the value is only added if the value would otherwise be non-zero.
		3. "+30" "-20": If the string starts with a + or - followed by a number.
				This will add the modifier in feet to the movement mode if present from another source.
		4. "fixed 60": If the string starts with "fixed" followed by a space and then a number,
				it will gain a speed of the number in feet, regardless of modifiers from other features.
	*/

	// example of using "walk":
	fly : { spd : "walk", enc : 0 },

	// example of using a modifier:
	climb : { spd : "+50", enc : 0 },

	// example of using "fixed":
	swim : { spd : "fixed 60", enc : "fixed 60" },

	allModes : "+10",
	/*	allModes // OPTIONAL //
		TYPE:	string
		USE:	add a modifier to all movement modes, if present

		The 'allModes' attribute can only consist of a modifier-string.
		It has to be a logical operator ("+" or "-") followed by a number.
		Every movement mode of the character, both normal and encumbered, will be subjected to the modifier in feet.
		This will only work on movement modes that are non-zero.
		It won't give the character a burrow speed if it would otherwise have none, for example.
	*/
},

savetxt : {
/*	savetxt // OPTIONAL //
	TYPE:	object (optional attributes)
	USE:	add text to the 1st page
				("Saving Throws" section for Printer Friendly,
				 "Saving Throw Advantages/Disadvantages" section for Colourful)

	The attributes of this object can be "text", "immune", and "adv_vs"
*/

	text : ["Dex save vs. area effects: fail \u2015 half dmg, success \u2015 no dmg", "Magic can't put me to sleep"],
	/*	text // OPTIONAL //
		TYPE:	array of strings
		USE:	add a text to the 1st page

		Each string in the array is added to the 1st page, exactly as given here.
	*/

	immune : ["poison", "disease"],
	/*	immune // OPTIONAL //
		TYPE:	array of strings
		USE:	add strings to the "Immune to" text on the 1st page

		Each string in the array is added to the list of "Immune to" things in the 1st page "Saving Throws" section.
		Immunities from all sources are combined and listed alphabetically.
		In this example it would result in "Immune to disease and poison".
		If a damage resistance is present while immunity for the same is also present,
		then the damage resistance will be hidden as long as the immunity is present.
	*/

	adv_vs : ["traps", "charmed"]
	/*	adv_vs // OPTIONAL //
		TYPE:	array of strings
		USE:	add strings to the "Adv. on saves vs." text on the 1st page

		Each string in the array is added to the list of "Adv. on saves vs." things in the 1st page "Saving Throws" section.
		Saving throw advantages from all sources are combined and listed alphabetically.
		In this example it would result in "Adv. on saves vs. charmed and traps".
	*/
},


calcChanges : {
/*	calcChanges // OPTIONAL //
	TYPE:	object (optional attributes)
	USE:	change how certain automation works: attacks, hit points, and spell list
			This will only affect attacks and hit points for the main character, not for its companions or wild shapes

	The attributes of this object can be "hp", "atkCalc", "atkAdd", and "spellList"
*/

	hp : function () {
		if (classes.known.sorcerer) {
			extrahp += classes.known.sorcerer.level;
			extrastring += '\n + ' + classes.known.sorcerer.level + ' from Draconic Resilience (Sorcerer)';
		};
	},
	hp : "if (classes.known.sorcerer) {extrahp += classes.known.sorcerer.level; extrastring += '\\n + ' + classes.known.sorcerer.level + ' from Draconic Resilience (Sorcerer)'; }; ",
	/*	hp // OPTIONAL //
		TYPE:	function or, for backwards-compatibility, string that is evaluated using eval()
		USE:	change how Hit Points are calculated and what the Hit Points tooltip says

		Both examples do the exact same thing, just one is a string and the other is a function.
		Writing a function is better as it is easier to avoid syntax errors.
		The string option is there for backwards-compatibility.

		Both the function and the string will be evaluated using eval() to make it possible to use local variables.

		Generally you will want to add bonus hit points to the 'extrahp' variable, which is a number.
		If you want to add text to the tooltip, you will have to add it to the 'extrastring' variable, which is a string.
	*/

	atkAdd : [
		function (fields, v) {
			if (v.WeaponName == 'eldritch blast') fields.Description += '; Target pushed back 10 ft';
		},
		"When I hit a creature with my Eldritch Blast cantrip, it is pushed 10 ft away from me."
	],
	atkAdd : [
		"if (WeaponName == 'eldritch blast') fields.Description += '; Target pushed back 10 ft';",
		"When I hit a creature with my Eldritch Blast cantrip, it is pushed 10 ft away from me."
	],
	/*	atkAdd // OPTIONAL //
		TYPE:	array with two entries:
				1st entry:	function or, for backwards-compatibility, string that is evaluated using eval()
				2nd entry:	string that is used to give an explanation of what the 1st entry does
		USE:	dynamically change what is put in the fields of an attack entry
				Note that this is only run for attacks that are recognized, not manually added

		// 1st array entry //
		Both examples do the exact same thing, just one is a string and the other is a function.
		Writing a function is better as it is easier to avoid syntax errors and will run faster.
		The string option is there for backwards-compatibility and this explanation assumes you are writing a function.

		The function will not be evaluated but is fed two variables:
		1)	fields, an object with all the different fields for an attack entry
			You can change this object to affect what is added to the fields
			For example, you can change which ability score is used by 

			A list of the different attributes of this variable:
			var fields = {
				Proficiency, // boolean, whether to check the proficiency box (true) or not (false)
				Mod, // number, the ability score to select from the drop-down (0 = none, 1 = Str, 2 = Dex, 3 = Con, 4 = Int, 5 = Wis, 6 = Cha)
				Range, // string, the text to put in the Range field
				Damage_Type, // string, the text to put in the Damge Type drop-down
				Description, // string, the text to put in the Description field
				Description_Tooltip, // string, the text to put in the Description field's tooltip
				To_Hit_Bonus, // string, the text to put in the modifier field for To Hit
				Damage_Bonus, // string, the text to put in the modifier field for Damage
				Damage_Die, // string, the text to put in the modifier field for Damage Die
				Weight // number, the weight in lb to put in the weight field
			};

			These values will be set by what the recognized weapon

		2)	v, an object with some information about the attack
			Changing this object will do nothing, but you can use its input to test things

			An explanation of the different attributes of this variable:
			var v = {
				WeaponText, // string, both the name and description
				isDC, // boolean, whether or not this attack has a To Hit (false) or a DC (true)
				isSpell, // boolean, whether (true) or not (false) this attack is a cantrip or spell or has the word 'cantrip' or 'spell' in its name or description
				isMeleeWeapon, // boolean, whether (true) or not (false) this attack has a range of 'melee' and is not a spell
				isRangedWeapon, // boolean, whether (true) or not (false) this attack has a range that doesn't include 'melee' and is not a spell
				isNaturalWeapon, // boolean, whether (true) or not (false) this attack has the type 'natural'
				theWea, // object, the entry as it appears in the WeaponsList object
				StrDex, // number, either 1 (Str) or 2 (Dex) depending on which of the two ability scores is higher
				WeaponName, // string, the name of the entry in the WeaponsList object
				thisWeapon // array, the entry in the CurrentWeapons.known array
			}

		// 2nd array entry //
		This has to be a string and will be used to populate the "Things affecting the attack calculations" dialog.
		If you have both atkAdd and atkCalc in the same feature,
		it is better to fill only one of the second entries and leaving the other at "".
		Filling only one of the explanation strings will result in only a single entry
		for the feature in the "Things affecting the attack calculations" dialog instead of two.
	*/

	atkCalc : [
		function (fields, v, output) {
			if (classes.known.sorcerer && classes.known.sorcerer.level > 5 && v.isSpell && (/acid/i).test(fields.Damage_Type)) {
				output.extraDmg += What('Cha Mod');
			};
		},
		"Cantrips and spell that deal acid damage get my Charisma modifier added to their Damage."
	],
	atkCalc : [
		"if (classes.known.sorcerer && classes.known.sorcerer.level > 5 && isSpell && (/acid/i).test(fields.Damage_Type)) { output.extraDmg += What('Cha Mod'); };",
		"Cantrips and spell that deal acid damage get my Charisma modifier added to their Damage."
	],
	/*	atkCalc // OPTIONAL //
		TYPE:	array with two entries
				1st entry:	function or, for backwards-compatibility, string that is evaluated using eval()
				2nd entry:	string that is used to give an explanation of what the 1st entry does
		USE:	dynamically change how the To Hit and Damage of attacks are calculated based
				Note that this is only run for attacks that are recognized, not manually added

		// 1st array entry //
		Both examples do the exact same thing, just one is a string and the other is a function.
		Writing a function is better as it is easier to avoid syntax errors and will run faster.
		The string option is there for backwards-compatibility and this explanation assumes you are writing a function.

		The function will not be evaluated but is fed three variables:
		1)	fields, an object with all the different fields for an attack entry
			Changing this object will do nothing, but you can use its input to test things
			For example, you can test if the character is proficient with the attack with 'fields.Proficiency'

			A list of the different attributes of this variable,
			see atkAdd above for a more in-depth explanation of each attribute:
			var fields = { Proficiency, Mod, Range, Damage_Type, Description, Description_Tooltip, To_Hit_Bonus, Damage_Bonus, Damage_Die, Weight };

		2)	v, an object with some information about the attack
			Changing this object will do nothing, but you can use its input to test things

			An explanation of the different attributes of this variable:
			var v = {
				WeaponText, // string, both the name and description
				isDC, // boolean, whether or not this attack has a To Hit (false) or a DC (true)
				isSpell, // boolean, whether (true) or not (false) this attack is a cantrip or spell or has the word 'cantrip' or 'spell' in its name or description
				isMeleeWeapon, // boolean, whether (true) or not (false) this attack has a range of 'melee' and is not a spell
				isRangedWeapon, // boolean, whether (true) or not (false) this attack has a range that doesn't include 'melee' and is not a spell
				isNaturalWeapon, // boolean, whether (true) or not (false) this attack has the type 'natural'
				isOffHand, // boolean, whether (true) or not (false) this attack is both a melee weapon and an off-hand attack
				theWea, // object, the entry as it appears in the WeaponsList object
				WeaponName, // string, the name of the entry in the WeaponsList object
				thisWeapon // array, the entry in the CurrentWeapons.known array
			}
		
		3)	output, an object with the information used to calculate the attack's To Hit & Damage
			You can change this object to affect the calculation
			For example, you can add a number to output.extraDmg to add more damage
	
			var output = {
				prof, // number, the proficiency bonus to use or 0 if not proficient
				die, // string, the damage die to use, identical to the fields.Damage_Die
				modToDmg, // boolean, whether to add the ability score modifier to damage (true) or not (false)
				mod, // number, the ability score to use (0 = none, 1 = Str, 2 = Dex, 3 = Con, 4 = Int, 5 = Wis, 6 = Cha)
				magic, // number, the magical bonus to add to both To Hit and Damage (0 if nothing to add)
				bHit, // string, the value of the modifier field for To Hit, identical to fields.To_Hit_Bonus
				bDmg, // string, the value of the modifier field for Damage, identical to fields.Damage_Bonus
				extraDmg, // number, amount of bonus damage to add
				extraHit // number, amount of bonus damage to add
			};

			Note that this variable, output, can be changed by consecutive calcChanges.atkCalc functions
			You can even save new attributes to it that you can use by calcChanges.atkCalc functions gained from other features

		// 2nd array entry //
		This has to be a string and will be used to populate the "Things affecting the attack calculations" dialog.
		If you have both atkAdd and atkCalc in the same feature,
		it is better to fill only one of the second entries and leaving the other at "".
		Filling only one of the explanation strings will result in only a single entry
		for the feature in the "Things affecting the attack calculations" dialog instead of two.
	*/

	spellList : [
		function(spList, spName, spType) {
			// don't add if this is not a class or a list of spells is already given
			if (!ClassList[spName] || spList.spells || spList.psionic) return;
			// if this is an 'extra spell', also test if it uses the class' spell list or not
			if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
			// now add the array of bonus spells to the list
			spList.extraspells = spList.extraspells.concat(["acid splash", "druidcraft", "detect poison and disease", "expeditious retreat", "jump", "alter self", "enhance ability", "enlarge/reduce", "gaseous form", "water breathing", "wind wall", "freedom of movement", "polymorph", "creation"]);
		},
		"My background adds extra spells to the spell list(s) of my spellcasting class(es): Acid Splash, Druidcraft, Detect Poison and Disease, Expeditious Retreat, Jump, Alter Self, Enhance Ability, Enlarge/reduce, Gaseous Form, Water Breathing, Wind Wall, Freedom of Movement, Polymorph, and Creation."
	],
	/*	spellList // OPTIONAL //
		TYPE:	array with two entries
				1st entry:	function
				2nd entry:	string that is used to give an explanation of what the 1st entry does
		USE:	dynamically change what is included and excluded from the spell list of a class (or other spellcasting source)
				Note that this is only run for spell sheets generated using the spell selection dialog,
				it isn't used for 'complete' spell sheets.

		// 1st array entry //
		The function is fed three variables:
		1)	spList, an object that determines how the spell list will be generated.
			You can change this object to affect which spells are available.
			Note that this object determines the list of spells to choose from in the spell selection dialog,
			it does not determine what spells are selected, only what options are given to select spells from.

			The object will look as the 'common spell list object' explained in the file "_common spell list object.js".

			It will always contain the attribute 'extraspells', possibly as an empty array.
			The presence of all other attributes depends on what spell list is being generated.

			What you can do, for example, is limit the schools a class has access to by
			changing or adding the spList.school attribute.
			Or you can add spells to the list by adding them to the spList.extraspells array.
			Or you can remove spells from the list by changing or adding the spList.notspells attribute.

		2)	spName, a string that is the entry in the CurrentSpells object
			This string will be identical to whatever added the spellcasting feature.
			For example, this will be "wizard" for the wizard class spell list,
			"fighter" for the eldritch knight spell list,
			or "drow" for the racial spells gained from being a dark elf.
		
		3)	spType, a string that shows what type of spell list this is
			This can be one of multiple things:
			"book"	spellcasting class uses a spellbook (e.g. the wizard)
			"list"	spellcasting class prepares spells from a list (e.g. the cleric)
			"known"	spellcasting class has to select the spells it knows from a list (e.g. the bard)
			"feat"	spellcasting source is a feat and only gains spells from the spellcastingBonus feature
			"race"	spellcasting source is a race and only gains spells from the spellcastingBonus feature
			"item"	spellcasting source is a magic item and only gains spells from the spellcastingBonus feature
			
			It can also have de suffix "-bonus" added to one of the above if generating the list for
			something gained through the spellcastingBonus attribute.

		// 2nd array entry //
		This has to be a string and will be shown in the "Changes" dialog when this feature is added/removed.
		This explanation will also be available any time a change requires the re-generation of spell sheets.
	*/
},

addMod





scorestxt : "+2 Charisma and +1 to two other ability scores of my choice",
/*	scores // OPTIONAL //
	TYPE:	string
	USE:	description of ability score improvements to use in the Ability Scores dialog and tooltips

	You do not need this attribute if the ability score improvement does not offer a choice,
	then you can just use the 'scores' attribute, see below.
	You can have both this and the 'scores' attribute, they are not mutually exclusive.
*/

scores : [0, 1, 0, 0, 2, 0],
/*	scores // OPTIONAL //
	TYPE:	array of six numbers
	USE:	add ability score improvements to the Ability Scores dialog

	This array requires exactly six entries, each being a number.
	The entries are: [Str, Dex, Con, Int, Wis, Cha].
	You should put a 0 for an ability score that gets no improvement.
	You can use negative numbers.

	Where exactly the numbers will be added in the Ability Scores dialog depends on the parent feature.

	The array will also be used to generate a textual description of the improvement for the dialog and tooltips,
	but only if the attribute 'scorestxt' is not present in the same feature.

	Note that if a feature gives you a choice in which ability score to improve,
	you should put that information in the 'scorestxt' attribute and not include the improvement here.
*/

scoresOverride : [0, 0, 0, 19, 0, 0],
/*	scores // OPTIONAL //
	TYPE:	array of six numbers
	USE:	add ability score overrides to the Ability Scores dialog

	This array requires exactly six entries, each being a number.
	The entries are: [Str, Dex, Con, Int, Wis, Cha].
	You should put a 0 for an ability score that gets no override.

	An override will be used for the ability score if it would otherwise be less.

	The array will also be used to generate a textual description of the improvement for the dialog and tooltips,
	but only if the attribute 'scorestxt' is not present in the same feature.
*/


spellcastingBonus

spellcastingExtra

spellFirstColTitle

armorOptions

ammoOptions

weaponOptions

weaponProfs

armorProfs

weaponAdd

armorAdd

skills

skillstxt

eval

removeeval

changeeval


usages
usagescalc
recovery
additional
limfeaname


var iFileName = "_common attributes.js";
/* 	iFileName // OPTIONAL //
	This is how the file will be named in the sheet if you import it as a file.
	Only the first occurrence of this variable will be used.
*/

RequiredSheetVersion(13);
/*	RequiredSheetVersion // OPTIONAL //
	This is the minimum required version number of the sheet for the script to work.
	If the sheet being used to import the script is of an earlier version, the user will be given a warning.
	Input a number, not a string (so don't enclose the number in quotation marks)!
	Although the sheet uses semantic versioning, you have to input a number here.
	To find this number of a sheet, open its Document Properties in Adobe Acrobat (Ctrl + D) and look in the 'Custom' tab.
*/

ClassList["purplemancer"] = {
/* 	ClassList object name // REQUIRED //
	By adding a new object to the existing ClassList object, we create a new class.
	The object name here is 'myclass'. You can use any object name as long as it is not already in use.
	Note the use of only lower case! Also note the absence of the word "var" and the use of brackets [].
*/
	name : "Purplemancer",
/*	name // REQUIRED //
	String of the name of the class as it will be used by the sheet.
*/
	regExpSearch : /^(?=.*purple)(?=.*mancer).*$/i,
/*	regExpSearch // REQUIRED //
	Regular expression of how the class is recognized by the sheet.
	This has to be a match for the name given earlier, or the class will never by recognized.
	Now it looks for any entry that has both the words "purple" and "mancer" in it,
	 disregarding capitalization or word order.
	If this looks to complicated, or you want to match only a single word, just write:
		regExpSearch : /purplemancer/i,
*/
	source : ["SRD", 30],
/*	source // REQUIRED //
	Array of the SourceList entry (a string) and the page number.
	See the file for adding a source to learn how to add a custom source.

	This can be an array of arrays to indicate it appears in multiple sources.
	For example, if something appears on both page 7 of the Elemental Evil Player's Companion
	 and on page 115 of the Sword Coast Adventure Guide, use the following:
		source : [["E", 7], ["S", 115]],

	If a class is completely homebrew, or you don't want to make a custom source, just put the following:
		source : ["HB", 0],
	"HB" stands for homebrew.
*/
	primaryAbility : "Strength or Dexterity",
/*	primaryAbility // REQUIRED //
	String of the abilities that are essential to the class.
	If there are no essental abilities, just put an empty string:
		primaryAbility : "",
*/	
	prereqs : "Strength 13 or Dexterity 13",
/*	primaryAbility // REQUIRED //
	String of the prerequisite abilities for the class when multiclassing.
	If there are no prerequisite abilities, just put an empty string:
		prereqs : "",
*/
	die : 10,
/*	die // REQUIRED //
	Number of the type of hit die the class has (i.e. 10 means d10).
	No, you can't have multiple HD for a class (2d6 per level is not possible).
*/
	improvements : [0, 0, 0, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 6, 6, 6, 7, 7],
/*	improvements // REQUIRED //
	Array of the amount of ability score improvements the class has at each level.
	Normally this is an array of 20 entries, one for each level, but you can have more or less.
	Note that this is not cumulative, the number is the amount of ASI at that level.
	This example uses the Fighter's progression.
	If the class doesn't get any improvements, just put the following:
		improvements : [0],
*/
	saves : ["Str", "Con"],
/*	improvements // REQUIRED //
	Array of the saving throw proficiencies the class gets, using the name of an ability.
	You have to include at least the first three-letters of an ability, and capitalization doesn't matter.
	Thus, an array entry can be "Str", "Dex", "Con", "Int", "Wis, or "Cha".
	If the class doesn't get any saving throw proficiencies, just put the following:
	
*/

// EVERYTHING BELOW THIS LINE IS NOT UPDATED TO v13 YET!

	skills : ["\n\n" + toUni("MyClass") + ": Choose two from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival.", "\n\n" + toUni("MyClass") + ": Choose one from Athletics, Intimidation, Perception, and Survival."], //required; the text to display for skill proficiencies. Note the \n\n at the start, they are important! The first entry is for when the class is the primary class, the second entry is for when the class is taken later as part of a multiclass

/* SYNTAX CHANGE v12.998 >> old syntax for 'tools' and 'languages' are no longer supported!! */
	toolProfs : { // optional; this is an object with arrays with the tool proficiencies gained. Each entry in an array can be its own array of 2 entries. The first entry is the name of the tool and the second entry is either 1) a number if the tool is yet to be chosen, or 2) the 3-letter ability score abbreviation if the tool is to be listed in the skill section and have a bonus calculated
		primary : [["Musical instrument", 3], ["Thieves' tools", "Dex"]], // optional; the tool proficiencies gained if the class is the primary class (i.e. taken at 1st level)
		secondary : [["Musical instrument", 1]] // optional; the tool proficiencies gained if the class is not the primary class (i.e. taken at a later level)
	},
	
	armor : [ //required; the 4 entries are for: ["light", "medium", "heavy", "shields"]
		[true, true, true, true], //required; the armor proficiencies if this is the first or only class
		[true, true, false, true] //required; the armor proficiencies if this class is multiclassed with (so not taken at level 1, but later)
	],
	
	weapons : [ //required; the 3 entries are for: ["simple", "martial", "other"]
		[true, false, ["hand crossbow", "longsword", "rapier", "shortsword"]], //required; the weapon proficiencies if this is the first or only class
		[true, false, ["hand crossbow"]] //required; the weapon proficiencies if this class is multiclassed with (so not taken at level 1, but later)
	],
	
	equipment : "MyClass starting equipment:\n \u2022 Chain mail -or- leather armor, a longbow, and 20 arrows;\n \u2022 A martial weapon and a shield -or- two martial weapons;\n \u2022 A light crossbow and 20 bolts -or- two handaxes;\n \u2022 A dungeoneer's pack -or- an explorer's pack.\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.", //required; the text to display when citing the starting equipment
	
	subclasses : ["Martial Archetype", ["champion", "battle master", "eldritch knight", "purple dragon knight"]], //required; the names of the subclasses. The first entry is the overall name that is given to the subclasses, the second entry is a list of the subclass, using the exact names of the entry of the subclasses in the ClassSubList. //Note that if one of the entries in the array of subclasses doesn't exist in the ClassSubList, the sheet will throw an error as soon as you make a character with levels in this class
	//IMPORTANT: for any subclass you add using the AddSubClass() function, don't list them here! The AddSubClass() function makes its own entry in this array! If you have entries here that don't exist (because you didn't add any ClassSubList entry, or added it using the AddSubClass() function, then the sheet will throw strange errors)!
	
	prestigeClassPrereq : 5, //optional; if you include this attribute, the sheet will consider the class a prestige class // You can make this attribute a number, which represents the levels the character must have before being able to gain the prestige class. Alternatively, you can make this attribute a string, which can be evaluated with eval() and returns either true (prereqs met) or false (prereqs not met).
	
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3], //required; the amount of attacks at each level. Note that there are 20 entries, one for each level.
	
	abilitySave : 4, //optional, but required for a spellcaster; the ability score to use for the Ability Saving Throws. Remove this line if your class has no Ability that requires Saving Throws. (Str=1, Dex=2, Con=3, Int=4, Wis=5, Cha=6)
	
	abilitySaveAlt : 2,//optional; if the class offers a choice between two ability scores to be used to determine the DC, you can put that secondary one here (Str=1, Dex=2, Con=3, Int=4, Wis=5, Cha=6)
	
	spellcastingFactor : 3, //required for a spellcaster; the speed with which spell progression works type 1 for full spellcasting (Cleric), 2 for half spellcasting (Paladin), and 3 for one-third spellcasting (Arcane Trickster). This can be any positive number other than 0. Remove this line if your class has no spellcasting. If your character uses the Warlock way of spellcasting, write "warlock1" here. The 1 indicates the spell progression factor. You can change it to a 2 or 3 to have half or one-third spell progression (or to any other factor you like).
		// You can also have this refer to a Spell Slot progression you define yourself, as a separate variable (see "Homebrew Syntax - SpellTable.js"). In order to do this the name of that variable and the spellcastingFactor must match. Using the name "purplemancer" for example would mean that here you put [spellcastingFactor : "purplemancer1"] (the 1 is the factor, this can be any positive number other than 0) while for the variable containing the table you use "purplemancerSpellTable". Note that the name is all lower case!
		
	spellcastingTable : [ //optional, only if you want to use a non-standard table for spell slot progression and just for this one (sub)class. You can either use the spellcastingTable attribute, or define a new SpellTable in a separate variable (see "Homebrew Syntax - SpellTable.js"). If you are adding multiple classes that use the same table, please add it as a separate variable, for otherwise the spell slots will be added up per individual class level instead of adding the class levels together to find the total amount of spell slots
	// if you add this variable, the number in the spellcastingFactor will be only be used when multiclassing. Note that you still need to enter something in the spellcastingFactor to tell the sheet that its dealing with a spellcaster.
		[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 0
		[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 1
		[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 2
		[1, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 3
		[1, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 4
		[2, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 5
		[2, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 6
		[0, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 7
		[0, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 8
		[0, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 9
		[0, 2, 0, 0, 0, 0, 0, 0, 0], //lvl10
		[0, 0, 2, 0, 0, 0, 0, 0, 0], //lvl11
		[0, 0, 2, 0, 0, 0, 0, 0, 0], //lvl12
		[0, 0, 2, 0, 0, 0, 0, 0, 0], //lvl13
		[0, 0, 2, 0, 0, 0, 0, 0, 0], //lvl14
		[0, 0, 2, 0, 0, 0, 0, 0, 0], //lvl15
		[0, 0, 2, 0, 0, 0, 0, 0, 0], //lvl16
		[0, 0, 0, 2, 0, 0, 0, 0, 0], //lvl17
		[0, 0, 0, 2, 0, 0, 0, 0, 0], //lvl18
		[0, 0, 0, 2, 0, 0, 0, 0, 0], //lvl19
		[0, 0, 0, 2, 0, 0, 0, 0, 0] //lvl20
	],
	
	spellcastingKnown : { //Optional; Denotes the amount and type of spells the class has access to
	
		cantrips : [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], //Optional; This can either be one number, an array of 20 numbers, or be omitted for a class that doesn't have access to cantrips. The numbers reflect the amount of cantrips known
		
		spells : [4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 13, 13, 14, 14, 15, 16, 16, 16],//Optional; This can either be one number, an array of 20 numbers, or be omitted for a class that doesn't have access to spells. The numbers reflect the amount of spells known. For a class that doesn't know spells, but prepares them from a list, you should put "list" here. For a class that uses a spellbook, you should put "book" here.
		
		prepared : true, //Optional; This indicates that the class has to prepare spells like a cleric/druid/paladin/wizard
	
	},
	
	spellcastingList : { //Optional; Only needed if the class doesn't have its own spell list. This object denotes what spells the class has access to. All things in this object constrain the selection of spells that will be available. The constraints are cumulative.
		
		class : "wizard", //Required; The name of the class from whose spell list the spells come from. This can be "any" if the spells are not limited by a spell list of just one class. The entry has to match the name of the class in the SpellsList
		
		school : ["Evoc", "Abjur"], //Optional; An array of abbreviations of spell school names (see SpellsList). These have to be in an array, even if it is just one value. Each entry has to match the name of the spell school in the SpellsList
		
		level : [0, 4], //Optional; The lower and upper limit of spell levels that the class has access to.
		
		ritual : false, //Optional; Denotes if only ritual (true) or only non-ritual (false) spells should be included in the list
		
		spells : ["light", "mending"], //Optional; If a "spells" array is present, all other objects will be ignored and only this list of spells will populate the list of available spells. each entry has to match the name of the spell in the SpellsList
		
		notspells : ["antipathy/sympathy", "tsunami"], //Optional; Any spells listed in this array will be excluded from the list
	},
	
	spellcastingExtra : ["detect magic", "magic missile", "magic weapon", "nystul's magic aura", "dispel magic", "magic circle", "arcane eye", "leomund's secret chest", "planar binding", "teleportation circle"], //Optional; An array of spells that are added to the spell list from which the class can choose. If the class prepares spells, than this list of spells are always considered prepared. Each entry has to match the name of the entry of the spell in the SpellsList exactly
	//You can also have the list be added to the known spells of a class by making the 101th entry in the array read "AddToKnown" (i.e. spellcastingExtra[100] = "AddToKnown");
	
	features : { //required;  the class features. Each works the same way, so only a couple of example are given. You can add as many as you want
	
		"fighting style" : { //note the use of lower case characters
			name : "Fighting Style", //required; the name of the class feature
			source : ["P", 72], //required; the source of the class feature
			minlevel : 1, //required; the level at which the feature is gained
			description : "\n   " + "Choose a Fighting Style using the \"Choose Feature\" button above", //required; the text to put in the "Class Features" field
			choices : ["Great Weapon Fighting", "Protection", "Two-Weapon Fighting"], //optional; choices the feature offers, if any.
			choicesNotInMenu : true, //optional: this tells the sheet not to put the choices into the "Choose Options" menu on the second page. Use this is you want to have the choices selected through another class feature. See for an example of this the "Draconic Bloodline" sorcerer archetype. // Note that you always want to have the choices listed in the choices attribute, because otherwise they won't be updated if they have level-dependent features
			"great weapon fighting" : { //required if "choices" is defined; has to be exactly the same as how it is written in the "choices" entry. Note the use of lower case!
				name : "Great Weapon Fighting Style", //required;
				description : "\n   " + "Reroll 1 or 2 on damage if wielding two-handed/versatile melee weapon in both hands" //required;
			},
			
			"protection" : { //has to be exactly the same as how it is written in the "choices" entry. Note the use of lower case!
				name : "Protection Fighting Style",
				description : "\n   " + "As a reaction, I can give disadv. on an attack made vs. someone within 5 ft of me" + "\n   " + "I need to be wielding a shield and be able to see the attacker to do this",
				action : ["reaction", ""] //optional; adds the name of this choice to the reaction list when chosen. The options are "action", "bonus action", and "reaction" //the second value in the array is added as a suffix for the "name" of the feature when entered into the action field
			},
			
			"two-weapon fighting" : { //has to be exactly the same as how it is written in the "choices" entry. Note the use of lower case!
				name : "Two-Weapon Fighting Style",
				description : "\n   " + "I can add my ability modifier to the damage of my off-hand attacks",
				
				calcChanges : { //optional; adds stuff to the calculation of attacks and/or HP
					
					hp : "if (classes.known.sorcerer) {extrahp += classes.known.sorcerer.level; extrastring += \"\\n + \" + classes.known.sorcerer.level + \" from Draconic Resilience (Sorcerer)\";};", //optional; string to be run using eval() when calculating the number of HP in the HP tooltip and automation
					
					atkCalc : ["if (isOffHand) {output.modToDmg = true; }; ", "When engaging in two-weapon fighting, I can add my ability modifier to the damage of my off-hand attacks."], //optional; ["eval string", "explanation string"]; change something in the calculation of the Damage and To Hit of attacks; The first value in the array is stringified code that is run using eval(), the second entry is an explanation of what is being altered so that it can be displayed in a dialogue. This second entry can be left empty, as ""
					
					atkAdd : ["if (WeaponName.match(/unarmed strike/i)) {fields.Description += 'Counts as magical';}; ", "My unarmed strikes count as magical for overcoming resistances and immunities."], //optional;  ["eval string", "explanation string"]; works just like atkDmg, but affects the weapon attributes when they are applied to the sheet. With this you can change the weapon's description, range, damage die, attribute, etc. etc. However, this will only be applied to recognized weapons
					
						// Note that you need to use two back slashes for things in the eval code here, because it is first added to a string, and then run as code. See the hp for an example, with the \\n
						
						// For the eval strings for the attack calculations ('atkCalc' or 'atkAdd') there are some variables that you can use to test against:
							
							// The variable WeaponName contains the recognized weapon object name as it is used in the WeaponsList object (or "" in atkCalc if the weapon is not a recognized weapon);
						
							// The object "theWea" is the WeaponsList[WeaponName] object for the recognized weapon (or 'undefined' in atkCalc if the weapon is not a recognized weapon);
							
							// You can use the booleans 'isOffHand', 'isMeleeWeapon', 'isRangedWeapon', 'isSpell' (also true for cantrips), 'isDC'
							
							// If the attack is a spell that is found on the SpellList, the variable thisWeapon[3] contains the name of the entry in the SpellList
						
							// The object "fields" has all the values of the different fields of the attack (fields.Proficiency, fields.Mod, fields.Range, fields.Damage_Type, fields.Description, fields.To_Hit_Bonus, fields.Damage_Bonus, fields.Damage_Die, fields.Weight);
						
							// You can change the attributes of the "fields" object with the eval-string of atkAdd to affect what is put into the fields.
						
							// You can use the attributes of the "fields" object with the eval-string of atkCalc to check for things, but changing them will have no effect on the sheet.
						
							// With the atkCalc you have to change the "output" object in order to affect the outcome of the calculations. This object has the following attributes: output.prof (wether or not to add the proficiency bonus to the To Hit), output.die (Damage Die to use), output.mod (ability modifier), output.modToDmg (whether or not to add the ability modifier to Damage), output.magic (any magic bonus that's to be added to both To Hit and Damage), output.bHit (the To Hit bonus from the Blue Text/Modifier field), output.bDmg (the Damage bonus from the Blue Text/Modifier field), output.extraHit (a number added to the To Hit that is reserved for this eval), output.extraDmg (a number added to the damage that is reserved for this eval)
				}
			},
		},
					
		"arcane initiate" : {
			name : "Arcane Initiate",
			source : ["S", 125],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with Arcana and two wizard cantrips that count as cleric cantrips",
			
			skills : ["Arcana"], //optional; an array of skills with which proficiency is gained
			
			skillstxt : "\n\n" + toUni("Arcane Domain") + ": Arcana.", //optional; the text that has to be added to the skill tooltips
			
			spellcastingBonus : { //optional; an object that adds something to the "Bonus Spells" section of the spell selection dialog //this object can have all the same attributes as the "spellcastingList" object, but must also have a "name" defined" //the other things that can be defined in this that are not in the "spellcastingList" object, are the "selection", "times" and "prepared" values
			
				name : "Arcane Initiate", //required; this is used to identify the object, so must be an unique name
				
				class : "wizard", //optional but required if not including the "spells" entry; see "spellcastingList" object
				
				level : [0, 0], //optional; see "spellcastingList" object
				
				school : ["Necro"], //optional; see "spellcastingList" object
				
				spells : ["light"], //optional, but required if not including the "class" entry; see "spellcastingList" object
				
				notspells : ["mending"], //optional; see "spellcastingList" object
				
				selection : ["light"], //optional if "spells" is defined; this is the default selection for the array specified in "spells"
				
				times : 2, //optional; this is the number of times the bonus spells should be added. //This can also be an array of 20 values. That way the number of times are level-dependent
				
				prepared : true, //optional; if set to 'true', this makes the spell selected for this/these bonus spells to automatically get a checked off checkbox in the first column, similar to domain spells for a cleric
				
				atwill : true, //optional; if set to 'true', this makes the spell selected for this/these bonus spells to get "At Will" in the first column
				
				oncesr : true, //optional; if set to 'true', this makes the spell selected for this/these bonus spells to get "1×SR" in the first column
				
				oncelr : true, //optional; if set to 'true', this makes the spell selected for this/these bonus spells to get "1×LR" in the first column
				
				firstCol : "8", //optional; if set to any value, this makes the spell selected for this/these bonus spells to get the first two letters/numbers of that value in the first column
			},
			
			spellFirstColTitle : "Ki", //optional, only works if spellcastingBonus exists; if set to any value, this makes the first column of the captions on the spell sheet be set to the first two letters/numbers of that value
			
			vision : [["Darkvision", 60], ["Sunlight Sensitivity", 0]], //optional; An array of arrays that each have a length of 2; This adds the first value of each array to the Senses field. The second value is the range in feet. If no range is needed, put a 0 there. You can also add a modifier like "+30" or "*2" to have the appropriate calculation done with the range of sense
		},
		
		"spellcasting" : {
			name : "Spellcasting",
			source : ["P", 114],
			minlevel : 1,
			description : "\n   " + "I can cast prepared wizard cantrips/spells, using Intelligence as my spellcasting ability" + "\n   " + "I can use an arcane focus as a spellcasting focus" + "\n   " + "I can cast all wizard spells in my spellbook as rituals if they have the ritual tag",
			additional : ["3 cantrips known", "3 cantrips known", "3 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known"], //optional; text to display in the header of the feature. This can be one value, but can also be an array of 20 values, one for each level.
		},
		
		"second wind" : {
			name : "Second Wind",
			source : ["P", 72],
			minlevel : 1,
			description : "\n   " + "As a bonus action, I regain 1d10 + fighter level HP; I can use this once per short rest",
			additional : ["1d10+1", "1d10+2", "1d10+3", "1d10+4", "1d10+5", "1d10+6", "1d10+7", "1d10+8", "1d10+9", "1d10+10", "1d10+11", "1d10+12", "1d10+13", "1d10+14", "1d10+15", "1d10+16", "1d10+17", "1d10+18", "1d10+19", "1d10+20"],
			usages : 1, //optional; number of times it can be used. This can be one value, but can also be an array of 20 values, one for each level. It is recommended to use a numerical value, but if you use a string, include " per " at the end, like "1d10 per "
			recovery : "short rest", //required if "usages" is defined; way of getting the limited feature recharged. Only if you define both the 'usages' and 'recovery' will the feature be added to the limited features
			action : ["bonus action", ""] //optional; adds the name of this feature to the bonus action list when chosen. The options are "action", "bonus action", and "reaction"
		},
		
		"action surge" : {
			name : "Action Surge",
			source : ["P", 72],
			minlevel : 2,
			description : "\n   " + "I can take one additional action on my turn on top of my normally allowed actions",
			usages : [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2], //example of usages varying per level
			recovery : "short rest",
			
			armor : [false, false, true, false], //optional; the 4 entries are for proficiency in: ["light", "medium", "heavy", "shields"]. Be sure to always add all four statements of true/false!

			weapons : [true, false, ["hand crossbow"]], //optional; the 3 entries are for: ["simple", "martial", "other"]. Be sure to always add both statements of true/false!
			
			addMod : { type : "skill", field : "Init", mod : "Int", text : "I can add my Intelligence modifier to initiative rolls." }, //optional; This is an object, or an array of similar objects, for adding a modifier to a modifier field. Using this will make it so that the modifier is added to any value that is already there. // The 'mod' attribute can be any combination of numbers, mathematical operators, and three-letter ability score abbreviations // The 'type' attribute can be "skill" or "save", but can also be left empty "" // The 'field' attribute depends on the type, for "skill" it can be the name of a skill, or "Init" for initiative, or "All" for the all skills modifier; for "save" it can be the three-letter abbreviation of an ability score, or "All" for the all saves modifier. // If the 'type' attribute is left empty, the 'field' attribute has to be the exact name of the field the modifier has to be added to // The 'text' attribute is an explanation of why the modifier was added //NOTE: for modifiers to attacks, use calcChanges
			
			addarmor : "Stone's Durability", //optional; a string of the name of the armour that is literally put in the Armor Description field when the class feature is applicable, and removed if not
		},
		
		"subclassfeature3" : { //You need at least one entry named "subclassfeatureX". It signals the sheet to ask the user for which subclass he would like to have. The level of this feature should match the level the class needs to select a subclass. Once a subclass is selected, any feature with "subclassfeature" in the object name in the class entry will be ignored.
			name : "Martial Archetype",
			source : ["P", 72],
			minlevel : 3,
			description : "\n   " + "Choose a Martial Archetype you strive to emulate and put it in the \"Class\" field" + "\n   " + "Choose either Champion, Battle Master, Eldritch Knight, or Purple Dragon Knight",
		},
		
		"subclassfeature3.1" : {
			name : "", //any feature who's name is empty like this one is, will be ignored. Since v12.5 of the sheet, an entry like this serves no function
			minlevel : 3,
		},
		
		"natural antivenom" : {
			name : "Natural Antivenom",
			source : ["UA:MC", 7],
			minlevel : 9,
			description : desc([
				"I have advantage on saves vs. poison and resistance to poison damage",
				"When I use a poultice, in addition to healing, I cure one poison effect on the creature",
				"I gain proficiency with Constitution saving throws"
			]),
		
			savetxt : { // Optional; this attribute defines entries to add to the field for "Saving Throw Advantages / Disadvantages"
			
				text : ["Dex save vs. area effects: fail \u2015 half dmg, success \u2015 no dmg", "Magic can't put me to sleep"], // Optional; this is an array of strings, and each of those strings is added to the field exactly as presented here
				
				immune : ["poison", "disease"], // Optional; this is an array of strings that the character is immune to. This is put in the field after the text "Immune to ", so in this example it would result in "Immune to poison and disease"
				
				adv_vs : ["traps", "charmed"] // Optional; this is an array of things that the character has advantage on saves against. This is put in the field after the text "Adv. on saves vs. ", so in this example it would result in "Adv. on saves vs. traps and charmed"
			},
		},
	}
}


/* CHANGES SINCE V12.999:
	1. 'armor' attribute has been replaced with 'armorProfs', but is otherwise identical.
	2. 'weapons' attribute has been replaced with 'weaponProfs', but is otherwise identical.
	3. 'primaryAbility' should no longer have the class' name in it, nor a line break at the start, a bullet point, or a semicolon at the end.
	4. 'prereqs' should no longer have the class' name in it, nor a line break at the start, a bullet point, or a semicolon at the end.
*/