if (window.graphingModules == undefined)
    window.graphingModules = Object();
window.graphingModules.streamgraph = Object();
window.graphingModules.streamgraph.html="<!DOCTYPE html><html><head><meta http-equiv='Content-Type' content='text/html; charset=UTF-8'><title>Streamgraph</title><style>button {  position: absolute;  left: 350px;  top: 570px;}</style></head><body marginwidth='0' marginheight='0'><button onclick='transition()'>Change</button><svg width='404' height='500' id='graph'></svg><script src='./modules/d3.v4.min.js'></script><script type='text/javascript' src='./modules/streamgraph.js'></script></body></html>"
window.graphingModules.streamgraph.scripts=["./modules/analytics.js","./modules/d3.v4.min.js","./modules/highlight.min.js","./modules/streamgraph.original.js"];