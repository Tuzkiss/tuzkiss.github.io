/*
*  (c) TuzK1ss 2015
*    js animation
*/

var jsAnim = {};

// set requsetAnimationFrame

var raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function ( x ) {  window.setTimeout( x , 1000 / 60 ) } ;


window.onload = function () {
	document.querySelector('#showAlert').addEventListener('click', function () {
		document.querySelector('#process').className = 'alert';
		document.body.className = 'mask';
	}, false);

	document.querySelector('#hideAlert').addEventListener('click', function () {
		document.querySelector('#process').className = ' slide-up';
		document.body.className = '';
	}, false);
};


jsAnim.load = function () {
	var process = document.querySelector('#process');
	var w = process.offsetWidth + 1;
	process.style.width = w + 'px';
	
	if ( w < 1000 ) {
		raf( jsAnim.load );
	}
};
//raf( jsAnim.load );

