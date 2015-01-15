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
requirejs ( ['localStorage'], function ( ls ) {
	//ls.showStorage();
	//console.log( ls );
	//ls.setStorage('fudaye', 'nihao2~');
	var a = ls.showStorage();

	console.log(a);
});

