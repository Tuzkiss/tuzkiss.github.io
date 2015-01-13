/*
*	(c) TuzK1ss 2014 - 2015
*	  localStorage method
*/

var lsModule = (function () {
	'use strict';

	// set localStorage
	set : function ( lsName, lsValue ) {
		if ( window.localStorage ) {
			localStorage.setItem( lsName, lsValue );
		} else {
			Console.log( 'sorry, your browser dont support localStorge' );
		};
	};	

	// get localStorage
	get : function ( lsName ) {
		return localStorage.getItem( lsName ) || null ;
	};

	// show the all storage , return res
	showStorage : function () {
		if ( window.localStorage ) {
			var storage = window.localStorage;

			var res = {};
			for ( var i = 0; i < storage.length; i ++ ) {
				if ( !res[storage.key(i)] ) {
					res[storage.key(i)] = ls.get(storage.key(i));
				};
			};

			return res;

		} else {
			Console.log( 'sorry, your browser dont support localStorge' );
		};
	};

})();

