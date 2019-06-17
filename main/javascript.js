//HERO//
const HERO = document.querySelector("#bird");


//04JUMP ONE TIME//

const ONEJUMPBUTTON = document.querySelector("#btn04");
console.log (ONEJUMPBUTTON);
ONEJUMPBUTTON.addEventListener("click",onejump);

function onejump(){
    HERO.classList = "";
    HERO.classList.add("onejump");
    console.log(STARTONEJUMP);
}

