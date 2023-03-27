var featured = {

    headline : "Lamar Requests Trade",
    subhead : "The Ravens have not met his demands and he is now seeking a trade",
    link1 : "https://www.espn.com/nfl/story/_/id/35968103/qb-lamar-jackson-says-requested-trade-ravens",  // simply change these to change links

    init : () => {
        featured.h1 = document.getElementById("feat-head");
        featured.p1 = document.getElementById("featp");
        featured.start();
    },

    start : () => {
        // place bet when round starts 
        featured.h1.innerHTML = featured.headline;
        featured.p1.innerHTML = featured.subhead;

        //featured.h1 = document.getElementById("feat-head").href = lt.link1;
    },

};
window.addEventListener("DOMContentLoaded", featured.init);