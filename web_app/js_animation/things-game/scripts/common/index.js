/**
 * @description javascript for
 * @author TuzK1ss
 * @date 15/10/26.
 */

(function (root, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object') {
        module.exports = factory();
    } else {
        root.game = factory();

        root.game();
    }
})(window, function ($) {
    'use strict';

    $ = $ || window.$;

    // set phone or pc handler event action
    var activate = $.os.phone ? 'tap' : 'click';

    // set container moving flag
    window.IS_MOVEING_FLAG = false;

    var thingsGame = {
        init : function () {
            window.console.log('things game init...');

            // init game
            this.checkEnding()
                .initGameStart()
                .initChoiceTouchStart()
                .initChoiceTap();
        },

        checkEnding : function (){
            var hashObj = this.getHashObj(),
                key,
                name,
                count;

            if (hashObj && hashObj.ending === '1' && hashObj.key && hashObj.name) {
                key = hashObj.key;
                name = decodeURI(hashObj.name);
                count = hashObj.count || 1;

                document.title = name + window.gameObj[key].shareTitle;

                var html = '<div class="container share-ending"><div class="gamer-name">' + name + '' +
                    '<p>解锁成就</p></div><div class="tag-count"><span class="count">' + count + '</span></div><div class="title ending-title ">' + window.gameObj[key].title + '</div><div class="ending-choices clearfix">' +
                    '<a id="gamer_ending" class="choice2 ending-choice" style="background-image:url(./images/restart.png)">restart</a><img src="./images/restart-bg.png" width="280" height="146" ></div></div>';

                html += '<div class="container next"> <h1>校园大富翁 <img src="./images/light.png" alt="" width="280" height="263"> </h1> <div class="name-input"> <input type="text" id="gamer_name" placeholder="输入你的名字" spellcheck="false"> </div> <div class="start"> <button type="submit" id="game_start">开始游戏</button> </div> <div class="footer"> © 2015 <a href="//10years.me" target="_blank">10years</a> </div></div>';

                $('#game').html(html);

                $('#gamer_ending').on(activate, function () {
                    $(this).parent().parent().addClass('prev');
                    $('.next').removeClass('next');

                    $('#game').append('<div class="container next"> <div class="title"><span id="gamer_name_span"></span>你是一个家里非常穷、且高考失手以至于上不起大学的孩子,有一天落魄的你在路边救了一只猫,为了报恩,它答应为你实现一个愿望——免费上大学,你会选择什么学校?</div> <div class="choices"> <button class="choice">蓝翔</button> <button class="choice">贱桥大学</button> </div> <div class="illustration"> <img src="./images/0.png" alt="illustration"> </div> </div>');
                });

            }

            return this;
        },

        getHashObj : function () {
            var hash = location.hash,
                hashArr = [],
                hashObj = {},
                tmp;

            if (hash) {
                hash = hash.substr(1);
                hashArr = hash.split('&');

                for (var i = 0, len = hashArr.length; i < len; i++) {
                    tmp = hashArr[i].split('=');
                    hashObj[tmp[0]] = tmp[1];
                }

                return hashObj;
            }

        },

        initGameStart : function () {
            var $name = $('#gamer_name'),
                that = this,
                $this;

            // special input focus for android
            if ($.os.android) {
                $name.on('focus', function () {
                    $('.container').eq(0).addClass('hide');
                }).on('blur', function () {
                    $('.container').eq(0).removeClass('hide');
                });
            }

            // init gamer name when it has name before
            this.initGamerName();

            // bind game start button handler
            $('#game_start').on(activate, function () {
                $this = $(this);

                if ($name.val().trim()) {

                    if (window.localStorage) {
                        window.localStorage.setItem('thingsGamerName', $name.val().trim());
                    }

                    window.gamerName = $name.val().trim();
                    $this.parents('.container').addClass('prev');
                    $('.next').eq(0).removeClass('next');

                    that.updateGameKeys(0);

                } else {
                    $name.addClass('shake');

                    setTimeout(function () {
                        $name.removeClass('shake').focus();
                    }, 500);
                }
            });

            return this;
        },

        initGamerName : function () {
            var $name = $('#gamer_name');

            if (window.localStorage) {
                if (window.localStorage.getItem('thingsGamerName')) {
                    $name.val(window.localStorage.getItem('thingsGamerName'));
                }
            }
        },

        initChoiceTouchStart : function () {

            // for active touch :active style
            $('body').on('touchstart','.choice',  function () {});

            return this;
        },
        initChoiceTap : function () {
            var that = this,
                $this;

            // bind choice tap handler
            $('body').on(activate, '.choice',  function () {
                if (! window.IS_MOVEING) {
                    $this = $(this);
                    that.choiceTapHandler($this);
                }
            });

            return this;
        },

        choiceTapHandler: function ($elem) {
            var that = this,
                index,
                $next;

            index = $elem.index();
            $next = $('.next');

            if (!window.IS_MOVEING_FLAG) {
                window.IS_MOVEING_FLAG = true;

                // move to choice container
                if ($next.eq(index)) {
                    $elem.parents('.container').addClass('prev');
                    $next.eq(index).removeClass('next');
                    that.updateGameKeys(index);
                }

                // remove prev container
                setTimeout(function () {
                    $('.prev').remove();
                    window.IS_MOVEING_FLAG = false;
                }, 510);
            }
        },

        updateGameKeys: function (index) {

            // update taped key
            window.gameCurrentKey = window.gameCurrentKeys[index] || 0;

            // update current keys array
            window.gameCurrentKeys = window.gameNextKeys[index] ;

            // update reach ending
            if (window.localStorage && window.gameObj[window.gameCurrentKey].type === 1) {
                var gameEnding = window.localStorage.getItem('thingsGameEnding') || '';

                if (gameEnding && gameEnding.indexOf(window.gameCurrentKey) === -1) {
                    gameEnding += ',' + window.gameCurrentKey;
                } else if (gameEnding.indexOf(window.gameCurrentKey) === -1) {
                    gameEnding = window.gameCurrentKey;
                }

                window.localStorage.setItem('thingsGameEnding', gameEnding);
            }

            // update next keys-array array
            window.gameNextKeys = [];
            for (var i = 0, len = window.gameCurrentKeys.length; i < len; i ++) {
                window.gameNextKeys[i] = [];
                if(window.gameObj[window.gameCurrentKeys[i]]) {
                    for (var j = 0, jLen = window.gameObj[window.gameCurrentKeys[i]].choices.length; j < jLen; j ++) {
                        window.gameNextKeys[i].push(window.gameObj[window.gameCurrentKeys[i]].choices[j].nextKey);
                    }
                }
            }


            console.log('-------------------', new Date());
            console.log('index i j', index, i, j);
            console.log('gameCurrentKey', gameCurrentKey);
            console.log('gameEnding', window.localStorage.getItem('thingsGameEnding'));
            console.log('gameCurrentKeys', gameCurrentKeys);
            console.log('gameNextKeys', gameNextKeys);
            console.log('-------------------');


            // update document title
            if (window.gameObj[window.gameCurrentKey].shareTitle) {
                document.title = window.getGamerName()  + window.gameObj[window.gameCurrentKey].shareTitle;
            }


            // add next choices container
            this.addNextContainers(index);
        },
        addNextContainers : function (index) {

            index = index >= 0 ? index : 0;

            $('.next').remove();

            var nextContainer = '',
                tmp;

            for (var i = 0, len = window.gameCurrentKeys.length; i < len; i ++) {
                tmp = window.gameObj[window.gameCurrentKeys[i]];

                if (tmp && tmp.type === 0) {

                    // normal container - type : 0

                    nextContainer += '<div class="container next"> <div class="title">' +  tmp.title + '</div> <div class="choices">';

                    for (var j = 0, jLen = tmp.choices.length; j < jLen; j ++) {
                        nextContainer += '<button class="choice">' + tmp.choices[j].name + '</button>';
                    }

                    nextContainer += '</div> <div class="illustration"> <img src="' + tmp.imgUrl + '" alt="illustration"/> </div> </div>';
                } else if (tmp && tmp.type === 1) {

                    // ending container - type : 1

                    nextContainer += '<div class="container next"><span class="share"></span>';
                    nextContainer += '<div class="title ending-title ">' + tmp.title ;

                    if (window.localStorage) {
                        nextContainer += '<span id="ending_percent" class="ending-percent"></span>';
                    }

                    nextContainer += '</div>';

                    if (tmp.imgUrl) {
                        nextContainer += '<div class="illustration ending-illustration"> <img src="' + tmp.imgUrl + '" alt="illustration"/> </div>';
                    }

                    nextContainer += '<div class="ending-choices clearfix">';

                    for (var k = 0, kLen = tmp.choices.length; k < kLen; k ++) {

                        if (k === 0) {
                            nextContainer += '<a class="choice ending-choice" style="background-image:url(' + tmp.choices[k].url + ')">' + tmp.choices[k].name + '</a>';
                        } else {
                            nextContainer += '<a href="http://pr.10years.me/link.api?id=16" target="_blank" class="ending-choice" style="background-image:url(' + tmp.choices[k].url + ')">' + tmp.choices[k].name + '</a>';
                        }
                    }

                    nextContainer += '</div></div>';
                } else if (tmp && tmp.type === -1) {

                    // start container - type : -1

                    nextContainer = '<div class="container next"> <h1>校园大富翁 <img src="./images/light.png" alt="" width="280" height="263"/> </h1> <div class="name-input"> <input type="text" id="gamer_name" placeholder="输入你的名字" spellcheck="false"/> </div> <div class="start"> <button type="submit" id="game_start">开始游戏</button> </div> <div class="footer"> &copy; 2015 <a href="//10years.me" target="_blank">10years</a> </div></div>';
                }

            }

            // add next problem container to game body
            $('#game').append(nextContainer);

            // show ending percent
            if (window.gameObj[window.gameCurrentKey].type === 1) {
                $('#ending_percent').html(window.getGameEndingPercent());

                location.hash = 'ending=1&key=' + window.gameCurrentKey + '&name=' + encodeURI( window.gamerName) + '&count=' + getGameEndingPercent(1);
            } else {
                location.hash = '';
            }

            // restart game
            if (window.gameCurrentKey === "-1") {
                this.initGameStart();
            }

        }
    };

    window.thingsGame = thingsGame;

    return function () {
        return thingsGame.init();
    };

});