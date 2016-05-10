$(document).ready(function() {
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
    
    // Todo
    // var c;
    // for(var x=25; x<400; x+=50) {
    //     for(var y= 25; y<400; y+=50) {
    //         c = Shape.Circle(x, y, 20);
    //         c.fillColor = 'rgba(201,' + x + ',' + y +')';
    //     }
    // }
    
    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = '20';
    text.content = 'Hello World';
    
    paper.view.draw();
    console.log("scripts.js loaded");
})