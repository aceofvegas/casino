var featured = {

    headline : "Lamar Requests Trade",
    subhead : "Lamar Jackson, the former NFL MVP and Baltimore Ravens quarterback, announced on social media that he asked for a trade from the team after they applied the franchise tag on him. He said the Ravens did not meet his value and he wants to help a team win the Super Bowl. The Ravens said they are hopeful to reach a long-term deal with him.",
    imglink : "img/logo.jpg",
    link1 : "https://www.espn.com/nfl/story/_/id/35968103/qb-lamar-jackson-says-requested-trade-ravens",  // simply change these to change links

    init : () => {
        featured.h1 = document.getElementById("feat-head");
        featured.p1 = document.getElementById("featp");
        featured.lk = document.getElementById("ilink");
        featured.start();
    },

    start : () => {
        // replace stuff 
        featured.h1.innerHTML = featured.headline;
        featured.p1.innerHTML = featured.subhead;
        featured.lk.src = "img/fans1.png";
        //featured.h1 = document.getElementById("feat-head").href = lt.link1;
    },

};
window.addEventListener("DOMContentLoaded", featured.init);