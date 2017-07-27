if (window.graphingModules == undefined)
    window.graphingModules = Object();
window.graphingModules.mixer = Object();
window.graphingModules.mixer.html = "<html> <head> <link rel='stylesheet' type='text/css' href='./modules/mixer.style.css' /> </head> <div> <div class='mixer-header'>颜色混合器</div><svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='400px' height='400px' id='mixer-circle' class='mixer-circle'> <g transform='translate(200,200)'> <circle r='100px' stroke='black' stroke-width='2' fill='none' id='mixer-center'></circle> <circle r='130px' stroke='black' stroke-width='2' fill='none'></circle> <path></path> </g> </svg> <style> .graph-footer {width: 85%; margin: auto; margin-top: 10px; } </style> <div class='graph-footer'> 颜色混合器，将颜色拖入三个混合器中，即可混合三种颜色~ </div> </div></html> "
window.graphingModules.mixer.scripts = ["./modules/mixer.original.js"];
