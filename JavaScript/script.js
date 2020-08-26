var i = 0;
var path = new Array();
path[0] = "images/html.png";
path[1] = "images/css.png";
path[2] = "images/php.png";
path[3] = "images/JS.png";


function swapImage() {
    document.slide.src = path[i];
    if (i < path.length - 1) i++;
    else i = 0;
    setTimeout("swapImage()", 5000);
}
window.onload = swapImage;