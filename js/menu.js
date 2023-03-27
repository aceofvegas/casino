var menu = {
    // name
    l1 : "Home",
    l2 : "Basketball",
    l3 : "Blackjack",
    l4 : "Football",
    l5 : "More",
    // links
    link1 : 'index.html',  // simply change these to change menu for whole site
    link2 : "#",
    link3 : "bj.html",
    link4 : "bj-custom.html",
    link5 : "#",
  
    // (B) INITIALIZE GAME
    init : () => {
        // (B1) GET HTML ELEMENTS
        menu.one = document.getElementById("menu1");
        menu.two = document.getElementById("menu2");
        menu.three = document.getElementById("menu3");
        menu.four = document.getElementById("menu4");
        menu.five = document.getElementById("menu5");

        menu.start()
    },  

    start : () => {
        // place bet when round starts 
        menu.one.innerHTML = menu.l1;
        menu.two.innerHTML = menu.l2;
        menu.three.innerHTML = menu.l3;
        menu.four.innerHTML = menu.l4;
        menu.five.innerHTML = menu.l5;
        menu.one = document.getElementById("menu1").href = menu.link1;
        menu.two = document.getElementById("menu2").href = menu.link2;
        menu.three = document.getElementById("menu3").href = menu.link3;
        menu.four = document.getElementById("menu4").href = menu.link4;
        menu.five = document.getElementById("menu5").href = menu.link5;

    },

};
    window.addEventListener("DOMContentLoaded", menu.init);