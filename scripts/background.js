/**
*    Copyright (c) 2014 - 2015 TuzK1ss 
*
*               background.js
*
*     last modify date on 2015-1-16
*/

define(function () {
    console.log('load background js success.');

    // set the section be center
    //var section = document.querySelector('section');
    //section.style.top = '50%';
    //section.style.marginTop = '-' + ( section.offsetHeight / 2 + 30) + 'px';

    var ie =  document.querySelector('.lt-ie9') ;

    if (ie) {
    	document.getElementById('warn').className = 'warn';
    	document.getElementsByTagName('section')[0].className = 'hidden';
    }



    // draw the background
    var canvas 	= document.createElement('canvas');
    canvas.innerHTML = 'sorry, your browser dose not support canvas.'
	document.body.appendChild(canvas);

	var	ctx 		= canvas.getContext('2d'),
		pr 			= window.devicePixelRatio || 1, // get the device pixel ratio
		winW 		= document.body.offsetWidth || document.documentElement.offsetWidth,
		winH 		= document.body.offsetHeight || document.documentElement.offsetHeight,
		f 			= winW / 20 + 30 ,
		posArray 	= [],
		radian 		= 0, 
		pi 			= Math.PI,
		rand 		= Math.random;

		winH 		   -= 10;
		canvas.width 	= winW;
		canvas.height 	= winH;
		ctx.globalAlpha = 0.6;

	var drawBackground = function() {
	    ctx.clearRect(0, 0, winW, winH)

	    posArray = [{
	        x: 0,
	        y: winH * .9 + f
	    },
	    {
	        x: 0,
	        y: winH * .9 - f
	    }];

	    while (posArray[1].x < winW + f) draw(posArray[0], posArray[1]);
	};

	var draw = function(i, j) {

	    ctx.beginPath();
	    ctx.moveTo(i.x, i.y);
	    ctx.lineTo(j.x, j.y);

	    var k = j.x + (rand() * 2 - 0.25) * f,
	    n = y(j.y);
	    //console.log(k + ' ' + n);
	    ctx.lineTo(k, n);
	    ctx.closePath();

	    radian -= (pi * 2 / -50);

	    var color = (Math.cos(radian) * 127 + 128 << 16 | Math.cos(radian + pi * 2 / 3) * 127 + 128 << 8 | Math.cos(radian + pi * 2 / 3 * 2) * 127 + 128).toString(16);

	    //console.log(color);
	    ctx.fillStyle = '#' + color;
	    ctx.fill();

	    // change the posArray
	    posArray[0] = posArray[1];
	    posArray[1] = {
	        x: k,
	        y: n
	    };
	}

	var y = function(p) {
	    var t = p + (rand() * 2 - 1.1) * f;
	    return (t > winH || t < 0) ? y(p) : t;
	}

	drawBackground();

	document.onclick = drawBackground;
	document.ontouchstart = drawBackground;
	document.addEventListener('touchmove',
		function(e) {
		    e.preventDefault();
	});
});