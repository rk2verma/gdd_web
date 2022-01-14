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
    $('#'+drgArr[i]).find('path').attr('fill','#2c82ba')
    xyArr[i] = getTranslateXY(document.getElementById(drgArr[i]));
  }  
  $('#main_audio').on('ended', function(){
    music = new Audio('../../../../audio/pof_hindi/menu.mp3');
    music.play();
  })
  music= document.getElementById('main_audio');
}

var xy,overlapThreshold = "20%",droppables = $(".tarObj");

function onDrop(dragged, dropped) {
  
  xy= getTranslateXY(dropped); 
  TweenLite.to(dragged, 0.3, {x:xy.x, y:xy.y});
  var drgId = dragged.id; //console.log(drgId);
  var drgInd = drgArr.indexOf(drgId);
  var tarInd = drpArr.indexOf(dropped.id);
  ansArr[tarInd] = namArr[refArr[drgInd]];
  //checkThis(tarInd,dragged);
 music=new Audio('../../../../audio/pof_hindi/sound.mp3');
  music.play();
  var allDone=true;
  for(var i=0;i<tot;i++){
    var xp= getTranslateX(document.getElementById(drgArr[i])).x;console.log(xp)
    if(xp>675){
      allDone=false;      
    }
  }

  if(allDone){
    console.log('All Done');
    enableSubmitButton(true);
  }
}
enableSubmitButton(false);
enableTryButton(false);


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
  function getTranslateX(elm) {
    var style = window.getComputedStyle(elm);
    var matrix = new WebKitCSSMatrix(style.transform); 
    return {x:matrix.m41};
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
    music.pause();
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

function enableSubmitButton(bool){
  if(bool){
    $('#submit_btn').css('opacity','1')
    $('#submit_btn').css('cursor','pointer');
  }else{
    $('#submit_btn').css('opacity','0.4');
    $('#submit_btn').css('cursor','default');
  }
}
function enableTryButton(bool){
  if(bool){
    $('#tryagain_btn').css('opacity','1')
    $('#tryagain_btn').css('cursor','pointer');    
  }else{
    $('#tryagain_btn').css('opacity','0.4');
    $('#tryagain_btn').css('cursor','default');    
  }
}
$('#tryagain_btn').click(function(){
  if($(this).css('opacity')=='1'){
    enableAll();
  }else{
      
  }
})
function enableAll(){
  enableTryButton(false);
  $('#text209').show();
      $('#text209F').hide();
  for(var i=0;i<tot;i++){
    $('#'+drpArr[i]+' path').css('stroke-width','1'); 
    $('#'+drpArr[i]+' path').css('stroke','black'); 
    snapBack(document.getElementById(drgArr[i]));
     Draggable.get('#'+drgArr[i]).enable();
  }
}
$('#submit_btn').click(function(){
  if($(this).css('opacity')=='1'){
    checkAll();
  }else{

  }
});
function checkAll(){
  enableSubmitButton(false);
  var allCor=true;
   for(var i=0;i<tot;i++){
    $('#'+drpArr[i]+' path').css('stroke-width','5'); 
      if(ansArr[i]!=namArr[i]){
          allCor=false;
          $('#'+drpArr[i]+' path').css('stroke','red'); 
        }else {
          $('#'+drpArr[i]+' path').css('stroke','green'); 
        }
        Draggable.get('#'+drgArr[i]).disable();
   }
   if(allCor){
      $('#text209').hide();
      $('#text209T').show();
      music = new Audio('../../../../audio/pof_hindi/pos'+'.mp3');
      music.onended=function() {
       music = new Audio('../../../../audio/pof_hindi/conclusion_1' +'.mp3');
       music.play();
      }
      music.play();
   }else{
    enableTryButton(true);
    enableSubmitButton(false);
    $('#text209').hide();
    $('#text209F').show();
    var kk=Math.random()<0.5?1:2;
    $('#tspan2071').hide();
    $('#tspan2072').hide();
    $('#tspan207'+kk).show();
    music = new Audio('../../../../audio/pof_hindi/neg'+kk +'.mp3');
    music.onended=function() {
      music = new Audio('../../../../audio/pof_hindi/Try_Again' +'.mp3');
      music.play();
    }
    music.play();
   }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function snapBack(ele){
  var drgInd = drgArr.indexOf(ele.id);console.log(drgInd,ele.id)
  TweenLite.to(ele, 0.3, {x:xyArr[drgInd].x, y:xyArr[drgInd].y});
  enableSubmitButton(false);
}

function feedMusic(bool,ele,ind){
  if(music){
   music.pause();
  }
    audioId = 2;
    var num = Math.ceil(Math.random()*5);
    $('#cover-rect').css('display','block');//console.log($('#cover-rect'))
    if(bool){
      var kk= drgArr.indexOf(ele.id);
      
      music = new Audio('../../../../audio/pof/pofAll.mp3#t='+timArr[refArr[kk]] );
      music.onpause = function() {
        $('#cover-rect').css('display','none');

      };
    }else{
      music = new Audio('../../../../audio/feedback/Wrong'+num +'.mp3');
      music.onended = function() {
        snapBack(ele);
        $('#'+drpArr[ind]+' path').css('stroke-width','1');
        $('#'+drpArr[ind]+' path').css('stroke','black');
        $('#cover-rect').css('display','none');
      };
    }
  music.play();
}


