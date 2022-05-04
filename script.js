let clicks = 0;
let noobObj = document.querySelector('.clicks');

let pokeDisplay = document.querySelector('.buy-poke-stick');
let squeakDisplay = document.querySelector('.buy-squeak');

let pokeLvl = document.querySelector('.poke-level');
let squeakLvl = document.querySelector('.squeak-level');

let pokeStrength = 1;

let robuxCost = 1500
let squeakCost = 500;
let pokeCost = 50;

let pokeCostMod = 1.25
let squeakCostMod = 1.25

let squeaker = 1;
let robux = 6;

let x = 0;

let pokeLevel = 1;
let squeakLevel = 1;
let robuxLevel = 1;

var seconds = 0;

    // variables for audio
    var ben = new Audio('audio/ben.mp3');
    var fartSound = new Audio('audio/fart.mp3');

// Onclick function
function noobClick() {

    // Random colour change interval
    let random16 = Math.floor(Math.random() * 5);

    // Random ben interval
    let randomBen = Math.floor(Math.random() * 15 );

    // Random cursed interval
    let cursedRand = Math.floor(Math.random() * 25 );

    // 
    clicks += pokeStrength;
    noobObj.textContent = "Noob has been clicked: " + Math.ceil(clicks) + " times!";

    // Plays "behn" sound
    if (randomBen === 1) {
        ben.load();
        ben.play();
    }

    // Adds cursed image
    if (cursedRand === 1) {
        document.body.style.backgroundImage = "url('imgs/cursed.jpg')"
    }

    // Randomly changes the background colour
    if (random16 === 1) {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);    
        var bgColour = "rgb(" + x + "," + y + "," + z + ")";

        document.body.style.backgroundColor = bgColour;
        document.body.style.backgroundImage = "";
    }
}

// Main upgrade function
// Houses all upgrades
function upgradeFunc(name) {


    let max = 1000000;


    if (name === "poke" && clicks >= pokeCost) {
        pokeCostMod = pokeCostMod + (pokeCostMod*0.10);
        pokeLevel += 1;
        clicks -= pokeCost;
        noobObj.textContent = `Noob has been clicked: ${Math.ceil(clicks)} times! `;
        pokeCost = pokeCost * pokeCostMod;
        pokeStrength = pokeStrength * 1.5;
        
        pokeLvl.textContent = "Poke Stick -- Lvl: " + pokeLevel;
        pokeDisplay.textContent = "Upgrade \r\n (" + Math.ceil(pokeCost) + " clicks)";
    }

    if (name === "squeak" ) {
        squeakCostMod = squeakCostMod + (squeakCostMod*0.10);
        fartSound.play();
        squeakLevel += 1;
        clicks -= squeakCost;
        noobObj.textContent = `Noob has been clicked: ${Math.ceil(clicks)} times! `;
        squeakCost = squeakCost * squeakCostMod;
        squeaker = squeaker * 1.5;
        window.setInterval(function(){

            if (clicks < max){
                
                clicks = clicks += squeaker;
                noobObj.textContent = `Noob has been clicked: ${Math.ceil(clicks)} times! `;

            } else {
                clicks = max;
                noobObj.textContent = `Noob has been clicked: ${Math.ceil(clicks)} times! `;
            }
            

        }, 100);

        squeakLvl.textContent = "Squeaker -- Lvl: " + squeakLevel;
        squeakDisplay.textContent = "Upgrade \r\n (" + Math.ceil(squeakCost) + " clicks)";
    }



var cancel = setInterval(1, 1000);
}

// comment