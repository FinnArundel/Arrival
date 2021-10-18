let cnv;

window.onload = function () {
    console.log ('loading');
    cnv = document.getElementById("unity-canvas");
    cnv.style.backgroundColor = "#231F20";
    prepareDocument ();
    resizeCanvas ();
}

window.onresize = function () {
    console.log('resizing');
    resizeCanvas ();
}

function resizeCanvas () {
    cnv.width = window.innerWidth;
    cnv.height = window.innerHeight;
}

function prepareDocument () {
    document.body.style.padding = "0px";
    document.body.style.margin = "0px";
}