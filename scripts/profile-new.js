/*
*  Tuzkiss profile new js
*  
*  Ready for new life.
*/

var profileNew = {
	init: function () {
		this.bindNextClickHandler().bindscrollFunc();
	},
	scrollStatus: 'stop',
	scrollIndex : 0,
	bindNextClickHandler: function () {
		var next = document.querySelectorAll('.next'),
			that = this;

		for (var i = 0, len = next.length; i < len; i ++) {

			(function () {
				next[i].addEventListener('click', that.nextClickHandler, false);
			})();
		}

		return this;
	},
	nextClickHandler : function () {
		var index = this.getAttribute('data-index'),
			section = document.querySelector('section'),
			percent = '-' + (index * 100) + '%';

		section.style.webKitTransform = 'translatey(' + percent + ')';
		section.style.mozTransform = 'translatey(' + percent + ')';
		section.style.oTransform = 'translatey(' + percent + ')';
		section.style.transform = 'translatey(' + percent + ')';

		this.scrollIndex = index;
	},
	bindscrollFunc: function () {
		//document.addEventListener('onmousewheel',this.scrollFunc,false);
		window.onmousewheel=document.onmousewheel = this.scrollFunc;
	},
	scrollFunc: function () {
		if (this.scrollStatus === 'stop') {
			var section = document.querySelector('section'),
				percent = '-' + ((this.scrollIndex + 1) * 100) + '%';

			section.style.webKitTransform = 'translatey(' + percent + ')';
			section.style.mozTransform = 'translatey(' + percent + ')';
			section.style.oTransform = 'translatey(' + percent + ')';
			section.style.transform = 'translatey(' + percent + ')';

			this.scrollStatus = 'run';
			this.scrollIndex ++;

		} else {
			this.scrollStatus = 'stop';
		}
	}
};

profileNew.init();