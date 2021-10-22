var a1,b1,c1,d1,e1,f1,g1,music, xyArr = [];
var tot=0 ;var ansArr = [];
var timArr = ['13.3,14.6','15,16','0,1.2','10.2,11.7',
              '3.4,4.5','5.2,6.4','20,21','6.8,8.1',
              '16.6,17.8','18.3,19.8','8.5,9.8','11.9,13.1',
              '1.7,3.1'];
//dragAndDrop(namArr,refArr,drgArr,drgTxtArr,drpArr,drpTxtArr,boundId);
function dragAndDrop(a,b,c,d,e,f,g){
    a1=a;b1=b;c1=c;d1=d;e1=e;f1=f;g1=g;
  }

(function(){

var namArr , drpArr, drgArr , drpTxtArr , drgTxtArr , refArr;




/////////////////////////////////////////////////////////////////////////////////////////////


window.addEventListener('load', function() {
  'use strict';
  init();
   //setTimeout(init,3000);

function init(){
   namArr = a1;
   refArr = b1;
   drgArr = c1;
   drgTxtArr = d1;
   drpArr = e1;
   drpTxtArr = f1;
   
   tot = namArr.length;
   shuffleArray(refArr);
  

  for(var i=0;i<tot;i++){
    document.getElementById(drgTxtArr[i]).innerHTML=namArr[refArr[i]];
   $('#'+drgTxtArr[i]).attr('x',(5*(4-namArr[refArr[i]].length)));
    $('#'+drpArr[i]).attr('class','tarObj');
    $('#'+drgArr[i]).attr('class','drgObj'); 
    $('#'+drgTxtArr[i]).attr('class','disabled1'); 
    $('#'+drgTxtArr[i]).attr('fill','#ffffff')    
    xyArr[i] = getTranslateXY(document.getElementById(drgArr[i]));
  }  
  $('#main_audio').on('ended', function(){
    music = new Audio('../../../../audio/pof/menu.mp3');
    music.play();
  })
  music= document.getElementById('main_audio');
}

var xy,overlapThreshold = "50%",droppables = $(".tarObj");

function onDrop(dragged, dropped) {
  
  xy= getTranslateXY(dropped); 
  TweenLite.to(dragged, 0.3, {x:xy.x, y:xy.y});
  var drgId = dragged.id; //console.log(drgId);
  var drgInd = drgArr.indexOf(drgId);
  var tarInd = drpArr.indexOf(dropped.id);
  ansArr[tarInd] = namArr[refArr[drgInd]];
  checkThis(tarInd,dragged);
}

function checkThis(tarind,drgobj){
  $('#'+drpArr[tarind]+' path').css('stroke-width','5');
    if(ansArr[tarind]!=namArr[tarind]){
          $('#'+drpArr[tarind]+' path').css('stroke','red'); 
          feedMusic(false,drgobj,tarind);
        }else {
          $('#'+drpArr[tarind]+' path').css('stroke','#0add00'); 
          Draggable.get('#'+drgobj.id).disable();
          feedMusic(true,drgobj,tarind);
          tot--;
          if(tot==0){
            music.onended = function() {
              $('#bound-rect').css('display','none');
              $('#g2533').show();
            };
          }
        }
}

function getTranslateXY(elm) {
    var style = window.getComputedStyle(elm);
    var matrix = new WebKitCSSMatrix(style.transform); 
    return {x:matrix.m41,y:matrix.m42};
  }

Draggable.create('.drgObj',{
      throwProps:true,
      bounds:"#"+g1,
      zIndexBoost: true,
      zIndex: 9099,
  onPress: function(){
    var curEl = this.target;
    var  curTar = curEl;
    curEl.parentNode.appendChild(curEl);

    var drgId = curEl.id; //console.log(drgId);
    var drgInd = drgArr.indexOf(drgId);
    var kk=namArr[refArr[drgInd]];
    var ind = ansArr.indexOf(kk);
    if(ind>-1){
      ansArr[ind]=undefined;
    }
  },
 
  onDragEnd:function(e) {
    var i = droppables.length;
    while (--i > -1) {
      if (this.hitTest(droppables[i], overlapThreshold)) {
        onDrop(this.target, droppables[i]);
        return 0;
      }
    }
    snapBack(this.target);
  }
});
});
})()
//////////////////////////****

function checkAll(){
   for(var i=0;i<tot;i++){
    $('#'+drpArr[i]+' path').css('stroke-width','5'); 
      if(ansArr[i]!=namArr[i]){
          $('#'+drpArr[i]+' path').css('stroke','red'); 
        }else {
          $('#'+drpArr[i]+' path').css('stroke','green'); 
        }
        Draggable.get('#'+drgArr[i]).disable();
   }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function snapBack(ele){
  var drgInd = drgArr.indexOf(ele.id);
  TweenLite.to(ele, 0.3, {x:xyArr[drgInd].x, y:xyArr[drgInd].y});
}

function feedMusic(bool,ele,ind){
  if(music){
   music.pause();
  }
    audioId = 2;
    var num = Math.ceil(Math.random()*5);
    $('#cover-rect').css('display','block');console.log($('#cover-rect'))
    if(bool){
      var kk= drgArr.indexOf(ele.id);
      
      music = new Audio('../../../../audio/pof/pofAll.mp3#t='+timArr[refArr[kk]] );
      music.onpause = function() {
        $('#cover-rect').css('display','none');
      };
    }else{
      music = new Audio('audio/feedback/Wrong'+num +'.mp3');
      music.onended = function() {
        snapBack(ele);
        $('#'+drpArr[ind]+' path').css('stroke-width','1');
        $('#'+drpArr[ind]+' path').css('stroke','black');
        $('#cover-rect').css('display','none');
      };
    }
  music.play();
}