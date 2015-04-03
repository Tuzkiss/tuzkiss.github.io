/*
*   Paging module js
*    author tuzkiss
*	   2015-4-1
*/
var time = new Date();

'use strict'

var paging = {
	config: {
		pageSize: 1,
		pageIndex: Math.random() * 10,
		total: 10,
		parentId: 'document.body',
		callback:null
	},
	version: '1.0.0',
	init: function (config) {

		config = this.mixConfig(config);

		var domId = config.parentId,
			size = config.pageSize,
			index = config.pageIndex,
			total = config.total,
			callback = config.callback;

		this.readerPaging(domId, size, index, total, callback)
			.pagingClickHandler(domId, size, callback)
			.formSubmitHandler(domId, size, callback);

		return this;
	},
	mixConfig: function (config) {
		
		for (var i in config) {
			this.config[i] = config[i] || this.config[i];
		}

		this.config["pageIndex"] = this.config["pageIndex"] > this.config["total"] ? this.config["total"] :this.config["pageIndex"];

		return this.config;
	},
	readerPaging: function (domId, size, index, total, callback) {
		var dom = document.getElementById(domId),
			totalPage = Math.ceil(total / size),
			last = 0,
			html = '';
		dom.innerHTML = '';

		html += '<ul class="paging-ul">';

		html += '<li class="prev"><a data-size="prev" href="javascript:;">上一页</a></li>';

		index = Math.ceil(index);
		
		if (totalPage <= 7 ) { 
			// 当分页总页数小于7时全部显示

			last = index > 5 ? index : 5;

			for (var i = 1; i < last + 1; i ++) {
				html +=	'<li class="item"><a data-size="' + i + '" href="javascript:;">' + i + '</a></li>';
			}

		} else if (totalPage > 7 && index <= 5) {
			last = index + 2 < 5 ? 5 : index + 2;

			for (var i = 1; i < last + 1; i ++) {
				html +=	'<li class="item"><a data-size="' + i + '" href="javascript:;">' + i + '</a></li>';
			}

			html +=	'<li class="item dot">...</li>';

		} else if (totalPage > 7 && index > 5)  {
			// 当前页大于第五页

			// 前两页 + ...
			for (var i = 1; i < 3; i ++) {
				html +=	'<li class="item"><a data-size="' + i + '" href="javascript:;">' + i + '</a></li>';
			}

			html +=	'<li class="item dot">...</li>';

			// 后五页
			if ( index + 2 < totalPage ) {

				for (var i = index - 2; i < index + 3; i ++) {
					html +=	'<li class="item"><a data-size="' + i + '" href="javascript:;">' + i + '</a></li>';
				}
				html +=	'<li class="item dot">...</li>';

			} else {

				for (var i = index - 2; i < totalPage + 1; i ++) {
					html +=	'<li class="item"><a data-size="' + i + '" href="javascript:;">' + i + '</a></li>';
				}
				
			}

		}

		html +=	'<li class="next"><a data-size="next"  href="javascript:;">下一页</a></li>';

		html += '<li class="paging-total">';
		html += ('<span id="' + domId +'PageForm" class="form">共&nbsp;<span id="' + domId +'Total">' + totalPage + '</span>&nbsp;页, 到第&nbsp;<input id="' + domId +'Index" type="number" value="' + index +'" min="1" max="' + total + '" class="paging-index" value="' + index + '"</input>&nbsp;</div>页 ' +
		        '<input id="' + domId +'Comfirm" class="go-paging" type="submit"  value="确定"></span>');
		html += '</li></ul>';
		

		dom.innerHTML = html;

		this.readerActiveLi(domId, index, total).formSubmitHandler(domId, size, callback);

		return this;
	},
	readerActiveLi : function (domId, index, total) {
		var item = document.querySelectorAll('#' + domId + ' .item a'),
			indexA,
			tmp;

		if (1 == index) {
			tmp = document.querySelector('#' + domId + ' .prev a');
			tmp.style.color = "#999";
			tmp.setAttribute('disabled', 'true');
		} else if (total == index) {
			tmp = document.querySelector('#' + domId + ' .next a');
			tmp.style.color = "#999";
			tmp.setAttribute('disabled', 'true');
		} 
	
		for(var i = 0, len = item.length; i < len; i ++) {
			var indexA = item[i].getAttribute('data-size') || 0;

			if (index == indexA) {
				item[i].parentNode.className += ' active-li';
				item[i].setAttribute('disabled', 'true');
				return this;
			}
		}

		
		
		return this;
	},
	pagingClickHandler: function (domId, size, callback) {
		var that = this;

		var paging = document.getElementById(domId);
		paging.addEventListener('click', function (e){
			e = e || window.event;
			var target = e.target || e.srcElement;

			//console.log(target);
			var index = target.getAttribute('data-size'),
				isDisabled = target.getAttribute('disabled'),
				total = document.getElementById(domId + 'Total').innerHTML,
				active = parseInt(document.querySelector('#' + domId +' .active-li a').getAttribute('data-size'));

			if (index && !isDisabled) {
				if (index === 'prev' ) {
					that.readerPaging(domId, size, active - 1, total, callback);
				} else if (index === 'next' ) {
					that.readerPaging(domId, size, active + 1, total, callback);
				} else {
					that.readerPaging(domId, size, index, total, callback);
				}

				that.clickHandlerCallback(domId, callback);
			}
		}, false);
		
		return this;
	},
	getIndex:function (domId) {
		var index = parseInt(document.querySelector('#' + domId +' .active-li a').getAttribute('data-size'));
		return index;
	},
	clickHandlerCallback: function (domId, callback) {
		var index = this.getIndex(domId);
		callback(index);
	},
	formSubmitHandler:function (domId, size, callback){
		var that = this,
			input = document.getElementById(domId + 'Comfirm');;

		input.addEventListener('click', function (e){
			e = e || window.event;
			e.preventDefault();

		var form = document.getElementById(domId + 'PageForm'),
			total = parseInt(form.getElementsByTagName('span')[0].innerHTML),
			index = parseInt(form.getElementsByTagName('input')[0].value),
			active = that.getIndex(domId);
				
			if (index !== active && index <= total && index > 0) {
				that.readerPaging(domId, size, index, total, callback)
					.clickHandlerCallback(domId, callback);
			} else if (index !== active) {
				form.getElementsByTagName('input')[0].value = 1;
			}
				
		}, false);

		return this;
	}
};

paging.init({
	pageSize: 1,
	pageIndex: Math.random() * 10,
	total: 20,
	parentId: 'paging',
	callback: function (index) {
		alert('回发事件11111~ : \n点击之后的页码为: ' + index);
	}
});


paging.init({
	pageSize: 1,
	pageIndex: Math.random() * 10,
	total: 10,
	parentId: 'paging2',
	callback: function (index) {
		alert('回发事件22222~ : \n点击之后的页码为:' + index);
		
	}
});



