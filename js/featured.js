var featured = {

    headline : "Nets shut down Simmons",
    subhead : "Head coach Jacque Vaughn officially ruled Simmons out for the rest of the year on Tuesday due to a nerve impingement in his back",
    imglink : "img/logo.jpg",
    link1 : "https://www.espn.com/nfl/story/_/id/35968103/qb-lamar-jackson-says-requested-trade-ravens",  // simply change these to change links

    headline2 : "Lamar Requests Trade",
    subhead2 : "Lamar Jackson, the former NFL MVP and Baltimore Ravens quarterback, announced on social media that he asked for a trade from the team after they applied the franchise tag on him. He said the Ravens did not meet his value and he wants to help a team win the Super Bowl. The Ravens said they are hopeful to reach a long-term deal with him.",
    imglink2 : "img/logo.jpg",
    link2 : "https://www.espn.com/nfl/story/_/id/35968103/qb-lamar-jackson-says-requested-trade-ravens",  // simply change these to change links

    init : () => {
        featured.h1 = document.getElementById("feat-head");
        featured.p1 = document.getElementById("featp");
        featured.lk = document.getElementById("ilink");

        featured.h2 = document.getElementById("feat-head2");
        featured.p2 = document.getElementById("featp2");
        featured.lk2 = document.getElementById("ilink2");

        featured.start();
    },

    start : () => {
        // replace stuff 
        featured.h1.innerHTML = featured.headline;
        featured.p1.innerHTML = featured.subhead;
        featured.lk.src = "img/fans2.jpg";
        //featured.h1 = document.getElementById("feat-head").href = lt.link1;

        featured.h2.innerHTML = featured.headline2;
        featured.p2.innerHTML = featured.subhead2;
        featured.lk2.src = "img/fans1.png";
    },

};
window.addEventListener("DOMContentLoaded", featured.init);