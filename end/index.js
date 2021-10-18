let canvas;
let heightRatio;

window.onload = function () {
    var canvas = document.getElementById('unity-canvas');
    var heightRatio = 1.5;
    canvas.height = canvas.width * heightRatio;
}

window.onresize = function () {
    var canvas = document.getElementById('unity-canvas');
    var heightRatio = 1.5;
    canvas.height = canvas.width * heightRatio;
}