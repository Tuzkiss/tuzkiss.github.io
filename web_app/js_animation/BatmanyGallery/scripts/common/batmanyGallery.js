/*
*   @description 基于jquery的简易相册组件
*   @author tuzkiss
*   @create 2015-6-5
*/

function BatmanGallery(){
    this.version = '1.0.0';
    this.author = 'tuzkiss';

    this.defalutConfig = {
        // 动画持续时间
        duration : 1000,

        // 动画延时
        delay : 5000,

        // 相册容器ID
        parentId: 'body',

        // 切换方式click / hover
        eventStyle: 'click'
    }
}

var BATMAN_GALLERY_ANIMATION ;   

BatmanGallery.prototype = {
    index : 0,
    length: 0,
    domId : 'body',
    liWidth : 0,
    delay : 5000,
    duration : 1000,
    animation : null,
    isStarted : false,
    isAnimation: false,
    eventStyle: 'clcik',
    init: function (config) {
        // 混合参数
        var CFG = $.extend({},this.defalutConfig, config);
        this.domId = CFG.parentId;
        this.duration = CFG.duration;
        this.delay = CFG.delay;
        this.eventStyle = CFG.eventStyle;

        this.initLayout().initLength().bindNavMove().bindGalleryMove();    

        return this;
    },

    // 初始化布局
    initLayout: function () {
        var parentWidth = $('#' + this.domId).width(),
            parentHeight = $('#' + this.domId).height();

        this.liWidth = parentWidth;
        $('#' + this.domId).find('ul > li > img').css('height', parentHeight);

        return this;
    },

    // 初始化相册长度
    initLength:function () {
        this.length = $('#' + this.domId + ' > ul>li').length;

        if (this.length) {
            this.createNav(this.domId);
        }
        return this;
    },

    // 创建导航nav
    createNav:function () {

        $('#' + this.domId + 'Nav').remove();

        var nav = '';
        nav += '<div id="' + this.domId + 'Nav" class="gallery-nav"><ul>';
        nav += '<li class="active">' + 0 + '</li>';
        for (var i = 1; i < this.length; i ++) {
            nav += '<li>' + i + '</li>';
        }
        nav += '</ul></div>';


        $('#' + this.domId).find('ul').append(nav);

        return this;
    },

    // 绑定相册切换
    bindNavMove: function () {
        var that = this;

        if (this.eventStyle === 'click') {
            $('#' + this.domId + 'Nav').find('li').unbind().click(function (){
                var $this = $(this);
                if (!$this.hasClass('active')) {

                    that.index = $this.html();
                    that.isStarted = false;
                    that.bindGalleryMove();
                }
            });
        } else if (this.eventStyle === 'hover') {
            $('#' + this.domId + 'Nav').find('li').unbind().hover(function (){
                var $this = $(this);
                if (!$this.hasClass('active')) {

                    that.index = $this.html();
                    that.isStarted = false;
                    that.bindGalleryMove();
                }
            });
        }

        return this;
    },

    // 绑定默认切换
    bindGalleryMove: function () {
        var that = this;
        if (!this.isStarted) {
            this.galleryMove();
            this.isStarted = true;
        }

        // 清除定时器
        clearInterval(BATMAN_GALLERY_ANIMATION);
        BATMAN_GALLERY_ANIMATION = null;

        // 重置定时器
        BATMAN_GALLERY_ANIMATION = setInterval(function (){
            that.galleryMove();
        }, this.delay);
    },

    // 相册切换方法
    galleryMove: function () {
        if (this.isAnimation) {
            return null;
        } else {
            var that = this,
                $nav = $('#' + that.domId + 'Nav>ul'),
                marginLeft;

            this.isAnimation = true;

            if (this.index <= this.length - 1) {
                marginLeft = '-' + (this.index * this.liWidth) + 'px';
            } else {
                marginLeft = 0;
                }

            $nav.find('.active').removeClass('active');
            $nav.find('li').eq(that.index).addClass('active');

            // 切换
            $('#' + this.domId +  '>ul').animate({
                marginLeft:marginLeft
            }, this.durations, function () {
                    
                that.isAnimation = false;

                if (that.index < that.length - 1) {
                    that.index ++;
                } else {
                     that.index = 0;
                }

            }); 

            return this;
        }
    },

    // 摧毁相册
    destroy: function () {
        this.index = 0;
        this.isStarted = false;
        this.isAnimation = false;

        clearInterval(BATMAN_GALLERY_ANIMATION);
        BATMAN_GALLERY_ANIMATION = null;

        $('#' + this.domId + ' > ul').css('marginLeft', '0');
        $('#' + this.domId + 'Nav').remove();

        return this;
    }
}