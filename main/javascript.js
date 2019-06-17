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

//NAVBAR//

window.onscroll = function() {please};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function please {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
