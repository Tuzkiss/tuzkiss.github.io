/*
*	(c) TuzK1ss 2014 - 2015
*	  localStorage operate
*/

console.log('load localStorage success.');

define(function () {
    'use strict';

    // set localStorage cover the old one
    var setStorage = function (lsName, lsValue) {
        if (window.localStorage) {
            localStorage.setItem(lsName, lsValue);
        } else {
            Console.log('sorry, your browser dont support localStorge.');
        };
    };

    // get localStorage
    var getStorage = function (lsName) {
        return localStorage.getItem(lsName) || null;
    };

    // show the all storage , return res
    var showStorage = function () {
        if (window.localStorage) {
            var storage = window.localStorage;

            var res = {};
            for (var i = 0; i < storage.length; i++) {
                if (!res[storage.key(i)]) {
                    res[storage.key(i)] = localStorage.getItem(storage.key(i));
                };
            };
            return res;

        } else {
            Console.log('sorry, your browser dont support localStorge.');
        };
    };

    // return result function
    return {
        setStorage  : setStorage,
        getStorage  : getStorage,
        showStorage : showStorage
    };
});