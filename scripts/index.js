/**
*   (c) TuzK1ss 2014 - 2015
*     tuzkiss profile site
*/

console.log('load index success.');

// require config setting
require.config ({
	baseUrl : 'scripts',
	paths : {

	}
});

// require js
requirejs ( ['profile', 'background'], function ( tuzkiss, bg ) {
	
	//bg.setBackground();

            var canvas = document.getElementsByTagName('canvas')[0],
                ctx = canvas.getContext('2d'),
                pr = window.devicePixelRatio || 1,  // get the device pixel ratio
                winW = document.body.offsetWidth || document.documentElement.offsetWidth,
                winH = document.body.offsetHeight || document.documentElement.offsetHeight,
                f = 90,
                posArray = [],
                radian = 0, // 弧度
                pi = Math.PI,
                rand = Math.random;

            winH -= 10;
            canvas.width = winW;   
            canvas.height = winH; 

            ctx.globalAlpha = 0.6;

            var drawBackground = function () {
                ctx.clearRect(0, 0, winW, winH)

                posArray = [{
	                	x : 0,
	                	y : winH * .7 + f
	                } ,
	                {
	                	x : 0,
	                	y : winH * .7 - f
	                }
	            ];
	            console.log(posArray);

                while( posArray[1].x < winW + f ) 
                	draw(posArray[0], posArray[1]);
            }

            var draw = function (i, j) {   
                
                ctx.beginPath();
                ctx.moveTo(i.x, i.y);
                ctx.lineTo(j.x, j.y);

                var k = j.x + ( rand() * 2 - 0.25 ) * f,  n = y(j.y);
                //console.log(k + ' ' + n);

                ctx.lineTo(k, n);
                ctx.closePath();

                radian -= ( pi * 2 / -50);

                var color = ( Math.cos(radian) * 127 + 128 << 16 | Math.cos( radian + pi * 2 / 3 ) * 127 + 128 << 8 | Math.cos( radian + pi * 2 / 3 * 2) * 127 + 128).toString(16);

                //console.log(color);
                ctx.fillStyle = '#'+ color ;
                ctx.fill();

                // change the posArray
                posArray[0] = posArray[1];
                posArray[1] = { x:k, y:n };
            }

            var y = function (p) {
                var t = p + ( rand() * 2 - 1.1) * f;
                return (t > winH || t < 0) ? y(p) : t;
            }


            document.onclick = drawBackground;
            document.ontouchstart = drawBackground;
            drawBackground();

            document.addEventListener('touchmove', function (e) {
                e.preventDefault();
            });


            
	        var section = document.querySelector('section');
            var sectionHeight = section.offsetHeight;
            section.style.top = '50%';
            section.style.marginTop = '-' + sectionHeight / 2 - 20 + 'px';

           
});

