
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

//sessionStorage.setItem("dark",0)

var darkonoff = 0;

function bjdark() {
    
    three = document.getElementById("tablestyle").href = 'css/table-dark.css';
};
function bjlight() {
    
    three = document.getElementById("tablestyle").href = 'css/table-light.css';
};