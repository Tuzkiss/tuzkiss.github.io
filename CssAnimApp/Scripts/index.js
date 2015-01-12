/**
*   (c) TuzK1ss 2014 - 2015
*     CSS3 animation demo
*/

'use strict';

var cssAnim = {};

window.onload = function () {
	cssAnim.showRainyHeader();
	cssAnim.showWaterFlow();
};

window.onresize = function () {
	cssAnim.showWaterFlow();
};

window.onscroll = function () {
	console.log(document.body.scrollTop || document.documentElement.scrollTop );
};

// Show the rainy header
cssAnim.showRainyHeader = function () {
	var image = document.getElementById('header-bg');
    image.onload = function() {
        var engine = new RainyDay({
            image: this
        });

    	engine.rain([ [1, 2, 100] ]);
    	engine.rain([ [3, 3, 0.88], [5, 5, 0.9], [6, 2, 1] ], 100);
    };

    image.crossOrigin = 'anonymous';
    image.src = 'http://i.imgur.com/N7ETzFO.jpg';
};

// show the water flow
cssAnim.showWaterFlow = function ( contentId, boxClass ) {
	var boxes = document.querySelectorAll('.box');

	var col = cssAnim.setContentWidth(boxes[0], 'content');

	//console.log( "col : " + col );

	var posH = [], posL = [], min, minIndex, this_box, this_len;
	this_len = boxes.length;

	for (var i = 0; i < boxes.length; i ++) {
		this_box = boxes[i];
		this_box.style.position = 'relative';
		this_box.style.left 	= 0 + 'px';
		this_box.style.top 		= 0 + 'px';
	};

	for (var i = 0; i < boxes.length; i ++) {
		this_box = boxes[i];
		if ( i < col) {
			posH[i] = this_box.offsetHeight + this_box.offsetTop; 
			posL[i] = this_box.offsetLeft;
		}
		else {
			min 			= cssAnim.findMinHeight( posH );
			minIndex 		= cssAnim.findMinIndex( col, min, posH);
			
			this_box.style.position = 'absolute';
			this_box.style.left 	= posL[minIndex]  + 'px';
			this_box.style.top 		= min  + 'px';
			//log ( "boxes[" + minIndex +"].offsetLeft :" + posL[minIndex] );
			//log( "this_box left: " + this_box.offsetLeft );

			posH[minIndex] += this_box.offsetHeight + 20;
		}
	};
	

	


};

// set the main content width
cssAnim.setContentWidth = function ( box , contentId ) {
	var windowW = document.body.clientWidth - 20;
	var boxW    = box.offsetWidth + 20;
	var column  = Math.floor( windowW / boxW);

	document.querySelector('#' + contentId).style.width = column *  boxW  + 'px';

	return column;
};

// find the min height in position array
cssAnim.findMinHeight = function ( posH ) {
	return Math.min.apply( null, posH );
};

// find the index min in position array
cssAnim.findMinIndex = function ( col, min, posH ) {
	for (var i = 0; i < col; i ++) {
		if ( min === posH[i] )
			return i;
	};
};

var log = function ( log ) {
	console.log( log );
};





var showMask = function () {
	var mask = document.createElement('div');
	mask.className = 'mask';
	document.body.appendChild(mask);
};