var lt = {
    // (A) PROPERTIES

    l1 : "Wow this is cool",
    l2 : "Looks good still",
    l3 : "Still going nice",
    l4 : "Made it here",
  
    // (B) INITIALIZE GAME
    init : () => {
        // (B1) GET HTML ELEMENTS
        lt.one = document.getElementById("latest1");
        lt.two = document.getElementById("latest2");
        lt.three = document.getElementById("latest3");
        lt.four = document.getElementById("latest4");

        lt.start()
    },  

    start : () => {
        // place bet when round starts 
        lt.one.innerHTML = lt.l1;
        lt.two.innerHTML = lt.l2;
        lt.three.innerHTML = lt.l3;
        lt.four.innerHTML = lt.l4;
    },

};
    window.addEventListener("DOMContentLoaded", lt.init);