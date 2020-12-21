var pluralNouns = [
    'The Illuminati',
    'Shape-Shifting Reptiles',
    'Interdimensional Pedophilic Emotional Vampires',
    'The Global-Elite',
    'Lizard People',
    'Freemasons',
    'The Skull & Bones',
    'Werewolves',
    'The KKK',
]

var singularNouns = [
    'The Illuminati',
    'George Soros',
    'Q-anon',
    'Donald Trump',
    'Joe Biden',
    'Barack "HUSSEIN" Obama',
    'Fox News',
    'The Artist Formerly Known as Prince',
    'the ghost of Richard Nixon',
    'The Lochness Monster',
    'Alex Jones',
    'Alex Trebek',
    'Davey Jones',
]

var allNouns = pluralNouns.concat(singularNouns);

var actions = [
    'planning to kill',
    'in cahoots with',
    'implanting RFID Tracking Chips into',
    'building more 5G towers for',
    'putting fluoride in the water to brainwash',
    'drinking the adrenochrome of',
    'pilfering the grave of',
    'resurrecting the corpse of',
    'corrupting the minds of the youth with',
    'signing contracts in blood with',
]

var reasons = [
    'to bring about a New World Order.',
    'to return america to the gold standard.',
    'to harvest adrenochrome from the World\'s children',
    'to please Satan',
    'to please Moloch',
    'just because it gets them off',
    'just to feel ALIVE',
    'to turn the frogs gay',
    'to harbor mass hysteria for unlawful gains',
    'to dethrone god and take his place',
    'in order to seize the means of production',
    'to finally thwart the Antifa movement',
    'to fortify big pharma',
]

// Generation Function
function generateTheory() {

    //Coin Flip to Decide Which Noun Type to Use
    var flip = (Math.floor(Math.random() * 2) == 0)
    //Using Flip to make Noun Type Selection + Select Proper Linking Verb
    if (flip) {
        var noun = singularNouns[Math.floor(Math.random() * (singularNouns.length))];
        var linkingVerb = "is";
    } else {
        var noun = pluralNouns[Math.floor(Math.random() * (pluralNouns.length))];
        var linkingVerb = "are";
    } 

    //second noun generation
    var nounTwo = Math.floor(Math.random() * (allNouns.length));
    //action generation
    var action = Math.floor(Math.random() * (actions.length));
    //reason generation
    var reason = Math.floor(Math.random() * (reasons.length));
    //storing second noun in variable for while loop
    var noun2 = allNouns[nounTwo];
    //Loop to prevent the same noun being used twice
    while(noun == noun2) {
        var nounTwo = Math.floor(Math.random() * (allNouns.length));
        var noun2 = allNouns[nounTwo];
    }

    //Concatenation of String
    var theory = noun + " " + linkingVerb + " " + actions[action] + " " + allNouns[nounTwo] + " " + reasons[reason]

    //Injection into HTML
    document.getElementById('theory-container').innerHTML = theory;
};