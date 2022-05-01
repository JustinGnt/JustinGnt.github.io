let clicks = 0;
let noobObj = document.querySelector('.clicks');

function noobClick() {

    var ben = new Audio('audio/ben.mp3')

    clicks += 1;
    noobObj.textContent = `You have clicked Noob ${clicks} times! `;
    console.log(clicks)

    if (clicks % 10 === 0) {

        ben.play();

    }

}

// comment