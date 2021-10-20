var a1,b1,c1,d1,e1,f1,g1,music, xyArr = [];
var tot=0 ;var ansArr = [];
//dragAndDrop(namArr,refArr,drgArr,drgTxtArr,drpArr,drpTxtArr,boundId);
function dragAndDrop(a,b,c,d,e,f,g){
//    console.log(a,b,c)
    a1=a;
    b1=b;
    c1=c;

    d1=d;
    e1=e;
    f1=f;
    g1=g;
  }

(function(){

var namArr , drpArr, drgArr , drpTxtArr , drgTxtArr , refArr;

//var xyArr = [];

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
   drgTxtArr.reverse();
    shuffleArray(refArr);
   // console.log(refArr);
  
  for(var i=0;i<tot;i++){
    document.getElementById(drgTxtArr[i]).innerHTML=namArr[refArr[i]];
    document.getElementById(drpTxtArr[i]).innerHTML="";
   $('#'+drgTxtArr[i]).attr('x',(4*(11-namArr[refArr[i]].length)));
    $('#'+drpArr[i]).attr('class','tarObj');
    $('#'+drgArr[i]).attr('class','drgObj'); 
    $('#'+drgTxtArr[i]).attr('class','disabled1'); 
    $('#'+drgTxtArr[i]).attr('fill','#ffffff')    
    xyArr[i] = getTranslateXY(document.getElementById(drgArr[i]));
  }
  console.log(xyArr);
}

var xy,overlapThreshold = "50%",droppables = $(".tarObj");

function onDrop(dragged, dropped) {
  for(var i=0;i<tot;i++){
    console.log($('#'+drpTxtArr[i]).innerHTML);
  }
  xy= getTranslateXY(dropped); 
  console.log(xy.x)
  
  TweenLite.to(dragged, 0.3, {x:xy.x, y:xy.y});
  var drgId = dragged.id; //console.log(drgId);
  var drgInd = drgArr.indexOf(drgId);
  var tarInd = drpArr.indexOf(dropped.id);
//disable(dragged);
  //console.log(drgInd,tarInd,refArr);
  ansArr[tarInd] = namArr[refArr[drgInd]];
  //console.log(ansArr);
  checkThis(tarInd,dragged);
}

function checkThis(tarind,drgobj){
  $('#'+drpArr[tarind]+' path').css('stroke-width','5');
    if(ansArr[tarind]!=namArr[tarind]){
          //wrong
          $('#'+drpArr[tarind]+' path').css('stroke','red'); 
          feedMusic(false,drgobj,tarind);
        }else {
          //right
          $('#'+drpArr[tarind]+' path').css('stroke','#0add00'); 
          Draggable.get('#'+drgobj.id).disable();
          feedMusic(true,drgobj,tarind);
        }
}

function getTranslateXY(elm) {
    console.log(elm);
    var style = window.getComputedStyle(elm);
    var matrix = new WebKitCSSMatrix(style.transform); //console.log(matrix.m41);
    return {x:matrix.m41,y:matrix.m42};
    var ss = elm.id; console.log(ss);
    var kk = $('#'+ss).css("-webkit-transform");
    console.log($('#'+ss).transform('x'));
  }

function playaudioInc(ele){

}


Draggable.create('.drgObj',{

      throwProps:true,
      bounds:"#"+g1,
      zIndexBoost: true,
      zIndex: 9099,
  onPress: function(){
    // move to top
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
    //console.log(ansArr);

    
    //xy= getTranslateXY(curEl); 
  
  },

  onRelease:function() {
    // TweenLite.set(this.target, {zIndex:0});
    
 },
 
  onDragEnd:function(e) {
    var i = droppables.length;
    while (--i > -1) {
      if (this.hitTest(droppables[i], overlapThreshold)) {
        onDrop(this.target, droppables[i]);
        console.log(this.target.id," dropped on ",droppables[i].id);
        return 0;
        break;
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
          //wrong
          $('#'+drpArr[i]+' path').css('stroke','red'); 
          
        }else {
          //right
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
  //console.log('snap back called',xy.x,xy.y);
  TweenLite.to(ele, 0.3, {x:xyArr[drgInd].x, y:xyArr[drgInd].y});
}

function feedMusic(bool,ele,ind){
  if(music){
   music.pause();
  }
    audioId = 2;
    var num = Math.ceil(Math.random()*5);
    $('#cover-rect').css('display','block');
    if(bool){
      var kk= drgArr.indexOf(ele.id); console.log(namArr[refArr[kk]]);
      music = new Audio('audio/feedback/Correct'+num +'.mp3');

       music.onended = function() {
        
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