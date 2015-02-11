/**
*	 Copyright (c) 2014 - 2015 TuzK1ss 
*
*  				profile.js
*
*     last modify date on 2015-2-5
*/

var profile = {};

window.onload = function () {
	profile.bindClick();

	profile.replaceInfo();
};

// bind the li click event
profile.bindClick = function () {
	'use strict';

	var li = document.querySelectorAll('nav>ul>li');

	for (var i = 0; i < li.length; i ++) {
		(function (i) {
			li[i].addEventListener('click', function () {
				var activePanel = document.querySelector('.active-panel'),
					activeLi 	= document.querySelector('.active'),
					panel 		= document.querySelectorAll('.panel');

					activeLi.className = activeLi.className.replace('active', '');
					li[i].className += 'active';

				if (activePanel) {
					 
					 activePanel.className = activePanel.className.replace('active-panel', 'hidden');;

					 panel[i].className = panel[i].className.replace('hidden', 'active-panel');
				};

				profile.replaceInfo();
			});
		})(i);
	};
};

// replace info html 
profile.replaceInfo = function () {
	'use strict';

	var activePanel 	= document.querySelector('.active-panel'),
		replaceArray 	= activePanel.innerHTML.match(/{{\w+}}/g),
		replaceName,
		replaceValue;
	
	if (replaceArray) {
		for (var i = 0; i < replaceArray.length; i ++) {
			replaceName 	= replaceArray[i];
			replaceValue 	= tuzkiss[replaceName.substring(2, replaceName.length - 2)];

			if (replaceValue) {
				activePanel.innerHTML = activePanel.innerHTML.replace(replaceName, replaceValue);
			} else {
				activePanel.innerHTML = activePanel.innerHTML.replace(replaceName, 'null');
			};
		};
	};

};

