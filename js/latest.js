var lt = {

    h1 : "Latest News", //heading


    l1 : "Jackson Requests Trade",
    l2 : "Looks good still",
    l3 : "Still going nice",
    l4 : "Made it here",
    // links
    link1 : "https://www.espn.com/nfl/story/_/id/35968103/qb-lamar-jackson-says-requested-trade-ravens",  // simply change these to change links
    link2 : "#",
    link3 : "bj.html",
    link4 : "bj-custom.html",
    link5 : "#",
  
    // (B) INITIALIZE GAME
    init : () => {
        // (B1) GET HTML ELEMENTS
        lt.one = document.getElementById("latest1");
        lt.two = document.getElementById("latest2");
        lt.three = document.getElementById("latest3");
        lt.four = document.getElementById("latest4");
        lt.head = document.getElementById("js-head1");

        lt.start()
    },  

    start : () => {
        // place bet when round starts 
        lt.one.innerHTML = lt.l1;
        lt.two.innerHTML = lt.l2;
        lt.three.innerHTML = lt.l3;
        lt.four.innerHTML = lt.l4;
        lt.head.innerHTML = lt.h1;
        lt.one = document.getElementById("latest1").href = lt.link1;
        lt.two = document.getElementById("latest2").href = lt.link2;
        lt.three = document.getElementById("latest3").href = lt.link3;
        lt.four = document.getElementById("latest4").href = lt.link4;
        lt.head = document.getElementById("js-head1").href = lt.link5;
    },

};
    window.addEventListener("DOMContentLoaded", lt.init);