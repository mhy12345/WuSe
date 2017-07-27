function paintCenter() {
    /*var R = 0;
    var G = 0;
    var B = 0;
    var sum = 0;
    for (w of $(".mixer-area")) {
        lst = w.getAttribute('fill').slice(4, -1).split(',');
        R = Math.max(R, +lst[0]);
        G = Math.max(G, +lst[1]);
        B = Math.max(B, +lst[2]);
    }*/
    var R = 0;
    var G = 0;
    var B = 0;
    for (w of $(".mixer-area")) {
        lst = w.getAttribute('fill').slice(4, -1).split(',');
        R += +lst[0] -128;
        G += +lst[1] -128;
        B += +lst[2] -128;
    }
    R=parseInt(R/3+128);
    G=parseInt(G/3+128);
    B=parseInt(B/3+128);
    if (R<0)R=0;
    if (G<0)G=0;
    if (B<0)B=0;
    if (R>=255)R=255;
    if (G>=255)G=255;
    if (B>=255)B=255;
    $("#mixer-center").attr('fill', "rgb(" + R + "," + G + "," + B + ")");
}
ArcList = [1.0/6 * Math.PI, 5.0/6 * Math.PI, 9.0/6 * Math.PI];
ColList = ["rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)"];
$(".mixer-circle path").remove();
var mixer = $(".mixer-circle g")[0];
for (var i = 0; i < ArcList.length; i++) {
    var alpha = ArcList[i], beta = ArcList[(i + 1) % ArcList.length];
    var flag = Math.abs(beta - alpha) > Math.PI ? 1 : 0;
    var flag2 = 1;
    if (alpha > beta) { var t = alpha; alpha = beta; beta = t; flag = 1 - flag; flag2 = 0; };
    var area = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    area.setAttribute('d', 'M ' + 100 * Math.cos(alpha) + " " + 100 * Math.sin(alpha) + " A" + 100 + " " + 100 + " " + 0 + " " + flag + " " + flag2 + " " + 100 * Math.cos(beta) + " " + 100 * Math.sin(beta) + " "
        + " L" + 130 * Math.cos(beta) + " " + 130 * Math.sin(beta) + " A" + 130 + " " + 130 + " " + 0 + " " + flag + " " + (1 - flag2) + " " + 130 * Math.cos(alpha) + " " + 130 * Math.sin(alpha) + " "
        + " Z");
    area.setAttribute('fill', ColList[i]);
    area.setAttribute('graphObject', null);
    area.setAttribute('class', "mixer-area");
    mixer.appendChild(area);
    area.onColorChange = function () { paintCenter() };
}
// console.info("1");
document.getElementById('graph-container').style.background="#f7eed6";
// console.info("2");
paintCenter();