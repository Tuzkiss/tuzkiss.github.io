/* 
*   CSS3 Clock Javascript
*
*     Author Tuzkiss
*
*       2015-4-19
*/

// clock constructor function 
function Clock () {

  // init function 

  var init = function () {
    var config = [];

    config.push({
      id :'lineHour',
      total: 12,
      translateX: 97,
      isLine: true
    });

    config.push({
      id :'lineMin',
      total: 60,
      translateX: 105,
      isLine: true
    });

    config.push({
      id :'number',
      isNumber : true
    });

    config.push({id: 'hour'});
    config.push({id: 'min'});
    config.push({id: 'sec'});

    render(config);

    runClock();
  }

  // render clock function 
  // @param configList 
  var render = function (configList) {
    var warpList = [],
        tmp ,
        warp;

    for (var i = 0, len = configList.length; i < len; i ++) {
      tmp   = configList[i];
      warp  = document.getElementById(tmp.id);

      if (tmp.isLine) {
        drawLines(warp, tmp.total, tmp.translateX);
      } else if(tmp.isNumber) {
        drawNumber(warp);
      } else {
        warpList.push(warp);
      }
    }

    runClock(0, 0, 0);
    
  }

  // drawLine common function
  // @param warp parent dom 
  // @param total  total line
  // @param translateX 
  var drawLines = function (warp, total, translateX) {
    var gap     = 360 / total,
        strLi  = '';

    for (var i = 0; i < total; i ++) {
      strLi += '<li style="transform:rotate(' + (i * gap) +'deg) translateX(' + translateX + 'px)"></li>';
    }

    warp.innerHTML = strLi;
  }

  // drawLine funciton 
  // @param warp parent dom
  var drawNumber = function (warp) {
    var radius  = warp.offsetWidth / 2,
        strLi   = '',
        angle,
        x,
        y;

    for (var i = 1; i <= 12; i ++) {
      angle = (i - 3) / 6 * Math.PI;
          x = radius + radius * Math.cos(angle);
          y = radius + radius * Math.sin(angle);

      strLi += '<li style="left: ' + x +'px; top: ' + y +'px">' + i +'</li>'
    }

    warp.innerHTML = strLi;
  }

  // runClock function 
  // @param hour hour element
  // @param min min element
  // @param sec sec element
  var runClock = function (i, j, k) {
    var hourEle = document.getElementById('hour'),
        minEle = document.getElementById('min'),
        secEle = document.getElementById('sec'),
        timeEle = document.getElementById('time'),
        timeNow;

    setInterval(function () {
      var now       = new Date(),
          hour      = now.getHours(),
          min       = now.getMinutes(),
          sec       = now.getSeconds();

      if (0 === sec) { i ++;  }
      if (0 === min) { j ++;  }
      if (0 === hour) { k ++; }

      if(0 === hour && 0 === min && 0 === sec) {
        i = j = k = 0;
      }  

      var  secAngle  = i * 360 + sec * 6 - 90,
           minAngle  = j * 360 + min * 6 + sec * 0.1 - 90,
           hourAngle = k * 360 + (hour % 12) * 30 + min * 0.5 - 90;

      hourEle.style.transform  = 'rotate(' + hourAngle +'deg)';
      minEle.style.transform   = 'rotate(' + minAngle +'deg)';
      secEle.style.transform   = 'rotate(' + secAngle +'deg)';

      if (hour < 10) { hour = '0' + hour};
      if (min < 10) { min = '0' + min};
      if (sec < 10) { sec = '0' + sec};

      timeNow =  hour + ' : ' + min + ' : ' + sec; 

      //document.title = hour + ':' + min + ':' + sec;
      timeEle.innerHTML = timeNow;
    }, 1000);
  }

  // return interface
  return {
    init : init
  }
};

var clock = new Clock();
clock.init();