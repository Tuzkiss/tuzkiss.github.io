/**
*	 Copyright (c) 2014 - 2015 TuzK1ss 
*
*  				profile.js
*
*     last modify date on 2015-2-12
*/

var profile = {};

window.onload = function () {
	profile.bindClick();

	profile.replaceInfo();
};

// bind the li click event
profile.bindClick = function () {
	'use strict';

	var li = profile.query('nav>ul>li', true),
		activePanel,
		activeLi,
		panel;

	for (var i = 0; i < li.length; i ++) {
		(function (i) {
			li[i].addEventListener('click', function () {
				
				// if click other li 
				if (!(profile.hasClass(li[i], 'active'))) {
					activePanel = profile.query('.active-panel'),
					activeLi 	= profile.query('.active'),
					panel 		= profile.query('.panel', true);

					profile.removeClass(activeLi, 'active');
					profile.addClass(li[i], 'active');				

					if (activePanel) {
						 
						 profile.replaceClass(activePanel, 'active-panel', 'hidden');
						 profile.replaceClass(panel[i], 'hidden', 'active-panel');
					};

					profile.replaceInfo();
				}
			});
		})(i);
	};
};

// replace info html 
profile.replaceInfo = function () {
	'use strict';

	var activePanel 	= profile.query('.active-panel'),
		replaceArray 	= activePanel.innerHTML.match(/{{\w+}}/g),
		replaceName,
		replaceValue,
		isArray;
	
	if (replaceArray) {
		for (var i = 0; i < replaceArray.length; i ++) {

			replaceName 	= replaceArray[i];
			replaceValue 	= tuzkiss[replaceName.substring(2, replaceName.length - 2)];
			isValueArray	= replaceValue instanceof Array;

			if (replaceValue && !isArray) {
				activePanel.innerHTML = activePanel.innerHTML.replace(replaceName, replaceValue);
			} else if (replaceValue && isArray) {
				replaceValue = '<ul><li>' + replaceValue.join('</li><li>') + '</li></ul>';
				activePanel.innerHTML = activePanel.innerHTML.replace(replaceName, replaceValue);
			} else {
				activePanel.innerHTML = activePanel.innerHTML.replace(replaceName, 'null');
			};
		};
	};
};

// query dom element
profile.query = function (ele, isAll) {
	if (!isAll) {
		return document.querySelector(ele);
	} else {
		return document.querySelectorAll(ele);
	}
};

// replace class name 
profile.replaceClass = function (classPanel, classNameA, classNameB) {
	classPanel.className = classPanel.className.replace(classNameA, classNameB);
};

// remove class name
profile.removeClass = function (classPanel, classNameA) {
	profile.replaceClass(classPanel, classNameA, '');
};

// add class name
profile.addClass = function (classPanel, classNameB) {
	classPanel.className += classNameB;
};

profile.hasClass = function (classPanel, className) {
	if (classPanel.className.indexOf(className) > -1) {
		return true;
	} else {
		return false ;
	}
}


