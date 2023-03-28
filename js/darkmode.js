
function darkfun() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    if ( darkonoff == 0 ) {
        darkonoff = 1;
        bjdark()        
    }
    else if ( darkonoff == 1) {
        darkonoff = 0;
        bjlight()
    }
};

var darkonoff = 0;

function bjdark() {
    one = document.getElementById("bjd").href = 'css/bj-dark.css';
    two = document.getElementById("bjdm").href = 'css/bj-mobile-dark.css';
};
function bjlight() {
    one = document.getElementById("bjd").href = 'css/bj.css';
    two = document.getElementById("bjdm").href = 'css/bj-mobile.css';
};