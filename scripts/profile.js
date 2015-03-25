/**
*	 Copyright (c) 2014 - 2015 TuzK1ss 
*
*  				profile.js
*
*     last modify date on 2015-2-12
*/

var profile = {};

window.onload = function() {
    profile.bindClick();

    profile.replaceInfo();
};

// bind the li click event
profile.bindClick = function() {
    'use strict';
    var li = profile.query('nav>ul>li', true),
    that = this,
    activePanel,
    activeLi,
    panel;

    for (var i = 0; i < li.length; i++) {
        li[i].addEventListener('click', profile.liClickHandler(li, i));
    }
};

profile.liClickHandler = function(li, i) {
    return function() {
        // if click other li 
        if (! (profile.hasClass(li[i], 'active'))) {

            activePanel = profile.query('.active-panel');
            activeLi = profile.query('.active');
            panel = profile.query('.panel', true);

            profile.removeClass(activeLi, 'active');
            profile.addClass(li[i], 'active');

            if (activePanel) {

                profile.replaceClass(activePanel, 'active-panel', 'hidden');
                profile.replaceClass(panel[i], 'hidden', 'active-panel');
            }

            profile.replaceInfo();
        }
    };
};

// replace info html 
profile.replaceInfo = function() {
    'use strict';

    var activePanel = profile.query('.active-panel'),
    replaceArray = activePanel.innerHTML.match(/{{\w+}}/g),
    replaceName,
    replaceValue,
    isArray,
    i;

    if (replaceArray) {
        console.log(replaceArray);
        if (replaceArray[0].indexOf('skills') > 0) {
            replaceName = replaceArray[0];
            replaceValue = tuzkiss[replaceName.substring(2, replaceName.length - 2)];
            console.log(replaceValue);
            var html = '<ul class="skill-ul">';
            for (i = 0; i < replaceValue.length; i++) {
                html += ('<li><span class="skill-icon"><img src="' + replaceValue[i].icon + '" ></span><span class="skill-name">' + replaceValue[i].name + '</span><div class="skill-percent">' + replaceValue[i].percent + '</div></li>');
            }
            html += '</ul>';
            activePanel.innerHTML = html;
            profile.drawCircle();
        } else if (replaceArray.indexOf('dxx') > 0) {

	} else {
            for (i = 0; i < replaceArray.length; i++) {

                replaceName = replaceArray[i];
                replaceValue = tuzkiss[replaceName.substring(2, replaceName.length - 2)];
                isArray = replaceValue instanceof Array;

                if (replaceValue && !isArray) {
                    activePanel.innerHTML = activePanel.innerHTML.replace(replaceName, replaceValue);
                } else if (replaceValue && isArray) {
                    replaceValue = '<ul><li>' + replaceValue.join('</li><li>') + '</li></ul>';
                    activePanel.innerHTML = activePanel.innerHTML.replace(replaceName, replaceValue);
                } else {
                    activePanel.innerHTML = activePanel.innerHTML.replace(replaceName, 'null');
                }
            }
        }

    }
};

// query dom element
profile.query = function(ele, isAll) {
    isAll = isAll || false;
    if (!isAll) {
        return document.querySelector(ele);
    } else {
        return document.querySelectorAll(ele);
    }
};

// replace class name 
profile.replaceClass = function(classPanel, classNameA, classNameB) {
    classPanel.className = classPanel.className.replace(classNameA, classNameB);
};

// remove class name
profile.removeClass = function(classPanel, classNameA) {
    profile.replaceClass(classPanel, classNameA, '');
};

// add class name
profile.addClass = function(classPanel, classNameB) {
    classPanel.className += classNameB;
};

profile.hasClass = function(classPanel, className) {
    if (classPanel.className.indexOf(className) > -1) {
        return true;
    } else {
        return false;
    }
};

profile.drawCircle = function() {
    var percent = profile.query('.skill-percent', true),
    value;

    for (var i = 0; i < percent.length; i++) {
        value = percent[i].innerHTML;
        percent[i].innerHTML = '';
        var canvas = document.createElement('canvas');
        canvas.id = 'percent' + i;
        canvas.width = 100;
        canvas.height = 100;
        this.draw(canvas.id, parseInt(value), i);
        percent[i].appendChild(canvas);
    }

};

profile.color = ['red', 'green', 'blue', 'orange', 'purple', 'gray', 'yellow', 'black'];

profile.draw = function(canvasId, value, j) {
    var i = 0.1;
    var draw = setInterval(function() {
        if (i <= value / 50) {
            context = profile.query('#' + canvasId).getContext("2d");

            var centerX = 50;
            var centerY = 50;
            var radius = 40;
            context.beginPath();
            context.arc(centerX, centerY, radius, 0, i * Math.PI, false);

            context.fillStyle = "#fff";
            context.fill();
            context.lineWidth = 15;
            context.strokeStyle = profile.color[j];

            context.stroke();
            i += 0.08;
        } else {
            clearInterval(draw);
            var context = profile.query('#' + canvasId).getContext("2d");
            context.font = "20px Myriad";
            context.fillStyle = "#444";
            context.fillText(value + '%', 33, 55);
        }
    },
    50);

};