let clicks = 0;
let noobObj = document.querySelector('.clicks');



// Onclick function
function noobClick() {

    var ben = new Audio('audio/ben.mp3')

    let random16 = Math.floor(Math.random() * 16);

    clicks += 1;
    noobObj.textContent = `Noob has been clicked: ${clicks} times! `;
    console.log(clicks)


    // Plays "behn" sound
    if (clicks % 10 === 0) {

        ben.play();

    }

    // Adds cursed image
    if (clicks % 100 === 0) {

        document.body.style.backgroundImage = "url('imgs/cursed.jpg')"


    }

    // Randomly changes the background colour
    if (clicks % random16 === 0) {

        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);    
        var bgColour = "rgb(" + x + "," + y + "," + z + ")";
        console.log(bgColour)

        document.body.style.backgroundColor = bgColour;
        document.body.style.backgroundImage = ""
    }


}

// comment